"use client"

export default function ServicesSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="bg-gradient-to-r from-red-500 to-orange-500 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="text-center text-white cursor-pointer hover:transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 flex items-center justify-center">
              <div className="text-2xl lg:text-4xl">💡</div>
            </div>
            <h3 className="text-lg lg:text-xl font-bold">CREATIVE</h3>
          </div>
          <div className="text-center text-white cursor-pointer hover:transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 flex items-center justify-center">
              <div className="text-2xl lg:text-4xl">{"</>"}</div>
            </div>
            <h3 className="text-lg lg:text-xl font-bold">DEVELOPMENT</h3>
          </div>
          <div className="text-center text-white cursor-pointer hover:transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 flex items-center justify-center">
              <div className="text-2xl lg:text-4xl">📈</div>
            </div>
            <h3 className="text-lg lg:text-xl font-bold">CONVERSION</h3>
          </div>
          <div className="text-center text-white cursor-pointer hover:transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 flex items-center justify-center">
              <div className="text-2xl lg:text-4xl">🔗</div>
            </div>
            <h3 className="text-lg lg:text-xl font-bold">ENGAGEMENT</h3>
          </div>
        </div>

        <div className="text-center text-white">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            Chalksnboard Delivered <span className="font-black">Brilliance</span> - Recent Work
          </h2>
          <p className="text-lg lg:text-xl mb-6">Blending Innovation & Execution Seamlessly</p>
          <div className="w-16 h-1 bg-white mx-auto mt-6 lg:mt-8 mb-8"></div>
          <button
            onClick={scrollToPortfolio}
            className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            VIEW OUR WORK
          </button>
        </div>
      </div>
    </section>
  )
}
