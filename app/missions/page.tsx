import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata = {
  title: "Missions | Tree of Life International Churches",
};

export default function MissionsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden">
        <Image
          src="/world-map.jpg"
          alt="TOLIC Missions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide">
            Missions
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
            We are an international community of churches, bound as one by
            a covenant to evangelize the world and fulfill the Great
            Commission through the power of the Holy Spirit. Currently we
            have branches across several African nations, and our mandate
            continues to reach further &mdash; from the cities to the
            villages.
          </p>
          <p>
            Our mission outreaches, church plants and evangelism efforts
            are carried out in partnership with{" "}
            
              <a href="https://www.firebrandinternationalgospelmissions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-emerald-400"
            >
              Firebrand International Gospel Missions
            </a>
            , TOLIC&apos;s missions arm.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
            <a href="https://www.firebrandinternationalgospelmissions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
          >
            Visit Firebrand Missions
            <FaExternalLinkAlt size={12} />
          </a>
          <Link
            href="/church-departments"
            className="inline-flex items-center gap-2 rounded border border-gray-600 px-5 py-2.5 text-sm font-semibold text-white hover:border-emerald-500 hover:text-emerald-400 transition-colors"
          >
            Get Involved Locally
          </Link>
        </div>
      </section>
    </div>
  );
}