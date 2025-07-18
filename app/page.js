"use client"

import { useState } from "react"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import AIMarketingSection from "../components/AIMarketingSection"
import BrandFutureSection from "../components/BrandFutureSection"
import ServicesSection from "../components/ServicesSection"
import ComprehensiveServicesSection from "../components/ComprehensiveServicesSection"
import MediaServicesSection from "../components/MediaServicesSection"
import WorkflowSection from "../components/WorkflowSection"
import MagazineStatsSection from "../components/MagazineStatsSection"
import WhyChalksnboardSection from "../components/WhyChalksnboardSection"
import ServiceCardsSection from "../components/ServiceCardsSection"
import CTASection from "../components/CTASection"
import AdditionalServiceCardsSection from "../components/AdditionalServiceCardsSection"
import AboutSection from "../components/AboutSection"
import ResultsSection from "../components/ResultsSection"
import PortfolioSection from "../components/PortfolioSection"
import ReviewSection from "../components/ReviewSection"
import GlobalPartnersSection from "../components/GlobalPartnersSection"
import ClientLogosSection from "../components/ClientLogosSection"
import Footer from "../components/Footer"
import PageRouter from "../components/pages/PageRouter"
import ServiceRouter from "../components/services/ServiceRouter"
import VantaCloudsBackground from "../components/VantaCloudsBackground";

export default function ChalksnboardClone() {
  const [currentPage, setCurrentPage] = useState("home")
  const [currentService, setCurrentService] = useState(null)
  const [currentPageName, setCurrentPageName] = useState(null)

  const handleServiceNavigation = (serviceName) => {
    // Route "Free Consultation" to page router instead of service router
    if (serviceName === "Free Consultation") {
      window.location.href = "/plans-and-pacakages";
    } else {
      setCurrentService(serviceName)
      setCurrentPage("service")
    }
  }

  const handlePageNavigation = (pageName) => {
    setCurrentPageName(pageName)
    setCurrentPage("page")
  }

  const handleBackToHome = () => {
    setCurrentPage("home")
    setCurrentService(null)
    setCurrentPageName(null)
  }

  if (currentPage === "service") {
    return <ServiceRouter serviceName={currentService} onBack={handleBackToHome} />
  }

  if (currentPage === "page") {
    return <PageRouter pageName={currentPageName} onBack={handleBackToHome} />
  }

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Header onServiceClick={handleServiceNavigation} onPageClick={handlePageNavigation} />
      <HeroSection />
      <AIMarketingSection />
      
      <ServicesSection />
      <ComprehensiveServicesSection />
      <MediaServicesSection />
      <WorkflowSection />
      
      
      <ServiceCardsSection />
      <CTASection />
      <AdditionalServiceCardsSection />
      <AboutSection />
      
      <VantaCloudsBackground>
        <PortfolioSection />
        <WhyChalksnboardSection />
      </VantaCloudsBackground>
      <ReviewSection />
      
      <ClientLogosSection />
      
    </div>
  )
}
