"use client";

import React from "react";
import { Search, Monitor, Smartphone, BookOpen, Mail, Target, Globe, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import { Sun, Moon, MessageCircle } from "lucide-react";

// Custom SVG icon for Admission Strategy
const AdmissionStrategyIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7.5L12 3L22 7.5L12 12L2 7.5Z" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M6 10.5V15.5C6 17.1569 8.68629 18.5 12 18.5C15.3137 18.5 18 17.1569 18 15.5V10.5" stroke="#ef4444" strokeWidth="2"/>
    <path d="M12 12V18.5" stroke="#ef4444" strokeWidth="2"/>
  </svg>
);

const services = [
  {
    title: "SEO (Search Engine Optimization)",
    description:
      "Improve your website's visibility on search engines and attract more organic traffic with our comprehensive SEO strategies, including keyword research, on-page optimization, and link building.",
  },
  {
    title: "UI/UX Design",
    description:
      "Enhance user satisfaction and engagement with intuitive, visually appealing, and user-centric UI/UX design tailored to your brand and audience.",
  },
  {
    title: "Mobile App Development",
    description:
      "Build robust, scalable, and user-friendly mobile applications for iOS and Android platforms to expand your digital reach and improve customer engagement.",
  },
  {
    title: "Content Marketing",
    description:
      "Drive brand awareness and customer loyalty through high-quality, relevant, and engaging content that resonates with your target audience.",
  },
  {
    title: "Email Marketing",
    description:
      "Reach your audience directly with personalized email campaigns designed to nurture leads, increase conversions, and retain customers.",
  },
  {
    title: "Admission Strategy",
    description:
      "We craft compelling brand films that highlight a school's unique strengths and create a lasting impact. Through engaging storytelling and visuals, we build an emotional connection with prospective students and parents. Our creative approach ensures your institution stands out, driving interest and admissions.",
  },
  {
    title: "Dynamic Website Development",
    description:
      "Get a fast, secure, and scalable website tailored to your business needs. Our dynamic websites are built for performance, easy content management, and seamless user experience across all devices.",
  },
  {
    title: "Review & Reputation Management",
    description:
      "Build trust and credibility for your brand with proactive review and reputation management. We help you monitor, respond, and improve your online presence across platforms.",
  },
];

const serviceIcons = {
  "SEO (Search Engine Optimization)": <Search className="w-10 h-10 text-green-600" />,
  "UI/UX Design": <Monitor className="w-10 h-10 text-pink-600" />,
  "Mobile App Development": <Smartphone className="w-10 h-10 text-indigo-600" />,
  "Content Marketing": <BookOpen className="w-10 h-10 text-yellow-600" />,
  "Email Marketing": <Mail className="w-10 h-10 text-blue-600" />,
  "PPC & Paid Ads": <Target className="w-10 h-10 text-red-600" />,
  "Admission Strategy": AdmissionStrategyIcon,
  "Dynamic Website Development": <Globe className="w-10 h-10 text-cyan-600" />,
  "Review & Reputation Management": <Star className="w-10 h-10 text-yellow-500" />,
};

const serviceFeatures = {
  "SEO (Search Engine Optimization)": [
    "Keyword Research & Analysis",
    "On-Page Optimization",
    "Technical SEO Audit",
    "Link Building",
    "Local SEO",
    "Content Optimization",
    "Site Speed Optimization",
    "Mobile SEO",
  ],
  "UI/UX Design": [
    "User Research & Analysis",
    "Wireframing & Prototyping",
    "Visual Design",
    "Interaction Design",
    "Usability Testing",
    "Design Systems",
  ],
  "Mobile App Development": [
    "iOS & Android Apps",
    "Cross-Platform Solutions",
    "App Store Deployment",
    "UI/UX for Mobile",
    "Performance Optimization",
    "Maintenance & Support",
  ],
  "Content Marketing": [
    "Content Strategy",
    "Blog & Article Writing",
    "Infographics",
    "Video Content",
    "Social Media Content",
    "Content Distribution",
  ],
  "Email Marketing": [
    "Campaign Strategy",
    "Personalized Emails",
    "Automation",
    "A/B Testing",
    "Analytics & Reporting",
    "List Management",
  ],
  "PPC & Paid Ads": [
    "Google Ads",
    "Facebook & Instagram Ads",
    "Campaign Setup",
    "Audience Targeting",
    "Performance Tracking",
    "Conversion Optimization",
  ],
  "Dynamic Website Development": [
    "Responsive & Mobile-First Design",
    "Content Management System (CMS)",
    "SEO Optimization",
    "Custom Integrations",
    "Performance & Security",
    "Ongoing Support",
  ],
  "Review & Reputation Management": [
    "Online Review Monitoring",
    "Response Management",
    "Reputation Repair",
    "Platform Integration",
    "Sentiment Analysis",
    "Reporting & Insights",
  ],
};

// Next Gen Features Section
const features = [
  { title: 'Students', description: 'Students can now learn from their favorite teachers. the same way they teach in classrooms.' },
  { title: 'Teachers', description: 'Teachers can reach any student without a physical classroom.' },
  { title: 'Corporates', description: 'Hassle free inductions for new joiners and library for internal & external trainings.' },
  { title: 'Institutes', description: 'Onboard your students outside classes to enable uninterrupted guidance and support.' },
  { title: 'Advanced Live Classes', description: 'Raise your hand in a live class. Get your doubts solved in a personalized way.' },
  { title: 'Subject Analytics', description: 'Know the topics where you are ahead. Get fine details of your weaknesses.' },
  { title: 'Courses', description: 'Get the proper feed on your hunger for knowledge.' },
  { title: 'Get Notified', description: 'Never miss any session or event happening. Get involved on the go.' },
];

function Tech() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [radius, setRadius] = React.useState(180);
    const [cardSize, setCardSize] = React.useState(60);
    const verticalOffset = 60;
    const horizontalOffset = 0;
    const total = features.length;

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % total);
        }, 4000);
        return () => clearInterval(interval);
    }, [total]);

    React.useEffect(() => {
        const updateSizes = () => {
            const width = window.innerWidth;
            if (width >= 1440) {
                setRadius(240);
                setCardSize(90);
            } else if (width >= 1024) {
                setRadius(200);
                setCardSize(80);
            } else if (width >= 768) {
                setRadius(160);
                setCardSize(70);
            } else if (width >= 480) {
                setRadius(120);
                setCardSize(60);
            } else {
                setRadius(90);
                setCardSize(50);
            }
        };

        updateSizes();
        window.addEventListener('resize', updateSizes);
        return () => window.removeEventListener('resize', updateSizes);
    }, []);

    const phoneWidth = radius * 0.7;
    const phoneHeight = phoneWidth * 2.0;
    const fontSize = cardSize * 0.15;

    return (
        <section
            style={{ background: '#fff' }}
            className="w-full flex justify-center items-center py-20 flex-col px-4 bg-white"
        >
            <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-[#2b3366] mb-20 sm:mb-10 font-marcellus">
                Next Gen Features
            </h2>
            <div className="relative w-full mt-8 z-4 max-w-[600px]" style={{ aspectRatio: '1 / 1' }}>
                {/* Dashed Circle Border */}
                <div
                    className="absolute border-2 border-dashed border-gray-400 rounded-full"
                    style={{
                        width: `${radius * 2}px`,
                        height: `${radius * 2}px`,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
                {/* Rotating Feature Cards */}
                {features.map((feature, i) => {
                    const angleDeg = (360 / total) * ((i - activeIndex + total) % total);
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const x = radius * Math.cos(angleRad) + horizontalOffset - cardSize / 2;
                    const y = radius * Math.sin(angleRad) + verticalOffset - cardSize / 2;
                    return (
                        <motion.div
                            key={i}
                            className="absolute bg-[#2b3366] rounded-xl shadow-md flex items-center justify-center text-center transition-all duration-500 font-marcellus"
                            style={{
                                width: `${cardSize}px`,
                                height: `${cardSize}px`,
                                left: '50%',
                                top: '50%',
                                transform: `translate(${x}px, ${-y}px)`,
                                padding: '4px',
                            }}
                        >
                            <p
                                className="font-semibold text-white leading-tight"
                                style={{
                                    fontSize: `${fontSize}px`,
                                    lineHeight: 1.2,
                                }}
                            >
                                {feature.title}
                            </p>
                        </motion.div>
                    );
                })}
                {/* Centered Virtual Phone with Logo */}
                <div
                    className="absolute z-10 flex items-center justify-center phone-virtual-container"
                    style={{
                        width: `${radius * 0.7}px`,
                        height: `${radius * 1.4}px`,
                        top: '52%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <style>{`
                        @media (max-width: 640px) {
                            .phone-virtual-container { top: 48% !important; }
                        }
                    `}</style>
                    <div
                        className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2.5rem] shadow-2xl border-4 border-slate-700 flex items-center justify-center overflow-hidden relative"
                        style={{ minHeight: 0 }}
                    >
                        {/* Logo inside phone */}
                       
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <span
                                className="block font-extrabold tracking-widest text-white text-center px-2 break-words phone-branding-text"
                                style={{
                                    fontSize: 'clamp(0.85rem, 3vw, 1.15rem)',
                                    wordBreak: 'break-word',
                                    lineHeight: 1.1,
                                    maxWidth: '95%',
                                }}
                            >
                                <span className="desktop-branding">CHALKS<br /><span className="text-red-500">N</span><br />BOARD</span>
                                <span className="mobile-branding hidden">Chalks<br /><span className="text-red-500">n</span><br />board</span>
                            </span>
                            <style>{`
                                @media (max-width: 640px) {
                                  .phone-branding-text .desktop-branding { display: none; }
                                  .phone-branding-text .mobile-branding { display: inline; }
                                }
                                @media (min-width: 641px) {
                                  .phone-branding-text .desktop-branding { display: inline; }
                                  .phone-branding-text .mobile-branding { display: none; }
                                }
                            `}</style>
                        </div>
                        {/* Speaker notch */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full bg-gray-300 opacity-70" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceModal({ service, open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {serviceIcons[service.title]}
            {service.title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p className="mb-4 text-base text-gray-700 dark:text-gray-200">{service.description}</p>
          <ul className="mb-4 space-y-2">
            {serviceFeatures[service.title]?.map((feature, i) => (
              <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

function DarkLightToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle Dark Mode"
      className="fixed top-6 right-6 z-50 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow-lg border border-gray-200 dark:border-slate-700 hover:scale-110 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-slate-800" />}
    </button>
  );
}

function FloatingActionButton() {
  return (
    <a
      href="#contact"
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-full p-4 shadow-2xl flex items-center gap-2 hover:scale-110 transition"
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-bold">Contact Us</span>
    </a>
  );
}

function SectionWave({ flip }) {
  return (
    <svg viewBox="0 0 1440 100" className={`w-full h-24 ${flip ? 'rotate-180' : ''}`} preserveAspectRatio="none">
      <path fill="#fff" d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,90.7C672,85,768,43,864,32C960,21,1056,43,1152,58.7C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    </svg>
    );
}

export default function ServicesPage() {
  const [modalService, setModalService] = React.useState(null);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DarkLightToggle />
      <FloatingActionButton />
      <section className="relative min-h-screen px-0 py-8 transition-colors duration-500 overflow-hidden" style={{ background: "#000" }}>
        {/* Full-page Video Background */}
        <video
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
                      src="/images/4K Planet Earth Spinning in Space _ Free HD Videos - No Copyright.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay for darkening video for readability */}
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-10 pointer-events-none" />
        {/* Services Timeline Section */}
        <div className="relative z-20 max-w-4xl mx-auto py-24 flex flex-col gap-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center drop-shadow-lg">
          Our Services
        </h1>
          <div className="flex flex-col gap-16">
          {services.map((service, idx) => (
            <motion.div
                className={`group relative flex w-full ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              key={service.title + idx}
                initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : (idx % 2 === 0 ? -100 : 100) }}
                whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
            >
                <div
                  className="backdrop-blur-xl bg-white/30 dark:bg-slate-900/40 border border-white/30 dark:border-slate-800/60 shadow-2xl rounded-2xl p-8 w-full max-w-lg relative cursor-pointer hover:scale-105 hover:shadow-3xl transition mx-auto md:mx-0"
                  style={{
                    marginLeft: idx % 2 === 0 ? '0' : 'auto',
                    marginRight: idx % 2 === 0 ? 'auto' : '0',
                    transform: typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : (idx % 2 === 0 ? 'translateX(-12%)' : 'translateX(12%)'),
                  }}
                  onClick={() => setModalService(service)}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 shadow-lg group-hover:scale-110 transition-transform">
                {serviceIcons[service.title]}
              </div>
              <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-red-600 dark:text-pink-400 mb-2 text-center">
                {service.title}
              </h2>
                    <p className="text-gray-100 dark:text-gray-200 text-base sm:text-lg mb-4 text-center drop-shadow">
                      {service.description}
                    </p>
                <ul className="mb-4 space-y-2">
                  {serviceFeatures[service.title]?.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-200 dark:text-gray-300 text-sm">
                      <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition shadow-lg"
                        onClick={e => { e.stopPropagation(); setModalService(service); }}
                      >
                    Learn More
                  </button>
                    </div>
                </div>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Next Gen Features Section (now Tech) */}
      <Tech />
        {modalService && (
          <ServiceModal service={modalService} open={!!modalService} onOpenChange={open => !open && setModalService(null)} />
        )}
    </section>
    </ThemeProvider>
  );
}
