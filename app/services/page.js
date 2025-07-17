"use client";

import React from "react";

const services = [
  {
    title: "SEO (Search Engine Optimization)",
    description:
      "Improve your website's visibility on search engines and attract more organic traffic with our comprehensive SEO strategies, including keyword research, on-page optimization, and link building.",
  },
  {
    title: "UI/UX Design",
    description:
      "Enhance user satisfaction and engagement with intuitive, visually appealing, and user-centric UI/UX design tailored to your brand and audience.",
  },
  {
    title: "Mobile App Development",
    description:
      "Build robust, scalable, and user-friendly mobile applications for iOS and Android platforms to expand your digital reach and improve customer engagement.",
  },
  {
    title: "Content Marketing",
    description:
      "Drive brand awareness and customer loyalty through high-quality, relevant, and engaging content that resonates with your target audience.",
  },
  {
    title: "Email Marketing",
    description:
      "Reach your audience directly with personalized email campaigns designed to nurture leads, increase conversions, and retain customers.",
  },
  {
    title: "PPC & Paid Ads",
    description:
      "Maximize your ROI with targeted pay-per-click advertising campaigns across Google, Facebook, Instagram, and other platforms.",
  },
];

export default function ServicesPage() {
  return (
    <section
      className="relative min-h-screen bg-white/60 px-0 py-8"
      style={{ backdropFilter: "blur(2px)" }}
    >
      {/* Video & Contact Section */}
      <div className="relative w-full h-screen md:aspect-video md:max-h-[100vh] mb-10 rounded-xl overflow-hidden shadow-lg bg-black">
        {/* Video always visible, covers full screen on mobile */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-x-[-1]"
          src="/4K Planet Earth Spinning in Space _ Free HD Videos - No Copyright.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Desktop overlays */}
        <div className="hidden md:flex absolute inset-0 flex-row items-center justify-between px-6 lg:px-12 py-6 z-10">
          <form className=" rounded-xl  p-4 lg:p-4 w-full max-w-[220px] sm:max-w-[260px] md:max-w-xs lg:max-w-sm xl:max-w-md z-10 flex flex-col gap-2 ">
            <h2 className="text-xl font-bold text-white text-center">Contact for Negotiation</h2>
            <label className="font-medium text-white">
              Organization Type
              <select
                className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                required
              >
                <option value="">Select</option>
                <option value="School">School</option>
                <option value="Institute">Institute</option>
                <option value="College">College</option>
                <option value="Others">Others</option>
              </select>
            </label>
            <label className="font-medium text-white">
              Your Name
              <input
                type="text"
                className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                required
              />
            </label>
            <label className="font-medium text-white">
              Your Email
              <input
                type="email"
                className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                required
              />
            </label>
            <label className="font-medium text-white">
              Your Phone Number
              <input
                type="tel"
                className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                required
              />
            </label>
            <label className="font-medium text-white">
              Message (optional)
              <textarea
                className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                rows={1}
              />
            </label>
            <button
              type="submit"
              className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
            >
              Submit
            </button>
          </form>
          <div className="w-full max-w-xl flex justify-center">
            <img
              src="/Add_a_heading-removebg-preview.png"
              alt="Heading"
              className="w-full h-auto max-h-[90%] object-contain drop-shadow-xl"
            />
          </div>
        </div>
        {/* Mobile layout: stack form and image inside video container */}
        <div className="md:hidden flex flex-col gap-4 w-full absolute left-0 top-0 h-full justify-center items-center px-2 py-4 mt-16 z-10">
          <div className="flex justify-center">
            <img
              src="/Add_a_heading-removebg-preview.png"
              alt="Heading"
              className="w-full max-w-xs h-auto object-contain drop-shadow-xl"
            />
          </div>
          <form className=" rounded-xl shadow-xl p-3 w-full max-w-[220px] sm:max-w-[260px] mx-auto flex flex-col gap-2 ">
            <h2 className="text-lg font-bold text-white text-center">Contact for Negotiation</h2>
            <label className="font-medium text-white">
              Organization Type
              <select
                className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                required
              >
                <option value="">Select</option>
                <option value="School">School</option>
                <option value="Institute">Institute</option>
                <option value="College">College</option>
                <option value="Others">Others</option>
              </select>
            </label>
            <label className="font-medium text-white">
              Your Name
              <input
                type="text"
                className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                required
              />
            </label>
            <label className="font-medium text-white">
              Your Email
              <input
                type="email"
                className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                required
              />
            </label>
            <label className="font-medium text-white">
              Your Phone Number
              <input
                type="tel"
                className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                required
              />
            </label>
            <label className="font-medium text-white">
              Message (optional)
              <textarea
                className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                rows={1}
              />
            </label>
            <button
              type="submit"
              className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-12 max-w-5xl mx-auto bg-white/80 rounded-xl shadow-lg p-6 sm:p-10 backdrop-blur-md">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 text-center">
          Our Services
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={service.title + idx}
              className="bg-white rounded-xl shadow p-6 border border-gray-100 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-red-600 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
