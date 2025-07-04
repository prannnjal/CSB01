"use client"
import EmailMarketingPage from "./EmailMarketingPage"
import PPCPaidAdsPage from "./PPCPaidAdsPage"
import ContentMarketingPage from "./ContentMarketingPage"
import SEOPage from "./SEOPage"
import MobileAppPage from "./MobileAppPage"
import UIUXPage from "./UIUXPage"

export default function ServiceRouter({ serviceName, onBack }) {
  const renderService = () => {
    switch (serviceName) {
      case "Email Marketing":
        return <EmailMarketingPage />
      case "PPC & Paid Ads":
        return <PPCPaidAdsPage />
      case "Content Marketing":
        return <ContentMarketingPage />
      case "SEO (Search Engine Marketing)":
        return <SEOPage />
      case "Mobile App Development":
        return <MobileAppPage />
      case "UI & UX":
        return <UIUXPage />
      case "Free Consultation":
        // Import and use the FreeConsultationPage component
        const FreeConsultationPage = require("../pages/FreeConsultationPage").default
        return <FreeConsultationPage />
      default:
        return (
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">{serviceName}</h1>
              <p className="text-gray-600 mb-8">Service page coming soon...</p>
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
      {renderService()}
    </div>
  )
}
