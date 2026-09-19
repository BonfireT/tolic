export default function VideosPage() {
  const videos = [
    { id: "H-v2huaILfE", title: "FIREBRANDINTERNATIONAL" },
    { id: "vRLvnqfHWDY", title: "Pastor Stella" },
    { id: "jUDd9ceSFXI", title: "wopin2011" },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="relative w-full h-[140px] sm:h-[180px] md:h-[220px] overflow-hidden">
        <img
          src="/videos-banner.jpg"
          alt="Videos"
          className="h-full w-full object-cover brightness-75"
        />
      </section>

      <section className="py-14 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
          {videos.slice(0, 2).map((video) => (
            <div key={video.id} className="w-full max-w-sm" data-aos="fade-up">
              <p className="text-sm font-semibold uppercase tracking-wide mb-2 text-gray-100">
                {video.title}
              </p>
              <div className="relative w-full aspect-video overflow-hidden rounded">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-sm" data-aos="fade-up">
            <p className="text-sm font-semibold uppercase tracking-wide mb-2 text-gray-100">
              {videos[2].title}
            </p>
            <div className="relative w-full aspect-video overflow-hidden rounded">
              <iframe
                src={`https://www.youtube.com/embed/${videos[2].id}`}
                title={videos[2].title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}