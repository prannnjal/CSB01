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

  // Duplicate the array for seamless looping
  const logos = [...clients, ...clients];

  return (
    <section className="bg-white/95 backdrop-blur-md text-gray-900 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-500">Esteemed Clients</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex whitespace-nowrap animate-client-scroll">
            {logos.map((client, index) => (
              <div key={client.image + client.name + index} className="flex-shrink-0 flex items-center justify-center px-6 py-2" style={{ width: 160 }}>
                <Image
                  src={client.image}
                  alt={client.name}
                  width={140}
                  height={140}
                  className="object-contain w-[140px] h-[80px] md:w-[160px] md:h-[100px]"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes client-scroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-client-scroll {
          animation: client-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
