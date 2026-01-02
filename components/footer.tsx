import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Sanu Dairy</h3>
            <p className="text-gray-300 text-sm">Pure, fresh milk delivered to your doorstep every morning.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/farm" className="hover:text-green-400 transition-colors">
                  Our Farm
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-green-400 transition-colors">
                  Delivery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:+919155936738" className="hover:text-green-400 transition-colors">
                  +91 9155936738
                </a>
              </li>
              <li>Aurangabad, Bihar</li>
              <li>India</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Mon - Sun: 5:00 AM - 8:00 PM</li>
              <li>Fresh delivery every morning</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Sanu Dairy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
