"use client"

import Header from "../Header"
import { Target, Users, Award, Globe, TrendingUp, Heart, Lightbulb, Shield } from "lucide-react"

export default function AboutUsPage() {
  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started as a small digital agency in Delhi" },
    { year: "2023", title: "First 50 Clients", description: "Reached our first major milestone" },
    { year: "2015", title: "International Expansion", description: "Expanded to US, UK, Canada, and UAE" },
    { year: "2018", title: "AI Integration", description: "Became India's first AI-powered marketing agency" },
    { year: "2020", title: "1000+ Projects", description: "Successfully completed over 1000 projects" },
    { year: "2024", title: "Industry Leader", description: "Recognized as top marketing agency in India" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Ethical Practices",
      description: "We believe in transparent and ethical business practices that build long-term relationships.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we implement is focused on delivering measurable results and ROI.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of the curve by embracing new technologies and creative solutions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We function as your extended marketing team.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const stats = [
    { number: "16+", label: "Years of Experience", icon: Award },
    { number: "1000+", label: "Projects Completed", icon: Target },
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "7", label: "Countries Served", icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-white/60 px-0 pb-0" style={{ backdropFilter: "blur(2px)" }}>
        {/* Video & Contact Section */}
        <div className="relative w-full h-screen md:aspect-video md:max-h-[100vh] mb-10 rounded-xl overflow-hidden shadow-lg bg-black">
          {/* Video always visible, covers full screen on mobile */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-x-[-1]"
            src="/4K Planet Earth Spinning in Space _ Free HD Videos - No Copyright.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
          {/* Desktop overlays */}
          <div className="hidden md:flex absolute inset-0 flex-row items-center justify-between px-6 lg:px-12 py-6 z-10">
            <form className=" rounded-xl  p-4 lg:p-4 w-full max-w-[220px] sm:max-w-[260px] md:max-w-xs lg:max-w-sm xl:max-w-md z-10 flex flex-col gap-2 ">
              <h2 className="text-xl font-bold text-white text-center">Contact Us</h2>
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
                Message
                <textarea
                  className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                  rows={2}
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
              <h2 className="text-lg font-bold text-white text-center">Contact Us</h2>
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
                Message
                <textarea
                  className="mt-1 block w-full rounded border-gray-300 focus:border-red-400 focus:ring-red-400"
                  rows={2}
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
      </section>

      <div className="container mx-auto px-6 pt-0 pb-16">
        {/* Our Story */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                Founded in 2008, Chalksnboard began as a vision to revolutionize digital marketing in India. What
                started as a small team of passionate marketers has grown into the country's leading AI-powered
                marketing agency.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Over the years, we've helped thousands of businesses transform their digital presence, from startups to
                Fortune 500 companies. Our journey has been marked by innovation, dedication, and an unwavering
                commitment to our clients' success.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Today, we operate across 7 countries and have completed over 1000 successful projects, but our mission
                remains the same: to help businesses grow through strategic, data-driven marketing solutions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-red-400 mb-1">{stat.number}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                To empower businesses with innovative, AI-driven marketing solutions that deliver measurable results and
                sustainable growth. We strive to be the trusted partner that helps our clients navigate the digital
                landscape and achieve their business objectives.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To be the global leader in AI-powered marketing solutions, setting new standards for innovation,
                creativity, and results. We envision a future where every business, regardless of size, has access to
                world-class marketing expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-500/30"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                      <div className="text-red-400 font-bold text-xl mb-2">{milestone.year}</div>
                      <h4 className="text-white font-bold text-lg mb-2">{milestone.title}</h4>
                      <p className="text-white/70">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-slate-900"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-white/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses who trust Chalksnboard for their digital marketing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
