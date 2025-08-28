"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap, Brain, ArrowUp } from "lucide-react"

export default function AIBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hello! I'm your AI assistant powered by Chalksnboard. How can I help you today?",
      timestamp: new Date()
    }
  ])
  const [conversationStep, setConversationStep] = useState(0)
  const [userInfo, setUserInfo] = useState({
    name: "",
    organization: "",
    phone: ""
  })
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Comprehensive knowledge base
  const knowledgeBase = {
    company: {
      name: "Chalksnboard",
      founded: "2020",
      experience: "5+ years",
      projects: "100+",
      clients: "100+",
      countries: "India",
      description: "A marketing agency combining cutting-edge technology with human creativity. We specialize in digital marketing solutions for businesses of all sizes.",
      mission: "To help businesses grow through strategic, data-driven marketing solutions",
      values: ["Ethical Practices", "Results-Driven", "Innovation", "Client-Centric"],
      team: {
        ceo: "Nikhil Sharma - Founder & CEO with 5+ years experience",
        cmo: "Priya Agarwal - Chief Marketing Officer, AI marketing expert",
        cto: "Rahul Gupta - Chief Technology Officer, AI & automation specialist"
      }
    },
    services: {
      "SEO (Search Engine Optimization)": {
        description: "Improve your website's visibility on search engines and attract more organic traffic. For schools, this means parents searching for 'best schools near me' or 'top 10 schools' will find your school first in Google search results.",
        features: ["Keyword Research & Analysis", "On-Page Optimization", "Technical SEO Audit", "Link Building", "Local SEO", "Content Optimization", "Site Speed Optimization", "Mobile SEO", "School-specific Keywords", "Admission-focused SEO"],
        pricing: "Starting from ₹25,000/month",
        schoolBenefits: "How SEO of your School can help in Admissions? Imagine parents searching schools nearby get your school's information in 1st Place in Search like Google, etc. Our SEO Services help you create a Strong Digital Search Engine Presence by using high search key words like 'Best School near me' or 'Top 10 Schools' etc. Our Paid Listing team use keywords to Rank your School and get strong SEO Presence."
      },
      "PPC & Paid Ads": {
        description: "Maximize ROI with targeted pay-per-click advertising campaigns",
        features: ["Google Ads", "Facebook & Instagram Ads", "Campaign Setup", "Audience Targeting", "Performance Tracking", "Conversion Optimization"],
        pricing: "Starting from ₹35,000/month"
      },
      "Content Marketing": {
        description: "Drive brand awareness and customer loyalty through high-quality, relevant content",
        features: ["Content Strategy", "Blog & Article Writing", "Infographics", "Video Content", "Social Media Content", "Content Distribution"],
        pricing: "Starting from ₹20,000/month"
      },
      "Email Marketing": {
        description: "Reach your audience directly with personalized email campaigns",
        features: ["Campaign Strategy", "Personalized Emails", "Automation", "A/B Testing", "Analytics & Reporting", "List Management"],
        pricing: "Starting from ₹15,000/month"
      },
      "Social Media Management": {
        description: "360-degree social media management solutions for building strong digital presence",
        features: ["Content Calendar", "Post Designing", "Captions & Hashtags", "Performance Tracking", "Community Management"],
        pricing: "Starting from ₹30,000/month"
      },
      "Website Development": {
        description: "Fast, secure, and scalable websites tailored to your business needs",
        features: ["Responsive Design", "SEO Ready", "Landing Pages", "Lead Forms", "Content Management System", "Custom Integrations"],
        pricing: "Starting from ₹50,000"
      },
      "Mobile App Development": {
        description: "Build robust, scalable, and user-friendly mobile applications",
        features: ["iOS & Android Apps", "Cross-Platform Solutions", "App Store Deployment", "UI/UX for Mobile", "Performance Optimization"],
        pricing: "Starting from ₹2,00,000"
      },
      "UI/UX Design": {
        description: "Enhance user satisfaction with intuitive, visually appealing design",
        features: ["User Research & Analysis", "Wireframing & Prototyping", "Visual Design", "Interaction Design", "Usability Testing"],
        pricing: "Starting from ₹40,000"
      },
      "Brand Films": {
        description: "Compelling brand films that highlight unique strengths and create lasting impact",
        features: ["Video shoot", "Professional Voice Over", "Video Editing", "Content for SM ads"],
        pricing: "₹1,92,000 (3 videos: 2Min30Sec, 1Min30Sec, 50Sec)"
      },
      "Tele Calling & Counselling": {
        description: "Professional tele-calling and counselling services for lead management",
        features: ["Lead Follow-up", "Counselling Script", "CRM Update", "Admission Assistance"],
        pricing: "₹15,000/month"
      },
      "Google My Business": {
        description: "Complete Google My Business optimization and management",
        features: ["Profile Setup", "Review Management", "Weekly Posts", "Local SEO Optimization"],
        pricing: "₹20,000"
      }
    },
    packages: {
      "Master Plan for Admission": {
        cost: "₹2,50,000",
        features: ["Facebook + Instagram + GMB Daily 1 Post & Weekly 2 Reels", "Website SEO (On Page / Off Page)", "GMB SEO", "Meta + Google Lead Generation", "Lead Magnet Management"]
      },
      "Ultimate Admission Plan": {
        cost: "₹3,10,000",
        features: ["Dedicated Tele Counsellor", "Dedicated Admission Counsellor", "Physical Campaigning", "Pre-Primary Collaboration", "Referral Admission Drive", "Physical Counselling", "All features from Master Plan"]
      },
      "Plan A": {
        cost: "₹55,000",
        features: ["Meta Lead Generation", "50-100 leads", "Lead Management"]
      },
      "Plan B": {
        cost: "₹90,000",
        features: ["Google & Meta Leads", "100-150 leads", "Landing Page", "Lead Management"]
      },
      "Plan C": {
        cost: "₹1,30,000",
        features: ["Plan A + TeleCounselling", "150-200 leads", "2 Hook up Reels", "Tele Calling"]
      },
      "Plan D": {
        cost: "₹1,40,000",
        features: ["Plan B + Telecounselling", "150-200 leads", "4 Hook up Reels", "Landing Page", "Tele Calling"]
      },
      "Plan E": {
        cost: "₹1,80,000",
        features: ["Plan B + Telecounselling", "150-200 leads", "4 Hook up Reels & SM Management", "Landing Page", "Tele Calling"]
      }
    },
    contact: {
      phone: "+918860878346",
      email: "info@chalksnboard.in",
      whatsapp: "+919211580208",
      address: "Delhi, India"
    },
    industries: ["Education (Schools, Colleges)", "Healthcare", "E-commerce", "Real Estate", "Technology", "Startups", "Fortune 500 Companies"],
    results: {
      "Lead Generation": "300% increase in leads",
      "Admissions": "150% increase in admissions",
      "ROI": "500% ROI improvement",
      "Growth": "10X business growth"
    }
  }

  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    // SEO for schools specific response (highest priority)
    if ((input.includes("seo") || input.includes("search engine")) && (input.includes("school") || input.includes("admission") || input.includes("education"))) {
      return `How SEO of your School can help in Admissions? 

Imagine parents searching schools nearby get your school's information in 1st Place in Search like Google, etc. 

Our SEO Services help you create a Strong Digital Search Engine Presence by using high search key words like "Best School near me" or "Top 10 Schools" etc. 

Our Paid Listing team use keywords to Rank your School and get strong SEO Presence.

This means when parents search for schools in your area, your school will appear first in Google search results, leading to more inquiries and admissions. Would you like to know more about our school-specific SEO packages?`
    }
    
    // SEO specific response (general) - higher priority than company info
    if (input.includes("seo") || input.includes("search engine optimization")) {
      const seoInfo = knowledgeBase.services["SEO (Search Engine Optimization)"]
      let response = `SEO (Search Engine Optimization): ${seoInfo.description}. Key features include: ${seoInfo.features.join(", ")}. Pricing starts from ${seoInfo.pricing}.`
      
      // Add school-specific SEO information if asking about SEO for schools
      if (input.includes("school") || input.includes("admission") || input.includes("education")) {
        response += `\n\n${seoInfo.schoolBenefits}`
      }
      
      response += `\n\nWould you like to know more details or get a customized quote?`
      return response
    }
    
    // Services
    if (input.includes("service") || input.includes("offer") || input.includes("provide")) {
      const serviceList = Object.keys(knowledgeBase.services)
      return `We offer comprehensive digital marketing services:

${serviceList.map((service, index) => `${index + 1}. ${service}`).join('\n')}

Each service is tailored to your specific needs and goals. Would you like to know more about any particular service?`
    }
    
    // Company information (lower priority)
    if (input.includes("company") || input.includes("chalksnboard")) {
      return `Chalksnboard is a marketing agency, founded in 2020. We have 5+ years of experience, completed 100+ projects, served 100+ clients across India. Our mission is to help businesses grow through strategic, data-driven marketing solutions. We combine cutting-edge AI technology with human creativity to deliver exceptional results.`
    }
    
    // Specific service details for other services
    for (const [serviceName, serviceInfo] of Object.entries(knowledgeBase.services)) {
      if (serviceName !== "SEO (Search Engine Optimization)" && (input.includes(serviceName.toLowerCase()) || input.includes(serviceName.split(" ")[0].toLowerCase()))) {
        let response = `${serviceName}: ${serviceInfo.description}. Key features include: ${serviceInfo.features.join(", ")}. Pricing starts from ${serviceInfo.pricing}.`
        response += `\n\nWould you like to know more details or get a customized quote?`
        return response
      }
    }
    
    // Pricing
    if (input.includes("price") || input.includes("cost") || input.includes("package")) {
      return `Our pricing varies based on your needs and project scope. We offer flexible packages starting from ₹15,000/month for basic services to comprehensive solutions at ₹3,00,000+/month. We also have specialized admission packages starting from ₹55,000. Would you like to schedule a free consultation to discuss your specific requirements?`
    }
    
    // Contact information
    if (input.includes("contact") || input.includes("phone") || input.includes("email") || input.includes("reach")) {
      return `You can reach us at: Phone: ${knowledgeBase.contact.phone}, Email: ${knowledgeBase.contact.email}, WhatsApp: ${knowledgeBase.contact.whatsapp}. We're available for immediate assistance and free consultations.`
    }
    
    // Results and success stories
    if (input.includes("result") || input.includes("success") || input.includes("case study")) {
      return `Our clients have achieved remarkable results: 300% increase in leads, 150% increase in admissions, 500% ROI improvement, and 10X business growth. We have case studies across education, healthcare, e-commerce, and technology sectors. Would you like to see specific examples?`
    }
    
    // Team information
    if (input.includes("team") || input.includes("founder") || input.includes("ceo")) {
      return `Our leadership team includes: ${knowledgeBase.team.ceo}, ${knowledgeBase.team.cmo}, and ${knowledgeBase.team.cto}. We have 55+ team members across creative, development, marketing, and analytics departments.`
    }
    
    // Industries served
    if (input.includes("industry") || input.includes("sector") || input.includes("business")) {
      return `We work with businesses of all sizes across various industries: ${knowledgeBase.industries.join(", ")}. We have specialized experience in the education sector and understand industry-specific challenges and regulations.`
    }
    
    // Consultation
    if (input.includes("consultation") || input.includes("meet") || input.includes("discuss")) {
      return `We offer free consultations to understand your needs and provide customized solutions. You can schedule a consultation by calling ${knowledgeBase.contact.phone}, emailing ${knowledgeBase.contact.email}, or messaging us on WhatsApp at ${knowledgeBase.contact.whatsapp}.`
    }
    
    // Default responses
    const defaultResponses = [
      "I'd be happy to help you learn more about our services. What specific information are you looking for?",
      "That's a great question! Let me connect you with our expert team for detailed assistance.",
      "I can help you with information about our digital marketing services, pricing, or process. What would you like to know?",
      "Thanks for reaching out! Our team specializes in digital marketing solutions. Would you like to schedule a consultation?",
      "I'm here to help! For immediate assistance, you can also reach us on WhatsApp or call us directly.",
      "We offer comprehensive digital marketing solutions tailored to your business needs. What's your primary goal?"
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue("")
    setIsTyping(true)

    // Handle conversation flow
    setTimeout(() => {
      let botResponse = ""
      
      if (conversationStep === 0) {
        // After initial greeting, ask for name
        setUserInfo(prev => ({ ...prev, name: currentInput }))
        setConversationStep(1)
        botResponse = "Great! What is your name?"
      } else if (conversationStep === 1) {
        // After name, ask for organization
        setUserInfo(prev => ({ ...prev, name: currentInput }))
        setConversationStep(2)
        botResponse = `Nice to meet you, ${currentInput}! What is your organization name?`
      } else if (conversationStep === 2) {
        // After organization, ask for phone
        setUserInfo(prev => ({ ...prev, organization: currentInput }))
        setConversationStep(3)
        botResponse = `Thank you! What is your phone number?`
      } else if (conversationStep === 3) {
        // After phone, provide services info
        setUserInfo(prev => ({ ...prev, phone: currentInput }))
        setConversationStep(4)
        botResponse = `Perfect! Thank you for providing your details. Now, how can I help you with our services? You can ask about our digital marketing services, pricing, or any specific questions you have.`
      } else {
        // Normal conversation flow
        botResponse = generateResponse(currentInput)
      }
      
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        content: botResponse,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickReplies = [
    { text: "Our Services", icon: "🚀" },
    { text: "Pricing", icon: "💰" },
    { text: "Contact Info", icon: "📞" },
    { text: "About Company", icon: "🏢" }
  ]

  const handleQuickReply = (reply) => {
    // Only show quick replies after the initial conversation flow is complete
    if (conversationStep < 4) {
      return
    }

    const responses = {
      "Our Services": `We offer comprehensive digital marketing services:

${Object.keys(knowledgeBase.services).map((service, index) => `${index + 1}. ${service}`).join('\n')}

Each service is tailored to your specific needs and goals. Which service interests you most?`,
      "Pricing": "Our pricing varies based on your specific needs and project scope. We offer flexible packages starting from ₹15,000/month for basic services to comprehensive solutions at ₹3,00,000+/month. We also have specialized admission packages starting from ₹55,000. Would you like to schedule a free consultation to discuss your requirements?",
      "Contact Info": `You can reach us at: Phone: ${knowledgeBase.contact.phone}, Email: ${knowledgeBase.contact.email}, WhatsApp: ${knowledgeBase.contact.whatsapp}. We're available for immediate assistance and free consultations.`,
      "About Company": `${knowledgeBase.company.description} Founded in ${knowledgeBase.company.founded}, we have ${knowledgeBase.company.experience} of experience, completed ${knowledgeBase.company.projects} projects, and served ${knowledgeBase.company.clients} clients across ${knowledgeBase.company.countries} countries. We're India's first AI-powered marketing agency.`
    }

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: reply,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        content: responses[reply],
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
             {/* AI Bot Toggle Button */}
       <div className="fixed bottom-6 right-6 z-[60]">
         <button
           onClick={() => setIsOpen(!isOpen)}
           className="group relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-purple-500/25"
           aria-label="Open AI Chat"
         >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl opacity-50 animate-pulse"></div>
          
                     {/* Icon */}
           <div className="relative z-10">
             {isOpen ? (
               <X className="w-5 h-5 sm:w-6 sm:h-6" />
             ) : (
               <div className="relative">
                 <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                 <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-ping"></div>
                 <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
               </div>
             )}
           </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-3 right-3 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-2 left-3 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </button>
      </div>

             {/* AI Bot Chat Window */}
       {isOpen && (
         <div className={`fixed bottom-14 right-2 sm:right-6 z-[60] transition-all duration-500 ease-in-out ${
           isMinimized ? 'w-72 sm:w-80 h-16' : 'w-[calc(100vw-1rem)] sm:w-96 h-[400px] sm:h-[500px] max-w-sm'
         }`}>
          <div className="relative w-full h-full">
                         {/* Glassmorphism background */}
             <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl"></div>
             
             {/* Gradient overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl sm:rounded-3xl"></div>
            
            {/* Main content */}
            <div className="relative w-full h-full flex flex-col">
                             {/* Header */}
               <div className="relative p-3 sm:p-4 rounded-t-2xl sm:rounded-t-3xl">
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-t-2xl sm:rounded-t-3xl"></div>
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-t-2xl sm:rounded-t-3xl opacity-80"></div>
                
                <div className="relative flex items-center justify-between">
                                     <div className="flex items-center space-x-2 sm:space-x-3">
                     <div className="relative">
                       <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center overflow-hidden">
                         <img src="/images/download.png" alt="AI Assistant" className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
                       </div>
                       <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full flex items-center justify-center">
                         <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                       </div>
                     </div>
                     <div>
                       <h3 className="font-bold text-white text-sm sm:text-lg">AI Assistant</h3>
                       <p className="text-purple-100 text-xs">Powered by Chalksnboard</p>
                       <div className="text-purple-100 text-xs flex items-center">
                         <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1 sm:mr-2 animate-pulse"></div>
                         Online
                       </div>
                     </div>
                   </div>
                  
                                     <div className="flex items-center space-x-1 sm:space-x-2">
                     <button
                       onClick={() => setIsMinimized(!isMinimized)}
                       className="text-white/80 hover:text-white transition-colors p-1"
                     >
                       {isMinimized ? <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" /> : <X className="w-3 h-3 sm:w-4 sm:h-4" />}
                     </button>
                     <button
                       onClick={() => setIsOpen(false)}
                       className="text-white/80 hover:text-white transition-colors p-1"
                     >
                       <X className="w-3 h-3 sm:w-4 sm:h-4" />
                     </button>
                   </div>
                </div>
              </div>

              {!isMinimized && (
                <>
                                     {/* Messages */}
                   <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50/50 to-white/30 backdrop-blur-sm">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                                                 <div
                           className={`max-w-[85%] sm:max-w-xs lg:max-w-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl ${
                             message.type === "user"
                               ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                               : "bg-white/80 backdrop-blur-sm text-gray-800 border border-white/20 shadow-lg"
                           }`}
                         >
                                                     <div className="flex items-start space-x-1.5 sm:space-x-2">
                             {message.type === "bot" && (
                               <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                                 <img src="/images/download.png" alt="AI Assistant" className="w-2.5 h-2.5 sm:w-3 sm:h-3 object-contain" />
                               </div>
                             )}
                             <div className="flex-1">
                               <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">{message.content}</div>
                               <p className="text-xs opacity-70 mt-1 sm:mt-2">
                                 {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                               </p>
                             </div>
                             {message.type === "user" && (
                               <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                                 <User className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                               </div>
                             )}
                           </div>
                        </div>
                      </div>
                    ))}
                    
                                         {isTyping && (
                       <div className="flex justify-start">
                         <div className="bg-white/80 backdrop-blur-sm text-gray-800 border border-white/20 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg">
                           <div className="flex items-center space-x-2 sm:space-x-3">
                             <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center overflow-hidden">
                               <img src="/images/download.png" alt="AI Assistant" className="w-2.5 h-2.5 sm:w-3 sm:h-3 object-contain" />
                             </div>
                             <div className="flex space-x-1">
                               <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-bounce"></div>
                               <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                               <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                             </div>
                           </div>
                         </div>
                       </div>
                     )}
                    
                    <div ref={messagesEndRef} />
                  </div>

                                     {/* Quick Replies */}
                   {messages.length === 1 && conversationStep >= 4 && (
                     <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-50/50 to-blue-50/50 backdrop-blur-sm border-t border-white/20">
                       <p className="text-xs text-gray-600 mb-2 sm:mb-3 font-medium">Quick replies:</p>
                       <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                                                 {quickReplies.map((reply) => (
                           <button
                             key={reply.text}
                             onClick={() => handleQuickReply(reply.text)}
                             className="text-xs bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 hover:bg-white hover:shadow-lg transition-all duration-200 flex items-center space-x-1.5 sm:space-x-2 group"
                           >
                             <span className="text-sm sm:text-lg">{reply.icon}</span>
                             <span className="text-gray-700 group-hover:text-gray-900 text-xs">{reply.text}</span>
                           </button>
                         ))}
                      </div>
                    </div>
                  )}

                                     {/* Input */}
                   <div className="p-3 sm:p-4 bg-gradient-to-r from-gray-50/50 to-white/30 backdrop-blur-sm border-t border-white/20 rounded-b-2xl sm:rounded-b-3xl">
                     <div className="flex space-x-2 sm:space-x-3">
                                             <div className="flex-1 relative">
                         <input
                           ref={inputRef}
                           type="text"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           onKeyPress={handleKeyPress}
                           placeholder="Ask about our services, pricing, or company..."
                           className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-xs sm:text-sm placeholder-gray-500 shadow-lg"
                           disabled={isTyping}
                         />
                         <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2">
                           <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                         </div>
                       </div>
                                             <button
                         onClick={handleSendMessage}
                         disabled={!inputValue.trim() || isTyping}
                         className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                       >
                         <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                       </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
