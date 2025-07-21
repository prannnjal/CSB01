import Image from "next/image";

export default function ClientLogosSection() {
  const clients = [
    { image: "/8.png", name: "Samarth Assisted Living" },
    { image: "/9.png", name: "G.D. Goenka Public School, Patna" },
    { image: "/10.png", name: "Swiss Cottage School" },
    { image: "/11.png", name: "Jay Kay Public School" },
    { image: "/13.png", name: "FirstCry Intellitots Preschool & Daycare" },
    { image: "/14.png", name: "Delhi Public School, Kurukshetra" },
    { image: "/15.png", name: "Delhi Public World School" },
    { image: "/16.png", name: "Academic Height World School" },
    { image: "/17.png", name: "Manav Bharati International School" },
    { image: "/18.png", name: "Seth Mr. Jaipuria School" },
    { image: "/19.png", name: "Flower Valley International School" },
    { image: "/20.png", name: "Birla Open Minds International School" },
    { image: "/21.png", name: "Stanfort School" },
    { image: "/22.png", name: "The Shri Ram Wonder Years" },
    { image: "/23.png", name: "Seven Hills, Etawah" },
    { image: "/24.png", name: "Kaushik Public School" },
  ];

  // Split the clients into two halves
  const mid = Math.ceil(clients.length / 2);
  const firstRow = clients.slice(0, mid);
  const secondRow = clients.slice(mid);

  // Duplicate for seamless looping
  const firstRowLogos = [...firstRow, ...firstRow];
  const secondRowLogos = [...secondRow, ...secondRow];

  return (
    <section className="bg-white backdrop-blur-md text-gray-900 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-500">Esteemed Clients</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-8">
          {/* First row: left-to-right */}
          <div className="relative overflow-hidden">
            {/* Left blur overlay */}
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[120px] md:h-[140px] w-12 z-20" style={{background: 'linear-gradient(to right, rgba(255,255,255,0.85) 60%, transparent 100%)', filter: 'blur(2px)'}} />
            <div className="flex whitespace-nowrap animate-client-scroll-ltr">
              {firstRowLogos.map((client, index) => (
                <div key={client.image + client.name + index} className="flex-shrink-0 flex items-center justify-center px-6 py-2" style={{ width: 220 }}>
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={200}
                    height={200}
                    className="object-contain w-[200px] h-[120px] md:w-[240px] md:h-[140px] hover:scale-110 transition duration-300"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
            {/* Right blur overlay */}
            <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[120px] md:h-[140px] w-12 z-20" style={{background: 'linear-gradient(to left, rgba(255,255,255,0.85) 60%, transparent 100%)', filter: 'blur(2px)'}} />
          </div>
          {/* Second row: right-to-left */}
          <div className="relative overflow-hidden">
            {/* Left blur overlay */}
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[120px] md:h-[140px] w-12 z-20" style={{background: 'linear-gradient(to right, rgba(255,255,255,0.85) 60%, transparent 100%)', filter: 'blur(2px)'}} />
            <div className="flex whitespace-nowrap animate-client-scroll-rtl">
              {secondRowLogos.map((client, index) => (
                <div key={client.image + client.name + index} className="flex-shrink-0 flex items-center justify-center px-6 py-2" style={{ width: 220 }}>
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={200}
                    height={200}
                    className="object-contain w-[200px] h-[120px] md:w-[240px] md:h-[140px] hover:scale-110 transition duration-300"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
            {/* Right blur overlay */}
            <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[120px] md:h-[140px] w-12 z-20" style={{background: 'linear-gradient(to left, rgba(255,255,255,0.85) 60%, transparent 100%)', filter: 'blur(2px)'}} />
          </div>
        </div>
        <style jsx>{`
          @keyframes client-scroll-ltr {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-client-scroll-ltr {
            animation: client-scroll-ltr 40s linear infinite;
          }
          @keyframes client-scroll-rtl {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-client-scroll-rtl {
            animation: client-scroll-rtl 40s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
