"use client"

import { Smartphone } from "lucide-react"

export default function MobileAppPage() {
  const appTypes = [
    { name: "Native iOS Apps", icon: "🍎", description: "Swift & Objective-C development" },
    { name: "Native Android Apps", icon: "🤖", description: "Kotlin & Java development" },
    { name: "Cross-Platform Apps", icon: "🔄", description: "React Native & Flutter" },
    { name: "Progressive Web Apps", icon: "🌐", description: "Web-based mobile experience" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Smartphone className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Mobile App Development</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Build powerful mobile applications that engage users and drive business growth
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>

      {/* App Types */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">App Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{type.name}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
