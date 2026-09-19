const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const OUTPUT_FILE = "project-dump.txt";

const IGNORE_DIRS = new Set([
  "node_modules", ".next", ".git", "out", "dist", "build", ".vercel", ".turbo",
]);

const INCLUDE_EXTENSIONS = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".css", ".json", ".mjs", ".cjs",
]);

const ALWAYS_INCLUDE_NAMES = new Set([
  "next.config.js", "next.config.ts", "next.config.mjs",
  "tailwind.config.js", "tailwind.config.ts", "tsconfig.json", "package.json",
]);

const SKIP_JSON_NAMES = new Set(["package-lock.json"]);

let output = "";

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      walk(path.join(dir, entry.name));
    } else {
      const ext = path.extname(entry.name);
      const fullPath = path.join(dir, entry.name);
      const relPath = path.relative(ROOT, fullPath).split(path.sep).join("/");
      if (SKIP_JSON_NAMES.has(entry.name)) continue;
      const shouldInclude = INCLUDE_EXTENSIONS.has(ext) || ALWAYS_INCLUDE_NAMES.has(entry.name);
      if (!shouldInclude) continue;
      let content;
      try {
        content = fs.readFileSync(fullPath, "utf8");
      } catch (err) {
        content = `!! Could not read file: ${err.message}`;
      }
      output += `\n\n===== FILE: ${relPath} =====\n\n`;
      output += content;
    }
  }
}

walk(ROOT);
fs.writeFileSync(OUTPUT_FILE, output.trim(), "utf8");
console.log(`Done. Wrote ${OUTPUT_FILE} (${(output.length / 1024).toFixed(1)} KB)`);