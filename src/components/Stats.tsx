'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const [counts, setCounts] = useState({
    capital: 0,
    funded: 0,
    approval: 0
  })

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 60 // 60 steps for smooth animation
      const stepDuration = duration / steps

      // Animate capital from 0 to 900
      const capitalInterval = setInterval(() => {
        setCounts(prev => ({
          ...prev,
          capital: Math.min(prev.capital + 15, 900)
        }))
      }, stepDuration)

      // Animate funded from 0 to 100
      const fundedInterval = setInterval(() => {
        setCounts(prev => ({
          ...prev,
          funded: Math.min(prev.funded + 1.67, 100)
        }))
      }, stepDuration)

      // Animate approval from 0 to 90
      const approvalInterval = setInterval(() => {
        setCounts(prev => ({
          ...prev,
          approval: Math.min(prev.approval + 1.5, 90)
        }))
      }, stepDuration)

      // Clear intervals after animation completes
      setTimeout(() => {
        clearInterval(capitalInterval)
        clearInterval(fundedInterval)
        clearInterval(approvalInterval)
      }, duration)

      return () => {
        clearInterval(capitalInterval)
        clearInterval(fundedInterval)
        clearInterval(approvalInterval)
      }
    }
  }, [isInView])
  return (
    <section className="data-section-desktop metrics" ref={ref}>
      <div className="container">
        <div className="layout-metrics">
          <motion.h2
            className="heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Data Tells the Story
          </motion.h2>
          
          <motion.div
            className="w-layout-grid layout-list-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="layout-text-wrapper">
              <div className="heading">${Math.floor(counts.capital)}M</div>
              <div className="paragraph">In Capital Provided</div>
            </div>
            
            <div className="vertical-divider"></div>
            
            <div className="layout-text-wrapper">
              <div className="heading">{Math.floor(counts.funded)}+</div>
              <div className="paragraph">Funded</div>
            </div>
            
            <div className="vertical-divider"></div>
            
            <div className="layout-text-wrapper">
              <div className="heading">{Math.floor(counts.approval)}%</div>
              <div className="paragraph">Approval Rate</div>
            </div>
          </motion.div>
        </div>
        
        <Image
          src="/images/background-gradient.svg"
          width={1920}
          height={1080}
          alt=""
          className="bg-gradient right"
        />
        <Image
          src="/images/background-gradient.svg"
          width={1920}
          height={1080}
          alt=""
          className="bg-gradient"
        />
      </div>

      <style jsx>{`
        .data-section-desktop {
          background: #0a0a0a;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .layout-metrics {
          text-align: center;
        }

        .heading {
          font-size: 48px;
          font-weight: 700;
          color: white;
          margin-bottom: 80px;
          line-height: 1.2;
        }

        .w-layout-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
          align-items: center;
        }

        .layout-text-wrapper {
          text-align: center;
          padding: 24px;
          border-radius: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .layout-text-wrapper:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

                  .layout-text-wrapper .heading {
            font-size: 80px;
            font-weight: 900;
            background: linear-gradient(135deg, #d4af37 0%, #b8941f 30%, #9a7c1a 60%, #7a5f0a 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
            line-height: 0.9;
            text-shadow: 0 6px 15px rgba(124, 58, 237, 0.4);
            letter-spacing: -0.02em;
          }

        .layout-text-wrapper .paragraph {
          font-size: 22px;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .vertical-divider {
          width: 2px;
          height: 80px;
          background: linear-gradient(to bottom, transparent, #d4af37, transparent);
          margin: 0 auto;
        }

        .bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          z-index: 1;
        }

        .bg-gradient.right {
          right: 0;
          left: auto;
        }

        @media (max-width: 768px) {
          .w-layout-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .vertical-divider {
            display: none;
          }

          .layout-text-wrapper .heading {
            font-size: 48px;
          }

          .heading {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  )
}
