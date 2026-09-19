"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message/prayer request has been sent.");
    setFormData({ name: "", email: "", comments: "" });
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden">
        <Image
          src="/contact-banner.jpg"
          alt="Contact Us Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-emerald-500 text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-widest uppercase">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Center Thumbnail Image */}
        <div className="relative w-[200px] h-[140px] mb-6 overflow-hidden rounded">
          <Image
            src="/prayer-thumbnail.jpg"
            alt="Prayer and worship gathering"
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-8">
          Contact Us or Leave your prayer requests
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md text-left flex flex-col space-y-4 mb-16"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold text-gray-200 mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white text-black px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold text-gray-200 mb-1"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white text-black px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Comments */}
          <div>
            <label
              htmlFor="comments"
              className="block text-xs font-bold text-gray-200 mb-1"
            >
              Comments:
            </label>
            <textarea
              id="comments"
              rows={6}
              required
              value={formData.comments}
              onChange={(e) =>
                setFormData({ ...formData, comments: e.target.value })
              }
              className="w-full bg-white text-black p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-y"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-gray-200 text-black hover:bg-white text-xs font-medium px-3 py-1.5 border border-gray-400 shadow-sm transition-colors"
            >
              Submit Information
            </button>
          </div>
        </form>

        {/* Footer Details */}
        <div className="space-y-2 text-sm sm:text-base font-serif">
          <p className="font-bold tracking-wider text-white uppercase">
            TREE OF LIFE INTERNATIONAL CHURCHES
          </p>
          <p className="text-gray-300">
            NIGERIA (Church Office): 31 Nathan Street, Surulere, Lagos, NIGERIA
          </p>
          <p className="text-gray-300">
            Email:{" "}
            <a
              href="mailto:info@treeoflifeinternationalchurches.org"
              className="underline hover:text-emerald-400"
            >
              info@treeoflifeinternationalchurches.org
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}