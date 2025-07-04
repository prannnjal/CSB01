"use client"

import { Monitor } from "lucide-react"

export default function UIUXPage() {
  const designServices = [
    "User Research & Analysis",
    "Wireframing & Prototyping",
    "Visual Design",
    "Interaction Design",
    "Usability Testing",
    "Design Systems",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-rose-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Monitor className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold mb-6">UI/UX Design Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Create exceptional user experiences that delight customers and drive conversions
          </p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Design Project
          </button>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
