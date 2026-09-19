export default function Intro() {
  return (
    <section className="bg-black px-6 py-16 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* Left: text */}
        <div className="text-center md:text-left">
          <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
            <span className="text-green-500">Tree of </span>
            <span className="text-red-600">Life</span>{" "}
            <span className="text-green-500">International Churches</span>
          </h2>
          <p className="mt-4 font-serif text-xl italic">
            Multiple locations and nationalities but One Church
          </p>
          <p className="mt-2 font-serif text-lg italic text-red-500">
            &quot;Passionate about God! Passionate about People!&quot;
          </p>
          <p className="mt-6 font-serif text-sm italic leading-relaxed text-gray-200">
            <span className="font-bold">Revelation 2:7</span> &quot;He that
            hath an ear, let him hear what the Spirit saith unto the
            churches; To him that overcometh will I give to eat of the tree
            of life, which is in the midst of the paradise of God.&quot;
          </p>
        </div>

        {/* Right: photo + caption */}
        <div className="flex flex-col items-center">
          <img
            src="/founder.jpg"
            alt="Apostle John & Rev Stella Ebegbuna"
            className="w-full max-w-md object-cover"
          />
          <p className="mt-2 text-sm font-semibold text-white">
            Apostle John &amp; Rev Stella Ebegbuna (General Overseer)
          </p>
        </div>
      </div>
    </section>
  );
}