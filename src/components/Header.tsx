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
                <a href="/learn-more" className="navbar-link">Learn More</a>
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
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
          }

          .navbar-logo {
            order: 1;
            flex: 1;
            min-width: 0;
          }

          .navbar-menu {
            order: 3;
            width: 100%;
            gap: 20px !important;
            justify-content: center !important;
            margin-top: 12px;
          }

          .button.nav {
            order: 2;
            padding: 10px 20px;
            font-size: 14px;
            white-space: nowrap;
          }

          .navbar-content {
            padding: 16px 20px;
          }
        }

        @media (max-width: 480px) {
          .navbar-wrapper {
            flex-direction: column;
            gap: 12px;
          }

          .navbar-logo {
            order: 1;
            width: 100%;
            text-align: center;
          }

          .navbar-menu {
            order: 2;
            gap: 20px !important;
            flex-direction: row;
            justify-content: center;
            margin-top: 0;
          }

          .navbar-link {
            font-size: 14px;
            padding: 8px 0;
          }

          .button.nav {
            order: 3;
            padding: 12px 24px;
            font-size: 14px;
            width: 100%;
            max-width: 200px;
            margin: 0 auto;
          }

          .navbar-content {
            padding: 12px 16px;
          }
        }
      `}</style>
    </>
  )
}
