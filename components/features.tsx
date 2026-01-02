export default function Features() {
  const features = [
    {
      number: "1",
      title: "Quality First",
      description: "Every batch tested for purity and freshness",
    },
    {
      number: "2",
      title: "Eco-Conscious",
      description: "Glass bottles - reusable, recyclable, sustainable",
    },
    {
      number: "3",
      title: "Customer Care",
      description: "Flexible delivery and subscription plans for you",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Makes Us Different</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.number} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 text-2xl font-bold">
                {feature.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
