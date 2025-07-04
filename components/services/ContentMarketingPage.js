"use client"

import { PenTool } from "lucide-react"

export default function ContentMarketingPage() {
  const contentTypes = [
    { name: "Blog Posts", icon: "📝", description: "SEO-optimized articles" },
    { name: "Social Media", icon: "📱", description: "Engaging social content" },
    { name: "Video Content", icon: "🎥", description: "Professional video production" },
    { name: "Infographics", icon: "📊", description: "Visual data storytelling" },
    { name: "E-books", icon: "📚", description: "Lead generation resources" },
    { name: "Case Studies", icon: "📋", description: "Success story documentation" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <PenTool className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Content Marketing Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Create compelling content that engages your audience and drives business growth
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Content Strategy
          </button>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Content We Create</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
