"use client";

import React from "react";
import { Search, Monitor, Smartphone, BookOpen, Mail, Target } from "lucide-react";
import { motion } from "framer-motion";

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
    title: "Admission Strategy",
    description:
      "We craft compelling brand films that highlight a school's unique strengths and create a lasting impact. Through engaging storytelling and visuals, we build an emotional connection with prospective students and parents. Our creative approach ensures your institution stands out, driving interest and admissions.",
  },
];

const serviceIcons = {
  "SEO (Search Engine Optimization)": <Search className="w-10 h-10 text-green-600" />,
  "UI/UX Design": <Monitor className="w-10 h-10 text-pink-600" />,
  "Mobile App Development": <Smartphone className="w-10 h-10 text-indigo-600" />,
  "Content Marketing": <BookOpen className="w-10 h-10 text-yellow-600" />,
  "Email Marketing": <Mail className="w-10 h-10 text-blue-600" />,
  "PPC & Paid Ads": <Target className="w-10 h-10 text-red-600" />,
};

const serviceFeatures = {
  "SEO (Search Engine Optimization)": [
    "Keyword Research & Analysis",
    "On-Page Optimization",
    "Technical SEO Audit",
    "Link Building",
    "Local SEO",
    "Content Optimization",
    "Site Speed Optimization",
    "Mobile SEO",
  ],
  "UI/UX Design": [
    "User Research & Analysis",
    "Wireframing & Prototyping",
    "Visual Design",
    "Interaction Design",
    "Usability Testing",
    "Design Systems",
  ],
  "Mobile App Development": [
    "iOS & Android Apps",
    "Cross-Platform Solutions",
    "App Store Deployment",
    "UI/UX for Mobile",
    "Performance Optimization",
    "Maintenance & Support",
  ],
  "Content Marketing": [
    "Content Strategy",
    "Blog & Article Writing",
    "Infographics",
    "Video Content",
    "Social Media Content",
    "Content Distribution",
  ],
  "Email Marketing": [
    "Campaign Strategy",
    "Personalized Emails",
    "Automation",
    "A/B Testing",
    "Analytics & Reporting",
    "List Management",
  ],
  "PPC & Paid Ads": [
    "Google Ads",
    "Facebook & Instagram Ads",
    "Campaign Setup",
    "Audience Targeting",
    "Performance Tracking",
    "Conversion Optimization",
  ],
};

// Next Gen Features Section
const features = [
    { title: 'Lead Generation' },
    { title: 'Get more Registrations' },
    { title: 'Track Admissions' },
    { title: 'Manage School Listing' },
    { title: 'Manage Alumini' },
    { title: 'Manage Blogs' },
    { title: 'Crm Tools' },
    { title: '24 * 7 help' },
];

function Tech() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [radius, setRadius] = React.useState(180);
    const [cardSize, setCardSize] = React.useState(60);
    const verticalOffset = 60;
    const horizontalOffset = 0;
    const total = features.length;

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % total);
        }, 4000);
        return () => clearInterval(interval);
    }, [total]);

    React.useEffect(() => {
        const updateSizes = () => {
            const width = window.innerWidth;
            if (width >= 1440) {
                setRadius(240);
                setCardSize(90);
            } else if (width >= 1024) {
                setRadius(200);
                setCardSize(80);
            } else if (width >= 768) {
                setRadius(160);
                setCardSize(70);
            } else if (width >= 480) {
                setRadius(120);
                setCardSize(60);
            } else {
                setRadius(90);
                setCardSize(50);
            }
        };

        updateSizes();
        window.addEventListener('resize', updateSizes);
        return () => window.removeEventListener('resize', updateSizes);
    }, []);

    const phoneWidth = radius * 0.7;
    const phoneHeight = phoneWidth * 2.0;
    const fontSize = cardSize * 0.15;

    return (
        <section
            style={{ background: '#fff' }}
            className="w-full flex justify-center items-center py-20 flex-col px-4 bg-white"
        >
            <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-[#2b3366] mb-20 sm:mb-10 font-marcellus">
                Next Gen Features
            </h2>
            <div className="relative w-full mt-8 z-4 max-w-[600px]" style={{ aspectRatio: '1 / 1' }}>
                {/* Dashed Circle Border */}
                <div
                    className="absolute border-2 border-dashed border-gray-400 rounded-full"
                    style={{
                        width: `${radius * 2}px`,
                        height: `${radius * 2}px`,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
                {/* Rotating Feature Cards */}
                {features.map((feature, i) => {
                    const angleDeg = (360 / total) * ((i - activeIndex + total) % total);
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const x = radius * Math.cos(angleRad) + horizontalOffset - cardSize / 2;
                    const y = radius * Math.sin(angleRad) + verticalOffset - cardSize / 2;
                    return (
                        <motion.div
                            key={i}
                            className="absolute bg-[#2b3366] rounded-xl shadow-md flex items-center justify-center text-center transition-all duration-500 font-marcellus"
                            style={{
                                width: `${cardSize}px`,
                                height: `${cardSize}px`,
                                left: '50%',
                                top: '50%',
                                transform: `translate(${x}px, ${-y}px)`,
                                padding: '4px',
                            }}
                        >
                            <p
                                className="font-semibold text-white leading-tight"
                                style={{
                                    fontSize: `${fontSize}px`,
                                    lineHeight: 1.2,
                                }}
                            >
                                {feature.title}
                            </p>
                        </motion.div>
                    );
                })}
                {/* Centered Virtual Phone with Logo */}
                <div
                    className="absolute z-10 flex items-center justify-center"
                    style={{
                        width: `${radius * 0.7}px`,
                        height: `${radius * 1.4}px`,
                        top: '52%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <div
                        className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2.5rem] shadow-2xl border-4 border-slate-700 flex items-center justify-center overflow-hidden relative"
                        style={{ minHeight: 0 }}
                    >
                        {/* Logo inside phone */}
                       
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <span
                                className="block font-extrabold tracking-widest text-white text-center px-2 break-words"
                                style={{
                                    fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
                                    wordBreak: 'break-word',
                                    lineHeight: 1.05,
                                    maxWidth: '98%',
                                }}
                            >
                                CHALKS<br />
                                <span className="text-red-500">N</span><br />
                                BOARD
                            </span>
                        </div>
                        {/* Speaker notch */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full bg-gray-300 opacity-70" />
                    </div>
                </div>
            </div>
        </section>
    );
}

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
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, idx) => (
            <motion.div
              key={service.title + idx}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition relative flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
            >
              {/* Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg">
                {serviceIcons[service.title]}
              </div>
              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-red-600 mb-2 text-center">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-base sm:text-lg mb-4 text-center">{service.description}</p>
                {/* Features */}
                <ul className="mb-4 space-y-2">
                  {serviceFeatures[service.title]?.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 text-sm">
                      <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Gen Features Section (now Tech) */}
      <Tech />
    </section>
  );
}
