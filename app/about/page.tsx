import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Sanu Dairy - Our Story & Mission",
  description:
    "Learn about Sanu Dairy's commitment to pure, fresh milk from our modern dairy farm in Aurangabad, Bihar.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Sanu Dairy was founded with a simple mission: to bring pure, fresh milk to every family in Aurangabad. We
            believe in the power of quality and transparency, combining modern dairy farming techniques with a deep
            commitment to animal welfare and environmental sustainability.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-green-50 p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the most trusted dairy brand in Aurangabad and Bihar, recognized for our unwavering commitment
                to quality, purity, and sustainability.
              </p>
            </div>
            <div className="bg-blue-50 p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide fresh, nutritious milk and dairy products to families, ensuring the highest standards of
                hygiene, quality, and animal care while protecting our environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center text-3xl">
                🐄
              </div>
              <h3 className="text-xl font-bold text-gray-900">Healthy Cattle</h3>
              <p className="text-gray-600">
                Our cows are treated with utmost care, provided with premium nutrition and comfortable living spaces.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center text-3xl">
                🥛
              </div>
              <h3 className="text-xl font-bold text-gray-900">Pure Milking</h3>
              <p className="text-gray-600">
                Modern, hygienic milking equipment ensures fresh milk without contamination at every step.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quality Testing</h3>
              <p className="text-gray-600">
                Every batch is tested for purity, freshness, and nutritional value before delivery.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center text-3xl">
                🚚
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fresh Delivery</h3>
              <p className="text-gray-600">
                We deliver milk daily to your doorstep in eco-friendly glass bottles to maintain freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">Our Commitment</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Purity & Quality</h3>
              <p className="text-gray-700 text-lg">
                We maintain the highest standards of hygiene and quality control throughout our entire operation, from
                farm to delivery.
              </p>
            </div>
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Animal Welfare</h3>
              <p className="text-gray-700 text-lg">
                Our cows are our pride. We provide them with premium feed, spacious facilities, and veterinary care to
                ensure their health and happiness.
              </p>
            </div>
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-700 text-lg">
                Through eco-friendly glass bottles and sustainable farming practices, we're committed to protecting our
                environment for future generations.
              </p>
            </div>
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Trust & Transparency</h3>
              <p className="text-gray-700 text-lg">
                We believe in complete transparency with our customers. You always know exactly where your milk comes
                from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Join the Sanu Dairy Family</h2>
          <p className="text-xl text-green-100">
            Start enjoying pure, fresh milk delivered to your doorstep every morning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919341556196"
              className="px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors text-center"
            >
              Call Now: +91 9341556196
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
