'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  {
    number: 500,
    suffix: 'M+',
    label: 'In Capital Provided',
    description: 'Total funding distributed to businesses'
  },
  {
    number: 10000,
    suffix: '+',
    label: 'Business Funded',
    description: 'Successful funding applications'
  },
  {
    number: 95,
    suffix: '%',
    label: 'Approval Rate',
    description: 'High success rate for qualified applicants'
  }
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref}>
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {value.toLocaleString()}{suffix}
        </motion.span>
      )}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Data Tells the Story
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl lg:text-7xl font-bold text-white mb-4">
                <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-indigo-200 text-lg">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
