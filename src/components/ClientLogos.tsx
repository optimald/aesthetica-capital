'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  { src: '/images/logo-01.svg', alt: 'AriseHealth' },
  { src: '/images/logo-03.svg', alt: 'OE' },
  { src: '/images/logo-04.svg', alt: '2020INC' },
  { src: '/images/logo-02.svg', alt: 'The Paak' },
  { src: '/images/logo-05.svg', alt: 'Ephicient' },
  { src: '/images/logo-08.svg', alt: 'Toogether' }
]

export default function ClientLogos() {
  return (
    <section className="logos-section">
      <div className="container">
        <motion.div 
          className="logos-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="client-logo"
            />
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .logos-section {
          padding: 60px 0;
          background: white;
          border-bottom: 1px solid #e5e7eb;
        }

        .logos-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        :global(.client-logo) {
          filter: grayscale(100%);
          opacity: 0.6;
          transition: all 0.3s;
        }

        :global(.client-logo:hover) {
          filter: grayscale(0%);
          opacity: 1;
        }

        @media (max-width: 768px) {
          .logos-wrapper {
            justify-content: center;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  )
}