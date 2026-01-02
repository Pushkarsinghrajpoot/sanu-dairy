import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-green-50 to-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-green-700">Pure.</span> Fresh.{" "}
              <span className="text-green-700">Farm-Delivered</span> Milk
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Fresh milk from our modern dairy farm delivered to your doorstep in eco-friendly glass bottles every
              morning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="tel:+919155936738"
              className="px-8 py-4 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors text-center"
            >
              Call Now: +91 9155936738
            </a>
            <Link
              href="/delivery"
              className="px-8 py-4 border-2 border-green-700 text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors text-center"
            >
              Subscribe for Daily Milk
            </Link>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base">
            <div className="space-y-2">
              <div className="text-3xl">🐄</div>
              <p className="font-semibold text-gray-900">Healthy Cows</p>
              <p className="text-gray-600 text-sm">Premium nutrition & care</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🥛</div>
              <p className="font-semibold text-gray-900">Fresh Milk</p>
              <p className="text-gray-600 text-sm">Farm to home daily</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">♻️</div>
              <p className="font-semibold text-gray-900">Glass Bottles</p>
              <p className="text-gray-600 text-sm">Eco-friendly & reusable</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">✓</div>
              <p className="font-semibold text-gray-900">Quality Assured</p>
              <p className="text-gray-600 text-sm">Highest standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
