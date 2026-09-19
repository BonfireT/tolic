import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const links = [
    { label: "About Us", href: "/about" },
    { label: "Contact us", href: "/contact" },
    { label: "Our Statement of Faith", href: "/statement-of-faith" },
    { label: "Become a Christian", href: "/become-a-christian" },
    { label: "Our Founding Pastors", href: "/founding-pastors" },
    { label: "Firebrand International Gospel", href: "/firebrand-international" },
    { label: "Missions", href: "/missions" },
    { label: "Our Women's Ministry", href: "/womens-ministry" },
  ];

  return (
    <footer className="bg-black text-olive-500 py-12 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Column: Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative w-32 h-32">
            <Image
              src="/logo.png" // Update this path to your actual logo asset in /public
              alt="Ministry Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Center Column: Social Icons */}
        <div className="flex items-center gap-4 text-zinc-300">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition-colors"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-white transition-colors"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="mailto:info@example.com"
            aria-label="Email"
            className="hover:text-white transition-colors"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Right Column: Navigation Links */}
        <div className="flex-1 text-center md:text-right">
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="font-serif text-[#788640] hover:text-[#99aa52] underline underline-offset-4 text-sm md:text-base transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}