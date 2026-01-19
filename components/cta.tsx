import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-green-700">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Experience Pure, Fresh Milk?</h2>
        <p className="text-xl text-green-100 max-w-2xl mx-auto">
          Start your daily milk subscription today and taste the difference quality makes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/delivery"
            className="px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors text-center"
          >
            Subscribe Now
          </Link>
          <a
            href="tel:+919341556196"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-green-800 transition-colors text-center"
          >
            Call +91 9341556196
          </a>
        </div>
      </div>
    </section>
  )
}
