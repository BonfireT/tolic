import Image from "next/image";

export default function StatementOfFaithPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* Page banner */}
      <section className="relative w-full h-[160px] md:h-[200px] overflow-hidden">
        <Image
          src="/doctrinal-beliefs-banner.jpg"
          alt="Our Doctrinal Beliefs"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl font-serif tracking-wide">
            Our Doctrinal Beliefs
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-14 text-center">
        <h2 className="text-lg md:text-xl font-serif tracking-widest uppercase mb-10">
          Our Statement of Faith
        </h2>

        <div className="relative w-full max-w-md mx-auto h-64 md:h-72 mb-12">
          <Image
            src="/congregation-worship.jpg"
            alt="Congregation in worship"
            fill
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-cover"
          />
        </div>

        <h3 className="text-left text-lg font-semibold underline decoration-1 underline-offset-4 mb-6">
          Our Statement of Faith
        </h3>

        <div className="text-left space-y-6 text-[15px] leading-relaxed text-gray-100">
          <p>The Bible is the inspired and only infallible Word of God.</p>

          <p>
            There is one true God, eternally existent in three persons: God
            the Father, God the Son, God the Holy Spirit.
          </p>

          <p>
            In the deity of our Lord Jesus Christ, in His virgin birth, in
            His sinless life, in His miracles, in His vicarious and atoning
            death, in His bodily resurrection, in His ascension to the right
            hand of the Father, in His personal future return to the earth
            in power and glory to rule for a thousand years.
          </p>

          <p>
            In the blessed hope, the imminent return of Christ for
            overcoming believers.
          </p>

          <p>
            In the fall and sinfulness of man and that the only means of
            being cleansed from sin is through repentance and faith in the
            redeeming blood of Christ.
          </p>

          <p>
            Regeneration by the Holy Spirit is absolutely essential to
            personal salvation.
          </p>

          <p>
            Divine healing is available through the redemptive work of
            Christ on the cross.
          </p>

          <p>
            The Baptism of the Holy Spirit, according to Acts 2:4, is given
            to believers who ask for it. The Holy Spirit in a person&apos;s
            life is evidenced by changes in his life, including a renewed
            love for God, and people, a commitment to the scriptures and
            holy living. The spirit filled believer has the capability of
            speaking with new tongues whether or not he or she chooses to
            exercise this gifting.
          </p>

          <p>
            The Church of Jesus Christ is the universal, spiritual body of
            believers from every tribe, tongue, kindred and race of
            peoples, and is indwelt by God through the Holy Spirit and
            divinely empowered to fulfill ministry and her Great Commission
            on earth.
          </p>

          <p>
            In the sanctifying power of the Holy Spirit by whose indwelling
            the Christian is enabled to live a holy life.
          </p>

          <p>
            In the resurrection and final judgment of both the saved and
            the lost, the saved to everlasting life and the lost to
            everlasting damnation.
          </p>

          <p>
            In the new heavens and the new earth and the holy Jerusalem,
            the city of God, descending out of heaven and filled with the
            glory of God.
          </p>

          <p>
            Christian growth can only be realized by faith in the promises
            of God.
          </p>

          <p>
            Marriage is God-ordained. &quot;The creator made them male and
            female, and said, &apos;For this reason a man will leave his
            father and mother and be united to his wife, and the two will
            become one flesh&apos;&quot; (Matthew 19:4-5). Marriage is to be
            an exclusive relationship, a lifelong faithful union between a
            man and a woman. This relationship between a husband and wife
            should parallel the relationship between Christ and the Church
            (Ephesians 5:23-30).
          </p>

          <p>
            We practice two ordinances: (1) Water Baptism by immersion
            after repenting of one&apos;s sins and receiving the gift of
            salvation. And (2) Holy Communion (the Lord&apos;s Supper) as a
            symbolic remembrance of Christ&apos;s suffering and death for
            our salvation.
          </p>
        </div>
      </section>
    </main>
  );
}