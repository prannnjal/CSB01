"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  return (
    <section id="about" className="bg-gradient-to-br from-purple-900 to-slate-900 py-16 lg:py-20 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-red-500 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-red-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 text-white relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Chalksnboard</h2>
          <p className="text-gray-300">Our story, mission, and values</p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="max-w-6xl mx-auto text-center space-y-6 lg:space-y-8">
          <p className="text-base lg:text-lg leading-relaxed">
            At Chalksnboard, we provide an external, objective perspective that opens your eyes to opportunities you may
            have never considered. With our experience working with companies across various industries and locations,
            we have a clear understanding of what strategies drive success—and which ones might be holding you back.
          </p>

          <p className="text-base lg:text-lg leading-relaxed">
            What sets us apart is our creative approach. We believe that success lies in doing things strategically, not
            just differently. By simplifying complex challenges and delivering marketing solutions that are efficient,
            pleasant, and results-driven, we ensure that our clients achieve measurable growth.
          </p>

          <p className="text-base lg:text-lg leading-relaxed">
            Let us lighten your load. Our team can step in to handle every aspect of your marketing, freeing you to
            focus on what you do best. While we take care of your marketing, you can concentrate on managing your
            business with peace of mind.
          </p>

          <div className="w-16 h-1 bg-white mx-auto mt-6 lg:mt-8"></div>
        </div>
      </div>
    </section>
  )
}
