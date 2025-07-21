import { TrendingUp, Target, Users } from "lucide-react"

export default function AdditionalServiceCardsSection() {
  return (
    <section className="bg-gray-800 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Marketing */}
          <div className="bg-black rounded-2xl p-6 lg:p-8 text-center hover:transform hover:scale-105 transition-transform">
            <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Marketing</h3>
            <p className="text-gray-300 mb-6 text-sm lg:text-base">Strategic Marketing Solutions</p>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Know more
            </button>
          </div>

          {/* Paid Ads */}
          <div className="bg-black rounded-2xl p-6 lg:p-8 text-center hover:transform hover:scale-105 transition-transform">
            <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Target className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Paid Ads</h3>
            <p className="text-gray-300 mb-6 text-sm lg:text-base">Maximize Your Ad Spend With Confidence</p>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Know more
            </button>
          </div>

          {/* Retain */}
          <div className="bg-black rounded-2xl p-6 lg:p-8 text-center hover:transform hover:scale-105 transition-transform">
            <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Users className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Admission</h3>
            <p className="text-gray-300 mb-6 text-sm lg:text-base"> Strategies</p>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Know more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
