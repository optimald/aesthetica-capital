'use client'

import Header from './Header'
import Footer from './Footer'

interface PageTemplateProps {
  title: string
  children: React.ReactNode
}

export default function PageTemplate({ title, children }: PageTemplateProps) {
  return (
    <main>
      <Header />
      <div className="page-content">
        <div className="container">
          <h1 className="page-title">{title}</h1>
          <div className="page-body">
            {children}
          </div>
        </div>
      </div>
      <Footer />
      
      <style jsx>{`
        .page-content {
          min-height: calc(100vh - 200px);
          padding: 80px 0;
          background: #0a0a0a;
        }

        .page-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 40px;
          text-align: center;
        }

        .page-body {
          color: #ffffff;
          font-size: 18px;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        .page-body h2 {
          color: #d4af37;
          font-size: 32px;
          margin-top: 40px;
          margin-bottom: 20px;
        }

        .page-body h3 {
          color: #d4af37;
          font-size: 24px;
          margin-top: 30px;
          margin-bottom: 15px;
        }

        .page-body p {
          margin-bottom: 20px;
        }

        .page-body ul {
          margin-bottom: 20px;
          padding-left: 20px;
        }

        .page-body li {
          margin-bottom: 10px;
        }

        .page-body a {
          color: #d4af37;
          text-decoration: underline;
        }

        .page-body a:hover {
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .page-content {
            padding: 60px 0;
          }

          .page-title {
            font-size: 36px;
          }

          .page-body {
            font-size: 16px;
            padding: 0 20px;
          }

          .page-body h2 {
            font-size: 28px;
          }

          .page-body h3 {
            font-size: 20px;
          }
        }
      `}</style>
    </main>
  )
}
