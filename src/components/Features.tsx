'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, Settings, Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: Clock,
    title: "Quick & Hassle-Free Process",
    description: "Apply in minutes, get approved in as little as 24 hours, and access your funds without delay.",
    image: "/images/fintech-card.png"
  },
  {
    icon: Shield,
    title: "No Hidden Fees",
    description: "What you see is what you get—transparent, upfront terms with no unexpected costs.",
    image: "/images/fintech-card.png"
  },
  {
    icon: Settings,
    title: "Flexible Funding Options",
    description: "Customized financing solutions tailored to the needs of your aesthetic or wellness business.",
    image: "/images/fintech-card.png"
  }
]

const ctaSections = [
  {
    icon: Phone,
    title: "Call to Speak With Us",
    description: "Get Pre-Qualified in Minutes Over the Phone. Our friendly loan consultants are here to answer your questions and guide you every step of the way.",
    action: "Call us Now",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: ArrowRight,
    title: "Start Your Application Online",
    description: "No Hassle. No Obligation. Just Straightforward Financing. Apply now to get matched with the best loan options for your aesthetic or medical business.",
    action: "Start My Application",
    color: "from-green-500 to-green-600"
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Smarter Way to Fund Your Aesthetic Business
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Aesthetica Capital, we empower practices with transparent financing, fast approvals, and personalized support—so you can grow with confidence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className="object-contain"
                />
                <div className="absolute top-4 left-4">
                  <feature.icon className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {ctaSections.map((cta, index) => (
            <motion.div
              key={cta.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${cta.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <cta.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{cta.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{cta.description}</p>
                  <button className={`bg-gradient-to-r ${cta.color} text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center`}>
                    {cta.action}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}