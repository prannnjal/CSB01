export default function ClientLogosSection() {
  const clients = [
    "Arby Crafty",
    "Nazeer FOODS",
    "MALATA DAIRY FORTE",
    "Potrea Smart Care",
    "NEAT MEATS",
    "SKINROOTS",
    "DEEPAK BAJAJ",
    "ARC DENTAL CLINIC",
    "Alveo Dental CLINIC",
    "AbsolutteClinic",
    "DCV LOGISTICS",
    "WOMEN LISTED",
    "TATA",
    "Karigari",
    "Le MERIDIEN",
    "JEWELSIFY",
    "FEURICK",
    "MASAN GROUP",
  ]

  return (
    <section className="bg-black py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="border border-gray-700 p-4 lg:p-6 flex items-center justify-center h-20 lg:h-24 hover:border-gray-500 transition-colors"
            >
              <span className="text-white text-xs lg:text-sm font-semibold text-center">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
