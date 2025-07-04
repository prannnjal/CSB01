"use client"

import { Target, Users, Monitor } from "lucide-react"

export default function ServiceCardsSection() {
  const openServicePage = (service, url) => {
    if (url) {
      window.open(url, "_blank")
    } else {
      alert(`Opening ${service} service page...`)
    }
  }

  return (
    <section className="bg-gray-900 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Paid Ads */}
          <div className="bg-black rounded-2xl p-6 lg:p-8 text-center hover:transform hover:scale-105 transition-transform">
            <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Target className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Paid Ads</h3>
            <p className="text-gray-300 mb-6 text-sm lg:text-base">Maximize Your Ad Spend With Confidence</p>
            <button
              onClick={() => openServicePage("Paid Ads", "https://paidads.chalksnboard.in")}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Know more
            </button>
            <div className="mt-4 text-xs text-gray-500">https://paidads.chalksnboard.in</div>
          </div>

          {/* Retain */}
          <div className="bg-black rounded-2xl p-6 lg:p-8 text-center hover:transform hover:scale-105 transition-transform">
            <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Users className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Retain</h3>
            <p className="text-gray-300 mb-6 text-sm lg:text-base">Is your Return on Investment at Stake?</p>
            <button
              onClick={() => openServicePage("Customer Retention")}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Know more
            </button>
          </div>

          {/* Website Designing */}
          <div className="bg-black rounded-2xl p-6 lg:p-8 text-center hover:transform hover:scale-105 transition-transform">
            <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Monitor className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Website Designing</h3>
            <p className="text-gray-300 mb-6 text-sm lg:text-base">Make Your Website The Talk Of The Internet</p>
            <button
              onClick={() => openServicePage("Website Design")}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Know more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
