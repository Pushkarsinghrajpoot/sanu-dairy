import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Delivery & Subscription Plans | Sanu Dairy",
  description:
    "Flexible milk subscription plans with early morning delivery to your doorstep in Aurangabad. Choose your convenience.",
}

export default function DeliveryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Delivery & Subscription</h1>
          <p className="text-xl text-gray-700">Fresh milk delivered early morning, right to your doorstep</p>
        </div>
      </section>

      {/* Delivery Benefits */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Our Delivery Service?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌅",
                title: "Early Morning Delivery",
                desc: "Fresh milk delivered between 5:00 AM - 7:00 AM for maximum freshness",
              },
              {
                icon: "♻️",
                title: "Eco-Friendly Packaging",
                desc: "Glass bottles that are reusable and recyclable for a sustainable future",
              },
              {
                icon: "📍",
                title: "Local Coverage",
                desc: "Serving Aurangabad and nearby areas with reliable daily delivery",
              },
              {
                icon: "🔄",
                title: "Easy Bottle Return",
                desc: "Simply leave your empty bottle outside for collection next day",
              },
              {
                icon: "🛡️",
                title: "Quality Guaranteed",
                desc: "Every bottle is sealed and temperature-controlled for safety",
              },
              {
                icon: "💳",
                title: "Flexible Payment",
                desc: "Weekly, monthly, or custom billing options available",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 md:py-28 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Subscription Plans</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Daily Plan */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Daily Fresh</h3>
              <p className="text-gray-600 mb-6">Perfect for daily milk needs</p>
              <div className="mb-8">
                <p className="text-sm text-gray-600 mb-2">Starting from</p>
                <p className="text-4xl font-bold text-green-700">₹55/day</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Daily milk delivery (1L or 2L)",
                  "5:30 AM - 7:00 AM delivery window",
                  "Eco-friendly glass bottles",
                  "Easy bottle collection next day",
                  "Pause anytime, no lock-in",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-green-700 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors">
                Get Started
              </button>
            </div>

            {/* Weekly Plan */}
            <div className="bg-white rounded-2xl border-4 border-green-700 p-8 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Weekly Saver</h3>
              <p className="text-gray-600 mb-6">Best value for regular users</p>
              <div className="mb-8">
                <p className="text-sm text-gray-600 mb-2">Starting from</p>
                <p className="text-4xl font-bold text-green-700">₹385/week</p>
                <p className="text-sm text-gray-600 mt-2">Save 5% vs daily rate</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "7 days of fresh milk delivery",
                  "Choose your milk size (1L, 2L, or mixed)",
                  "Eco-friendly glass bottles",
                  "Standard delivery window",
                  "Flexible schedule adjustments",
                  "Easy online or call management",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-green-700 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors">
                Get Started
              </button>
            </div>

            {/* Monthly Plan */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Premium</h3>
              <p className="text-gray-600 mb-6">Maximum savings on bulk</p>
              <div className="mb-8">
                <p className="text-sm text-gray-600 mb-2">Starting from</p>
                <p className="text-4xl font-bold text-green-700">₹1,650/month</p>
                <p className="text-sm text-gray-600 mt-2">Save 10% vs daily rate</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "30 days of continuous delivery",
                  "Customizable daily portions",
                  "Premium customer support",
                  "Eco-friendly glass bottles",
                  "Free occasional dairy products",
                  "Priority morning slot",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-green-700 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Custom Plan */}
          <div className="bg-green-100 border-2 border-green-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Plan</h3>
            <p className="text-gray-700 mb-6">
              Need something different? Create a custom plan tailored to your specific needs and preferences.
            </p>
            <a
              href="tel:+919155936738"
              className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors"
            >
              Call for Custom Plan: +91 9155936738
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">How It Works</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                number: "1",
                title: "Choose Your Plan",
                desc: "Select a subscription plan or create a custom one based on your needs.",
              },
              {
                number: "2",
                title: "Call to Subscribe",
                desc: "Contact us at +91 9155936738 to finalize your subscription and delivery address.",
              },
              {
                number: "3",
                title: "First Delivery",
                desc: "Receive your first bottle of fresh milk early morning the next day.",
              },
              {
                number: "4",
                title: "Daily Returns",
                desc: "Leave your empty glass bottles outside for collection - we pick them up next morning.",
              },
              {
                number: "5",
                title: "Easy Management",
                desc: "Pause, resume, or modify your subscription anytime with a quick call or message.",
              },
              {
                number: "6",
                title: "Enjoy Fresh Milk",
                desc: "Enjoy pure, fresh milk delivered consistently every morning to your doorstep.",
              },
            ].map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center font-bold flex-shrink-0 text-xl">
                  {step.number}
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Service Coverage</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Delivery Areas</h3>
              <ul className="space-y-3 text-gray-700">
                {["Central Aurangabad (CBD)", "Residential colonies", "Commercial areas", "Nearby neighborhoods"].map(
                  (area) => (
                    <li key={area} className="flex gap-2">
                      <span className="text-green-700 font-bold">•</span>
                      <span>{area}</span>
                    </li>
                  ),
                )}
              </ul>
              <p className="text-gray-600 mt-6 text-sm">
                Delivering fresh milk across Aurangabad with dedicated morning delivery routes
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Delivery Hours</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Monday - Sunday: 5:00 AM - 7:30 AM",
                  "Same-day orders (before 8:00 PM)",
                  "Holiday deliveries available",
                  "Special time slots on request",
                ].map((time) => (
                  <li key={time} className="flex gap-2">
                    <span className="text-green-700 font-bold">•</span>
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mt-6 text-sm">Consistent early morning delivery for maximum freshness</p>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-700 rounded-2xl p-8 text-center mt-8">
            <p className="text-gray-700 text-lg mb-4">Not in our delivery area yet?</p>
            <a href="tel:+919155936738" className="inline-block px-6 py-2 text-green-700 font-semibold hover:underline">
              Call us to inquire about expanding service to your area
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I change my subscription plan?",
                a: "Yes, you can upgrade, downgrade, or change your plan anytime. Just give us a call.",
              },
              {
                q: "What if I need to pause my subscription?",
                a: "You can pause your subscription for any duration without any penalties. Simply call us.",
              },
              {
                q: "How do the glass bottle returns work?",
                a: "Place your empty bottles outside on your doorstep, and our delivery person will collect them the next morning.",
              },
              {
                q: "Is the milk pasteurized?",
                a: "Yes, all our milk is safely pasteurized to maintain freshness while preserving nutrients.",
              },
              {
                q: "What if I miss collecting a bottle?",
                a: "We'll pick up your missed bottles within the next 3-4 days. No worries!",
              },
              {
                q: "Do you offer other dairy products?",
                a: "Yes! We offer curd, ghee, butter, and paneer. Ask about adding these to your order.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-border">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Subscribe?</h2>
          <p className="text-xl text-green-100">Join hundreds of families enjoying fresh milk every morning.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919155936738"
              className="inline-block px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors"
            >
              Call +91 9155936738
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-green-800 transition-colors"
            >
              Send Inquiry
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
