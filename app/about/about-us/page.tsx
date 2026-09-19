export default function AboutUs() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-64 w-full overflow-hidden">
        <img
          src="/people-of-prayer.jpg"
          alt="People of prayer"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="font-serif text-4xl text-gray-100">
            People of prayer
          </h1>
        </div>
      </section>

      {/* About Us content */}
      <section className="bg-black px-6 py-16 text-white">
        <h2 className="text-center font-serif text-3xl">About Us</h2>

        <div className="mx-auto mt-8 max-w-5xl text-justify leading-relaxed text-gray-200">
          <img
            src="/congregation.jpg"
            alt="TOLIC congregation gathering"
            className="mb-4 ml-6 w-64 object-cover float-right md:w-80"
          />

          <p>
            Tree of Life International Churches (TOLIChurches) is an end
            time ministry with a passion for preparing the body of Christ
            for the return of Christ Jesus. We are in different locations
            and nations but we are One in faith, belief, worship and
            mandate. Our Passion is for Jesus and people! We have the
            mandate to prepare to cover the world with the good news of
            Jesus Christ and disciple the converts as we prepare ourselves
            for the return of Christ.
          </p>
          <p className="mt-4">
            Each congregation shares a single-minded aim: to reach people
            far from God and help them become fully devoted followers of
            Christ.
          </p>
          <p className="mt-4">
            We are an international community of churches bound as one by
            a covenant to evangelize the world and fulfill the Great
            Commission through the power of the Holy Spirit, the love
            that flows from His Son Jesus Christ and the fellowship of
            the believers. Currently, we have several branches in
            different nations.
          </p>
          <p className="mt-4">
            With a heart to reach up to God in worship and out to the
            world in service, our slogan is Passionate about God!
            Passionate about people!
          </p>
          <p className="mt-4">
            Our prayer, passion and quest is to see the kingdom of this
            world become the Kingdom of the Lord and His Christ.
          </p>
          <p className="mt-4">
            As you meet with us, may you meet Christ and be ignited in
            your faith and passion for Him and the un-reached around you.
            May the Lord speak to your life today. His thoughts towards
            you are precious and strong enough to build upon. He cares
            for you in ways that cannot be imagined. Come again soon! We
            are happy, God loving, Holy Ghost filled, mandate fulfilling,
            world impacting group of believers who are conforming into
            the image of Christ and expectant of His soon return.
          </p>
          <p className="mt-4">
            With branches in different nations, our oneness can be seen
            in our passion and commitment to Jesus and our love for each
            other and for the world at large. A dynamic church with a
            burden for the lost and families. Signs, wonders and miracles
            are seen as part of every believer&apos;s lifestyle. Jesus
            Christ is the same yesterday, today and forever!
          </p>

          <img
            src="/about-us-closing.jpg"
            alt="TOLIC ministry"
            className="mx-auto mt-8 w-full max-w-3xl object-cover"
          />
        </div>
      </section>
    </>
  );
}