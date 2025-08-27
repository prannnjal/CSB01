"use client"

import { useRouter } from "next/navigation"
import { Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  const router = useRouter()
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openSocialMedia = (platform) => {
    const urls = {
      facebook: "https://facebook.com/chalksnboard",
      instagram: "https://instagram.com/chalksnboard",
      youtube: "https://youtube.com/chalksnboard",
      twitter: "https://twitter.com/chalksnboard",
    }
    window.open(urls[platform], "_blank")
  }

  const openPage = (page) => {
    if (page === "Privacy Policy") {
      router.push("/privacy-policy")
    } else if (page === "Terms of Service") {
      router.push("/privacy-policy")
    } else {
      alert(`Opening ${page} page...`)
    }
  }

  return (
    <>
      {/* Floating WhatsApp Chat Icon (global) */}
      <a
        href="https://wa.me/9211580208"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-colors duration-200"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
      <footer id="contact" className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => scrollToSection("hero")}>
                
                 
               
                <div>
                  <div className="text-white font-bold text-xl tracking-tight">
                    CHALKS<span className="text-red-500">N</span>BOARD
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Digital Marketing Agency with a proven track record since 2020</p>
              <div className="flex space-x-4 mt-4">
                <Facebook
                  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                  onClick={() => openSocialMedia("facebook")}
                />
                <Instagram
                  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                  onClick={() => openSocialMedia("instagram")}
                />
                <Youtube
                  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                  onClick={() => openSocialMedia("youtube")}
                />
                <Twitter
                  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                  onClick={() => openSocialMedia("twitter")}
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("marketing")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    Digital Marketing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPage("Social Media Marketing")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    Social Media Marketing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPage("SEO Services")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    SEO Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPage("PPC & Paid Ads")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    PPC & Paid Ads
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPage("Website Design")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    Website Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPage("Content Marketing")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    Content Marketing
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPage("Our Team")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    Our Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPage("Careers")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPage("Blog")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openPage("Case Studies")}
                    className="hover:text-white cursor-pointer transition-colors text-left"
                  >
                    Case Studies
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+918860878346" className="hover:text-white transition-colors">
                    +918860878346
                  </a>
                </div>
                <p>
                  <a href="mailto:info@chalksnboard.in" className="hover:text-white transition-colors">
                    info@chalksnboard.in
                  </a>
                </p>
               
              </div>
              <button
                onClick={() => scrollToSection("hero")}
                className="bg-red-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-red-700 transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 Chalksnboard. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => openPage("Privacy Policy")} className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => openPage("Terms of Service")} className="hover:text-white transition-colors">
                Terms of Service
              </button>
              <button onClick={() => openPage("Cookie Policy")} className="hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
