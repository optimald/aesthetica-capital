'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clientLogos = [
  { src: '/images/logo-01.svg', alt: 'AriseHealth', name: 'AriseHealth' },
  { src: '/images/logo-02.svg', alt: 'OE', name: 'OE' },
  { src: '/images/logo-03.svg', alt: '2020INC', name: '2020INC' },
  { src: '/images/logo-04.svg', alt: 'The Paak', name: 'The Paak' },
  { src: '/images/logo-05.svg', alt: 'Ephicient', name: 'Ephicient' },
  { src: '/images/logo-08.svg', alt: 'Toogether', name: 'Toogether' }
]

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-600 mb-8">
            Trusted by leading businesses
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="max-h-10 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
