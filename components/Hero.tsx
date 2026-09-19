export default function Hero() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden sm:h-[480px]">
      <img
        src="/pastor.jpg"
        alt="Pastor preaching"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 px-6 text-center">
        <h1 className="font-serif text-4xl italic text-green-300 [text-shadow:_0_2px_12px_rgb(0_0_0_/_70%)] sm:text-6xl">
          TOLIChurches
        </h1>
        <h2 className="mt-4 font-serif text-2xl font-extrabold uppercase leading-tight tracking-wide text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_70%)] sm:text-4xl">
          2026: Our Year of Divine Mandate!
          <span className="mt-2 block text-xl italic tracking-normal text-green-300 sm:text-3xl">
            Luke 4:18-19
          </span>
        </h2>
      </div>
    </section>
  );
}