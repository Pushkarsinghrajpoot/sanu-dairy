import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductCards from "@/components/product-cards"
import WhyChooseUs from "@/components/why-choose-us"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export const metadata = {
  title: "Sanu Dairy - Fresh Farm Milk Delivery in Aurangabad, Bihar",
  description:
    "Fresh, pure milk delivered daily to your doorstep in eco-friendly glass bottles. Premium dairy products from Aurangabad's trusted dairy farm.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductCards />
      <WhyChooseUs />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
