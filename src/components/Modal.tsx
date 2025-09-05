'use client'

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

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>

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
          z-index: 9999;
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
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 32px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
        }

        .modal-title {
          color: #d4af37;
          font-size: 24px;
          font-weight: 700;
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
          font-size: 20px;
          margin-top: 24px;
          margin-bottom: 12px;
        }

        .modal-body p {
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .modal-body ul {
          margin-bottom: 16px;
          padding-left: 20px;
        }

        .modal-body li {
          margin-bottom: 8px;
          line-height: 1.6;
        }

        .modal-cta {
          margin-top: 32px;
          text-align: center;
        }

        .modal-button {
          display: inline-block;
          padding: 12px 24px;
          background: #d4af37;
          color: #000000;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: background 0.2s ease;
        }

        .modal-button:hover {
          background: #b8941f;
        }

        @media (max-width: 768px) {
          .modal-content {
            margin: 20px;
            max-height: 90vh;
          }

          .modal-header {
            padding: 20px;
          }

          .modal-title {
            font-size: 20px;
          }

          .modal-body {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  )
}