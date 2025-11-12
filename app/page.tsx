"use client"

import { useState } from "react"
import { Menu, X, ChevronDown, Instagram, Linkedin, Facebook, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import LogoImg from "@/app/assets/logo.png"
import handsImg from "@/app/assets/hands.png"
import team1 from "@/app/assets/Team1.png"
import team2 from "@/app/assets/Team2.png"
import team3 from "@/app/assets/Team3.png"
import team4 from "@/app/assets/Team4.png"
import team5 from "@/app/assets/Team5.png"
import team6 from "@/app/assets/Team6.png"
import team7 from "@/app/assets/Team7.png"
import team8 from "@/app/assets/Team8.png"
import team9 from "@/app/assets/Team9.png"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")

  const teamMembers = [
    {
      id: 1,
      image: team1,
    },
    {
      id: 2,
      image: team2,
    },
    {
      id: 3,
      image: team3,
    },
    {
      id: 4,
      image: team4,
    },
    {
      id: 5,
      image: team5,
    },
    {
      id: 6,
      image: team6,
    },
    {
      id: 7,
      image: team7,
    },
    {
      id: 8,
      image: team8,
    },
    {
      id: 9,
      image: team9,
    },
  ]

  const handleSubscribe = () => {
    alert(`Subscribed with: ${email}`)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image src={LogoImg} alt={"logo"} />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                About
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600">
                  Offshore Developer <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600">
                  Products <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600">
                  Our Expertise <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600">
                  Technologies <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600">
                  Resources <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Offshore Developer
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Products
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Our Expertise
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Technologies
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Resources
              </a>
              <button className="mt-2 w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>

      <section className="max-w-7xl mx-auto pt-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          The Innovators, Creators, and
          <br />
          Dreamers
        </h1>
        <p className="text-xl text-gray-200 mb-12">
          Our philosophy is simple: hire great people and give them the
          resources and support
          <br />
          to do their best work.
        </p>
      </section>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300"
              >
                <Image
                  src={member.image}
                  alt={`Team member ${member.id}`}
                  className="w-full h-64 object-cover"
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Image Generator Section */}
      <section className="py-20 px-4 bg-linear-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Turn your ideas into stunning visuals
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Stop imagining and start creating. Whether you&apos;re a
                designer, content creator, or just exploring your creativity,
                our AI Image Generator.
              </p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2">
                <span>Get a Free Consultation</span>
                <span>→</span>
              </button>
            </div>
            <div className="relative">
              <Image src={handsImg} alt="hands img" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Subscribe To Our Newsletter
          </h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
          />
          <button
            onClick={handleSubscribe}
            className="bg-blue-500 text-white px-8 py-3 hover:bg-blue-600 transition whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Offshore Developers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Our Expertise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Application Modernization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    CRM Development Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    ERP Software
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Data Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    DevOps Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cloud Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Staff Augmentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Hire Developers
                  </a>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Industries</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition">
                    FinTech
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Insurtech
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Proptech
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    EdTech
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Media & Entertainment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Retail
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Facility Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Supply Chain & Logistics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Telecom
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Travel & Hospitality
                  </a>
                </li>
              </ul>
            </div>

            {/* Offshore Developers */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">
                Offshore Developers
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Hire Backend Developer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Hire Frontend Developer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Hire App Developer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Hire DevOps Engineer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Hire AI Engineer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Hire Full Stack Developer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Hire Salesforce Developer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Hire PowerApps Developers
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Interns
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Global Locations with Flags */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="flex flex-wrap gap-6 justify-center items-center text-sm">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="text-2xl">🇮🇳</span>
                <span>India</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="text-2xl">🇺🇸</span>
                <span>New York, USA</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="text-2xl">🇦🇺</span>
                <span>Sydney, Australia</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="text-2xl">🇦🇪</span>
                <span>Dubai, UAE</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="text-2xl">🇬🇧</span>
                <span>London, UK</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="text-2xl">🇮🇹</span>
                <span>Milan, Italy</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="text-2xl">🇹🇭</span>
                <span>Thailand</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="text-2xl">🇿🇦</span>
                <span>South Africa</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="text-2xl">🇨🇦</span>
                <span>Canada</span>
              </a>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Social Media */}
              <div className="flex items-center gap-4">
                <span className="text-sm">Follow Us:</span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center text-sm">
                <p>
                  © 2016 - 2025 Alpixn Technologies Private Limited All Rights
                  Reserved
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex gap-4 text-sm">
                <a href="#" className="hover:text-white transition">
                  PRIVACY POLICY
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition">
                  SITEMAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
