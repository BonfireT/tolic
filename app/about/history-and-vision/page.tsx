import Image from "next/image";

export default function HistoryAndVisionPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Top Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden">
        <Image
          src="/our-history-banner.jpg"
          alt="Our History Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide">
            Our History
          </h1>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-serif font-bold tracking-wider mb-8">
          More about Us
        </h2>

        {/* History Paragraph with Floated Box Image */}
        <div className="mb-14">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
            Our History:
          </h3>

          <div className="text-sm sm:text-base leading-relaxed text-gray-200 text-justify">
            {/* Floated Graphic Image */}
            <div className="float-left mr-4 mb-2 relative w-[160px] sm:w-[220px] h-[100px] sm:h-[135px]">
              <Image
                src="/world-map.jpg"
                alt="God Sent His Son World Map"
                fill
                sizes="(max-width: 640px) 160px, 220px"
                className="object-cover rounded-sm"
              />
            </div>

            <p className="mb-4">
              Tree of Life International Churches (TOLIChurches) started in 1993.
              Apostle John and Rev Stella Ebegbuna had a mandate to reach the
              un-reached with the gospel of Jesus Christ, disciple them and
              send them out to reach other people with the gospel. The
              importance of the Holy Spirit baptism is emphasized.
            </p>

            <p>
              Our call is to preach Jesus Christ, God&apos;s Son, as the Savior,
              Baptizer with the Holy Spirit, Healer and coming King. Our
              assignment is to prepare the church for the Second Coming of
              Christ and develop healthy, growing churches. Our commitment is to
              plant national churches around the world led by loving servants of
              Jesus Christ. Churches developed in this manner will reproduce
              again and again. This makes possible the spread of the gospel to
              those who have not heard or accepted the message of God&apos;s
              Son.
            </p>
          </div>
        </div>

        {/* Clear Floating Constraints */}
        <div className="clear-both" />

        {/* Vision & Strategy Section */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl md:text-2xl font-serif font-bold tracking-wider uppercase">
            Our Vision and strategy:
          </h3>

          <p className="text-sm sm:text-base leading-relaxed text-gray-200">
            The strategy of Tree of Life International Churches is to follow the
            pattern found in the New Testament. The Holy Spirit led the early
            church. The pattern has four stages. Each stage is different but
            connects closely with the others.
          </p>

          <div className="space-y-6 text-sm sm:text-base text-gray-200 leading-relaxed">
            <div>
              <h4 className="font-semibold text-white mb-1">
                Stage 1: Pioneer
              </h4>
              <p>
                The church starts when workers bring the lost to Christ and plant
                local congregations. The goal is responsible disciples who
                evangelize and reproduce themselves. The church at Thessalonica in
                Greece started this way (Acts 17:1-9; 1 Thessalonians 1:1-10).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">
                Stage 2: Establish
              </h4>
              <p>
                The church grows stronger when workers give practical Christian
                teaching and train leaders. The goal is responsible, reproducing
                leaders who serve their families and the local church. The
                church on the island of Crete matured this way (Titus 1-3).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">
                Stage 3: Empower
              </h4>
              <p>
                The national church organizes to govern and support itself and
                to do its own evangelism in a way that is sensitive to local
                cultures. The goal is responsible local congregations that plant
                other churches. Together they become a national church movement
                to reach the entire country. The church at Ephesus in Turkey
                developed and multiplied this way (Acts 19-20).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">
                Stage 4: Send
              </h4>
              <p>
                The national church reaches out to people of other cultures and
                languages. The goal is responsible national churches that send and
                support workers who serve other cultures and countries. In
                obedience to the Holy Spirit, the church at Antioch in Syria
                became such a church when they sent Paul and Barnabas (Acts
                13:1-4).
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}