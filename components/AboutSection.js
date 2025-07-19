"use client"

import { useState } from "react"
import Tilt from 'react-parallax-tilt';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Objective Perspective",
    text: `At Chalksnboard, we provide an external, objective perspective that opens your eyes to opportunities you may have never considered. With our experience working with companies across various industries and locations, we have a clear understanding of what strategies drive success—and which ones might be holding you back.`,
  },
  {
    title: "Creative Approach",
    text: `What sets us apart is our creative approach. We believe that success lies in doing things strategically, not just differently. By simplifying complex challenges and delivering marketing solutions that are efficient, pleasant, and results-driven, we ensure that our clients achieve measurable growth.`,
  },
  {
    title: "Let Us Lighten Your Load",
    text: `Let us lighten your load. Our team can step in to handle every aspect of your marketing, freeing you to focus on what you do best. While we take care of your marketing, you can concentrate on managing your business with peace of mind.`,
  },
];

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <section id="about" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-blue-900 to-slate-900 opacity-80" />
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-red-500 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-red-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 text-white relative z-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Chalksnboard</h2>
          <p className="text-gray-300">Our story, mission, and values</p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Card Slider with Parallax Tilt and Swipe */}
          <div className="relative w-full" {...swipeHandlers}>
            <button
              aria-label="Previous"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 animate-wiggle-on-hover"
              tabIndex={0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              aria-label="Next"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 animate-wiggle-on-hover"
              tabIndex={0}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`min-w-full px-2 md:px-8 py-8 flex flex-col items-center transition-all duration-500 ${currentSlide === idx ? 'scale-105' : 'scale-95'} `}
                  >
                    <Tilt
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      glareEnable={true}
                      glareMaxOpacity={0.25}
                      glareColor="#fff"
                      glarePosition="all"
                      className="w-full"
                    >
                      <div className="bg-white/30 backdrop-blur-xl border-2 border-gradient-to-r from-red-400 via-purple-400 to-blue-400 rounded-2xl shadow-2xl p-6 md:p-10 text-center max-w-xl mx-auto transition-all duration-500 hover:shadow-red-400/30 relative overflow-hidden">
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-400 via-purple-400 to-blue-400 opacity-20 rounded-full blur-2xl animate-pulse" />
                        <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white/90 drop-shadow-lg">{slide.title}</h3>
                        <p className="text-base lg:text-lg leading-relaxed text-white/80">{slide.text}</p>
                      </div>
                    </Tilt>
                  </div>
                ))}
              </div>
            </div>
            {/* Progress Dots with Bounce Animation */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-200 focus:outline-none
                    ${currentSlide === idx ? 'bg-red-500 border-red-500 scale-125 animate-bounce-dot' : 'bg-white/30 hover:bg-red-400'}`}
                />
              ))}
            </div>
          </div>
          <div className="w-16 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </div>
      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-10deg); }
          40% { transform: rotate(10deg); }
          60% { transform: rotate(-6deg); }
          80% { transform: rotate(6deg); }
        }
        .animate-wiggle-on-hover:hover { animation: wiggle 0.5s; }
        @keyframes bounce-dot {
          0%, 100% { transform: scale(1.25); }
          50% { transform: scale(1.5); }
        }
        .animate-bounce-dot { animation: bounce-dot 0.5s; }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
