"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/farm", label: "Our Farm" },
    { href: "/delivery", label: "Delivery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold italic text-green-700">
          Sanu Dairy
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground hover:text-green-700 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-3">
          <a
            href="tel:+919341556196"
            className="px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-green-700 transition-colors">
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919341556196"
              className="w-full px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors text-center"
            >
              Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
