export default function Header() {
  return (
    <header className="bg-[#0f2e1a] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="TOLIC Logo" className="h-10 w-10" />
          <span
            className="text-sm font-bold tracking-wider text-green-700"
            style={{ fontVariant: "small-caps" }}
          >
            Tree of Life International Churches
          </span>
        </div>
        <ul className="flex items-center gap-8 text-sm font-semibold uppercase">
          <li><a href="/" className="border-b-2 border-white pb-1">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/ministries">Ministries</a></li>
          <li><a href="/more">More...</a></li>
        </ul>
      </nav>
    </header>
  );
}