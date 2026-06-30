"use client";

import Image from "next/image";

const clients = [
  { id: 1, image: "/images/8.png", name: "Samarth Assisted Living" },
  { id: 2, image: "/images/9.png", name: "G.D. Goenka Public School" },
  { id: 3, image: "/images/10.png", name: "Swiss Cottage School" },
  { id: 4, image: "/images/11.png", name: "Jay Kay Public School" },
  { id: 5, image: "/images/13.png", name: "FirstCry Intellitots" },
  { id: 6, image: "/images/14.png", name: "Delhi Public School" },
  { id: 7, image: "/images/15.png", name: "Delhi Public World School" },
  { id: 8, image: "/images/16.png", name: "Academic Height" },
  { id: 9, image: "/images/17.png", name: "Manav Bharati Int." },
  { id: 10, image: "/images/18.png", name: "Seth Mr. Jaipuria School" },
  { id: 11, image: "/images/19.png", name: "Flower Valley Int." },
  { id: 12, image: "/images/20.png", name: "Birla Open Minds" },
  { id: 13, image: "/images/21.png", name: "Stanfort School" },
  { id: 14, image: "/images/22.png", name: "The Shri Ram Wonder Years" },
  { id: 15, image: "/images/23.png", name: "Seven Hills, Etawah" },
  { id: 16, image: "/images/24.png", name: "Kaushik Public School" },
];

export default function ClientLogosSection() {
  const numberOfClients = clients.length;
  // Calculate the radius based on card width to ensure they don't overlap perfectly
  // Using ~200px width per card
  const radius = Math.round((220 * numberOfClients) / (2 * Math.PI));

  return (
    <section className="bg-background py-16 md:py-32 relative overflow-hidden border-t border-border/50">
      
      {/* ======================= */}
      {/* THE SUN & LIGHT RAYS    */}
      {/* ======================= */}
      
      {/* Core Sun bright spot behind the text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] pointer-events-none z-0" />
      
      {/* Massive ambient primary glow casting down */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Light cone/rays simulating light pouring down over the carousel */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-[60px] pointer-events-none z-0"
        style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)" }}
      />


      {/* Header text acting as the source of the sun */}
      <div className="container mx-auto px-4 relative z-10 mb-16 mt-8">
        <div className="text-center relative">
          <span className="text-muted-foreground font-semibold tracking-widest uppercase text-sm mb-4 block">
            The Network
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            Our <span className="text-primary drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">Esteemed Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Partnering with forward-thinking institutions to redefine their digital footprint.
          </p>
        </div>
      </div>

      {/* 3D Rotating Carousel Area */}
      <div className="w-full h-[450px] md:h-[500px] flex items-center justify-center relative perspective-[1200px] overflow-hidden z-10">
        
        {/* Edge Overlays to fade out the sides */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-background to-transparent z-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-background to-transparent z-40 pointer-events-none" />

        {/* The 3D Spinner */}
        {/* Tilt it slightly forward (-5deg to -10deg) for a massive 3D depth effect */}
        <div 
          className="relative w-[180px] h-[120px] md:w-[220px] md:h-[140px] preserve-3d animate-carousel-spin hover:[animation-play-state:paused]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {clients.map((client, index) => {
            const angle = (index / numberOfClients) * 360;
            return (
              <div 
                key={client.id}
                className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-card/80 backdrop-blur-md border border-border/80 rounded-2xl p-4 shadow-2xl transition-colors duration-300 hover:border-primary/50 group cursor-crosshair backface-hidden"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={160}
                    height={90}
                    // Full color, full opacity
                    className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    draggable={false}
                  />
                </div>
                
                {/* Tooltip on hover */}
                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none w-max max-w-[200px] text-center shadow-xl transform -translate-y-2 group-hover:translate-y-0 z-50">
                  {client.name}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 border-solid border-b-slate-900 border-b-4 border-x-transparent border-x-4 border-t-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes carousel-spin {
          from { transform: rotateX(-5deg) rotateY(0deg); }
          to { transform: rotateX(-5deg) rotateY(360deg); }
        }
        .animate-carousel-spin {
          animation: carousel-spin 40s linear infinite;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}} />
    </section>
  );
}
