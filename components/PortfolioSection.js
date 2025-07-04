"use client"

export default function PortfolioSection() {
  const openCaseStudy = (project) => {
    alert(`Opening ${project} case study...`)
  }

  return (
    <section id="portfolio" className="bg-gray-100 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-gray-600">Showcasing our best work and client success stories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Kadji Care */}
          <div
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => openCaseStudy("Kadji Care")}
          >
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-100 rounded-lg p-4 aspect-square flex items-center justify-center hover:bg-green-200 transition-colors">
                <span className="text-green-600 font-semibold text-xs text-center">
                  World Elder Abuse Awareness Day
                </span>
              </div>
              <div className="bg-orange-100 rounded-lg p-4 aspect-square flex items-center justify-center hover:bg-orange-200 transition-colors">
                <span className="text-orange-600 font-semibold text-xs text-center">Gujarati Content</span>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 aspect-square flex items-center justify-center hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-semibold text-xs text-center">Celebrating</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-gray-600 font-semibold text-xs text-center">Pravna Jane</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-red-600 mb-2">Kadji Care</h3>
            <p className="text-gray-700 font-semibold">Strategic Ad Campaigns:</p>
            <p className="text-gray-600">Driving Brand Traffic and Engagement</p>
          </div>

          {/* TCI Cold Chain Solutions */}
          <div
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => openCaseStudy("TCI Cold Chain Solutions")}
          >
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-100 rounded-lg p-4 aspect-square flex items-center justify-center hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-semibold text-xs text-center">COLD CHAIN LOGISTIC SOLUTIONS</span>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 aspect-square flex items-center justify-center hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-semibold text-xs text-center">THEFT PROTECTION</span>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 aspect-square flex items-center justify-center hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-semibold text-xs text-center">STRATEGIC ROUTE PLANNING</span>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 aspect-square flex items-center justify-center hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-semibold text-xs text-center">LIVE TRACKING</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-red-600 mb-2">TCI Cold Chain Solutions</h3>
            <p className="text-gray-700 font-semibold">Innovative Creative Designs:</p>
            <p className="text-gray-600">Elevating Brand Presence with Technology</p>
          </div>

          {/* Drive Revenue */}
          <div
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => openCaseStudy("Revenue Growth Campaign")}
          >
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="bg-teal-500 rounded-lg aspect-square hover:bg-teal-600 transition-colors cursor-pointer"></div>
              <div className="bg-blue-400 rounded-lg aspect-square hover:bg-blue-500 transition-colors cursor-pointer"></div>
              <div className="bg-teal-600 rounded-lg aspect-square hover:bg-teal-700 transition-colors cursor-pointer"></div>
              <div className="bg-green-400 rounded-lg aspect-square hover:bg-green-500 transition-colors cursor-pointer"></div>
              <div className="bg-blue-800 rounded-lg aspect-square hover:bg-blue-900 transition-colors cursor-pointer"></div>
              <div className="bg-teal-500 rounded-lg aspect-square hover:bg-teal-600 transition-colors cursor-pointer"></div>
              <div className="bg-green-300 rounded-lg aspect-square hover:bg-green-400 transition-colors cursor-pointer"></div>
              <div className="bg-blue-600 rounded-lg aspect-square hover:bg-blue-700 transition-colors cursor-pointer"></div>
              <div className="bg-gray-300 rounded-lg aspect-square hover:bg-gray-400 transition-colors cursor-pointer"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Drive Revenue with Targeted</h3>
            <p className="text-gray-700 font-semibold">Paid Advertising</p>
          </div>
        </div>
      </div>
    </section>
  )
}
