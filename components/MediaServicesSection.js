"use client"

import { Facebook, Search, Youtube } from "lucide-react"

export default function MediaServicesSection() {
  const openServiceDetails = (service) => {
    // In a real app, this would navigate to detailed service pages
    alert(`Opening ${service} service details...`)
  }

  return (
    <section className="bg-gray-100 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Meta (Facebook/Instagram) */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Facebook className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">META</h3>
            <p className="text-gray-600 mb-6 text-sm lg:text-base">
              Reach your audience on Facebook and Instagram with targeted ads, creative campaigns, and lead generation solutions powered by Meta's advanced platform.
            </p>
            <button
              onClick={() => openServiceDetails("Meta Advertising")}
              className="text-red-500 font-bold hover:underline hover:text-red-600 transition-colors"
            >
              READ MORE
            </button>
          </div>

          {/* Google */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">GOOGLE</h3>
            <p className="text-gray-600 mb-6 text-sm lg:text-base">
              Leverage Google Search, Display, and GMB to maximize your brand's visibility and drive high-intent traffic with data-driven ad strategies.
            </p>
            <button
              onClick={() => openServiceDetails("Google Advertising")}
              className="text-red-500 font-bold hover:underline hover:text-red-600 transition-colors"
            >
              READ MORE
            </button>
          </div>

          {/* YouTube */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Youtube className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">YOUTUBE</h3>
            <p className="text-gray-600 mb-6 text-sm lg:text-base">
              Engage your audience with impactful video ads on YouTube, the world's largest video platform, and boost your brand's reach and awareness.
            </p>
            <button
              onClick={() => openServiceDetails("YouTube Advertising")}
              className="text-red-500 font-bold hover:underline hover:text-red-600 transition-colors"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
