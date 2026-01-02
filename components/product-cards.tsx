import Link from "next/link"

const products = [
  {
    name: "Fresh Cow Milk",
    sizes: ["1L", "2L", "5L"],
    description: "Pure, fresh milk delivered daily in glass bottles",
    color: "bg-blue-50",
    icon: "🥛",
  },
  {
    name: "Curd",
    sizes: ["500g", "1kg"],
    description: "Creamy, nutritious homemade curd",
    color: "bg-yellow-50",
    icon: "🍲",
  },
  {
    name: "Ghee",
    sizes: ["250ml", "500ml"],
    description: "Pure, organic ghee made from premium milk",
    color: "bg-orange-50",
    icon: "🧈",
  },
  {
    name: "Paneer",
    sizes: ["200g", "400g"],
    description: "Fresh, soft paneer for your kitchen",
    color: "bg-purple-50",
    icon: "⬜",
  },
]

export default function ProductCards() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium dairy products crafted with care and quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.name} href="/products">
              <div className={`${product.color} p-8 rounded-2xl cursor-pointer hover:shadow-lg transition-all h-full`}>
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 bg-white text-gray-700 text-xs font-semibold rounded-full border border-gray-200"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
