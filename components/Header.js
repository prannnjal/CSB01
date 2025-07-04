"use client"

import { useState } from "react"
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Mail,
  Target,
  PenTool,
  Search,
  Smartphone,
  Users,
  Briefcase,
  MessageCircle,
  TrendingUp,
  Monitor,
  Settings,
  BarChart3,
} from "lucide-react"

export default function Header({ onServiceClick, onPageClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
    setServicesDropdown(false)
    setAboutDropdown(false)
  }

  const handleServiceClick = (serviceName) => {
    if (onServiceClick) {
      onServiceClick(serviceName)
    }
    setServicesDropdown(false)
    setMobileMenuOpen(false)
  }

  const handlePageClick = (pageName) => {
    if (onPageClick) {
      onPageClick(pageName)
    }
    setAboutDropdown(false)
    setMobileMenuOpen(false)
  }

  const handlePortfolioClick = () => {
    scrollToSection("portfolio")
    setMobileMenuOpen(false)
  }

  const services = [
    {
      category: "Digital Marketing",
      items: [
        { name: "Email Marketing", icon: Mail, description: "Targeted email campaigns" },
        { name: "PPC & Paid Ads", icon: Target, description: "Pay-per-click advertising" },
        { name: "Content Marketing", icon: PenTool, description: "Engaging content strategies" },
        { name: "SEO (Search Engine Marketing)", icon: Search, description: "Search optimization" },
        { name: "Digital Marketing", icon: TrendingUp, description: "Complete digital solutions" },
      ],
    },
    {
      category: "Development & Design",
      items: [
        { name: "Mobile App Development", icon: Smartphone, description: "iOS & Android apps" },
        { name: "UI & UX", icon: Monitor, description: "User experience design" },
        { name: "CRM Integration", icon: Settings, description: "Customer management systems" },
      ],
    },
    {
      category: "Performance & Analytics",
      items: [
        { name: "Performance Marketing", icon: BarChart3, description: "Data-driven campaigns" },
        { name: "Lead Generation", icon: Users, description: "Quality lead acquisition" },
        { name: "Online Advertising", icon: Target, description: "SEM/PPC, Display & Remarketing" },
      ],
    },
  ]

  const aboutItems = [
    { name: "About Us", description: "Our story and mission" },
    { name: "Our Team", description: "Meet our experts" },
    { name: "FAQ", description: "Frequently asked questions" },
    { name: "Our Gallery", description: "Visual portfolio" },
    { name: "Testimonials", description: "Client success stories" },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-md text-gray-900 sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <nav className="flex items-center justify-between px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection("hero")}>
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 transform rotate-45 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
              <div className="w-5 h-5 bg-white transform -rotate-45 rounded-sm"></div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="text-gray-900 font-bold text-xl tracking-tight">
              CHALKS<span className="text-red-500">N</span>BOARD
            </div>
            <div className="text-xs text-gray-500 font-medium tracking-wider">DIGITAL AGENCY</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          <button
            onClick={() => scrollToSection("hero")}
            className="px-4 py-2 text-sm font-semibold text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-all duration-200"
          >
            Home
          </button>

          {/* Services Mega Menu */}
          <div className="relative group">
            <button
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Services
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            {servicesDropdown && (
              <div
                className="absolute top-full left-0 mt-1 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <div className="grid grid-cols-3 gap-6">
                  {services.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h3 className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                        {category.category}
                      </h3>
                      <div className="space-y-1">
                        {category.items.map((service, serviceIndex) => (
                          <button
                            key={serviceIndex}
                            onClick={() => handleServiceClick(service.name)}
                            className="flex items-start space-x-3 w-full text-left p-3 rounded-lg hover:bg-red-50 hover:text-red-500 transition-all duration-200 group"
                          >
                            <service.icon className="w-5 h-5 text-gray-400 group-hover:text-red-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-sm">{service.name}</div>
                              <div className="text-xs text-gray-500 group-hover:text-red-400">
                                {service.description}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Special Services */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleServiceClick("Free Consultation")}
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg hover:from-green-100 hover:to-blue-100 transition-all duration-200 group"
                    >
                      <MessageCircle className="w-6 h-6 text-green-500" />
                      <div className="text-left">
                        <div className="font-semibold text-green-700">Free Consultation</div>
                        <div className="text-xs text-green-600">Get expert advice</div>
                      </div>
                    </button>
                    <button
                      onClick={() => scrollToSection("portfolio")}
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-all duration-200 group"
                    >
                      <Briefcase className="w-6 h-6 text-purple-500" />
                      <div className="text-left">
                        <div className="font-semibold text-purple-700">Our Clients</div>
                        <div className="text-xs text-purple-600">Success stories</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div className="relative group">
            <button
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              About
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            {aboutDropdown && (
              <div
                className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                {aboutItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageClick(item.name)}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("portfolio")}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-lg transition-all duration-200"
          >
            Portfolio
          </button>

          <button
            onClick={() => handlePageClick("Career")}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-lg transition-all duration-200"
          >
            Career
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-lg transition-all duration-200"
          >
            Contact
          </button>
        </div>

        {/* Contact & CTA */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-gray-600">
            <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <a
                href="tel:+917654484444"
                className="text-sm font-semibold text-gray-900 hover:text-red-500 transition-colors"
              >
                +91 76544 84444
              </a>
              <div className="text-xs text-gray-500">Call us now</div>
            </div>
          </div>

          <button
            onClick={() => handleServiceClick("Free Consultation")}
            className="hidden md:block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Free Consultation
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-1 max-w-7xl mx-auto">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-3 px-4 text-red-500 font-semibold bg-red-50 rounded-lg"
            >
              Home
            </button>

            {/* Mobile Services */}
            <div className="space-y-1">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Services</div>

              {/* Digital Marketing Services */}
              <div className="space-y-1">
                <div className="px-4 py-1 text-xs font-medium text-gray-600">Digital Marketing</div>
                {services[0].items.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick(service.name)}
                    className="block w-full text-left py-2 px-6 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500 rounded-lg transition-colors"
                  >
                    {service.name}
                  </button>
                ))}
              </div>

              {/* Development & Design */}
              <div className="space-y-1 pt-2">
                <div className="px-4 py-1 text-xs font-medium text-gray-600">Development & Design</div>
                {services[1].items.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick(service.name)}
                    className="block w-full text-left py-2 px-6 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500 rounded-lg transition-colors"
                  >
                    {service.name}
                  </button>
                ))}
              </div>

              {/* Performance & Analytics */}
              <div className="space-y-1 pt-2">
                <div className="px-4 py-1 text-xs font-medium text-gray-600">Performance & Analytics</div>
                {services[2].items.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick(service.name)}
                    className="block w-full text-left py-2 px-6 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500 rounded-lg transition-colors"
                  >
                    {service.name}
                  </button>
                ))}
              </div>

              {/* Special Services */}
              <div className="space-y-1 pt-2">
                <button
                  onClick={() => handleServiceClick("Free Consultation")}
                  className="block w-full text-left py-3 px-4 text-green-600 font-medium bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                >
                  🆓 Free Consultation
                </button>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-1 pt-2">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">About</div>
              {aboutItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(item.name)}
                  className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-red-500 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              onClick={handlePortfolioClick}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-red-500 rounded-lg transition-colors"
            >
              Portfolio
            </button>

            <button
              onClick={() => handlePageClick("Career")}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-red-500 rounded-lg transition-colors"
            >
              Career
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-red-500 rounded-lg transition-colors"
            >
              Contact Us
            </button>

            <div className="pt-4 border-t border-gray-100 mt-4">
              <div className="flex items-center space-x-3 px-4 py-3">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <a href="tel:+917654484444" className="text-sm font-semibold text-gray-900">
                    +91 76544 84444
                  </a>
                  <div className="text-xs text-gray-500">Call us now</div>
                </div>
              </div>

              <button
                onClick={() => handleServiceClick("Free Consultation")}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg font-semibold text-sm hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg mx-4 mb-2"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
