import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata = {
  title: "Firebrand Int'l Gospel Missions | Tree of Life International Churches",
};

export default function FirebrandMissionsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden">
        <Image
          src="/world-map.jpg"
          alt="Firebrand International Gospel Missions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide text-center px-4">
            Firebrand Int&apos;l Gospel Missions
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
            Firebrand International Gospel Missions is the missions arm
            connected to Tree of Life International Churches, carrying the
            same mandate that birthed TOLIC: to cover the world with the
            good news of Jesus Christ and disciple the nations as we
            prepare for the return of Christ.
          </p>
          <p>
            Through Firebrand, TOLIC partners with evangelists, missionaries
            and local churches to plant the gospel in unreached communities
            and support the raising up of leaders across the nations we
            serve.
          </p>
          <p>
            Firebrand International Gospel Missions maintains its own site
            with more on its outreaches, partners and how you can get
            involved.
          </p>
        </div>

        
          <a href="https://www.firebrandinternationalgospelmissions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
        >
          Visit Firebrand International Gospel Missions
          <FaExternalLinkAlt size={12} />
        </a>
      </section>
    </div>
  );
}