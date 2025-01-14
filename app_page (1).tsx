'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CalendlyWidget } from './components/calendly-widget'

export default function Home() {
  const scrollToDiscovery = () => {
    document.getElementById('discovery')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen animated-background text-white">
      {/* Hero Section */}
      <nav className="container mx-auto px-4 py-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new%20fluentaleads%20logo-IaYWbgPFAYRvmZcSMPKujBxkoImfAo.png"
          alt="FluentaLeads"
          width={200}
          height={40}
          className="w-48"
        />
      </nav>

      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-outfit font-bold mb-6 text-white">
            Agency growth partner
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            We help agencies scale by delivering high-quality leads through targeted email marketing
          </p>
          <Button size="lg" className="text-lg px-8" onClick={scrollToDiscovery}>
            Book a call
          </Button>
        </motion.div>
      </section>

      {/* About & Services Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-outfit font-bold mb-6 text-center text-white">
            About & our services
          </h2>
          <p className="text-xl text-center mb-16 text-gray-300">
            Transform your cold email outreach into a lead-converting sales machine. 
            With our done-for-you services, you'll generate warm leads for you faster than ever.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-secondary/50 p-6 text-white">
              <h3 className="text-xl font-bold mb-4 text-white">Appointment setting</h3>
              <p className="text-gray-300">
                We find qualified B2B leads and set up meetings for you to close. 
                Tell us your value proposition and target audience, and we'll do the rest.
              </p>
            </Card>

            <Card className="bg-secondary/50 p-6 text-white">
              <h3 className="text-xl font-bold mb-4 text-white">Prospect research</h3>
              <p className="text-gray-300">
                Research is more complex people think, especially when sourcing accurate, 
                up-to-date contact info for decision-makers. We use top-tier research tools 
                that are precise and reliable.
              </p>
            </Card>

            <Card className="bg-secondary/50 p-6 text-white">
              <h3 className="text-xl font-bold mb-4 text-white">Anti spam - services</h3>
              <p className="text-gray-300">
                80% of emails are marked as spam. Fluentaleads ensures yours reach the other 20% 
                we ensure this by using spam filters and following strict guidelines.
              </p>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-outfit font-bold mb-12 text-center text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How does your lead generation process work?</AccordionTrigger>
              <AccordionContent>
                We use a combination of targeted research, personalized outreach, and proven email 
                marketing strategies to connect with potential clients who are most likely to be 
                interested in your services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What industries do you work with?</AccordionTrigger>
              <AccordionContent>
                We specialize in B2B services across various industries, with particular expertise 
                in technology, marketing, consulting, and professional services sectors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How long does it take to see results?</AccordionTrigger>
              <AccordionContent>
                While results can vary, most clients start seeing qualified leads within the first 
                month of our engagement. We continuously optimize our approach based on data and feedback.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Discovery Call Section */}
      <section id="discovery" className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-outfit font-bold mb-6 text-white">
            Schedule a Discovery Call
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Book a 30-minute call to discuss how we can help grow your agency
          </p>
          <div className="bg-secondary/50 rounded-lg p-6">
            <CalendlyWidget />
            <div className="mt-6">
              <Button asChild size="lg" className="text-lg px-8">
                <a 
                  href="https://calendly.com/mikael-fluentaleads/30min?hide_gdpr_banner=1&month=2025-01&date=2025-01-17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <p className="mb-2">mikael@fluentaleads.com</p>
            <p className="mb-4">+358414890845</p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/mikaelhyl" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/streakyzoo2324" target="_blank" rel="noopener noreferrer">
                <X className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/mikael-hyle-53454b271/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <p className="text-sm text-gray-400">© 2025 fluentaleads</p>
        </div>
      </footer>
    </main>
  )
}

