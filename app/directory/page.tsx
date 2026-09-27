"use client";

import { useState } from "react";

const images = [
  "/5206142_orig.jpg",
  "/8019914_orig.jpg",
  "/8718647_orig.jpg",
  "/1278614_orig.jpg",
  "/2927049_orig.jpg",
  "/3530320_orig.jpg",
  "/3238477_orig.jpg",
  "/6914367_orig.jpg",
  "/2300333_orig.jpg",
  "/621438_orig.jpg",
  "/7913014_orig.jpg",
  "/4551927_orig.jpg",
  "/2bdde771-99d8-450b-987c-c5c6b4cf8f10_orig.jpeg",
  "/ba6c0694-9b63-4609-a662-7b4d3c249d5c_orig.jpeg",
  "/d9e7edc5-e8f7-49eb-a43d-aa93fb853be2_orig.jpeg",
  "/57d1586d-6562-4d2f-b4d4-45be162ca7f1_orig.jpeg",
  "/b38456e2-b836-4a97-8c51-b8693aa28d60_orig.jpeg",
  "/37bd4449-1e6a-44a5-b54b-3ca39655e8da_orig.jpeg",
];

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
          src="/20230820-182433-original_orig.jpeg"
          alt="Directory Banner"
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

                {branch.lines.map((line, i) => (
                  <p key={i} className="text-gray-200">
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
                  
                    <a href={branch.href}
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