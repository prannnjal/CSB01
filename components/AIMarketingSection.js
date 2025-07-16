"use client"

import { useState, useEffect, useRef } from "react"
import { Target, Play, Pause, Facebook, Instagram, X } from "lucide-react"

export default function AIMarketingSection() {
  const [adSpendSavings, setAdSpendSavings] = useState(55119283)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

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

  const handlePlayPause = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  // Ensure play state is synced with button
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (isPlaying && video.paused) {
      video.play()
    } else if (!isPlaying && !video.paused) {
      video.pause()
    }
  }, [isPlaying])

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
         
        </div>

        {/* 3D Abstract Design with Video Play Button */}
        <div
          className="relative h-64 lg:h-96 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl mb-12 lg:mb-16 flex items-center justify-center overflow-hidden"
          onClick={handlePlayPause}
          style={{ cursor: 'pointer' }}
        >
          {/* Video Background */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/Transform Your School with Chalksnboard_free.mp4"
            autoPlay
            loop
            playsInline
            // no controls, not muted
          />
          {/* Overlay for readability, but allow video controls to be visible */}
          <div className="absolute inset-0 bg-black bg-opacity-10 z-10 pointer-events-none"></div>

          {/* Removed custom play/pause button */}

          <div className="relative z-20 text-center text-white px-4 w-full h-full flex flex-col items-center justify-center pointer-events-none">
            {/* Social Media Icons or other content can go here if needed */}
          </div>

          {/* Heading at the bottom center */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-full flex justify-center pointer-events-none">
            <h3 className="text-2xl lg:text-4xl text-red-500 font-bold mb-0 text-center drop-shadow-lg">
              Marketing That Drives ROI®
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
