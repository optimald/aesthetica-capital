'use client'

import { motion } from 'framer-motion'
import { Building2, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  banking: [
    { name: 'Business Loans', href: '#' },
    { name: 'Equipment Financing', href: '#' },
    { name: 'Line of Credit', href: '#' },
    { name: 'SBA Loans', href: '#' }
  ],
  solutions: [
    { name: 'Startup Capital', href: '#' },
    { name: 'Cash Advance', href: '#' },
    { name: 'Credit Cards', href: '#' },
    { name: 'Unsecured Loans', href: '#' }
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Calculator', href: '#' },
    { name: 'FAQ', href: '#' }
  ],
  support: [
    { name: 'Contact Us', href: '#' },
    { name: 'Live Chat', href: '#' },
    { name: 'Phone Support', href: '#' },
    { name: 'Email Support', href: '#' }
  ]
}

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Instagram', href: '#' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-indigo-400 mr-3" />
              <span className="text-2xl font-bold">Aesthetica Capital</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering aesthetic and wellness businesses with transparent financing, 
              fast approvals, and personalized support for confident growth.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3" />
                <span>1-800-AESTHETICA</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@aestheticacapital.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 capitalize">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 Aesthetica Capital. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
