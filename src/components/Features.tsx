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
            <div className="rt-home-four-three-box-data">
              <h3 className="rt-category-cards-text">Quick & Hassle-Free Process</h3>
              <p className="rt-financial-paragraph">Apply in minutes, get approved in as little as 24 hours, and access your funds without delay.</p>
            </div>
            <div className="rt-home-four-three-box-pic">
              <Image
                width={402}
                height={210}
                alt="Business Image"
                src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/686301fce12dda7fde4ec114_311c7e254ef238128b3431e9890d78d2_Business-Image.webp"
                className="rt-home-one-project-card-image"
              />
            </div>
          </motion.div>

          <motion.div
            className="rt-home-four-three-box-one"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rt-home-four-three-box-data">
              <h3 className="rt-category-cards-text">No Hidden Fees</h3>
              <p className="rt-financial-paragraph">What you see is what you get-transparent, upfront terms with no unexpected costs</p>
            </div>
            <div className="rt-home-four-three-box-pic">
              <Image
                width={402}
                height={210}
                alt="Seamless Image"
                src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/686301fce12dda7fde4ec10f_e0d634d389425b166ef9bcdec3a10a9c_Seamless-Img.webp"
                className="rt-home-one-project-card-image"
              />
            </div>
          </motion.div>

          <motion.div
            className="rt-home-four-three-box-one"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rt-home-four-three-box-data">
              <h3 className="rt-category-cards-text">Flexible Funding Options</h3>
              <p className="rt-financial-paragraph">Customized financing solutions tailored to the needs of your aesthetic or wellness business.</p>
            </div>
            <div className="rt-home-four-three-box-pic">
              <Image
                width={402}
                height={210}
                alt="Financial Image"
                src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/686301fce12dda7fde4ec118_830191e1f7dc50e415019bccab7d3c8b_Financial-Image.webp"
                className="rt-home-one-project-card-image"
              />
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
                <div className="rt-card-content">
                  <div className="rt-heading-six rt-margin-bottom-ten">Start Your Application Online</div>
                  <p className="rt-padding-bottom-ten">
                    <strong>No Hassle. No Obligation. Just Straightforward Financing.</strong> Apply now to get matched with the best loan options for your aesthetic or medical business.
                  </p>
                  <div className="rt-home-four-support-btn-flex">
                    <a href="#" role="button" className="rt-all-btn rt-padding-zero rt-btn-color-midnight-blue">
                      <span className="rt-btn-text">Start My Application</span>
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
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          padding: 0 !important;
        }

        .rt-home-four-three-box-one:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: #d4af37;
        }

        .rt-home-four-three-box-data {
          padding: 32px 32px 24px 32px;
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
          color: white;
          margin-bottom: 16px;
        }

        .rt-financial-paragraph {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
        }

        .rt-home-four-three-box-pic {
          width: 100%;
          height: 210px;
          overflow: hidden;
          margin: 0 !important;
          padding: 0 !important;
          border-radius: 0 0 16px 16px;
          position: relative;
        }

        .rt-home-one-project-card-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block !important;
          margin: 0 !important;
          padding: 0 !important;
          border: none !important;
          outline: none !important;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
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
          background: 
            linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
            url('/images/cta-card-background.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          padding: 40px;
          border-radius: 20px;
          transition: all 0.6s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          box-shadow: 0 8px 32px rgba(212, 175, 55, 0.15);
          min-height: 300px;
        }

        .rt-home-four-support-card:first-child {
          background-position: left center;
        }

        .rt-home-four-support-card:last-child {
          background-position: right center;
        }

        .rt-home-four-support-card:first-child:hover {
          background: url('/images/cta-card-background.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: left center;
          box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.2);
        }

        .rt-home-four-support-card:last-child:hover {
          background: url('/images/cta-card-background.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: right center;
          box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.2);
        }

        .rt-home-four-support-card .rt-heading-six,
        .rt-home-four-support-card h1,
        .rt-home-four-support-card h2,
        .rt-home-four-support-card h3,
        .rt-home-four-support-card h4,
        .rt-home-four-support-card h5,
        .rt-home-four-support-card h6 {
          color: #ffffff !important;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }

        .rt-home-four-support-card p,
        .rt-home-four-support-card .rt-padding-bottom-ten {
          color: #ffffff !important;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
        }

        .rt-card-content {
          width: 100%;
        }

        .rt-home-four-support-btn-flex {
          margin-top: 24px;
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
          border-color: #d4af37;
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
          background: #d4af37;
          color: #000000;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid #d4af37;
        }

        .rt-all-btn:hover {
          background: #b8941f;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
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