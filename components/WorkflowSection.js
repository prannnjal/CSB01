import { Users, Monitor, Play, BarChart3, TrendingUp, Target } from "lucide-react"

export default function WorkflowSection() {
  return (
    <section id="workflow" className="bg-black py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Workflow Process</h2>
          <p className="text-gray-400">From concept to delivery - our proven methodology</p>
        </div>

        <div className="relative">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8 items-center mb-8 lg:mb-12">
            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 relative hover:bg-gray-600 transition-colors cursor-pointer">
                <Users className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                <div className="absolute -right-2 -top-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">👥</span>
                </div>
              </div>
              <h4 className="text-white font-semibold text-sm lg:text-base">Client's Brief</h4>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-500 transition-colors cursor-pointer">
                <div className="text-white text-lg lg:text-xl">💡</div>
              </div>
              <h4 className="text-white font-semibold text-sm lg:text-base">Brain Storming</h4>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-gray-500 hover:bg-gray-600 transition-colors cursor-pointer">
                <Monitor className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold text-sm lg:text-base">Wireframe</h4>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-gray-600 transition-colors cursor-pointer">
                <div className="text-white text-lg lg:text-xl">☕</div>
              </div>
              <h4 className="text-white font-semibold text-sm lg:text-base">Tea - Breaks</h4>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-teal-400 hover:bg-teal-500 transition-colors cursor-pointer">
                <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold text-sm lg:text-base">Analysis</h4>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-gray-100 transition-colors cursor-pointer">
                <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
              </div>
              <h4 className="text-white font-semibold text-sm lg:text-base">Strategy</h4>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-yellow-500 transition-colors cursor-pointer">
                <div className="text-white text-lg lg:text-xl">💡</div>
              </div>
              <h4 className="text-white font-semibold text-sm lg:text-base">Solution</h4>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-gray-500 hover:bg-gray-600 transition-colors cursor-pointer">
                <div className="text-white text-lg lg:text-xl font-bold">β</div>
              </div>
              <h4 className="text-white font-semibold text-sm lg:text-base">Beta</h4>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-gray-600 transition-colors cursor-pointer">
                <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold text-sm lg:text-base">Presentation</h4>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-gray-600 transition-colors cursor-pointer">
                <Users className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold text-sm lg:text-base">Implementation</h4>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-orange-500 transition-colors cursor-pointer">
                <Target className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold text-sm lg:text-base">Project Delivery</h4>
            </div>
          </div>

          {/* Connecting Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" style={{ zIndex: -1 }}>
              <defs>
                <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
                  <circle cx="2" cy="2" r="1" fill="#4B5563" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
