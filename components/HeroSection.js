"use client"

import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react"

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
      className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 lg:py-20 overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
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

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0  z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-20">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight drop-shadow-2xl">
          <span className="text-red-500"> Boost </span> School Admissions with 360°<span className="text-white">Marketing That Delivers</span>{" "}
          <span className="text-red-500">ROI®</span>
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 drop-shadow-lg">
          Let Our Agency Drive Your Admissions Success

        </h2>
        <p className="text-base lg:text-lg mb-4 lg:mb-6 drop-shadow-lg">Since 2020, Delivering Results That Fill Schools and Drive ROI
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
    </section>
  )
}
