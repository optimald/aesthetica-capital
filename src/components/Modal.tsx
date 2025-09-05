'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2 className="modal-title">{title}</h2>
              <button className="modal-close" onClick={onClose}>
                ×
              </button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </motion.div>

          <style jsx>{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.8);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1000;
              padding: 20px;
            }

            .modal-content {
              background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
              border: 2px solid #d4af37;
              border-radius: 16px;
              max-width: 600px;
              width: 100%;
              max-height: 80vh;
              overflow-y: auto;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            }

            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 24px 32px;
              border-bottom: 1px solid rgba(212, 175, 55, 0.3);
            }

            .modal-title {
              font-size: 24px;
              font-weight: 700;
              color: #ffffff;
              margin: 0;
            }

            .modal-close {
              background: none;
              border: none;
              color: #d4af37;
              font-size: 32px;
              cursor: pointer;
              padding: 0;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              transition: all 0.2s ease;
            }

            .modal-close:hover {
              background: rgba(212, 175, 55, 0.2);
              color: #ffffff;
            }

            .modal-body {
              padding: 32px;
              color: #ffffff;
            }

            .modal-body h3 {
              color: #d4af37;
              font-size: 18px;
              font-weight: 600;
              margin: 24px 0 12px 0;
            }

            .modal-body h3:first-child {
              margin-top: 0;
            }

            .modal-body p {
              color: rgba(255, 255, 255, 0.9);
              line-height: 1.6;
              margin: 0 0 16px 0;
            }

            .modal-body ul {
              color: rgba(255, 255, 255, 0.9);
              line-height: 1.6;
              margin: 0 0 16px 0;
              padding-left: 20px;
            }

            .modal-body li {
              margin-bottom: 8px;
            }

            .modal-cta {
              margin-top: 32px;
              padding-top: 24px;
              border-top: 1px solid rgba(212, 175, 55, 0.3);
            }

            .modal-button {
              background: #d4af37;
              color: #000000;
              border: none;
              padding: 16px 32px;
              border-radius: 8px;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
              text-decoration: none;
              display: inline-block;
            }

            .modal-button:hover {
              background: #b8941f;
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
            }

            @media (max-width: 768px) {
              .modal-content {
                margin: 20px;
                max-height: 90vh;
              }

              .modal-header {
                padding: 20px 24px;
              }

              .modal-title {
                font-size: 20px;
              }

              .modal-body {
                padding: 24px;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
