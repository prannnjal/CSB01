"use client"

import { Monitor, Film, BookOpen } from "lucide-react"

export default function MediaServicesSection() {
  const openServiceDetails = (service) => {
    // In a real app, this would navigate to detailed service pages
    alert(`Opening ${service} service details...`)
  }

  return (
    <section className="bg-gray-100 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Television */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">TELEVISION</h3>
            <p className="text-gray-600 mb-6 text-sm lg:text-base">
              We deliver TVC scripts from the box and even release them for our customers, one of the most powerful
              mediums for brand recall and sales.
            </p>
            <button
              onClick={() => openServiceDetails("Television Advertising")}
              className="text-red-500 font-bold hover:underline hover:text-red-600 transition-colors"
            >
              READ MORE
            </button>
          </div>

          {/* Cinema */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Film className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">CINEMA</h3>
            <p className="text-gray-600 mb-6 text-sm lg:text-base">
              Our advertising has a vast experience with our expert team of professional videographers capturing lovely
              moments, TV commercials, corporate movies, private movies and tiny events / weddings etc.
            </p>
            <button
              onClick={() => openServiceDetails("Cinema Advertising")}
              className="text-red-500 font-bold hover:underline hover:text-red-600 transition-colors"
            >
              READ MORE
            </button>
          </div>

          {/* Magazine */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">MAGAZINE</h3>
            <p className="text-gray-600 mb-6 text-sm lg:text-base">
              Our distinctive platform incorporates a PAN India Partner Network, years of experience purchasing media
              and historic ad pricing information to guarantee the highest guaranteed quotes for your ad demands.
            </p>
            <button
              onClick={() => openServiceDetails("Magazine Advertising")}
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
