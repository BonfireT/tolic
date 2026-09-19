import Image from "next/image";

export default function ChurchDepartmentsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Top Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden">
        <Image
          src="/church-departments-banner.jpg"
          alt="Get Involved"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide">
            Get Involved...
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-center font-serif text-2xl md:text-3xl tracking-wide mb-10">
          CHURCH DEPARTMENTS
        </h2>

        <div className="text-sm sm:text-base leading-relaxed text-gray-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
            Get Involved
          </h3>

          <div className="relative float-right ml-6 mb-4 w-[140px] h-[110px] sm:w-[180px] sm:h-[140px] overflow-hidden">
            <Image
              src="/hands-together.jpg"
              alt="Hands joined together in unity"
              fill
              sizes="(max-width: 640px) 140px, 180px"
              className="object-cover"
            />
          </div>

          <p className="mb-4">
            There are several Tree of Life International Churches
            scattered all over the globe and in every branch there are
            opportunities to serve the Lord. We believe strongly that
            every believer is saved to serve the Lord in the church and
            in the world.
          </p>

          <p className="clear-none mb-8">
            Our departments in the church range from singing in the
            choir, evangelism and feeding the homeless cities, to
            participating in a short-term missions trip abroad:
          </p>

          <div className="clear-both space-y-10">
            {/* Find your place */}
            <div>
              <h4 className="font-semibold underline decoration-1 underline-offset-4 mb-2">
                Find your place in ministry
              </h4>
              <p>
                Learn more about the many ministries at Tree of Life
                International Churches.
              </p>
              <p>
                Fill the need by joining a department in the church.
                Find out what ministries are in need of volunteers.
                Answer the call.
              </p>
            </div>

            {/* Counseling */}
            <div>
              <h4 className="font-semibold mb-2">Counseling Ministry</h4>
              <p>
                This ministry serves the body of Tree of Life
                International Churches by providing Christ-centered
                counseling in all areas of Christian life. Special
                requirements apply to become a member of this ministry.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">
                    Children&apos;s Ministry
                  </h4>
                  <p>
                    From nursery to junior high, children are taught the
                    importance of a personal relationship with Jesus
                    Christ through worship, prayer and activities.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">New Believers</h4>
                  <p>
                    These year-round classes for new Christians cover the
                    Scriptural basis for salvation and living a
                    Christ-centered life. They are also an excellent way
                    to meet people and make new friends within the body
                    of Christ.
                  </p>
                </div>
              </div>
            </div>

            {/* Fellowship */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
                Fellowship
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Men&apos;s Ministry</h4>
                  <p>
                    The Men&apos;s Ministry meets once a month for prayer
                    and discussions, and holds fellowships and retreats
                    to encourage and edify men in the body.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    Women&apos;s Ministry
                  </h4>
                  <p>
                    The Women&apos;s Ministry (an arm of{" "}
                    <a
                      href="https://www.womenofpurposeinternationalnetwork.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-emerald-400"
                    >
                      Women of Purpose International Network
                    </a>
                    ) meets for prayer, fellowship activities,
                    conferences and retreats. It encourages women to
                    discover their purpose in life and impact their
                    world for Jesus.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    Seniors&apos; Ministry
                  </h4>
                  <p>
                    The Seniors&apos; Ministry welcomes men and women age
                    50 and above.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    Young Adults Ministry
                  </h4>
                  <p>
                    The Tree of Life International Churches ministers to
                    young adults age 18-29. The fellowship provides
                    ministry opportunities, discussions on heart issues,
                    and to foster growth in the walk and knowledge of
                    Jesus Christ.
                  </p>
                </div>
              </div>
            </div>

            {/* Music */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Music
              </h3>
              <p>
                The music department ministers at most services.
                Rehearsals are on Thursday nights and whenever scheduled.
              </p>
            </div>

            {/* Ushering Department */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
                Ushering Department
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    Book &amp; Music Table Ministry
                  </h4>
                  <p>
                    This ministry manages the book and music tables,
                    where books written by our pastors, Bibles and music
                    sermon downloads and DVDs can be purchased before and
                    after services.
                  </p>
                </div>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Ushers welcome and seat visitors.</li>
                  <li>
                    Providing on-screen song lyrics for the congregation
                    to participate in worship when applicable.
                  </li>
                </ul>
              </div>
            </div>

            {/* Missions */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Missions
              </h3>
              <p>
                Check out the short-term missions trip schedule and
                register for a missions trip. Apply to join a ministry.
                It&apos;s easy. There are so many other departments.
                Please inquire from your welcome desk and read your
                church bulletin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
