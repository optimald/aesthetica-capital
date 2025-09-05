'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ClientLogos() {
  return (
    <section className="logos-title-small">
      <div className="container-5">
        <motion.div
          className="clients-wrapper-three"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a395a12aaf3_logo-01.svg"
            alt="AriseHealth logo"
            width={120}
            height={60}
            className="clients-image-three"
          />
          <Image
            src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124ae38212aaf1_logo-03.svg"
            alt="OE logo"
            width={120}
            height={60}
            className="clients-image-three"
          />
          <Image
            src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a411512aaf4_logo-04.svg"
            alt="2020INC logo"
            width={120}
            height={60}
            className="clients-image-three"
          />
          <Image
            src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124ade1612aaf2_logo-02.svg"
            alt="The Paak logo"
            width={120}
            height={60}
            className="clients-image-three"
          />
          <Image
            src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a3cd712aaf6_logo-05.svg"
            alt="Ephicient logo"
            width={120}
            height={60}
            className="clients-image-three"
          />
          <Image
            src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a85fd12aaf5_logo-08.svg"
            alt="Toogether logo"
            width={120}
            height={60}
            className="clients-image-three"
          />
        </motion.div>
      </div>

      <style jsx>{`
        .logos-title-small {
          background: #0a0a0a;
          padding: 60px 0;
          border-top: 1px solid #374151;
          border-bottom: 1px solid #374151;
        }

        .container-5 {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }


        .clients-wrapper-three {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px;
        }

        .clients-image-three {
          filter: brightness(0) invert(1);
          opacity: 0.7;
          transition: opacity 0.3s ease;
          max-width: 120px;
          height: auto;
        }

        .clients-image-three:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .clients-wrapper-three {
            justify-content: center;
            gap: 30px;
          }

          .clients-image-three {
            max-width: 100px;
          }
        }

        @media (max-width: 480px) {
          .clients-wrapper-three {
            gap: 20px;
          }

          .clients-image-three {
            max-width: 80px;
          }
        }
      `}</style>
    </section>
  )
}
