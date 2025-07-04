"use client"

import { useState } from "react"
import { Instagram, BookOpen, Megaphone, Radio, Target, Search, Zap } from "lucide-react"

export default function ComprehensiveServicesSection() {
  const [activeService, setActiveService] = useState(null)

  const handleServiceClick = (service) => {
    setActiveService(activeService === service ? null : service)
  }

  const openServicePage = (service) => {
    // In a real app, this would navigate to service pages
    alert(`Opening ${service} service page...`)
  }

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-center mb-12 lg:mb-16 leading-tight">
          Shaping The <span className="font-black">Future</span> Of Your Brand,{" "}
          <span className="font-black">Today</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          {/* Social Media Marketing */}
          <div
            className={`space-y-4 p-4 rounded-lg cursor-pointer transition-all ${activeService === "social" ? "bg-red-50 border-2 border-red-200" : "hover:bg-gray-50"}`}
            onClick={() => handleServiceClick("social")}
          >
            <div className="flex items-center space-x-2 text-red-500">
              <Instagram className="w-6 h-6" />
              <h3 className="text-lg font-bold">Social Media Marketing</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Social Media Marketing</li>
              <li>• Facebook Marketing</li>
              <li>• Influencer Marketing</li>
            </ul>
            {activeService === "social" && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  openServicePage("Social Media Marketing")
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Learn More
              </button>
            )}
          </div>

          {/* Content Marketing */}
          <div
            className={`space-y-4 p-4 rounded-lg cursor-pointer transition-all ${activeService === "content" ? "bg-red-50 border-2 border-red-200" : "hover:bg-gray-50"}`}
            onClick={() => handleServiceClick("content")}
          >
            <div className="flex items-center space-x-2 text-red-500">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-lg font-bold">Content Marketing</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Content Marketing</li>
              <li>• Social Media Management</li>
              <li>• Infographics</li>
            </ul>
            {activeService === "content" && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  openServicePage("Content Marketing")
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Learn More
              </button>
            )}
          </div>

          {/* Reputation Management */}
          <div
            className={`space-y-4 p-4 rounded-lg cursor-pointer transition-all ${activeService === "reputation" ? "bg-red-50 border-2 border-red-200" : "hover:bg-gray-50"}`}
            onClick={() => handleServiceClick("reputation")}
          >
            <div className="flex items-center space-x-2 text-red-500">
              <Megaphone className="w-6 h-6" />
              <h3 className="text-lg font-bold">Reputation Management</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Digital PR</li>
              <li>• Press Release</li>
              <li>• Online Reputation Management</li>
            </ul>
            {activeService === "reputation" && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  openServicePage("Reputation Management")
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Learn More
              </button>
            )}
          </div>

          {/* Radio */}
          <div
            className={`space-y-4 p-4 rounded-lg cursor-pointer transition-all ${activeService === "radio" ? "bg-red-50 border-2 border-red-200" : "hover:bg-gray-50"}`}
            onClick={() => handleServiceClick("radio")}
          >
            <div className="flex items-center space-x-2 text-red-500">
              <Radio className="w-6 h-6" />
              <h3 className="text-lg font-bold">RADIO</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Our team of experts dedicated to radio advertising is driven by the urge to create incredible scripts for
              the radio, but more...
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation()
                openServicePage("Radio Advertising")
              }}
              className="text-red-500 font-bold text-sm hover:underline"
            >
              READ MORE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Paid Ads */}
          <div
            className={`space-y-4 p-4 rounded-lg cursor-pointer transition-all ${activeService === "paid" ? "bg-red-50 border-2 border-red-200" : "hover:bg-gray-50"}`}
            onClick={() => handleServiceClick("paid")}
          >
            <div className="flex items-center space-x-2 text-red-500">
              <Target className="w-6 h-6" />
              <h3 className="text-lg font-bold">Paid Ads</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• PPC & Paid Ads</li>
              <li>• Google Ads</li>
            </ul>
            <p className="text-gray-600 text-sm">
              Our print advertisement ensures seductive ad campaigns with enchanting creative graphic illustrations that
              tell the best possible story about your brand.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation()
                openServicePage("Paid Advertising")
              }}
              className="text-red-500 font-bold text-sm hover:underline"
            >
              READ MORE
            </button>
          </div>

          {/* Organic Search */}
          <div
            className={`space-y-4 p-4 rounded-lg cursor-pointer transition-all ${activeService === "seo" ? "bg-red-50 border-2 border-red-200" : "hover:bg-gray-50"}`}
            onClick={() => handleServiceClick("seo")}
          >
            <div className="flex items-center space-x-2 text-red-500">
              <Search className="w-6 h-6" />
              <h3 className="text-lg font-bold">Organic Search</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• SEO Services</li>
              <li>• SEO Audit</li>
              <li>• Speed Optimization</li>
            </ul>
            <button
              onClick={(e) => {
                e.stopPropagation()
                openServicePage("SEO Services")
              }}
              className="text-red-500 font-bold text-sm hover:underline"
            >
              READ MORE
            </button>
          </div>

          {/* Integrated Marketing */}
          <div
            className={`space-y-4 p-4 rounded-lg cursor-pointer transition-all ${activeService === "integrated" ? "bg-red-50 border-2 border-red-200" : "hover:bg-gray-50"}`}
            onClick={() => handleServiceClick("integrated")}
          >
            <div className="flex items-center space-x-2 text-red-500">
              <Zap className="w-6 h-6" />
              <h3 className="text-lg font-bold">Integrated Marketing</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Outdoor Marketing</li>
            </ul>
            {activeService === "integrated" && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  openServicePage("Integrated Marketing")
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Learn More
              </button>
            )}
          </div>

          {/* Digital Strategy with Image */}
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-6 text-white relative overflow-hidden cursor-pointer hover:bg-gray-800 transition-colors">
              <div className="absolute right-4 top-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg opacity-20"></div>
              <h3 className="text-lg font-bold mb-4">Digital Strategy</h3>
              <p className="text-sm mb-4">
                We combine data-driven insights with creative excellence to deliver strategies that meet your brand
                awareness needs and lead generation and brand building.
              </p>
              <button
                onClick={() => openServicePage("Digital Strategy")}
                className="text-red-500 font-semibold text-sm hover:underline"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
