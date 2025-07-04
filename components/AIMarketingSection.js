"use client"

import { useState, useEffect } from "react"
import { Target, Play, Facebook, Instagram } from "lucide-react"

export default function AIMarketingSection() {
  const [adSpendSavings, setAdSpendSavings] = useState(55119283)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAdSpendSavings((prev) => prev + Math.floor(Math.random() * 100))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num) => {
    return num
      .toString()
      .split("")
      .map((digit, index) => (
        <span key={index} className="inline-block bg-blue-500 text-white px-2 py-1 mx-0.5 rounded text-sm font-bold">
          {digit}
        </span>
      ))
  }

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    // You can integrate with actual video player here
    alert("Video player would open here with company introduction video")
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openSocialMedia = (platform) => {
    const urls = {
      facebook: "https://facebook.com/chalksnboard",
      instagram: "https://instagram.com/chalksnboard",
      linkedin: "https://linkedin.com/company/chalksnboard",
      behance: "https://behance.net/chalksnboard",
      medium: "https://medium.com/@chalksnboard",
    }
    window.open(urls[platform], "_blank")
  }

  return (
    <section id="marketing" className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        

        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">Top AI Marketing Company</h2>
          <p className="text-base lg:text-lg text-gray-600">Delhi | Jaipur | Mumbai (India) || USA/UK/Canada/UAE</p>
        </div>

        {/* 3D Abstract Design with Video Play Button */}
        <div className="relative h-64 lg:h-96 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl mb-12 lg:mb-16 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          {/* Client Logos on sides */}
          <div className="absolute left-4 top-4 bottom-4 w-20 lg:w-32 grid grid-cols-1 gap-2 opacity-60">
            <div className="bg-white bg-opacity-20 rounded p-2 text-xs text-white text-center cursor-pointer hover:bg-opacity-30 transition-all">
              KRISHNA HOBO SOLUTIONS
            </div>
            <div className="bg-white bg-opacity-20 rounded p-2 text-xs text-white text-center cursor-pointer hover:bg-opacity-30 transition-all">
              HANAKYA IAS ACADEMY
            </div>
            <div className="bg-white bg-opacity-20 rounded p-2 text-xs text-white text-center cursor-pointer hover:bg-opacity-30 transition-all">
              SURESH GYAN VIHAR UNIVERSITY
            </div>
          </div>

          <div className="absolute right-4 top-4 bottom-4 w-20 lg:w-32 grid grid-cols-1 gap-2 opacity-60">
            <div className="bg-white bg-opacity-20 rounded p-2 text-xs text-white text-center cursor-pointer hover:bg-opacity-30 transition-all">
              HANAKYA IAS ACADEMY
            </div>
            <div className="bg-white bg-opacity-20 rounded p-2 text-xs text-white text-center cursor-pointer hover:bg-opacity-30 transition-all">
              SURESH GYAN VIHAR UNIVERSITY
            </div>
          </div>

          <div className="relative z-10 text-center text-white px-4">
            <button
              onClick={handlePlayVideo}
              className="w-16 h-16 lg:w-20 lg:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 transition-all transform hover:scale-110"
            >
              <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </button>
            <h3 className="text-2xl lg:text-4xl font-bold mb-4">Marketing That Drives ROI®</h3>
            <p className="text-sm lg:text-lg mb-6">Digital Marketing Agency with a proven track record of 16+ years</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center">
              <button
                onClick={scrollToAbout}
                className="bg-white text-black px-4 lg:px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                WEBSITE
              </button>
              <button
                onClick={scrollToServices}
                className="bg-white text-black px-4 lg:px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                SERVICES
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={() => openSocialMedia("behance")}
                className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all"
              >
                <span className="text-xs font-bold">Bs</span>
              </button>
              <button
                onClick={() => openSocialMedia("linkedin")}
                className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all"
              >
                <span className="text-xs font-bold">in</span>
              </button>
              <Facebook
                className="w-8 h-8 text-white cursor-pointer hover:text-gray-200 transition-colors"
                onClick={() => openSocialMedia("facebook")}
              />
              <Instagram
                className="w-8 h-8 text-white cursor-pointer hover:text-gray-200 transition-colors"
                onClick={() => openSocialMedia("instagram")}
              />
              <button
                onClick={() => openSocialMedia("medium")}
                className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all"
              >
                <span className="text-xs font-bold">M</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
