import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata = {
  title: "Women's Ministry | Tree of Life International Churches",
};

export default function WomensMinistryPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden">
        <Image
          src="/congregation-worship.jpg"
          alt="Women's Ministry"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide text-center px-4">
            Our Women&apos;s Ministry
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <div
          className="space-y-6 text-sm sm:text-base leading-relaxed text-gray-200 text-left"
          data-aos="fade-up"
        >
          <p>
            The women of Tree of Life International Churches gather to grow
            in their walk with God, build sisterhood and step fully into
            the purpose God has placed on their lives. Across our branches,
            women meet for prayer, teaching and fellowship that strengthens
            both the home and the church.
          </p>
          <p>
            Our women&apos;s ministry is connected to the Women of Purpose
            International Network, which offers additional resources,
            events and community for women across our churches and beyond.
          </p>
        </div>

        
          <a href="https://www.womenofpurposeinternationalnetwork.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
        >
          Visit Women of Purpose International Network
          <FaExternalLinkAlt size={12} />
        </a>
      </section>
    </div>
  );
}