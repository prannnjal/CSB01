"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Twitter, Linkedin, ArrowRight } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function HeroSection() {
  const scrollToContact = () => {
    window.location.href = "/contact";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white min-h-screen overflow-hidden flex items-center justify-center pt-36"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 min-h-screen">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/Technology Background Video Loop For Website.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/80 via-black/50 to-slate-900/90 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-20 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-block mb-8 -mt-6">
            <span className="px-6 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-base md:text-lg font-bold tracking-widest uppercase shadow-lg shadow-red-500/20 backdrop-blur-md">
              Welcome to Chalksnboard
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-2xl"
          >
            Boost School Admissions with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              360° Marketing That Delivers ROI
            </span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-200 mb-4 max-w-3xl mx-auto drop-shadow-lg"
          >
            Let Our Agency Drive Your Admissions Success
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Since 2020, we have been delivering results that fill schools and drive measurable return on investment through comprehensive digital strategies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <MagneticButton
              onClick={scrollToContact}
              className="group relative flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 pointer-events-none">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out pointer-events-none"></div>
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
            >
              Explore Services
            </MagneticButton>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center mt-12">
            <div className="flex items-center justify-center gap-4 sm:gap-6 px-6 py-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/ChalksnBoard/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/chalksnboard/" },
                { icon: Instagram, href: "https://www.instagram.com/chalksnboard_official/" },
                { icon: Youtube, href: "https://www.youtube.com/@chalksnboard" },
                { icon: Twitter, href: "https://x.com/chalksnboard" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 rounded-full hover:bg-red-500 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg"
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Ambient Elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-red-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-700 pointer-events-none"></div>
      </div>

      {/* Bottom Gradient Fade to match next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
