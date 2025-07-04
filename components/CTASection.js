"use client"

export default function CTASection() {
  const handleContactClick = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-black py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-white mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">
              A coffee with us can <span className="underline decoration-red-500">double your</span>
            </h2>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
              <span className="underline decoration-red-500">business growth</span> in the next quarter.
            </h2>
          </div>
          <button
            onClick={handleContactClick}
            className="bg-red-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors"
          >
            <span className="text-lg">🚀</span>
            <div className="text-left">
              <div className="font-semibold text-sm lg:text-base">Let's Grow Together</div>
              <div className="text-xs lg:text-sm">Driving Growth Since 2008</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
