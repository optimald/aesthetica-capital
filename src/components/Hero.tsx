'use client'

import { useState } from 'react'
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
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-wrapper">
            <a href="/" className="navbar-logo">
              <Image
                src="/images/fintech-logo.png"
                alt="Aesthetica Capital"
                width={320}
                height={80}
                priority
              />
            </a>
            <div className="navbar-menu">
              <a href="/" className="navbar-link">Home</a>
              <a href="/about-us" className="navbar-link">About Us</a>
              <a href="/contact-us" className="navbar-link">Contact</a>
              <button className="button nav">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-1920 hero-1920">
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
                Unlock Growth at Every Business Stage
              </motion.h1>

              <motion.h2
                className="h2-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Fast, Flexible Financing Tailored to Your Needs
              </motion.h2>

              <motion.p
                className="paragraph-default-desktop"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Get quick approvals, expert guidance, and a seamless platform to fuel your success—apply today.
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
                      {currentStep === 1 ? 'Get Approved Today' : 'One last step!'}
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
                      By clicking 'Next Step', you agree to our Terms of Service and Privacy Policy.
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

        {/* Background Elements */}
        <div className="hero-background">
          <Image
            src="/images/hero-background.svg"
            alt=""
            fill
            className="hero-bg-gradient"
            priority
          />
        </div>

        <style jsx>{`
          .navbar {
            position: sticky;
            top: 0;
            background: #111827;
            z-index: 1000;
            padding: 20px 0;
            border-bottom: 1px solid #374151;
          }

          .navbar-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .navbar-menu {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .navbar-link {
            color: #9ca3af;
            font-weight: 500;
            text-decoration: none !important;
            transition: color 0.2s;
            padding: 8px 12px;
          }

          .navbar-link:hover {
            color: #4f46e5;
            text-decoration: none !important;
          }

          .navbar-link:focus,
          .navbar-link:active,
          .navbar-link:visited {
            text-decoration: none !important;
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
            background: 
              linear-gradient(135deg, #0a0a0a 0%, #1a0d2e 15%, #2d1b69 35%, #4c1d95 55%, #7c3aed 75%, #a855f7 90%, #c084fc 100%),
              radial-gradient(circle at 25% 75%, rgba(124, 58, 237, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 75% 25%, rgba(168, 85, 247, 0.3) 0%, transparent 45%),
              radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.2) 0%, transparent 60%);
            padding: 20px 0;
            height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
          }

          .hero-background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            opacity: 0.3;
          }

          .hero-bg-gradient {
            object-fit: cover;
            object-position: center;
          }

          .section-1920::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 15% 85%, rgba(79, 70, 229, 0.2) 0%, transparent 40%),
              radial-gradient(circle at 85% 15%, rgba(79, 70, 229, 0.15) 0%, transparent 45%),
              radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 60%);
            z-index: 1;
          }

          .section-1920::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              linear-gradient(45deg, transparent 0%, rgba(79, 70, 229, 0.05) 50%, transparent 100%),
              linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, transparent 70%);
            z-index: 1;
          }

          .hero-layout {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 30px;
            align-items: center;
            justify-items: start;
            position: relative;
            z-index: 2;
            height: 100%;
            max-height: calc(100vh - 120px);
          }

          .hero-content {
            max-width: 700px;
            text-align: left !important;
            padding-right: 60px;
          }

          .hero-content h1,
          .hero-content h2,
          .hero-content p {
            text-align: left !important;
          }

          .h1-desktop {
            font-size: 68px;
            font-weight: 900;
            line-height: 1.1;
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #e2e8f0 60%, #cbd5e1 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 32px;
            letter-spacing: -0.03em;
            font-family: 'Inter', sans-serif;
            text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          }

          .h2-subtitle {
            font-size: 30px;
            font-weight: 600;
            line-height: 1.3;
            background: linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #7c3aed 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 36px;
            letter-spacing: -0.01em;
            font-family: 'Inter', sans-serif;
            text-shadow: 0 2px 8px rgba(124, 58, 237, 0.4);
          }

          .paragraph-default-desktop {
            font-size: 20px;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 0;
            font-weight: 400;
            font-family: 'Inter', sans-serif;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            max-width: 580px;
          }

          .form-block-3-desktop {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            padding: 32px;
            border-radius: 24px;
            box-shadow: 
              0 25px 60px rgba(124, 58, 237, 0.2),
              0 15px 35px rgba(168, 85, 247, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
            max-width: 420px;
            width: 100%;
            max-height: 75vh;
            overflow-y: auto;
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .form-step {
            text-align: center;
          }

          .step-number {
            font-size: 14px;
            color: #4f46e5;
            margin-bottom: 16px;
            font-weight: 600;
          }

          .form-heading {
            font-size: 18px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 8px;
          }

          .fields-group {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 12px;
          }


          .form-label {
            font-size: 14px;
            font-weight: 600;
            color: #374151;
            text-align: left;
            margin-bottom: 3px;
          }

          .text-field-wrapper {
            position: relative;
          }


          .text-field-4,
          .text-field-3 {
            width: 100%;
            padding: 8px;
            background: #f9fafb;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            color: #111827;
            font-size: 14px;
            transition: border-color 0.2s;
          }

          .text-field-4:focus,
          .text-field-3:focus {
            outline: none;
            border-color: #4f46e5;
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
            font-size: 11px;
            color: #6b7280;
            text-align: center;
            margin-top: 6px;
            line-height: 1.3;
          }

          .form-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 12px;
          }

          .form-back,
          .form-next {
            padding: 8px 12px;
            background: transparent;
            color: #9ca3af;
            border: 1px solid #4b5563;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 14px;
          }

          .form-back:hover,
          .form-next:hover {
            background: #374151;
            color: white;
          }

          .form-button {
            padding: 16px 32px;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            color: #000000;
            border: none;
            border-radius: 12px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 16px;
            font-family: 'Inter', sans-serif;
            text-transform: none;
            letter-spacing: 0;
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
            text-shadow: none;
          }

          .form-button:hover {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(255, 255, 255, 0.3);
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
            background: #4f46e5;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: background 0.2s;
          }

          .button-2:hover {
            background: #4338ca;
          }

          @media (max-width: 768px) {
            .section-1920 {
              padding: 40px 0;
              min-height: 70vh;
            }

            .hero-layout {
              grid-template-columns: 1fr;
              gap: 40px;
              text-align: left;
            }

            .hero-content {
              padding-right: 0;
              max-width: 100%;
            }

            .h1-desktop {
              font-size: 38px;
              line-height: 1.2;
              margin-bottom: 24px;
            }

            .h2-subtitle {
              font-size: 20px;
              line-height: 1.4;
              margin-bottom: 24px;
            }

            .paragraph-default-desktop {
              font-size: 17px;
              line-height: 1.6;
              max-width: 100%;
            }

            .form-block-3-desktop {
              padding: 24px 20px;
            }

          }
        `}</style>
      </section>
    </>
  )
}
