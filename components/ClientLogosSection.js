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

  return (
    <section className="bg-white/95 backdrop-blur-md text-gray-900 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-500">Esteemed Clients</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-xl p-4 lg:p-6 flex items-center justify-center h-24 lg:h-28 hover:border-red-500/50 hover:bg-red-50 hover:transform hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={120}
                height={120}
                className="object-contain w-full h-full max-w-[120px] max-h-[120px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
