"use client"

import { useEffect, useState } from "react";

const icons = [
  // Lightbulb (Creative)
  <svg key="creative" width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><path d="M32 10a14 14 0 0 0-7 26.2V40a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3.8A14 14 0 0 0 32 10Zm5 28.2V40a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1.8A12 12 0 1 1 37 38.2Z" fill="#fff"/><rect x="27" y="44" width="10" height="4" rx="2" fill="#fff"/></svg>,
  // Code (Development)
  <svg key="dev" width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><polyline points="26 24 18 32 26 40" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/><polyline points="38 24 46 32 38 40" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
  // Bar chart (Conversion)
  <svg key="conversion" width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><rect x="18" y="34" width="6" height="12" rx="2" fill="#fff"/><rect x="28" y="26" width="6" height="20" rx="2" fill="#fff"/><rect x="38" y="18" width="6" height="28" rx="2" fill="#fff"/><polyline points="18 46 32 32 44 38" stroke="#fff" strokeWidth="3" fill="none"/></svg>,
  // Engagement (faces in grid)
  <svg key="engagement" width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><rect x="16" y="16" width="12" height="12" rx="3" fill="#fff"/><rect x="36" y="16" width="12" height="12" rx="3" fill="#fff"/><rect x="16" y="36" width="12" height="12" rx="3" fill="#fff"/><rect x="36" y="36" width="12" height="12" rx="3" fill="#fff"/><circle cx="22" cy="22" r="2" fill="#FF6600"/><circle cx="42" cy="22" r="2" fill="#FF6600"/><circle cx="22" cy="42" r="2" fill="#FF6600"/><circle cx="42" cy="42" r="2" fill="#FF6600"/></svg>,
];

export default function ServicesSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const [lottieReady, setLottieReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.customElements?.get('dotlottie-player')) {
      const script = document.createElement('script');
      script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js";
      script.async = true;
      script.onload = () => setLottieReady(true);
      document.body.appendChild(script);
    } else if (typeof window !== 'undefined') {
      setLottieReady(true);
    }
  }, []);

  return (
    <>
      <section id="services" className="relative overflow-hidden py-40 lg:py-60 pb-40"
        style={{
          background: "linear-gradient(120deg, #ff4e00 0%, #ff7300 40%, #ff9000 70%, #ec9f05 100%)"
        }}
      >
        {/* Curved SVG top edge - moved lower for visibility */}
        <svg viewBox="0 0 1440 200" className="absolute top-0 left-0 w-full h-[140px] lg:h-[200px]" style={{transform: 'translateY(0)'}} preserveAspectRatio="none">
          <path fill="#fff" d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,181.3C672,171,768,149,864,149.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
        {/* Lottie Animation above icons */}
        <div className="container mx-auto px-4 lg:px-6 relative top-20 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { label: "CREATIVE" },
              { label: "DEVELOPMENT" },
              { label: "CONVERSION" },
              { label: "ENGAGEMENT" },
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center text-white">
                <div className="mb-4 flex items-center justify-center">
                  {item.label === "DEVELOPMENT" ? (
                    lottieReady && (
                      <dotlottie-player
                        src="https://lottie.host/a825eb7e-f0c8-48dd-970b-fa5d4db6c9af/uZSvNhpQss.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                        style={{ width: '64px', height: '64px' }}
                        className="w-16 h-16 lg:w-24 lg:h-24"
                      ></dotlottie-player>
                    )
                  ) : (
                    icons[i]
                  )}
                </div>
                <h3 className="text-lg lg:text-xl font-bold tracking-wide text-center mt-2">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
        {/* Elevated card at the bottom for the title and subtitle */}
        <div className="absolute left-0 bottom-0 w-full flex justify-center ">
          <div className="text-white  rounded-xl px-6 py-8 max-w-2xl w-full mx-auto text-center" style={{
            background: "linear-gradient(120deg, #ff4e00 0%, #ff7300 40%, #ff9000 70%, #ec9f05 100%)",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.35), 0 1.5px 8px 0 rgba(0,0,0,0.30)"
          }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-2">
              Chalks<span className="text-red-600 font-black">n</span>board Delivered <span className="font-black">Brilliance</span> - Recent Work
            </h2>
            <p className="text-base md:text-lg lg:text-xl  font-medium">
              Blending Innovation & Execution Seamlessly
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
