import Image from "next/image";

export default function GeneralOverseerPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Top Banner with Overlay Text */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden">
        <Image
          src="/leading-under-jesus.jpg" // Must be located at public/leading-under-jesus.jpg
          alt="Leading under Jesus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide">
            Leading under Jesus
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-xl md:text-2xl font-serif font-bold tracking-wider uppercase mb-8">
          A WORD FROM OUR GENERAL OVERSEER
        </h2>

        {/* Overseers Image & Caption */}
        <div className="mb-10 inline-block">
          <div className="relative w-[300px] sm:w-[400px] md:w-[460px] h-[200px] sm:h-[260px] md:h-[300px] mx-auto overflow-hidden">
            <Image
              src="/general-overseer.jpg" // Must be located at public/general-overseer.jpg
              alt="Apostle John & Rev Stella Ebegbuna"
              fill
              sizes="(max-width: 768px) 100vw, 460px"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-3 text-[10px] sm:text-xs tracking-wider uppercase text-gray-300 font-semibold">
            APOSTLE JOHN &amp; REV STELLA EBEGBUNA (GENERAL OVERSEER)
          </p>
        </div>

        {/* Letter Content */}
        <div className="text-left space-y-6 text-sm sm:text-base leading-relaxed text-gray-200">
          <p>
            We&apos;re so glad that you&apos;re checking out Tree of Life
            International Churches!
            <br />
            This is a place where you can come and find a family full of loving,
            amazing people who are passionate about God and passionate about
            people!. We&apos;re committed to sharing the life-transforming message
            of the Gospel and helping people build the kind of life that&apos;s
            healthy, vibrant and overflowing in every area. God&apos;s Word is
            so full of incredible promises for every area of our lives, and we
            want to see that message of life and hope revolutionize our
            community, touch our nations and impact the world.
          </p>

          <p>
            The church that started in the living room of Apostle John Ebegbuna
            and Rev Stella Ebegbuna now has over fifty branches in several
            African nations.
          </p>

          <p>
            On this website you can learn about our vision and values, find ways
            to connect in and stay up to date on what&apos;s happening at Tree of
            Life International Churches.
          </p>

          <p>
            So whether you are in a TOLIC church in South Africa, Kenya,
            Nigeria, Zambia, DR Congo, Liberia etc every branch you attend is
            vibrant and passionate. Stop by and experience the life transforming
            good news of Jesus with people of deep passion.
          </p>

          <p className="pt-2 font-medium">
            Looking forward to having you with us!
            <br />
            <span className="font-semibold">
              Apostle John &amp; Rev Stella Ebegbuna
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}