'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Process() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [stepProgress, setStepProgress] = useState([0, 0, 0, 0, 0])

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
      setScrollProgress(scrollPercent)

      // Calculate sequential step progress based on scroll position
      const newProgress = [0, 0, 0, 0, 0]
      
      // Step 1: grows from 40% to 50% scroll
      if (scrollPercent >= 40) {
        newProgress[0] = Math.min((scrollPercent - 40) / 10, 1)
      }
      
      // Step 2: grows from 50% to 60% scroll
      if (scrollPercent >= 50) {
        newProgress[1] = Math.min((scrollPercent - 50) / 10, 1)
      }
      
      // Step 3: grows from 60% to 70% scroll
      if (scrollPercent >= 60) {
        newProgress[2] = Math.min((scrollPercent - 60) / 10, 1)
      }
      
      // Step 4: grows from 70% to 80% scroll
      if (scrollPercent >= 70) {
        newProgress[3] = Math.min((scrollPercent - 70) / 10, 1)
      }
      
      // Step 5: grows from 80% to 90% scroll
      if (scrollPercent >= 80) {
        newProgress[4] = Math.min((scrollPercent - 80) / 10, 1)
      }
      
      setStepProgress(newProgress)
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])
  return (
    <>
      
      <div className="steps-process-desktop black" style={{ background: '#0a0a0a' }}>
      <div className="container-3">
        <motion.div
          className="center-div max-720w margin-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2-small text-white">
            <strong className="bold-text">Business Financing Made Simple</strong>
          </h2>
          <p className="paragraph-m text-white">
            From application to funding in 5 easy steps—see how fast and seamless the process can be.
          </p>
        </motion.div>

        <div className="w-layout-grid container-3 small flex">
          <div className="timeline-wrapper">
            <div className="grey-line">
              <div className="white-line"></div>
            </div>
          </div>

          <div className="process-wrapper">
            <motion.div
              className="step-wrapper margin-l"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step">
                <Image
                  src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/6863000db6277279646e1604_one.svg"
                  width={40}
                  height={40}
                  alt=""
                  className="step-1-number"
                />
                <div 
                  className="black-line" 
                  style={{ 
                    height: `${Math.max(stepProgress[0] * 80, 0)}px`,
                    marginTop: '10px'
                  }}
                ></div>
              </div>
              <div className="step-1-info-wrapper">
                <div className="process-image">
                  <Image
                    width={175}
                    height={175}
                    alt=""
                    src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/68655862a256ac7887a2c975_ChatGPT%20Image%20Jul%202%2C%202025%2C%2010_02_48%20AM.png"
                    className="image-3"
                  />
                </div>
                <div className="step-info">
                  <h4 className="step-heading margin-xs">Complete a Quick Application</h4>
                  <p className="text-light-grey">Tell us about your business—just the essentials. The application takes only minutes.</p>
                  <a href="#" className="button-scroller button-scroller-2">
                    <div>Apply Online</div>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="step-wrapper margin-l"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step">
                <Image
                  src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/6863000db6277279646e1603_two.svg"
                  width={40}
                  height={40}
                  alt=""
                  className="step-2-number"
                />
                <div 
                  className="black-line" 
                  style={{ 
                    height: `${Math.max(stepProgress[1] * 80, 0)}px`,
                    marginTop: '10px'
                  }}
                ></div>
              </div>
              <div className="step-2-info-wrapper">
                <div className="process-image">
                  <Image
                    width={175}
                    height={175}
                    alt=""
                    src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/68656d0f23beb24fd6fdd749_ChatGPT%20Image%20Jul%202%2C%202025%2C%2011_21_06%20AM.png"
                    className="image-6"
                  />
                </div>
                <div className="step-info">
                  <h4 className="step-heading margin-xs">Connect with a Financing Specialist</h4>
                  <p className="text-light-grey">Connect with an expert who understands the needs of growing practices and walks you through every option.</p>
                  <a href="#" className="button-scroller button-scroller-2">
                    <div>Speak with Us</div>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="step-wrapper margin-l"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step">
                <Image
                  src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/6863000db6277279646e1602_three.svg"
                  width={40}
                  height={40}
                  alt=""
                  className="step-3-number"
                />
                <div 
                  className="black-line" 
                  style={{ 
                    height: `${Math.max(stepProgress[2] * 80, 0)}px`,
                    marginTop: '10px'
                  }}
                ></div>
              </div>
              <div className="step-3-info-wrapper">
                <div className="process-image">
                  <Image
                    width={195}
                    height={195}
                    alt=""
                    src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/68656e1075d86c73b5715e02_fintech%20review.png"
                    className="image-5"
                  />
                </div>
                <div className="step-info">
                  <h4 className="step-heading margin-xs">Review Tailored Loan Options</h4>
                  <p className="text-light-grey">Get matched with up to six financing options customized for equipment, expansion, marketing, or cash flow.</p>
                  <a href="#" className="button-scroller button-scroller-2">
                    <div>View Your Options</div>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="step-wrapper margin-l"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="step">
                <Image
                  src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/6863000db6277279646e1605_four.svg"
                  width={40}
                  height={40}
                  alt=""
                  className="step-4-number"
                />
                <div 
                  className="black-line" 
                  style={{ 
                    height: `${Math.max(stepProgress[3] * 80, 0)}px`,
                    marginTop: '10px'
                  }}
                ></div>
              </div>
              <div className="step-4-info-wrapper">
                <div className="process-image">
                  <Image
                    width={195}
                    height={195}
                    alt=""
                    src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/686569ccf26fad611d683ff7_fintech%20funds.png"
                  />
                </div>
                <div className="step-info">
                  <h4 className="step-heading margin-xs">Receive Funds Directly</h4>
                  <p className="text-light-grey">Once approved, funds are deposited straight into your business account—so you can invest in what matters most.</p>
                  <a href="#" className="button-scroller button-scroller-2">
                    <div>Get My Funds</div>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="step-wrapper margin-l"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="step">
                <Image
                  src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/6863000db6277279646e1606_five.svg"
                  width={40}
                  height={40}
                  alt="Step 5"
                  className="step-5-number"
                />
                <div 
                  className="black-line" 
                  style={{ 
                    height: `${Math.max(stepProgress[4] * 80, 0)}px`,
                    marginTop: '10px'
                  }}
                ></div>
              </div>
              <div className="step-5-info-wrapper">
                <div className="process-image">
                  <Image
                    width={195}
                    height={195}
                    alt=""
                    src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/686569cb1ac21fc68e3ca8b7_fintech%20connect.png"
                    className="image-4"
                  />
                </div>
                <div className="step-info">
                  <h4 className="step-heading margin-xs">Find the Right Fit for Your Goals</h4>
                  <p className="text-light-grey">Select the best offer that aligns with your business's objectives and growth plans.</p>
                  <a href="#" className="button-scroller button-scroller-2">
                    <div>Accept Offer</div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Image
        src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/6862fb16fe3dc646bb7b61c7_Background%20Gradient.svg"
        width={1920}
        height={1080}
        alt=""
        className="bg-gradient right"
      />
      <Image
        src="https://cdn.prod.website-files.com/6862fb16fe3dc646bb7b5ee5/6862fb16fe3dc646bb7b61c7_Background%20Gradient.svg"
        width={1920}
        height={1080}
        alt=""
        className="bg-gradient right"
      />

      <style jsx>{`
        .steps-process-desktop {
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .container-3 {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .center-div {
          text-align: center;
          margin-bottom: 80px;
        }

        .max-720w {
          max-width: 720px;
          margin: 0 auto;
        }

        .margin-xl {
          margin-bottom: 80px;
        }

        .heading-2-small {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.3;
        }

        .paragraph-m {
          font-size: 20px;
          line-height: 1.6;
          opacity: 0.8;
        }

        .w-layout-grid {
          display: grid;
          grid-template-columns: 1fr 4fr;
          gap: 60px;
          align-items: start;
        }

        .timeline-wrapper {
          position: relative;
          height: 100%;
        }

        .grey-line {
          width: 4px;
          height: 100%;
          background: #374151;
          position: relative;
          margin: 0 auto;
        }

        .white-line {
          width: 100%;
          height: 100%;
          background: #d4af37;
          position: absolute;
          top: 0;
          left: 0;
        }

        .process-wrapper {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .step-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 40px;
          position: relative;
        }

        .margin-l {
          margin-left: 0;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        .step-1-number,
        .step-2-number,
        .step-3-number,
        .step-4-number,
        .step-5-number {
          width: 60px;
          height: 60px;
          background: #d4af37;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 24px;
        }

        .black-line {
          width: 2px;
          background: #d4af37;
          transition: height 0.2s ease-out;
          min-height: 0;
          position: relative;
        }

        .step-1-info-wrapper,
        .step-2-info-wrapper,
        .step-3-info-wrapper,
        .step-4-info-wrapper,
        .step-5-info-wrapper {
          display: flex;
          gap: 40px;
          align-items: center;
        }

        .process-image {
          flex-shrink: 0;
        }

        .image-3,
        .image-4,
        .image-5,
        .image-6 {
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .step-info {
          flex: 1;
        }

        .step-heading {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .margin-xs {
          margin-bottom: 12px;
        }

        .text-light-grey {
          font-size: 16px;
          line-height: 1.6;
          color: #9ca3af;
          margin-bottom: 24px;
        }

        .button-scroller {
          display: inline-block;
          padding: 12px 24px;
          background: #d4af37;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: background 0.2s;
        }

        .button-scroller:hover {
          background: #b8941f;
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
          .section-1921 {
            padding: 60px 20px;
          }

          .w-layout-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .step-wrapper {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }

          .step-1-info-wrapper,
          .step-2-info-wrapper,
          .step-3-info-wrapper,
          .step-4-info-wrapper,
          .step-5-info-wrapper {
            flex-direction: column;
            gap: 24px;
            align-items: center;
          }

          .heading-2-small {
            font-size: 32px;
            margin-bottom: 20px;
          }

          .paragraph-2 {
            font-size: 16px;
            line-height: 1.6;
            max-width: 100%;
          }

          .step-number {
            font-size: 18px;
            width: 40px;
            height: 40px;
            line-height: 40px;
          }

          .white-line {
            display: none;
          }

          .black-line {
            display: none;
          }

          .step-image {
            max-width: 200px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .section-1921 {
            padding: 40px 16px;
          }

          .w-layout-grid {
            gap: 40px;
          }

          .heading-2-small {
            font-size: 28px;
          }

          .step-number {
            font-size: 16px;
            width: 36px;
            height: 36px;
            line-height: 36px;
          }
        }
      `}</style>
    </div>
    </>
  )
}
