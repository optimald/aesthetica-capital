'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FinancingOptions() {
  return (
    <section className="growth-card-section-vdesktop">
      <div className="container">
        <div className="features-layout">
          <motion.h4
            className="heading-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your Growth Starts Here - Explore Custom Financing Options
          </motion.h4>
          
          <div className="w-layout-grid features-component-layout">
            <motion.a
              href="/apply"
              target="_blank"
              className="layout-wrapper"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/loan-icon.svg"
                  width={30}
                  height={30}
                  alt="Loan icon"
                />
              </div>
              <h4 className="heading-3">Startup Capital Loan</h4>
              <div className="paragraph">
                - Launch or grow your business with ease<br/>
                - Requires 680+ credit score<br/>
                - $20,000 - $560,000<br/>
                - 1-5 year terms<br/>
                - Pre-qualify with a soft credit check
              </div>
              <p className="paragraph-2">Learn More <strong>→</strong></p>
            </motion.a>

            <motion.a
              href="/apply"
              target="_blank"
              className="layout-wrapper"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/business-icon.svg"
                  width={30}
                  height={30}
                  alt="Business icon"
                />
              </div>
              <h4>Business Cash Advance</h4>
              <div className="paragraph">
                - Fast access to capital in 24 hours or less<br/>
                - No minimum credit score required<br/>
                - Daily or weekly payments
              </div>
              <p className="paragraph-2">Learn More <strong>→</strong></p>
            </motion.a>

            <motion.a
              href="/apply"
              target="_blank"
              className="layout-wrapper tall"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/finance-icon.svg"
                  width={50}
                  height={50}
                  alt="Finance icon"
                />
              </div>
              <h4><strong>Equipment Financing</strong></h4>
              <div className="paragraph">
                - Finance new equipment or leverage existing assets<br/>
                - Financing, leasing, or leasebacks available<br/>
                - 1 year in business required<br/>
                - Terms up to 5 years
              </div>
              <p className="paragraph-2">Learn More <strong>→</strong></p>
              <Image
                src="/images/fintech-card.png"
                width={300}
                height={200}
                alt="Credit cards"
                className="feature-card-image"
              />
            </motion.a>

            <motion.a
              href="/apply"
              target="_blank"
              className="layout-wrapper wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="wide-content">
                <div className="featured-icon-wrapper">
                  <Image
                    src="/images/icons/credit-card-white.svg"
                    width={30}
                    height={30}
                    alt="Credit card icon"
                  />
                </div>
                <h4><strong>Business Line of Credit</strong></h4>
                <div className="paragraph">
                  - Access only what you need, when you need it<br/>
                  - $5,000 - $55,000<br/>
                  - 24-hour approval with same-day funding<br/>
                  - Simple online application
                </div>
              </div>
              <p className="paragraph-2">Learn More <strong>→</strong></p>
            </motion.a>

            <motion.a
              href="/apply"
              target="_blank"
              className="layout-wrapper"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/unsecured-icon.svg"
                  width={35}
                  height={35}
                  alt="Unsecured loan icon"
                />
              </div>
              <h4><strong>Unsecured Business Loan</strong></h4>
              <div className="paragraph">
                - Fast capital with no collateral needed<br/>
                - $20,000 - $500,000<br/>
                - Affordable fixed payments<br/>
                - Receive funds within 24 hours
              </div>
              <p className="paragraph-2">Learn More <strong>→</strong></p>
            </motion.a>

            <motion.a
              href="/apply"
              target="_blank"
              className="layout-wrapper"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/sba-icon.svg"
                  width={30}
                  height={30}
                  alt="SBA icon"
                />
              </div>
              <h4><strong>SBA 7(a) Growth Loan</strong></h4>
              <div className="paragraph">
                - Backed by the SBA for long-term growth<br/>
                - $30,000 - $500,000 available nationwide<br/>
                - Terms up to 10 years, 6%-10% rates<br/>
                - 2+ years in business & 680+ credit score<br/>
                - Business must meet SBA eligibility
              </div>
              <p className="paragraph-2">Learn More <strong>→</strong></p>
            </motion.a>

            <motion.a
              href="/apply"
              target="_blank"
              className="layout-wrapper"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/credit-card-white.svg"
                  width={30}
                  height={30}
                  alt="Credit card icon"
                />
              </div>
              <h4><strong>Business Credit Cards</strong></h4>
              <div className="paragraph">
                - Build and strengthen your business credit profile<br/>
                - Access flexible spending with customizable credit limits
              </div>
              <p className="paragraph-2">Learn More <strong>→</strong></p>
            </motion.a>
          </div>
        </div>
        
        <Image
          src="/images/background-gradient.svg"
          width={1920}
          height={1080}
          alt=""
          className="bg-gradient"
        />
        <Image
          src="/images/background-gradient.svg"
          width={1920}
          height={1080}
          alt=""
          className="bg-gradient right"
        />
      </div>

      <style jsx>{`
        .growth-card-section-vdesktop {
          background: 
            linear-gradient(135deg, #0a0a0a 0%, #1a0d2e 15%, #2d1b69 35%, #4c1d95 55%, #7c3aed 75%, #a855f7 90%, #c084fc 100%),
            radial-gradient(circle at 30% 70%, rgba(124, 58, 237, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.2) 0%, transparent 50%);
          padding: 140px 0;
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

        .features-layout {
          text-align: center;
          margin-bottom: 80px;
        }

        .heading-2 {
          font-size: 36px;
          font-weight: 700;
          color: white;
          margin-bottom: 60px;
          line-height: 1.3;
        }

        .w-layout-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, minmax(300px, auto));
          gap: 40px;
          margin-bottom: 80px;
        }

        .layout-wrapper {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 40px;
          border-radius: 24px;
          text-decoration: none;
          color: #ffffff;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          min-height: 300px;
          box-shadow: 
            0 8px 32px rgba(124, 58, 237, 0.15),
            0 4px 16px rgba(168, 85, 247, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .layout-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(192, 132, 252, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 24px;
        }

        .layout-wrapper:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 
            0 20px 60px rgba(124, 58, 237, 0.25),
            0 10px 30px rgba(168, 85, 247, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          border-color: rgba(192, 132, 252, 0.4);
          background: rgba(255, 255, 255, 0.15);
        }

        .layout-wrapper:hover::before {
          opacity: 1;
        }

        .layout-wrapper.tall {
          grid-row: span 2 !important;
          min-height: 630px !important;
          background: #2d1b69 !important;
          border: 2px solid #8b5cf6 !important;
        }

        .layout-wrapper.wide {
          grid-column: span 2 !important;
          background: #1e3a8a !important;
          border: 2px solid #6366f1 !important;
        }

        .featured-icon-wrapper {
          width: 68px;
          height: 68px;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 25px rgba(124, 58, 237, 0.4),
            0 4px 12px rgba(168, 85, 247, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .layout-wrapper:hover .featured-icon-wrapper {
          transform: scale(1.15) rotate(8deg);
          box-shadow: 
            0 15px 40px rgba(124, 58, 237, 0.6),
            0 8px 20px rgba(168, 85, 247, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .heading-3,
        .layout-wrapper h4 {
          font-size: 26px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.2;
          font-family: 'Inter', sans-serif;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .paragraph {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 28px;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
        }

        .paragraph.max-width-40ch {
          max-width: 40ch;
        }

        .paragraph-2 {
          font-size: 16px;
          font-weight: 700;
          color: #c084fc;
          margin: 0;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
          text-shadow: 0 2px 8px rgba(192, 132, 252, 0.4);
        }

        .layout-wrapper:hover .paragraph-2 {
          color: #e879f9;
          text-shadow: 0 2px 12px rgba(232, 121, 249, 0.6);
        }

        .feature-card-image {
          width: 100%;
          height: auto;
          border-radius: 12px;
          margin-top: 24px;
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
            gap: 20px;
          }

          .layout-wrapper {
            padding: 30px 20px;
          }

          .heading-2 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  )
}