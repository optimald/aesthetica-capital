'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CreditCard, DollarSign, Wrench, LineChart, Building, Shield } from 'lucide-react'

const financingOptions = [
  {
    icon: Building,
    title: "Startup Capital Loan",
    description: "Launch or grow your business with ease",
    requirements: "Requires 680+ credit score",
    amount: "$20,000 - $560,000",
    terms: "1-5 year terms",
    features: ["Pre-qualify with a soft credit check"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: DollarSign,
    title: "Business Cash Advance",
    description: "Fast access to capital in 24 hours or less",
    requirements: "No minimum credit score required",
    amount: "Flexible amounts",
    terms: "Daily or weekly payments",
    features: ["Quick approval", "Flexible repayment"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Wrench,
    title: "Equipment Financing",
    description: "Finance new equipment or leverage existing assets",
    requirements: "1 year in business required",
    amount: "Flexible amounts",
    terms: "Terms up to 5 years",
    features: ["Financing, leasing, or leasebacks available"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: LineChart,
    title: "Business Line of Credit",
    description: "Access only what you need, when you need it",
    requirements: "Simple online application",
    amount: "$5,000 - $55,000",
    terms: "24-hour approval with same-day funding",
    features: ["Flexible access", "Pay only for what you use"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Unsecured Business Loan",
    description: "Fast capital with no collateral needed",
    requirements: "Standard business requirements",
    amount: "$20,000 - $500,000",
    terms: "Receive funds within 24 hours",
    features: ["No collateral required", "Affordable fixed payments"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: CreditCard,
    title: "SBA 7(a) Growth Loan",
    description: "Backed by the SBA for long-term growth",
    requirements: "2+ years in business & 680+ credit score",
    amount: "$30,000 - $500,000",
    terms: "Terms up to 10 years, 6%-10% rates",
    features: ["SBA backed", "Available nationwide", "Business must meet SBA eligibility"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: CreditCard,
    title: "Business Credit Cards",
    description: "Build and strengthen your business credit profile",
    requirements: "Standard business requirements",
    amount: "Flexible credit limits",
    terms: "Customizable terms",
    features: ["Build business credit", "Flexible spending", "Customizable credit limits"],
    color: "from-teal-500 to-teal-600"
  }
]

export default function FinancingOptions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Growth Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Custom Financing Options
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {financingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <option.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Requirements:</span>
                  <span className="ml-2">{option.requirements}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Amount:</span>
                  <span className="ml-2">{option.amount}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Terms:</span>
                  <span className="ml-2">{option.terms}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full bg-gradient-to-r ${option.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
