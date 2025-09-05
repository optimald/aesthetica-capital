'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Features() {
  return (
    <section className="rt-component-section-desktop">
      <div className="w-layout-blockcontainer rt-component-container w-container">
        <div>
          <div className="rt-home-four-star-block">
            <motion.h2
              className="rt-margin-bottom-twenty"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Smarter Way to Fund Your Aesthetic Business
            </motion.h2>
            <motion.p
              className="rt-body-font-color"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At Aesthetica Finance, we empower practices with transparent financing, fast approvals, and personalized support—so you can grow with confidence.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="w-layout-hflex rt-home-four-three-box-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="rt-home-four-three-box-one"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="rt-home-four-three-box-pic">
              <Image
                width={402}
                height={210}
                alt="Business Image"
                src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/686301fce12dda7fde4ec114_311c7e254ef238128b3431e9890d78d2_Business-Image.webp"
                className="rt-home-one-project-card-image"
              />
            </div>
            <div className="rt-home-four-three-box-data">
              <p className="rt-financial-paragraph">Apply in minutes, get approved in as little as 24 hours, and access your funds without delay.</p>
            </div>
          </motion.div>

          <motion.div
            className="rt-home-four-three-box-one"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rt-home-four-three-box-pic">
              <Image
                width={402}
                height={210}
                alt="Seamless Image"
                src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/686301fce12dda7fde4ec10f_e0d634d389425b166ef9bcdec3a10a9c_Seamless-Img.webp"
                className="rt-home-one-project-card-image"
              />
            </div>
            <div className="rt-home-four-three-box-data">
              <p className="rt-financial-paragraph">What you see is what you get-transparent, upfront terms with no unexpected costs.</p>
            </div>
          </motion.div>

          <motion.div
            className="rt-home-four-three-box-one"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rt-home-four-three-box-pic">
              <Image
                width={402}
                height={210}
                alt="Financial Image"
                src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/686301fce12dda7fde4ec118_830191e1f7dc50e415019bccab7d3c8b_Financial-Image.webp"
                className="rt-home-one-project-card-image"
              />
            </div>
            <div className="rt-home-four-three-box-data">
              <p className="rt-financial-paragraph">Customized financing solutions tailored to the unique needs of your aesthetic or wellness business.</p>
            </div>
          </motion.div>
        </motion.div>

        <section className="rt-component-section-3">
          <div className="w-layout-blockcontainer rt-component-container w-container">
            <motion.div
              className="w-layout-grid rt-home-four-support-grid rt-home-four-support-grid-two"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rt-home-four-support-card rt-radius-twenty">
                <div className="rt-card-image-container">
                  <Image
                    width={174}
                    height={142}
                    alt="Dashboard"
                    src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/68630d91cda4f82738e45644_9413822b8f13450a273bea95f0d09489_Img-2.png"
                    className="rt-card-image"
                  />
                </div>
                <div className="rt-card-content">
                  <div className="rt-heading-six rt-margin-bottom-ten">Call to Speak With Us</div>
                  <p className="rt-padding-bottom-ten">
                    <strong>Get Pre-Qualified in Minutes Over the Phone.</strong> Our friendly loan consultants are here to answer your questions and guide you every step of the way.
                  </p>
                  <div className="rt-home-four-support-btn-flex">
                    <a href="#" role="button" className="rt-all-btn rt-padding-zero rt-btn-color-midnight-blue">
                      <span className="rt-btn-text">Call us Now</span>
                      <span className="rt-btn-arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rt-home-four-support-card rt-radius-twenty">
                <div className="rt-card-image-container">
                  <Image
                    width={171}
                    height={142}
                    alt="Dashboard"
                    src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/68630d91cda4f82738e45644_9413822b8f13450a273bea95f0d09489_Img-2.png"
                    className="rt-card-image"
                  />
                </div>
                <div className="rt-card-content">
                  <div className="rt-heading-six rt-margin-bottom-ten">Start Your Application Online</div>
                  <p className="rt-padding-bottom-ten">
                    <strong>No Hassle. No Obligation. Just Straightforward Financing.</strong> Apply now to get matched with the best loan options for your aesthetic or medical business.
                  </p>
                  <div className="rt-home-four-support-btn-flex">
                    <a href="#" role="button" className="rt-all-btn rt-padding-zero rt-btn-color-midnight-blue">
                      <span className="rt-btn-text">start my application</span>
                      <span className="rt-btn-arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .rt-component-section-desktop {
          background: #111827;
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

        .rt-home-four-star-block {
          text-align: center;
          margin-bottom: 80px;
        }

        .rt-margin-bottom-twenty {
          font-size: 36px;
          font-weight: 700;
          color: white;
          margin-bottom: 24px;
          line-height: 1.3;
        }

        .rt-body-font-color {
          font-size: 20px;
          line-height: 1.6;
          color: #9ca3af;
          max-width: 800px;
          margin: 0 auto;
        }

        .w-layout-hflex {
          display: flex;
          gap: 40px;
          margin-bottom: 80px;
        }

        .rt-home-four-three-box-block {
          flex-wrap: wrap;
        }

        .rt-home-four-three-box-one {
          flex: 1;
          min-width: 300px;
          background: #1f2937;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #374151;
          transition: all 0.3s ease;
        }

        .rt-home-four-three-box-one:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: #4f46e5;
        }

        .rt-home-four-three-box-data {
          padding: 40px;
        }

        .rt-financial-planning-block {
          margin-bottom: 16px;
        }

        .rt-no-underline {
          text-decoration: none;
        }

        .rt-category-cards-text {
          font-size: 20px;
          font-weight: 700;
          color: #4f46e5;
        }

        .rt-financial-paragraph {
          font-size: 16px;
          line-height: 1.6;
          color: #9ca3af;
        }

        .rt-home-four-three-box-pic {
          width: 100%;
          height: 210px;
          overflow: hidden;
        }

        .rt-home-one-project-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .rt-component-section-3 {
          margin-top: 80px;
        }

        .w-layout-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .rt-home-four-support-grid-two {
          grid-template-columns: repeat(2, 1fr);
        }

        .rt-home-four-support-card {
          background: #1e40af;
          padding: 40px;
          border-radius: 20px;
          border: 1px solid #3b82f6;
          transition: all 0.3s ease;
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }

        .rt-card-image-container {
          flex-shrink: 0;
          width: 174px;
          height: 142px;
          border-radius: 12px;
          overflow: hidden;
        }

        .rt-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .rt-card-content {
          flex: 1;
          min-width: 0;
        }

        .rt-home-four-support-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #4f46e5;
        }

        .rt-heading-six {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
        }

        .rt-margin-bottom-ten {
          margin-bottom: 10px;
        }

        .rt-padding-bottom-ten {
          padding-bottom: 10px;
          font-size: 16px;
          line-height: 1.6;
          color: white;
          margin-bottom: 24px;
        }

        .rt-home-four-support-btn-flex {
          margin-top: 24px;
        }

        .rt-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 24px;
          background: #1e40af;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid #3b82f6;
        }

        .rt-all-btn:hover {
          background: #3b82f6;
          transform: translateY(-2px);
        }

        .rt-btn-text {
          flex: 1;
        }

        .rt-btn-arrow {
          font-size: 16px;
          transition: transform 0.3s ease;
        }

        .rt-all-btn:hover .rt-btn-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .w-layout-hflex {
            flex-direction: column;
            gap: 30px;
          }

          .w-layout-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .rt-home-four-three-box-one {
            min-width: auto;
          }

          .rt-margin-bottom-twenty {
            font-size: 28px;
          }

          .rt-home-four-support-card {
            flex-direction: column;
            text-align: center;
          }

          .rt-card-image-container {
            width: 100%;
            max-width: 200px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}