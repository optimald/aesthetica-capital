import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import FinancingOptions from '@/components/FinancingOptions'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ClientLogos />
      <FinancingOptions />
      <Stats />
      <Process />
      <Features />
      <Footer />
    </main>
  )
}