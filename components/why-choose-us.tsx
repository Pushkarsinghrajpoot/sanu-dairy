export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Modern Dairy Farm",
      description: "State-of-the-art facilities with hygienic milking processes",
    },
    {
      title: "Healthy Cows",
      description: "Premium nutrition and best-quality feed for our cattle",
    },
    {
      title: "Glass Bottle Packaging",
      description: "Eco-friendly, reusable bottles protect milk freshness",
    },
    {
      title: "Daily Fresh Delivery",
      description: "Farm-to-home delivery every morning in your area",
    },
    {
      title: "Quality Assured",
      description: "Highest hygiene and quality standards throughout",
    },
    {
      title: "Local Excellence",
      description: "Trusted by families in Aurangabad, Bihar for years",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Why Choose Sanu Dairy?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to bringing pure, fresh milk to your family
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
