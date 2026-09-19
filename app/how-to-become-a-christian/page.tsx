import Image from "next/image";

export const metadata = {
  title: "How to Become a Christian | Tree of Life International Churches",
};

export default function HowToBecomeAChristianPage() {
  return (
    <main className="bg-black text-white min-h-screen">
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
              Why make Jesus your priority? Because Jesus made us his top priority – he gave his life for us. And in exchange for our commitment to him, he gives us everything that really matters. We can’t sit on the fence. Jesus himself says in the Bible that he will spit ‘lukewarm’ or halfhearted followers out of his mouth! (Revelation 3:15-16).
            </p>
          </div>

          {/* Clear float for following text */}
          <div className="clear-both pt-2 space-y-4">
            <p>
              Not much room for complacency for any of us there. But why bother, you might say. Because we need saving. A drowning man would be stupid to say to the rescuer holding out a hand to save him, “I’ll think about putting all my trust in you… one day”, or “Well, I’m not sure I need saving really, I don’t know if I’m going to drown or not”, or “I’m not sure you are the real rescuer. I’ll wait and see what other people say.” But saving from what? Everyone has made mistakes and done wrong. “All have sinned”, says the Bible. God will not allow ANY sin into heaven, so people must be completely ‘clean’. But hang on a minute, you say, no one’s perfect – so how can we ever get into heaven? And you’d be perfectly right. No one can get into heaven on their own merit. God does not work on a “Do the best you can” basis. He doesn’t weigh up our good works and bad works and see if the scales tip in the right direction. He demands that full and proper justice be done.
            </p>

            <p>
              No one in court could expect a judge to waive the sentence for any crime on the basis of the prisoner promising to do the best he can. The brilliant principle on which a holy yet merciful God operates is substitution. In the days of corporal punishment, identical twin boys at attended a school in Glasgow. One had a weak heart , but few people knew about it. One day the ill twin kicked a ball through the window of the headmaster’s office. The other twin bravely volunteered to go to the headmaster, taking his brother’s place, because he knew the punishment would be severe. He received three painful whacks and on the third one the pain was so intense that he broke into tears.
            </p>

            <p>
              But he was glad because he knew he had saved his brother from it all. The boy became a substitute, taking his twin’s punishment. This is what Jesus did when he died on the cross. He willingly allowed himself to be killed, so that we can live. But you must ask him to become your personal rescuer or Saviour, otherwise the death of Christ cannot apply personally to you. Good medicine on a bedside table is no use to a dying man unless he takes it. In a humble prayer, ask Jesus to become your Saviour today. You can follow these simple guidelines….
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
                <strong className="text-emerald-400 font-bold">A - Admit</strong> that you have done wrong. The Bible says, “All have sinned and fall short of the glory of God” (Romans 3:23).
              </p>

              <p>
                <strong className="text-emerald-400 font-bold">B - Believe</strong> that Jesus died so that you can be forgiven, and ask God to forgive you: “God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life” (John 3:16); “If we confess our sins, he is faithful and just and will forgive us our sins” (1 John 1:9).
              </p>

              <p>
                <strong className="text-emerald-400 font-bold">C - Commit</strong> yourself to living God’s way from now on. Jesus said, “Whoever follows me will never walk in darkness, but will have the light of life” (John 8:12). Following Jesus is not always an easy road, but it’s the best decision you will ever make!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}