'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Modal from './Modal'

export default function FinancingOptions() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modalType: string) => {
    setActiveModal(modalType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }
  return (
    <section className="growth-card-section-vdesktop">
      <div className="container">
        <div className="features-layout">
          <motion.h4
            className="heading-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your Growth Starts Here - Explore Custom Financing Options
          </motion.h4>
          
          <div className="w-layout-grid features-component-layout">
            <motion.div
              className="layout-wrapper w-inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/loan-icon.svg"
                  width={30}
                  height={30}
                  alt="Loan icon"
                />
              </div>
              <h4 className="heading-3">Startup Capital Loan</h4>
              <div className="paragraph">
                - Launch or grow your business with ease<br/>
                - Requires 680+ credit score<br/>
                - $20,000 - $560,000<br/>
                - 1-5 year terms<br/>
                - Pre-qualify with a soft credit check
              </div>
              <p className="paragraph-2" onClick={() => openModal('startup')} style={{ cursor: 'pointer' }}>Learn More <strong>→</strong></p>
            </motion.div>

            <motion.div
              className="layout-wrapper w-inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/business-icon.svg"
                  width={30}
                  height={30}
                  alt="Business icon"
                />
              </div>
              <h4>Business Cash Advance</h4>
              <div className="paragraph">
                - Fast access to capital in 24 hours or less<br/>
                - No minimum credit score required<br/>
                - Daily or weekly payments
              </div>
              <p className="paragraph-2" onClick={() => openModal('cash-advance')} style={{ cursor: 'pointer' }}>Learn More <strong>→</strong></p>
            </motion.div>

            <motion.div
              className="layout-wrapper w-inline-block tall"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/finance-icon.svg"
                  width={50}
                  height={50}
                  alt="Finance icon"
                />
              </div>
              <h4><strong>Equipment Financing</strong></h4>
              <div className="paragraph">
                - Finance new equipment or leverage existing assets<br/>
                - Financing, leasing, or leasebacks available<br/>
                - 1 year in business required<br/>
                - Terms up to 5 years
              </div>
              <p className="paragraph-2" onClick={() => openModal('equipment')} style={{ cursor: 'pointer' }}>Learn More <strong>→</strong></p>
              <Image
                src="/images/fintech-card.png"
                width={300}
                height={200}
                alt="Credit cards"
                className="feature-card-image"
              />
            </motion.div>

            <motion.div
              className="layout-wrapper w-inline-block wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="wide-content">
                <div className="featured-icon-wrapper">
                  <Image
                    src="/images/icons/credit-card-white.svg"
                    width={30}
                    height={30}
                    alt="Credit card icon"
                  />
                </div>
                <h4><strong>Business Line of Credit</strong></h4>
                <div className="paragraph">
                  - Access only what you need, when you need it<br/>
                  - $5,000 - $55,000<br/>
                  - 24-hour approval with same-day funding<br/>
                  - Simple online application
                </div>
              </div>
              <p className="paragraph-2" onClick={() => openModal('line-of-credit')} style={{ cursor: 'pointer' }}>Learn More <strong>→</strong></p>
            </motion.div>

            <motion.div
              className="layout-wrapper w-inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/unsecured-icon.svg"
                  width={35}
                  height={35}
                  alt="Unsecured loan icon"
                />
              </div>
              <h4><strong>Unsecured Business Loan</strong></h4>
              <div className="paragraph">
                - Fast capital with no collateral needed<br/>
                - $20,000 - $500,000<br/>
                - Affordable fixed payments<br/>
                - Receive funds within 24 hours
              </div>
              <p className="paragraph-2" onClick={() => openModal('unsecured')} style={{ cursor: 'pointer' }}>Learn More <strong>→</strong></p>
            </motion.div>

            <motion.div
              className="layout-wrapper w-inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/sba-icon.svg"
                  width={30}
                  height={30}
                  alt="SBA icon"
                />
              </div>
              <h4><strong>SBA 7(a) Growth Loan</strong></h4>
              <div className="paragraph">
                - Backed by the SBA for long-term growth<br/>
                - $30,000 - $500,000 available nationwide<br/>
                - Terms up to 10 years, 6%-10% rates<br/>
                - 2+ years in business & 680+ credit score<br/>
                - Business must meet SBA eligibility
              </div>
              <p className="paragraph-2" onClick={() => openModal('sba')} style={{ cursor: 'pointer' }}>Learn More <strong>→</strong></p>
            </motion.div>

            <motion.div
              className="layout-wrapper w-inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="featured-icon-wrapper">
                <Image
                  src="/images/icons/credit-card-white.svg"
                  width={30}
                  height={30}
                  alt="Credit card icon"
                />
              </div>
              <h4><strong>Business Credit Cards</strong></h4>
              <div className="paragraph">
                - Build and strengthen your business credit profile<br/>
                - Access flexible spending with customizable credit limits
              </div>
              <p className="paragraph-2" onClick={() => openModal('credit-cards')} style={{ cursor: 'pointer' }}>Learn More <strong>→</strong></p>
            </motion.div>
          </div>
        </div>
        
        <Image
          src="/images/background-gradient.svg"
          width={1920}
          height={1080}
          alt=""
          className="bg-gradient"
        />
        <Image
          src="/images/background-gradient.svg"
          width={1920}
          height={1080}
          alt=""
          className="bg-gradient right"
        />
      </div>

      {/* Modals */}
      <Modal isOpen={activeModal === 'startup'} onClose={closeModal} title="Startup Capital Loan">
        <h3>What is a Startup Capital Loan?</h3>
        <p>A startup capital loan is designed specifically for new businesses or those looking to expand. This type of financing provides the working capital needed to launch operations, purchase equipment, hire staff, or cover initial operating expenses.</p>
        
        <h3>Key Benefits</h3>
        <ul>
          <li>Quick access to capital for business growth</li>
          <li>Flexible repayment terms from 1-5 years</li>
          <li>Soft credit check for pre-qualification</li>
          <li>Competitive interest rates</li>
        </ul>

        <h3>Requirements</h3>
        <ul>
          <li>Minimum credit score of 680</li>
          <li>Business plan or financial projections</li>
          <li>Personal guarantee may be required</li>
        </ul>

        <div className="modal-cta">
          <a href="/apply" className="modal-button">Apply Now</a>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'cash-advance'} onClose={closeModal} title="Business Cash Advance">
        <h3>What is a Business Cash Advance?</h3>
        <p>A business cash advance provides immediate access to capital based on your future credit card sales or bank deposits. This is an ideal solution for businesses with consistent daily or weekly revenue who need quick funding.</p>
        
        <h3>Key Benefits</h3>
        <ul>
          <li>Fast approval and funding within 24 hours</li>
          <li>No minimum credit score requirement</li>
          <li>Flexible repayment based on sales</li>
          <li>No collateral required</li>
        </ul>

        <h3>How It Works</h3>
        <ul>
          <li>Repayment is automatically deducted from daily sales</li>
          <li>Payments adjust with your business performance</li>
          <li>No fixed monthly payments</li>
        </ul>

        <div className="modal-cta">
          <a href="/apply" className="modal-button">Get Started</a>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'equipment'} onClose={closeModal} title="Equipment Financing">
        <h3>What is Equipment Financing?</h3>
        <p>Equipment financing allows you to purchase or lease the equipment your business needs without a large upfront investment. This includes medical devices, technology, vehicles, machinery, and other business equipment.</p>
        
        <h3>Financing Options</h3>
        <ul>
          <li><strong>Equipment Loans:</strong> Purchase equipment with fixed monthly payments</li>
          <li><strong>Equipment Leasing:</strong> Rent equipment with lower monthly payments</li>
          <li><strong>Leasebacks:</strong> Sell existing equipment and lease it back</li>
        </ul>

        <h3>Benefits</h3>
        <ul>
          <li>Preserve working capital</li>
          <li>Tax advantages and depreciation benefits</li>
          <li>Upgrade equipment as technology advances</li>
          <li>Flexible terms up to 5 years</li>
        </ul>

        <div className="modal-cta">
          <a href="/apply" className="modal-button">Learn More</a>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'line-of-credit'} onClose={closeModal} title="Business Line of Credit">
        <h3>What is a Business Line of Credit?</h3>
        <p>A business line of credit provides flexible access to funds that you can draw from as needed. You only pay interest on the amount you use, making it an excellent tool for managing cash flow and unexpected expenses.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Access funds up to your credit limit</li>
          <li>24-hour approval with same-day funding</li>
          <li>Simple online application process</li>
          <li>Revolving credit that replenishes as you pay</li>
        </ul>

        <h3>Perfect For</h3>
        <ul>
          <li>Seasonal businesses with fluctuating cash flow</li>
          <li>Emergency funding needs</li>
          <li>Inventory purchases</li>
          <li>Opportunity investments</li>
        </ul>

        <div className="modal-cta">
          <a href="/apply" className="modal-button">Apply Today</a>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'unsecured'} onClose={closeModal} title="Unsecured Business Loan">
        <h3>What is an Unsecured Business Loan?</h3>
        <p>An unsecured business loan provides capital without requiring collateral. This type of financing is based on your business's creditworthiness and cash flow, making it ideal for businesses with strong financials but limited assets.</p>
        
        <h3>Key Benefits</h3>
        <ul>
          <li>No collateral required</li>
          <li>Fast funding within 24 hours</li>
          <li>Fixed monthly payments</li>
          <li>Competitive interest rates</li>
        </ul>

        <h3>Requirements</h3>
        <ul>
          <li>Strong business credit history</li>
          <li>Consistent revenue and cash flow</li>
          <li>Personal guarantee typically required</li>
          <li>Minimum time in business</li>
        </ul>

        <div className="modal-cta">
          <a href="/apply" className="modal-button">Get Pre-Qualified</a>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'sba'} onClose={closeModal} title="SBA 7(a) Growth Loan">
        <h3>What is an SBA 7(a) Loan?</h3>
        <p>The SBA 7(a) loan program is the Small Business Administration's primary business loan program. It provides long-term, low-cost financing for businesses that meet SBA eligibility requirements, with the government guaranteeing a portion of the loan.</p>
        
        <h3>Key Benefits</h3>
        <ul>
          <li>Lower interest rates (6%-10%)</li>
          <li>Longer repayment terms (up to 10 years)</li>
          <li>Government-backed security</li>
          <li>Flexible use of funds</li>
        </ul>

        <h3>Eligibility Requirements</h3>
        <ul>
          <li>2+ years in business</li>
          <li>680+ credit score</li>
          <li>Meet SBA size standards</li>
          <li>Demonstrate ability to repay</li>
        </ul>

        <div className="modal-cta">
          <a href="/apply" className="modal-button">Check Eligibility</a>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'credit-cards'} onClose={closeModal} title="Business Credit Cards">
        <h3>What are Business Credit Cards?</h3>
        <p>Business credit cards are designed specifically for business expenses and help separate personal and business finances. They offer rewards, expense tracking, and help build your business credit profile.</p>
        
        <h3>Key Benefits</h3>
        <ul>
          <li>Build and strengthen business credit</li>
          <li>Rewards and cashback on purchases</li>
          <li>Expense tracking and reporting</li>
          <li>Employee cards with spending limits</li>
        </ul>

        <h3>Features</h3>
        <ul>
          <li>Customizable credit limits</li>
          <li>Detailed monthly statements</li>
          <li>Online account management</li>
          <li>Fraud protection</li>
        </ul>

        <div className="modal-cta">
          <a href="/apply" className="modal-button">Apply Now</a>
        </div>
      </Modal>

    </section>
  )
}