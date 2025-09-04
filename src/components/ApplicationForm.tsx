'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, X } from 'lucide-react'

export default function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: '',
    businessStartDate: '',
    monthlyRevenue: '',
    creditScore: '',
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsError(false)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch {
      setIsError(true)
    }
  }

  const resetForm = () => {
    setCurrentStep(1)
    setFormData({
      businessName: '',
      businessStartDate: '',
      monthlyRevenue: '',
      creditScore: '',
      name: '',
      email: '',
      phone: ''
    })
    setIsSubmitted(false)
    setIsError(false)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-12"
          >
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Done!</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Your application has been submitted successfully. We&apos;ll review your information and get back to you within 24 hours.
            </p>
            <button
              onClick={resetForm}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Submit Another Application
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Begin the journey.
          </h2>
          <p className="text-xl text-gray-600">
            Embrace a new era of financial management
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12"
        >
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Get Approved Today</h3>
              <span className="text-sm text-gray-500">Step {currentStep}/2</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 2) * 100}%` }}
              />
            </div>
          </div>

          {isError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center"
            >
              <X className="h-5 w-5 text-red-500 mr-3" />
              <span className="text-red-700">Oops! Something went wrong while submitting the form.</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter your business name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Start Date</label>
                    <input
                      type="date"
                      name="businessStartDate"
                      value={formData.businessStartDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Monthly Revenue</label>
                    <select
                      name="monthlyRevenue"
                      value={formData.monthlyRevenue}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select revenue range</option>
                      <option value="0-10k">$0 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Credit Score</label>
                    <select
                      name="creditScore"
                      value={formData.creditScore}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select credit score range</option>
                      <option value="300-579">300 - 579 (Poor)</option>
                      <option value="580-669">580 - 669 (Fair)</option>
                      <option value="670-739">670 - 739 (Good)</option>
                      <option value="740-799">740 - 799 (Very Good)</option>
                      <option value="800-850">800 - 850 (Excellent)</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-6">One last step!</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </motion.div>
            )}

            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-8 py-3 text-gray-600 hover:text-gray-800 transition-colors font-semibold"
                >
                  Back
                </button>
              )}
              
              {currentStep < 2 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                >
                  Next step
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
