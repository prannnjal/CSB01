"use client"

import CareerPage from "./CareerPage"
import FreeConsultationPage from "./FreeConsultationPage"
import AboutUsPage from "./AboutUsPage"
import OurTeamPage from "./OurTeamPage"
import FAQPage from "./FAQPage"
import OurGalleryPage from "./OurGalleryPage"
import TestimonialsPage from "./TestimonialsPage"

export default function PageRouter({ pageName, onBack }) {
  const renderPage = () => {
    switch (pageName) {
      case "Career":
        return <CareerPage />
      case "Free Consultation":
        return <FreeConsultationPage />
      case "About Us":
        return <AboutUsPage />
      case "Our Team":
        return <OurTeamPage />
      case "FAQ":
        return <FAQPage />
      case "Our Gallery":
        return <OurGalleryPage />
      case "Testimonials":
        return <TestimonialsPage />
      default:
        return (
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">{pageName}</h1>
              <p className="text-gray-600 mb-8">Page coming soon...</p>
              <button
                onClick={onBack}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <div>
      {/* Back Button */}
      <div className="fixed top-20 left-6 z-50">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
        >
          <span className="text-lg">←</span>
          <span>Back to Home</span>
        </button>
      </div>
      {renderPage()}
    </div>
  )
}
