import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Our Farm - Quality Standards | Sanu Dairy",
  description:
    "Discover our modern dairy farm in Aurangabad. Learn about our quality standards, hygienic practices, and sustainable farming methods.",
}

export default function FarmPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Farm</h1>
          <p className="text-xl text-gray-700">
            A modern dairy farm committed to quality, animal welfare, and sustainability
          </p>
        </div>
      </section>

      {/* Modern Infrastructure */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Modern Infrastructure</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Sanu Dairy operates with state-of-the-art facilities designed to maintain the highest standards of milk
                production and animal care. Our farm combines traditional dairy farming expertise with modern
                technology.
              </p>
              <ul className="space-y-4">
                {[
                  "Automated milking systems for hygiene",
                  "Climate-controlled cow housing",
                  "Advanced feed processing equipment",
                  "Modern waste management systems",
                  "Cold storage facilities for milk preservation",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-green-700 text-xl font-bold">✓</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 h-96 rounded-2xl flex items-center justify-center text-6xl">
              🏭
            </div>
          </div>
        </div>
      </section>

      {/* Cow Welfare */}
      <section className="py-20 md:py-28 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 h-96 rounded-2xl flex items-center justify-center text-6xl order-last md:order-first">
              🐄
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Animal Welfare & Care</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our cows are at the heart of Sanu Dairy. We believe that happy, healthy cows produce the best milk.
                Every aspect of our farm is designed with their well-being in mind.
              </p>
              <ul className="space-y-4">
                {[
                  "Spacious, clean living spaces with proper ventilation",
                  "Premium nutrition with balanced diet planning",
                  "Regular veterinary health checks",
                  "Comfortable resting areas and exercise space",
                  "Clean water supply throughout the day",
                  "Expert care from experienced handlers",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-green-700 text-xl font-bold">•</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feed Quality */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Premium Feed Quality</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The quality of milk starts with the quality of feed. We source and prepare premium nutrition for our
                cattle to ensure maximum milk quality and health.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Nutritionally Balanced",
                    desc: "Carefully formulated diet with proteins, minerals, and vitamins",
                  },
                  {
                    title: "High-Grade Ingredients",
                    desc: "Only the best quality feed components are used",
                  },
                  {
                    title: "Regular Testing",
                    desc: "Feed quality is tested regularly for safety",
                  },
                  {
                    title: "Fresh Feed Daily",
                    desc: "We provide fresh feed prepared daily for optimal nutrition",
                  },
                ].map((feed) => (
                  <div key={feed.title}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feed.title}</h3>
                    <p className="text-gray-600">{feed.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 h-96 rounded-2xl flex items-center justify-center text-6xl">
              🌾
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene & Quality Control */}
      <section className="py-20 md:py-28 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Hygiene & Quality Control</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Milking Process</h3>
              <ul className="space-y-3">
                {[
                  "Automated, hygienic milking systems",
                  "Strict cleaning protocols between each milking",
                  "Temperature-controlled storage",
                  "Regular equipment sanitization",
                  "Trained handlers with food safety certification",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Testing</h3>
              <ul className="space-y-3">
                {[
                  "Daily bacterial count testing",
                  "Nutritional composition verification",
                  "Purity and contamination checks",
                  "Temperature monitoring throughout delivery",
                  "Third-party quality certifications",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-100 to-teal-100 h-96 rounded-2xl flex items-center justify-center text-6xl order-last md:order-first">
              ♻️
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sustainability & Environment</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We're committed to sustainable farming practices that protect our environment for future generations.
              </p>
              <ul className="space-y-4">
                {[
                  "Eco-friendly glass bottles that are fully recyclable",
                  "Waste management systems that reduce environmental impact",
                  "Water conservation and recycling practices",
                  "Organic disposal of farm waste",
                  "Minimal chemical usage in operations",
                  "Community-focused local farming model",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-green-700 text-xl">🌱</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards Summary */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Quality Standards</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🥛", title: "Purity", desc: "100% pure milk, no adulteration" },
              { icon: "🏥", title: "Safety", desc: "Meets all food safety standards" },
              { icon: "✓", title: "Testing", desc: "Rigorous quality control checks" },
              { icon: "🌱", title: "Natural", desc: "No artificial additives" },
            ].map((standard) => (
              <div key={standard.title} className="bg-white p-6 rounded-2xl text-center border border-border">
                <div className="text-5xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.title}</h3>
                <p className="text-gray-600">{standard.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experience Our Quality</h2>
          <p className="text-xl text-green-100">
            Taste the difference that modern farming, animal care, and quality standards make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919155936738"
              className="inline-block px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors"
            >
              Start Your Subscription
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-green-800 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
