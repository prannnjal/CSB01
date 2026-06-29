"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, PhoneCall, Film, ClipboardCheck, 
  MousePointerClick, FileText, Magnet, 
  Mic, MapPin, Layout 
} from "lucide-react";

const offerings = [
  { id: "01", title: "SEO", icon: Search },
  { id: "02", title: "Tele-calling", icon: PhoneCall },
  { id: "03", title: "Brand Films", icon: Film },
  { id: "04", title: "Master Plans", icon: ClipboardCheck },
  { id: "05", title: "Digital Ads", icon: MousePointerClick },
  { id: "06", title: "Content", icon: FileText },
  { id: "07", title: "Lead Gen", icon: Magnet },
  { id: "08", title: "PR's", icon: Mic },
  { id: "09", title: "Outdoor Ads", icon: MapPin },
  { id: "10", title: "Web Design", icon: Layout },
];

export default function RadialOfferings() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full relative flex flex-col justify-center items-center py-10 h-full">
      
      {/* Required CSS for precise infinite counter-rotation and pause */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-counter-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit-spin 40s linear infinite;
        }
        .animate-counter-orbit {
          animation: orbit-counter-spin 40s linear infinite;
        }
        .pause-orbit .animate-orbit, 
        .pause-orbit .animate-counter-orbit {
          animation-play-state: paused !important;
        }
      `}} />

      {/* Main Radar Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[520px] lg:h-[520px] ${isHovered ? 'pause-orbit' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Radar Background Rings */}
        <div className="absolute inset-0 rounded-full border border-slate-700/40 bg-slate-900/20 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]"></div>
        <div className="absolute inset-[15%] rounded-full border border-slate-700/20"></div>
        <div className="absolute inset-[30%] rounded-full border border-slate-700/20 border-dashed"></div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-white to-slate-200 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] border-4 border-slate-800 transition-transform duration-500 hover:scale-110 cursor-default">
          <span className="block text-[10px] sm:text-xs font-black tracking-widest text-slate-900 text-center leading-tight">
            CHALKS<span className="text-red-500">N</span><br/>BOARD
          </span>
          {/* Radar Sweep Effect */}
          <div className="absolute inset-0 rounded-full bg-red-500/10 blur-xl animate-pulse"></div>
        </div>

        {/* Orbiting Track */}
        <div className="absolute inset-0 animate-orbit w-full h-full">
          {offerings.map((item, index) => {
            // Position items evenly around the circle
            const angleDeg = (360 / offerings.length) * index - 90; // Start at top
            const angleRad = (angleDeg * Math.PI) / 180;
            // Radius is 50% of the container (to place them on the edge)
            const left = 50 + 50 * Math.cos(angleRad) + "%";
            const top = 50 + 50 * Math.sin(angleRad) + "%";

            return (
              <div 
                key={item.id}
                className="absolute z-30 animate-counter-orbit"
                style={{ left, top }}
              >
                {/* The Pill Card - Upgraded for High Contrast */}
                <div className="group relative bg-gradient-to-r from-slate-800/95 to-slate-700/95 backdrop-blur-xl border border-white/20 rounded-full pr-4 sm:pr-5 lg:pr-6 pl-1 sm:pl-1.5 py-1 sm:py-1.5 flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:bg-slate-700 hover:border-red-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-300 cursor-pointer w-max overflow-hidden">
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-white/5 pointer-events-none rounded-full"></div>

                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center shrink-0 border border-white/30 group-hover:border-red-500 transition-colors shadow-inner mr-2 sm:mr-3 relative z-10">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-red-400 relative z-10 transition-colors drop-shadow-md" />
                    <div className="absolute inset-0 bg-red-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Text */}
                  <div className="font-bold text-white uppercase text-[9px] sm:text-[11px] lg:text-xs tracking-wider leading-tight mr-2 sm:mr-3 whitespace-nowrap relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {item.title}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </motion.div>
    </div>
  );
}
