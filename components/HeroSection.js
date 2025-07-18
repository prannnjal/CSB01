"use client"

import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openSocialMedia = (platform) => {
    const urls = {
      facebook: "https://facebook.com/chalksnboard",
      instagram: "https://instagram.com/chalksnboard",
      youtube: "https://youtube.com/chalksnboard",
      twitter: "https://twitter.com/chalksnboard",
    }
    window.open(urls[platform], "_blank")
  }

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white min-h-screen overflow-hidden flex items-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 min-h-screen">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Technology Background Video Loop For Website.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Overlay above video for blur and dark effect */}
      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black/10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-10 leading-snug drop-shadow-2xl space-y-2">
          <span className="block text-4xl md:text-5xl lg:text-6xl text-red-500">
            <span className=" px-1 rounded">Boost</span>{" "}
            <span className=" px-1 rounded">School</span>{" "}
            <span className=" px-1 rounded">Admissions</span>{" "}
            <span className=" px-1 rounded">with</span>
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl">
            <span className=" px-1 rounded">360°Marketing</span>{" "}
            <span className=" px-1 rounded">That</span>{" "}
            <span className=" px-1 rounded">Delivers</span>{" "}
            <span className=" px-1 rounded">ROI</span>
          </span>
          
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 drop-shadow-lg">
          <span className=" px-1 rounded">Let</span>{" "}
          <span className=" px-1 rounded">Our</span>{" "}
          <span className=" px-1 rounded">Agency</span>{" "}
          <span className=" px-1 rounded">Drive</span>{" "}
          <span className=" px-1 rounded">Your</span>{" "}
          <span className=" px-1 rounded">Admissions</span>{" "}
          <span className=" px-1 rounded">Success</span>

        </h2>
        <p className="text-base lg:text-lg mb-4 lg:mb-6 drop-shadow-lg">
          <span className=" px-1 rounded">Since</span>{" "}
          <span className=" px-1 rounded">2020,</span>{" "}
          <span className=" px-1 rounded">Delivering</span>{" "}
          <span className=" px-1 rounded">Results</span>{" "}
          <span className=" px-1 rounded">That</span>{" "}
          <span className=" px-1 rounded">Fill</span>{" "}
          <span className=" px-1 rounded">Schools</span>{" "}
          <span className=" px-1 rounded">and</span>{" "}
          <span className=" px-1 rounded">Drive</span>{" "}
          <span className=" px-1 rounded">ROI</span>
        </p>


       

        <div className="flex justify-center space-x-6 mt-6 lg:mt-8">
          <a
            href="https://www.facebook.com/ChalksnBoard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook

              className="w-5 h-5 lg:w-6 lg:h-6 hover:text-red-500 cursor-pointer transition-colors drop-shadow-lg"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/chalksnboard/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              className="w-5 h-5 lg:w-6 lg:h-6 hover:text-red-500 cursor-pointer transition-colors drop-shadow-lg"
            />
          </a>


          <a
            href="https://www.instagram.com/chalksnboard_official/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              className="w-5 h-5 lg:w-6 lg:h-6 hover:text-red-500 cursor-pointer transition-colors drop-shadow-lg"
            />
          </a>

          <a
            href="https://www.youtube.com/@chalksnboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube
              className="w-5 h-5 lg:w-6 lg:h-6 hover:text-red-500 cursor-pointer transition-colors drop-shadow-lg"
            />
          </a>

          <a
            href="https://x.com/chalksnboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              className="w-5 h-5 lg:w-6 lg:h-6 hover:text-red-500 cursor-pointer transition-colors drop-shadow-lg"
            />
          </a>

        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-green-500/30 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-purple-500/30 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>

      {/* WhatsApp Chat Icon */}
      <a
        href="https://wa.me/9211580208"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-colors duration-200"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </section>
  )
}
