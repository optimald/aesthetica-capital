'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CTA() {
  return (
    <section className="growth-card-section-vmobile cta">
      <div className="w-layout-blockcontainer container w-container">
        <div className="cta-layout">
          <motion.div
            className="cta-content-component"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="hero-text-wrapper">
              <h1 className="heading hero">Begin the journey.</h1>
              <div className="heading text-color-gray500">
                Embrace a new era of financial management
              </div>
            </div>
            <div className="button-row">
              <a href="https://www.aesthetica-capital.com/" target="_blank" className="button">
                <div>Get started</div>
              </a>
              <a href="https://www.aesthetica-capital.com/" target="_blank" className="button-secondary">
                <div>Learn more</div>
              </a>
            </div>
          </motion.div>
          
          <motion.img
            className="image-cta"
            src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/6862fb16fe3dc646bb7b61ff_EN%20-%20CTA%20Image.webp"
            alt="Image showcasing an intuitive bank account management interface with credit card details."
            width={1422}
            height={800}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <style jsx>{`
        .growth-card-section-vmobile {
          background: #0a0a0a;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .w-layout-blockcontainer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .cta-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .cta-content-component {
          text-align: left;
        }

        .hero-text-wrapper {
          margin-bottom: 40px;
        }

        .heading.hero {
          font-size: 48px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .heading.text-color-gray500 {
          font-size: 24px;
          color: #9ca3af;
          line-height: 1.5;
        }

        .button-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .button {
          display: inline-block;
          padding: 16px 32px;
          background: #d4af37;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .button:hover {
          background: #b8941f;
          transform: translateY(-2px);
        }

        .button-secondary {
          display: inline-block;
          padding: 16px 32px;
          background: transparent;
          color: white;
          text-decoration: none;
          border: 2px solid #d4af37;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .button-secondary:hover {
          background: #d4af37;
          transform: translateY(-2px);
        }

        .image-cta {
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .cta-layout {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .heading.hero {
            font-size: 36px;
          }

          .heading.text-color-gray500 {
            font-size: 20px;
          }

          .button-row {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
