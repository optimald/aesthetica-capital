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
                width={200} 
                height={50} 
                priority
              />
            </a>
            <div className="navbar-menu">
              <a href="/" className="navbar-link">Home</a>
              <a href="/about-us" className="navbar-link">About Us</a>
              <a href="/contact" className="navbar-link">Contact</a>
              <button className="button nav">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section hero-section">
        <div className="container">
          <div className="hero-layout">
            {/* Left Content */}
            <div className="hero-content">
              <motion.h1 
                className="h1-desktop"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Get the Capital You<br/>
                <span style={{ color: '#4f46e5' }}>Need—Without the Runaround</span>
              </motion.h1>
              
              <motion.p 
                className="paragraph-default"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Flexible business financing, fast approvals, and zero hidden fees—just clear terms you can trust.
              </motion.p>
            </div>

            {/* Right Form */}
            <motion.div 
              className="form-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {currentStep < 3 ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-header">
                    <div className="step-indicator">Step {currentStep}/2</div>
                    <h2 className="form-heading">Get Approved Today</h2>
                  </div>

                  {currentStep === 1 && (
                    <div className="form-fields">
                      <div className="form-group">
                        <label className="form-label">Business Name</label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          className="text-field"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Business Start Date</label>
                        <input
                          type="text"
                          name="businessStartDate"
                          value={formData.businessStartDate}
                          onChange={handleInputChange}
                          className="text-field"
                          placeholder="MM/DD/YYYY"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Approximate Monthly Revenue</label>
                        <input
                          type="text"
                          name="monthlyRevenue"
                          value={formData.monthlyRevenue}
                          onChange={handleInputChange}
                          className="text-field"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Credit Score</label>
                        <input
                          type="number"
                          name="creditScore"
                          value={formData.creditScore}
                          onChange={handleInputChange}
                          className="text-field"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="form-fields">
                      <h3 className="form-subheading">One last step!</h3>
                      
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <div className="form-row">
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="text-field"
                            placeholder="First Name"
                            required
                          />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="text-field"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="text-field"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="text-field"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="form-nav">
                    {currentStep > 1 && (
                      <button type="button" onClick={handleBack} className="form-back">
                        Back
                      </button>
                    )}
                    {currentStep < 2 ? (
                      <button type="button" onClick={handleNext} className="form-next">
                        Next step
                      </button>
                    ) : (
                      <button type="submit" className="form-submit">
                        Submit
                      </button>
                    )}
                  </div>
                </form>
              ) : (
                <div className="success-message">
                  <h2 className="form-heading">Done!</h2>
                  <p className="success-subtitle">Now you can clone this project and reuse the form.</p>
                  <a href="https://webflow.com/website/Multi-step-form-cloneable" className="button">
                    Clone
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          background: white;
          z-index: 1000;
          padding: 20px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .navbar-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .navbar-link {
          color: #6b7280;
          font-weight: 500;
          transition: color 0.2s;
        }

        .navbar-link:hover {
          color: #4f46e5;
        }

        .button.nav {
          padding: 10px 24px;
          font-size: 14px;
        }

        .hero-section {
          background: #f9fafb;
          padding: 100px 0;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-content {
          max-width: 600px;
        }

        .form-header {
          margin-bottom: 32px;
        }

        .step-indicator {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 16px;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-subheading {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .form-nav {
          display: flex;
          justify-content: space-between;
          margin-top: 32px;
        }

        .form-back,
        .form-next,
        .form-submit {
          padding: 12px 32px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .form-back {
          background: transparent;
          color: #6b7280;
        }

        .form-next,
        .form-submit {
          background: #4f46e5;
          color: white;
          margin-left: auto;
        }

        .form-next:hover,
        .form-submit:hover {
          background: #4338ca;
          transform: translateY(-1px);
        }

        .success-message {
          text-align: center;
          padding: 40px;
        }

        .success-subtitle {
          font-size: 18px;
          color: #6b7280;
          margin-bottom: 32px;
        }

        @media (max-width: 768px) {
          .hero-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .navbar-menu {
            display: none;
          }
        }
      `}</style>
    </>
  )
}