export default function Header() {
  const dropdownLinkClass =
    "block px-4 py-2 text-[#f5f0e6] normal-case hover:bg-white/10";

  return (
    <header className="bg-[#0f2e1a] text-white sticky top-0 z-50 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="TOLIC Logo" className="h-10 w-10" />
          <span
            className="text-sm font-bold tracking-wider text-green-700"
            style={{ fontVariant: "small-caps" }}
          >
            Tree of Life International Churches
          </span>
        </a>
        <ul className="flex items-center gap-8 text-sm font-semibold uppercase">
          <li>
            <a href="/" className="border-b-2 border-white pb-1">
              Home
            </a>
          </li>

          <li className="group relative">
            <button className="cursor-pointer">About</button>
            <ul className="absolute left-0 top-full z-20 hidden w-56 flex-col bg-black py-2 shadow-lg group-hover:flex">
              <li><a href="/about/about-us" className={dropdownLinkClass}>About Us</a></li>
              <li><a href="/about/general-overseer" className={dropdownLinkClass}>Our General Overseer</a></li>
              <li><a href="/about/statement-of-faith" className={dropdownLinkClass}>Our Statement of Faith</a></li>
              <li><a href="/about/history-and-vision" className={dropdownLinkClass}>Our History &amp; Vision</a></li>
            </ul>
          </li>

          <li className="group relative">
            <button className="cursor-pointer">Contact</button>
            <ul className="absolute left-0 top-full z-20 hidden w-60 flex-col bg-black py-2 shadow-lg group-hover:flex">
              <li><a href="/contact-us" className={dropdownLinkClass}>Contact Us</a></li>
              <li><a href="/how-to-become-a-christian" className={dropdownLinkClass}>How to Become a Christian</a></li>
            </ul>
          </li>

          <li className="group relative">
            <button className="cursor-pointer">Ministries</button>
            <ul className="absolute left-0 top-full z-20 hidden w-64 flex-col bg-black py-2 shadow-lg group-hover:flex">
              <li><a href="/church-departments" className={dropdownLinkClass}>Church Departments</a></li>
              <li><a href="/resources-for-pastors" className={dropdownLinkClass}>Resources for TOLIC Church Pastors</a></li>
            </ul>
          </li>

          <li className="group relative">
            <button className="cursor-pointer">Explore</button>
            <ul className="absolute left-0 top-full z-20 hidden w-48 flex-col bg-black py-2 shadow-lg group-hover:flex">
              <li><a href="/celebration" className={dropdownLinkClass}>Celebration</a></li>
              <li><a href="/videos" className={dropdownLinkClass}>Videos</a></li>
              <li><a href="/directory" className={dropdownLinkClass}>Directory</a></li>
            </ul>
          </li>

          <li className="group relative">
            <button className="cursor-pointer">Links</button>
            <ul className="absolute left-0 top-full z-20 hidden w-56 flex-col bg-black py-2 shadow-lg group-hover:flex">
              <li><a href="/firebrand-missions" className={dropdownLinkClass}>Firebrand Int&apos;l Gospel Missions</a></li>
              <li><a href="/womens-ministry" className={dropdownLinkClass}>Women&apos;s Ministry</a></li>
              <li><a href="/staff-email" className={dropdownLinkClass}>Staff Email</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}