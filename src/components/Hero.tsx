'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: '',
    businessStartDate: '',
    monthlyRevenue: '',
    creditScore: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(3)
  }

  return (
    <>

      {/* Hero Section */}
      <section className="section-1920 hero-1920">
        {/* Video Background */}
        <video
          className="hero-video-background"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.mov" type="video/quicktime" />
        </video>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'left' }}>
          <div className="hero-layout">
            {/* Left Content */}
            <div className="hero-content">
              <motion.h1
                className="h1-desktop"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Grow Your Aesthetic Business with Flexible Financing Solutions.
              </motion.h1>

              <motion.p
                className="paragraph-default-desktop"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Enjoy quick approvals, customizable terms, and expert guidance—all streamlined into one platform for your success.
              </motion.p>
            </div>

            {/* Right Form */}
            <motion.div
              className="form-block-3-desktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {currentStep < 3 ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-step">
                    <div className="step-number">Step {currentStep}/2</div>
                    <h2 className="form-heading">
                      {currentStep === 1 ? 'Apply Now!' : 'One last step!'}
                    </h2>

                    {currentStep === 1 && (
                      <div className="fields-group">
                        <div className="form-label">Business Name</div>
                        <div className="text-field-wrapper">
                          <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            className="text-field-4"
                            required
                          />
                          <div className="form-validation-indicator"></div>
                        </div>

                        <div className="form-label">Business Start Date</div>
                        <div className="text-field-wrapper">
                          <input
                            type="text"
                            name="businessStartDate"
                            value={formData.businessStartDate}
                            onChange={handleInputChange}
                            className="text-field-4"
                            placeholder="MM/DD/YYYY"
                            required
                          />
                          <div className="form-validation-indicator"></div>
                        </div>

                        <div className="form-label">Approximate Monthly Revenue</div>
                        <div className="text-field-wrapper">
                          <input
                            type="text"
                            name="monthlyRevenue"
                            value={formData.monthlyRevenue}
                            onChange={handleInputChange}
                            className="text-field-4"
                            placeholder="USD"
                            required
                          />
                          <div className="form-validation-indicator"></div>
                        </div>


                        <div className="form-label">Credit Score</div>
                        <div className="text-field-wrapper">
                          <input
                            type="number"
                            name="creditScore"
                            value={formData.creditScore}
                            onChange={handleInputChange}
                            className="text-field-4"
                            placeholder="300-850"
                            min="300"
                            max="850"
                            required
                          />
                          <div className="form-validation-indicator"></div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="fields-group">
                        <div className="form-label">Name</div>
                        <div className="text-field-wrapper">
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="text-field-3"
                            placeholder="First Name"
                            required
                          />
                          <div className="text-field-done"></div>
                        </div>
                        <div className="text-field-wrapper">
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="text-field-3"
                            placeholder="Last Name"
                            required
                          />
                          <div className="text-field-done"></div>
                        </div>

                        <div className="form-label">Email</div>
                        <div className="text-field-wrapper">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="text-field-3"
                            required
                          />
                          <div className="text-field-done"></div>
                        </div>

                        <div className="form-label">Phone Number</div>
                        <div className="text-field-wrapper">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="text-field-3"
                            required
                          />
                          <div className="text-field-done"></div>
                        </div>
                      </div>
                    )}

                    <div className="form-nav">
                      {currentStep > 1 && (
                        <button type="button" onClick={handleBack} className="form-back">
                          <div className="text-block-4">Back</div>
                        </button>
                      )}
                      {currentStep < 2 ? (
                        <button type="button" onClick={handleNext} className="form-next">
                          <div className="text-block-5">NEXT STEP</div>
                        </button>
                      ) : (
                        <button type="submit" className="form-button">
                          Submit
                        </button>
                      )}
                    </div>
                    <div className="form-disclaimer">
                      By clicking 'Next Step', you agree to our <a href="/terms" style={{ color: '#d4af37', textDecoration: 'underline' }}>Terms of Service</a> and <a href="/privacy" style={{ color: '#d4af37', textDecoration: 'underline' }}>Privacy Policy</a>.
                    </div>
                  </div>
                </form>
              ) : (
                <div className="success-message-desktop">
                  <h2 className="form-heading">Done!</h2>
                  <div className="success-subtitle">Now you can clone this project and reuse the form.</div>
                  <a href="https://webflow.com/website/Multi-step-form-cloneable" className="button-2">
                    Clone
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </div>


        <style jsx>{`
          .navbar {
            position: sticky;
            top: 0;
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(212, 175, 55, 0.1);
            border-bottom: 1px solid #374151;
          }

          .navbar-content {
            position: relative;
            padding: 20px 0;
          }

          .navbar-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100%;
            height: 100%;
          }

          .navbar .navbar-wrapper .navbar-menu {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 8px !important;
          }

          .navbar-menu {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 8px !important;
          }

          .navbar-link {
            color: #9ca3af;
            font-weight: 500;
            font-size: 16px;
            text-decoration: none !important;
            transition: color 0.2s;
            padding: 0;
            position: relative;
          }

          .navbar-link:hover {
            color: #ffffff;
            text-decoration: none !important;
          }

          .navbar-link:focus,
          .navbar-link:active,
          .navbar-link:visited {
            text-decoration: none !important;
          }

          .navbar-link[href="/"] {
            color: #ffffff;
            font-weight: 500;
          }

          .button.nav {
            padding: 14px 28px;
            font-size: 15px;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            color: #000000;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 700;
            font-family: 'Inter', sans-serif;
            box-shadow: 0 6px 20px rgba(255, 255, 255, 0.15);
          }

          .button.nav:hover {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.25);
          }

          .section-1920 {
            padding: 5px 0;
            height: calc(100vh - 90px);
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
          }

          .hero-video-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
          }

          .section-1920::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: 1;
          }



          .hero-layout {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 20px;
            align-items: center;
            justify-items: start;
            position: relative;
            z-index: 2;
            height: 100%;
            max-height: calc(100vh - 110px);
            padding: 5px 0;
          }

          .hero-content {
            max-width: 600px;
            text-align: left !important;
            padding-right: 40px;
          }

          .hero-content h1,
          .hero-content h2,
          .hero-content p {
            text-align: left !important;
          }

          .h1-desktop {
            font-size: 48px;
            font-weight: 900;
            line-height: 1.1;
            color: #ffffff;
            margin-bottom: 16px;
            letter-spacing: -0.03em;
            font-family: 'Inter', sans-serif;
          }

          .h2-subtitle {
            font-size: 20px;
            font-weight: 600;
            line-height: 1.3;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 16px;
            letter-spacing: -0.01em;
            font-family: 'Inter', sans-serif;
          }

          .paragraph-default-desktop {
            font-size: 16px;
            line-height: 1.5;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 0;
            font-weight: 400;
            font-family: 'Inter', sans-serif;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            max-width: 580px;
          }

          .form-block-3-desktop {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            padding: 16px;
            border-radius: 12px;
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.12),
              0 2px 8px rgba(0, 0, 0, 0.08);
            max-width: 320px;
            width: 100%;
            border: 1px solid rgba(0, 0, 0, 0.08);
          }

          .form-step {
            text-align: center;
          }

          .step-number {
            font-size: 14px;
            color: #d4af37;
            margin-bottom: 4px;
            font-weight: 600;
            text-align: center;
          }

          .form-heading {
            font-size: 18px;
            font-weight: 800;
            color: #0a0a0a;
            margin-bottom: 12px;
            text-align: center;
          }

          .fields-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
          }

          .form-label {
            font-size: 13px;
            font-weight: 600;
            color: #374151;
            text-align: left;
            margin-bottom: 2px;
          }

          .text-field-wrapper {
            position: relative;
          }


          .text-field-4,
          .text-field-3 {
            width: 100%;
            padding: 8px 10px;
            background: #f9fafb;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            color: #0a0a0a;
            font-size: 14px;
            font-weight: 400;
            transition: border-color 0.2s;
            box-sizing: border-box;
          }

          .text-field-4:focus,
          .text-field-3:focus {
            outline: none;
            border-color: #d4af37;
            background: white;
          }

          .text-field-4::placeholder,
          .text-field-3::placeholder {
            color: #9ca3af;
          }

          .form-validation-indicator {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            width: 12px;
            height: 12px;
            background: #ef4444;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .form-validation-indicator::after {
            content: '⋯';
            color: white;
            font-size: 8px;
            font-weight: bold;
          }

          .form-disclaimer {
            font-size: 10px;
            color: #6b7280;
            text-align: center;
            margin-top: 6px;
            line-height: 1.2;
          }

          .form-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            width: 100%;
          }

          .form-back {
            background: transparent;
            color: #6b7280;
            border: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            padding: 0;
          }

          .form-back:hover {
            color: #374151;
          }

          .form-next,
          .form-button {
            width: 100%;
            padding: 10px 20px;
            background: #000000;
            color: #ffffff;
            border: none;
            border-radius: 6px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-sizing: border-box;
          }

          .form-next:hover,
          .form-button:hover {
            background: #1f2937;
          }

          .success-message-desktop {
            text-align: center;
          }

          .success-subtitle {
            font-size: 16px;
            color: #9ca3af;
            margin-bottom: 24px;
          }

          .button-2 {
            display: inline-block;
            padding: 12px 24px;
            background: #d4af37;
            color: #000000;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: background 0.2s;
          }

          .button-2:hover {
            background: #b8941f;
          }

          .scroll-progress-bar {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            background: #d4af37;
            transition: width 0.2s ease-out;
            min-width: 0;
            box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
            z-index: 1001;
          }

          @media (max-width: 768px) {
            .section-1920 {
              padding: 10px 0;
              height: calc(100vh - 100px);
            }

            .hero-layout {
              grid-template-columns: 1fr;
              gap: 15px;
              text-align: left;
              max-height: calc(100vh - 120px);
            }

            .hero-content {
              padding-right: 0;
              max-width: 100%;
            }

            .h1-desktop {
              font-size: 28px;
              line-height: 1.2;
              margin-bottom: 12px;
            }

            .h2-subtitle {
              font-size: 16px;
              line-height: 1.4;
              margin-bottom: 12px;
            }

            .paragraph-default-desktop {
              font-size: 14px;
              line-height: 1.4;
              max-width: 100%;
            }

            .form-block-3-desktop {
              padding: 16px;
              max-width: 300px;
            }

          }
        `}</style>
      </section>
    </>
  )
}
