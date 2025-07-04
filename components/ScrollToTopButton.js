"use client"

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-50 shadow-lg"
    >
      ↑
    </button>
  )
}
