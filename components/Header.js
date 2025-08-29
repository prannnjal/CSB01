"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
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

const services = [
  {
    category: "Digital Marketing",
    items: [
      {
        name: "Content Marketing",
        description: "Drive brand awareness and loyalty through high-quality, relevant content.",
        icon: PenTool,
      },
      {
        name: "Email Marketing",
        description: "Personalized email campaigns to nurture leads and increase conversions.",
        icon: Mail,
      },
      {
        name: "PPC & Paid Ads",
        description: "Maximize ROI with targeted pay-per-click advertising campaigns.",
        icon: Target,
      },
      {
        name: "SEO (Search Engine Optimization)",
        description: "Improve your website's visibility and attract more organic traffic.",
        icon: Search,
      },
    ],
  },
  {
    category: "Development & Design",
    items: [
      {
        name: "Mobile App Development",
        description: "Build robust, scalable, and user-friendly mobile applications.",
        icon: Smartphone,
      },
      {
        name: "UI & UX",
        description: "Enhance user satisfaction with intuitive, visually appealing design.",
        icon: Monitor,
      },
    ],
  },
  {
    category: "Performance & Analytics",
    items: [
      {
        name: "Analytics & Reporting",
        description: "Track, measure, and optimize your marketing performance.",
        icon: BarChart3,
      },
      {
        name: "Marketing Automation",
        description: "Automate repetitive marketing tasks and workflows.",
        icon: Settings,
      },
    ],
  },
];

export default function Header({ onServiceClick, onPageClick, hideOnTop }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const handleServiceClick = (serviceName) => {
    if (onServiceClick) {
      onServiceClick(serviceName)
    }
    setMobileMenuOpen(false)
  }

  const handlePageClick = (pageName) => {
    if (onPageClick) {
      onPageClick(pageName)
    }
    setMobileMenuOpen(false)
  }

  const handlePortfolioClick = () => {
    scrollToSection("portfolio")
    setMobileMenuOpen(false)
  }

 

  const aboutItems = [
    { name: "About Us", description: "Our story and mission" },
    { name: "Our Team", description: "Meet our experts" },
    { name: "FAQ", description: "Frequently asked questions" },
    { name: "Our Gallery", description: "Visual portfolio" },
    { name: "Testimonials", description: "Client success stories" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${hideOnTop
          ? (scrolled
              ? 'opacity-100 translate-y-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-md text-gray-900 pointer-events-auto'
              : 'opacity-0 -translate-y-8 pointer-events-none')
          : 'opacity-100 translate-y-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-md text-gray-900 pointer-events-auto'}
      `}
      style={{ willChange: 'opacity, transform' }}
    >

      <nav className="flex items-center justify-between px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => router.push("/")}>
         
          <div className="block">
            <div className="text-gray-900 font-bold text-xl tracking-tight">
              CHALKS<span className="text-red-500">N</span>BOARD
            </div>
           
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          <button
            onClick={() => router.push("/")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200
              ${pathname === "/" ? "text-red-500 bg-red-50" : "text-gray-700 hover:text-red-500 hover:bg-gray-50"}`}
          >
            Home
          </button>

          {/* Services Button */}
          <button
            onClick={() => router.push('/services')}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
              ${pathname.startsWith("/services") ? "text-red-500 bg-red-50" : "text-gray-700 hover:text-red-500 hover:bg-gray-50"}`}
          >
            Services
          </button>

          {/* About Button */}
          <button
            onClick={() => router.push('/about')}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
              ${pathname.startsWith("/about") ? "text-red-500 bg-red-50" : "text-gray-700 hover:text-red-500 hover:bg-gray-50"}`}
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("portfolio")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
              ${pathname === "#portfolio" ? "text-red-500 bg-red-50" : "text-gray-700 hover:text-red-500 hover:bg-gray-50"}`}
          >
            Portfolio
          </button>

          <button
            onClick={() => router.push('/career')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
              ${pathname.startsWith("/career") ? "text-red-500 bg-red-50" : "text-gray-700 hover:text-red-500 hover:bg-gray-50"}`}
          >
            Career
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
              ${pathname === "#contact" ? "text-red-500 bg-red-50" : "text-gray-700 hover:text-red-500 hover:bg-gray-50"}`}
          >
            Contact
          </button>

          <button
            onClick={() => router.push('/privacy-policy')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
              ${pathname.startsWith("/privacy-policy") ? "text-red-500 bg-red-50" : "text-gray-700 hover:text-red-500 hover:bg-gray-50"}`}
          >
            Privacy Policy
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
                href="tel:+918860878346"
                className="text-sm font-semibold text-gray-900 hover:text-red-500 transition-colors"
              >
                +918860878346
              </a>
              <div className="text-xs text-gray-500">Call us now</div>
            </div>
          </div>

          <button
            onClick={() => handleServiceClick("Free Consultation")}
            className="hidden md:block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Plans and Packages
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

              {/* Services Button */}
              <button
                onClick={() => router.push('/services')}
                className="block w-full text-left py-2 px-6 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500 rounded-lg transition-colors"
              >
                Services
              </button>
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
              onClick={() => router.push('/career')}
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

            <button
              onClick={() => router.push('/privacy-policy')}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-red-500 rounded-lg transition-colors"
            >
              Privacy Policy
            </button>

            <div className="pt-4 border-t border-gray-100 mt-4">
              <div className="flex items-center space-x-3 px-4 py-3">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <a href="tel:+918860878346" className="text-sm font-semibold text-gray-900">
                    +91 8860878346
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
