import AboutServices from '@/components/about-services'
import DiscoveryCall from '@/components/discovery-call'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <AboutServices />
      <DiscoveryCall />
      <Footer />
    </main>
  )
}

