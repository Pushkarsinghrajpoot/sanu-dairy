import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Sanu Dairy Products - Fresh Milk & Dairy",
  description: "Explore our range of fresh dairy products including milk, curd, ghee, butter, and paneer.",
}

const milkProduct = {
  name: "Fresh Cow Milk",
  description: "Pure, fresh milk delivered daily in eco-friendly glass bottles",
  sizes: [
    {
      size: "1 Liter",
      price: "₹60",
      description: "Perfect for daily needs, ideal for families starting out",
    },
    {
      size: "2 Liter",
      price: "₹110",
      description: "Most popular choice, great value for regular families",
    },
    {
      size: "5 Liter",
      price: "₹260",
      description: "Best for bulk users, covers your weekly needs",
    },
  ],
  benefits: [
    "100% pure, no adulteration",
    "Fresh daily delivery",
    "Glass bottles are eco-friendly",
    "Rich in calcium & protein",
  ],
}

const dairyProducts = [
  {
    name: "Curd",
    icon: "🍲",
    description: "Creamy, nutritious homemade curd",
    sizes: ["500g", "1kg"],
    benefits: ["Rich probiotics", "Freshly made daily", "Ideal for health"],
    color: "bg-yellow-50",
  },
  {
    name: "Ghee",
    icon: "🧈",
    description: "Pure, organic ghee made from premium milk",
    sizes: ["250ml", "500ml"],
    benefits: ["Traditional method", "High smoke point", "Rich, pure taste"],
    color: "bg-orange-50",
  },
  {
    name: "Butter",
    icon: "🧈",
    description: "Fresh, creamy butter perfect for cooking",
    sizes: ["200g", "500g"],
    benefits: ["No preservatives", "Freshly churned", "Golden color"],
    color: "bg-amber-50",
  },
  {
    name: "Paneer",
    icon: "⬜",
    description: "Fresh, soft paneer for your kitchen",
    sizes: ["200g", "400g"],
    benefits: ["High protein content", "Soft texture", "Freshly made"],
    color: "bg-purple-50",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-700">Premium dairy products made with care, delivered fresh to your door</p>
        </div>
      </section>

      {/* Fresh Milk Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fresh Cow Milk</h2>
            <p className="text-lg text-gray-600 mb-8">{milkProduct.description}</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {milkProduct.sizes.map((item) => (
                <div
                  key={item.size}
                  className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.size}</h3>
                  <p className="text-3xl font-bold text-green-700 mb-4">{item.price}</p>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <button className="w-full px-4 py-2 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors">
                    Order Now
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Why Our Milk?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {milkProduct.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="text-green-700 font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dairy Products Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Our Dairy Products</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {dairyProducts.map((product) => (
              <div key={product.name} className={`${product.color} p-8 rounded-2xl`}>
                <div className="text-6xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Available Sizes:</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 bg-white text-gray-700 text-sm font-semibold rounded-full border border-gray-200"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Key Benefits:</p>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span className="text-green-700 font-bold">•</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full px-4 py-2 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors">
                  Order {product.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Information */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How to Order</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Products</h3>
                <p className="text-gray-600">
                  Select from our range of fresh milk and dairy products based on your needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call to Order</h3>
                <p className="text-gray-600">
                  Contact us at <span className="font-semibold">+91 9155936738</span> to place your order or set up a
                  subscription.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Delivery</h3>
                <p className="text-gray-600">
                  We deliver to your doorstep early morning, ensuring maximum freshness and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Order?</h2>
          <p className="text-xl text-green-100">Call us today to place your order or set up a subscription.</p>
          <a
            href="tel:+919155936738"
            className="inline-block px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors"
          >
            Call +91 9155936738
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
