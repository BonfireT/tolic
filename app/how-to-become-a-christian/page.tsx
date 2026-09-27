import Image from "next/image";

export const metadata = {
  title: "How to Become a Christian | Tree of Life International Churches",
};

export default function HowToBecomeAChristianPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Gospel Header Banner */}
      <section className="w-full bg-[#1c0f08] border-b border-amber-900/40 py-8 text-center shadow-inner">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-widest text-[#a85822] uppercase drop-shadow-md">
          GOSPEL
        </h1>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Page Subtitle */}
        <h2 className="text-xl sm:text-2xl font-serif font-semibold text-white mb-8 text-center">
          How to become a Christian
        </h2>

        <div className="w-full space-y-6 text-gray-200 font-serif leading-relaxed text-sm sm:text-base text-justify sm:text-left">
          {/* Float Diagram / Side Graphic Section */}
          <div className="overflow-hidden mb-4 sm:float-left sm:mr-6 sm:mb-2 w-full sm:w-[320px]">
            <div className="relative w-full h-[180px] rounded border border-gray-800 overflow-hidden shadow-md">
              <Image
                src="/gospel-diagram.jpg"
                alt="Gospel Cross Diagram - Mankind to God"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              What is a real Christian?
            </h3>
            <p className="mb-4">
              A real Christian is someone who has made Jesus the Lord of his life – the No.1 priority.
            </p>
            <p>
              Why make Jesus your priority? Because Jesus made us his top priority – he gave his life for us. And in exchange for our commitment to him, he gives us everything that really matters. We can&apos;t sit on the fence. Jesus himself says in the Bible that he will spit &lsquo;lukewarm&rsquo; or halfhearted followers out of his mouth! (Revelation 3:15-16).
            </p>
          </div>

          <div>
            <p>
              No one in court could expect a judge to waive the sentence for any crime on the basis of the prisoner promising to do the best he can. The brilliant principle on which a holy yet merciful God operates is substitution. In the days of corporal punishment, identical twin boys attended a school in Glasgow. One had a weak heart, but few people knew about it. One day the ill twin kicked a ball through the window of the headmaster&apos;s office. The other twin bravely volunteered to go to the headmaster, taking his brother&apos;s place, because he knew the punishment would be severe. He received three painful whacks and on the third one the pain was so intense that he broke into tears.
            </p>

            <p>
              But he was glad because he knew he had saved his brother from it all. The boy became a substitute, taking his twin&apos;s punishment. This is what Jesus did when he died on the cross. He willingly allowed himself to be killed, so that we can live. But you must ask him to become your personal rescuer or Saviour, otherwise the death of Christ cannot apply personally to you. Good medicine on a bedside table is no use to a dying man unless he takes it. In a humble prayer, ask Jesus to become your Saviour today. You can follow these simple guidelines…
            </p>
          </div>

          {/* ABC Guidelines Section */}
          <div className="pt-8 border-t border-gray-800 mt-8 space-y-4">
            <h3 className="text-xl font-serif font-bold text-white text-center sm:text-left mb-4">
              How to become a Christian?
            </h3>
            <p className="mb-6">
              Following Jesus will change your life for ever, but the actual steps you take to begin are as easy as ABC. If you would like to know Jesus for yourself, be certain that your sins are forgiven and that one day you will go to heaven, follow these three easy steps, talking to God in your own words…
            </p>

            <div className="space-y-4 pl-2 sm:pl-4">
              <p>
                <strong className="text-emerald-400 font-bold">A - Admit</strong> that you have done wrong. The Bible says, &ldquo;All have sinned and fall short of the glory of God&rdquo; (Romans 3:23).
              </p>

              <p>
                <strong className="text-emerald-400 font-bold">B - Believe</strong> that Jesus died so that you can be forgiven, and ask God to forgive you: &ldquo;God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life&rdquo; (John 3:16); &ldquo;If we confess our sins, he is faithful and just and will forgive us our sins&rdquo; (1 John 1:9).
              </p>

              <p>
                <strong className="text-emerald-400 font-bold">C - Commit</strong> yourself to living God&apos;s way from now on. Jesus said, &ldquo;Whoever follows me will never walk in darkness, but will have the light of life&rdquo; (John 8:12). Following Jesus is not always an easy road, but it&apos;s the best decision you will ever make!
              </p>
            </div>
          </div>

          {/* Further Reading Downloads */}
          <div className="pt-8 border-t border-gray-800 mt-8">
            <h3 className="text-xl font-serif font-bold text-white text-center sm:text-left mb-4">
              Keep Growing
            </h3>
            <p className="mb-6">
              If you just prayed that prayer, or want to go deeper in your
              new faith, these short guides will help:
            </p>
            <ul className="space-y-3 pl-2 sm:pl-4">
              <li>
                
                  <a href="/resources/new-converts-class.pdf"
                  download
                  className="text-emerald-400 underline hover:text-emerald-300"
                >
                  New Converts Class
                </a>{" "}
                &mdash; the first steps of your walk with Christ.
              </li>
              <li>
                
                  <a href="/resources/knowing-god-personally.pdf"
                  download
                  className="text-emerald-400 underline hover:text-emerald-300"
                >
                  Knowing God Personally
                </a>{" "}
                &mdash; what it means to walk with God day to day.
              </li>
              <li>
                
                  <a href="/resources/living-in-christ.pdf"
                  download
                  className="text-emerald-400 underline hover:text-emerald-300"
                >
                  Living in Christ
                </a>{" "}
                &mdash; building a life shaped by your faith.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}