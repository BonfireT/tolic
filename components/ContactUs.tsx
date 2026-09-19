"use client";

import { useState } from "react";

export default function ContactUs() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-md">
        <h2 className="font-serif text-xl">Contact us</h2>
        <p className="mt-2 text-xs text-gray-400">
          * Indicates required field
        </p>
        <label className="mt-4 block text-sm">
          Leave your Email to subscribe *
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded border border-gray-600 bg-black px-3 py-2 text-white"
        />
        <button
          type="button"
          className="mt-4 rounded bg-gray-700 px-4 py-2 text-sm font-semibold hover:bg-gray-600"
        >
          Subscribe to Newsletter
        </button>
      </div>
    </section>
  );
}