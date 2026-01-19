"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-700">We'd love to hear from you. Get in touch with us today.</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white p-8 rounded-2xl border border-border text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Reach us via phone for immediate assistance</p>
              <a
                href="tel:+919155936738"
                className="text-green-700 font-bold text-xl hover:text-green-800 transition-colors"
              >
                +91 9155936738
              </a>
              <p className="text-sm text-gray-500 mt-4">Available: Mon-Sun, 5:00 AM - 8:00 PM</p>
            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-2xl border border-border text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Location</h3>
              <p className="text-gray-600 mb-4">Visit us at our dairy farm</p>
              <p className="text-gray-800 font-semibold">
                Aurangabad
                <br />
                Bihar, India
              </p>
              <p className="text-sm text-gray-500 mt-4">Serving nearby areas with daily delivery</p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-2xl border border-border text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Send Message</h3>
              <p className="text-gray-600 mb-4">Use the form below to send us your inquiry</p>
              <p className="text-gray-800 font-semibold">We'll respond within 24 hours</p>
              <p className="text-sm text-gray-500 mt-4">Business hours: 5:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-28 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Send Us a Message</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Have questions? Fill out the form below and we'll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-border space-y-6">
            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-semibold text-center">
                Thank you for your message! We'll be in touch soon.
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="+91 9155936738"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              >
                <option value="">Select a subject...</option>
                <option value="subscription">New Subscription Inquiry</option>
                <option value="existing">Existing Subscription Issue</option>
                <option value="products">Product Information</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="bulk">Bulk Order Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 resize-none"
                placeholder="Please tell us how we can help..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Business Information</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">PHONE</p>
                  <a
                    href="tel:+919155936738"
                    className="text-green-700 font-semibold text-lg hover:text-green-800 transition-colors"
                  >
                    +91 9155936738
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">LOCATION</p>
                  <p className="text-gray-800 font-semibold">Aurangabad, Bihar, India</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">BUSINESS HOURS</p>
                  <p className="text-gray-800 font-semibold">Monday - Sunday</p>
                  <p className="text-gray-800 font-semibold">5:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Responses</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">SUBSCRIPTION INQUIRY</p>
                  <p className="text-gray-700">Call us to start your fresh milk subscription today.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">SERVICE ISSUES</p>
                  <p className="text-gray-700">Report any delivery issues immediately for quick resolution.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">BULK ORDERS</p>
                  <p className="text-gray-700">Contact us for special corporate or bulk order rates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Service Area</h2>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center border border-border">
            <div className="text-center">
              <p className="text-2xl text-gray-600 font-semibold mb-4">📍 Aurangabad, Bihar</p>
              <p className="text-gray-600">
                We serve the central areas and nearby neighborhoods of Aurangabad with daily fresh milk delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Get in Touch Today</h2>
          <p className="text-xl text-green-100">
            Questions? We're here to help. Call us or send a message - we respond quickly.
          </p>
          <a
            href="tel:+919341556196"
            className="inline-block px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors"
          >
            Call Now: +91 9341556196
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
