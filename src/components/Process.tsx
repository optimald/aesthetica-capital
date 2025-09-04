'use client'

import { motion } from 'framer-motion'
import { FileText, Users, Search, CheckCircle, DollarSign } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Complete a Quick Application",
    description: "Tell us about your business—just the essentials. The application takes only minutes.",
    action: "Apply Online",
    color: "from-blue-500 to-blue-600"
  },
  {
    number: 2,
    icon: Users,
    title: "Connect with a Financing Specialist",
    description: "Connect with an expert who understands the needs of growing practices and walks you through every option.",
    action: "Connect Now",
    color: "from-green-500 to-green-600"
  },
  {
    number: 3,
    icon: Search,
    title: "Review Tailored Loan Options",
    description: "Get matched with up to six financing options customized for equipment, expansion, marketing, or cash flow.",
    action: "Discover Your Options",
    color: "from-purple-500 to-purple-600"
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Finalize the Right Fit for Your Goals",
    description: "Select the best offer and complete your agreement with full transparency—no hidden terms.",
    action: "Understand the Process",
    color: "from-orange-500 to-orange-600"
  },
  {
    number: 5,
    icon: DollarSign,
    title: "Receive Funds Directly",
    description: "Once approved, funds are deposited straight into your business account—so you can invest in what matters most.",
    action: "Get My Funds",
    color: "from-red-500 to-red-600"
  }
]

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Business Financing Made Simple
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From application to funding in 5 easy steps—see how fast and seamless the process can be.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-indigo-600">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                
                <button className={`bg-gradient-to-r ${step.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm`}>
                  {step.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
