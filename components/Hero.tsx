export default function Hero() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden">
      <img
        src="/pastor.jpg"
        alt="Pastor preaching"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 px-6 text-center">
        <h1 className="text-6xl font-serif italic text-green-600 drop-shadow-lg">
          TOLIChurches
        </h1>
        <h2 className="mt-4 font-serif text-3xl font-extrabold uppercase leading-tight tracking-wide text-green-600 [text-shadow:_2px_2px_8px_rgb(255_255_255_/_60%)] sm:text-4xl">
          2026: Our Year of Divine Mandate!
          <span className="mt-2 block text-2xl italic tracking-normal sm:text-3xl">
            Luke 4:18-19
          </span>
        </h2>
      </div>
    </section>
  );
}