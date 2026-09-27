import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Founding Pastors | Tree of Life International Churches",
};

export default function FoundingPastorsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden">
        <Image
          src="/general-overseer.jpg"
          alt="Apostle John & Rev Stella Ebegbuna"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide text-center px-4">
            Our Founding Pastors
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <div className="relative w-[220px] h-[220px] mx-auto overflow-hidden rounded-full border border-gray-800">
            <Image
              src="/founder.jpg"
              alt="Apostle John & Rev Stella Ebegbuna, founders of TOLIC"
              fill
              sizes="220px"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-4 text-xs sm:text-sm uppercase tracking-wider text-gray-300 font-semibold">
            Apostle John &amp; Rev Stella Ebegbuna
          </p>
        </div>

        <div
          className="space-y-6 text-sm sm:text-base leading-relaxed text-gray-200"
          data-aos="fade-up"
        >
          <p>
            Tree of Life International Churches began in the living room of
            Apostle John Ebegbuna and Rev Stella Ebegbuna &mdash; a small
            gathering of people hungry for the presence of God. What started
            as a home fellowship has, by God&apos;s grace, grown into a
            family of over fifty branches across several African nations.
          </p>
          <p>
            From the very beginning, our founding pastors carried one
            conviction: that the church exists to be passionate about God
            and passionate about people. That same passion still shapes
            every TOLIC branch today, from the cities to the villages.
          </p>
          <p>
            Apostle John and Rev Stella continue to serve as General
            Overseers of Tree of Life International Churches, leading with
            a heart for discipleship, prayer and the raising up of the next
            generation of Godly leaders.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/about/general-overseer"
            className="inline-block rounded bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
          >
            Read a Word from Our General Overseer
          </Link>
        </div>
      </section>
    </div>
  );
}