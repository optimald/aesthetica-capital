import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import FinancingOptions from '@/components/FinancingOptions'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <FinancingOptions />
      <Stats />
      <Process />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}