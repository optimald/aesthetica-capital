import Hero from '@/components/Hero'
import FinancingOptions from '@/components/FinancingOptions'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ApplicationForm from '@/components/ApplicationForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FinancingOptions />
      <Stats />
      <Process />
      <Features />
      <ApplicationForm />
      <CTA />
      <Footer />
    </main>
  )
}