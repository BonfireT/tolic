"use client";

import Image from "next/image";
import { useState } from "react";

export default function PrayerRequestsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    request: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prayer request submitted:", formData);
    alert("Thank you! Your prayer or praise request has been sent.");
    setFormData({ firstName: "", lastName: "", email: "", request: "" });
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden">
        <Image
          src="/logo.jpg"
          alt="Tree of Life International Churches"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-emerald-500 text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-widest uppercase text-center px-4">
            Prayer Request Form
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Content image */}
        {/* NOTE: original image (7493503.png) wasn't in the export ZIPs —
            replace this src with the real photo once you save it from the
            live Weebly site. */}
        <div className="relative w-[200px] h-[140px] mb-6 overflow-hidden rounded bg-zinc-800 flex items-center justify-center">
          <Image
            src="/prayer-request-photo.jpg"
            alt="Prayer and worship gathering"
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-2">
          Prayer Request Form
        </h2>
        <p className="text-sm text-gray-400 mb-8">
          Please fill the form. Fields marked{" "}
          <span className="text-emerald-500">*</span> are required.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md text-left flex flex-col space-y-4 mb-16"
        >
          {/* Name: First / Last */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="firstName"
                className="block text-xs font-bold text-gray-200 mb-1"
              >
                First Name <span className="text-emerald-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full bg-white text-black px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-xs font-bold text-gray-200 mb-1"
              >
                Last Name <span className="text-emerald-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full bg-white text-black px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold text-gray-200 mb-1"
            >
              Email <span className="text-emerald-500">*</span>
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

          {/* Prayer or Praise Request */}
          <div>
            <label
              htmlFor="request"
              className="block text-xs font-bold text-gray-200 mb-1"
            >
              Prayer or Praise Request <span className="text-emerald-500">*</span>
            </label>
            <textarea
              id="request"
              rows={6}
              required
              value={formData.request}
              onChange={(e) =>
                setFormData({ ...formData, request: e.target.value })
              }
              className="w-full bg-white text-black p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-y"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-gray-200 text-black hover:bg-white text-xs font-medium px-3 py-1.5 border border-gray-400 shadow-sm transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Footer Details */}
        <div className="space-y-2 text-sm sm:text-base font-serif">
          <p className="font-bold tracking-wider text-white uppercase">
            Tree of Life International Churches
          </p>
          <p className="text-gray-300">
            NIGERIA (Church Office): 31 Nathan Street, Surulere, Lagos, NIGERIA
          </p>
          <p className="text-gray-300">
            Email:{" "}
            
              <a href="mailto:info@treeoflifeinternationalchurches.org"
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