'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
      setScrollProgress(scrollPercent)
    }

    // Initial calculation
    updateScrollProgress()

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
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
              </div>
              <button className="button nav">Contact Us</button>
            </div>
          </div>
          {/* Permanent Divider */}
          <div className="permanent-divider"></div>
          
          {/* Scroll Progress Indicator */}
          <div 
            className="scroll-progress-bar" 
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(212, 175, 55, 0.1);
        }

        .navbar-content {
          position: relative;
          padding: 20px 0;
        }

        .navbar-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .navbar-logo {
          justify-self: start;
        }

        .navbar .navbar-wrapper .navbar-menu {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 32px !important;
        }

        .navbar-menu {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 32px !important;
        }

        .button.nav {
          justify-self: end;
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
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }

        .button.nav:hover {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .permanent-divider {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #374151;
          z-index: 1000;
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
          .navbar-wrapper {
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: center;
          }

          .navbar-logo {
            justify-self: center;
          }

          .navbar-menu {
            gap: 24px !important;
            flex-wrap: wrap;
            justify-content: center !important;
          }

          .button.nav {
            justify-self: center;
            margin-top: 8px;
          }

          .navbar-content {
            padding: 16px 0;
          }
        }

        @media (max-width: 480px) {
          .navbar-menu {
            gap: 16px !important;
            flex-direction: column;
            align-items: center;
          }

          .navbar-link {
            font-size: 14px;
            padding: 8px 0;
          }

          .button.nav {
            padding: 12px 24px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  )
}
