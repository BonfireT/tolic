"use client";

import { useState } from "react";

const images = Array.from({ length: 18 }, (_, i) => `/directory/directory-${i + 1}.jpg`);

const branches = [
  {
    name: "TOLICHURCHES NIGERIA",
    lines: [
      "31 NATHAN STREET SURULERE, LAGOS, NIGERIA",
      "TELEPHONE: +23418973990",
      "ADMINISTRATOR: PASTOR BISI OLULADE",
    ],
    href: undefined,
  },
  {
    name: "TOLICHURCHES CONGO",
    lines: [
      "NATIONAL HEADQUARTERS: KINSHASA",
      "NATIONAL PASTOR: REV MUTUMBA JULES",
    ],
    href: undefined,
  },
  {
    name: "TOLICHURCHES LIBERIA",
    lines: ["CONTACT: REV ANTHONY FLOMO"],
    email: "info@treeoflifeinternationalchurches.org",
    href: undefined,
  },
  {
    name: "TOLICHURCHES KENYA",
    lines: ["CONTACT: PASTOR STEPHEN OSUKA"],
    href: "https://www.kenya.treeoflifeinternationalchurches.org",
  },
];

export default function DirectoryPage() {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Banner */}
      <section className="relative w-full h-[140px] sm:h-[180px] md:h-[220px] overflow-hidden">
        <img
          src="/directory-banner.jpg"
          alt="Directory"
          className="h-full w-full object-cover brightness-75"
        />
      </section>

      {/* Gallery + Text */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Main image */}
          <div className="w-full max-w-md">
            <img
              src={images[mainIndex]}
              alt={`Directory photo ${mainIndex + 1}`}
              className="w-full h-[260px] sm:h-[300px] object-cover"
            />
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 gap-1 w-full max-w-[140px]">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setMainIndex(i)}
                className={`h-14 w-16 overflow-hidden border ${
                  i === mainIndex ? "border-emerald-400" : "border-gray-700"
                }`}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Text content */}
        <div className="max-w-3xl mx-auto mt-10 text-sm sm:text-base leading-relaxed">
          <h2 className="font-serif font-bold text-lg sm:text-xl mb-4">
            Our Directory of Some of our Churches
          </h2>

          <p className="text-gray-200 mb-4">
            The heart of the Tree of Life International Churches is the
            adoption of a global strategy for church planting and
            leadership development to fulfill its commitment to the Great
            Commission of Jesus Christ. To bring unsaved and nominal
            Christians to a saving knowledge of Christ and to train
            national leaders to proclaim the Gospel to their own people
            and to other nations.
          </p>

          <p className="text-gray-200 mb-8">
            We are committed to seeing the church passionately prepared
            and ready for the second coming of Jesus.
          </p>

          <div className="space-y-6">
            {branches.map((branch) => (
              <div key={branch.name}>
                {branch.href ? (
                  
                    <a href={branch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline text-emerald-400 hover:text-emerald-300"
                  >
                    {branch.name}
                  </a>
                ) : (
                  <p className="font-semibold underline text-emerald-400">
                    {branch.name}
                  </p>
                )}

                {branch.lines.map((line) => (
                  <p key={line} className="text-gray-200">
                    {line}
                  </p>
                ))}

                {branch.email && (
                  <p className="text-gray-200">
                    E-mail:{" "}
                    
                      <a href={`mailto:${branch.email}`}
                      className="underline hover:text-emerald-400"
                    >
                      {branch.email}
                    </a>
                  </p>
                )}

                {branch.href && (
                  
                   <a  href={branch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 underline hover:text-emerald-400 break-all"
                  >
                    {branch.href}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}