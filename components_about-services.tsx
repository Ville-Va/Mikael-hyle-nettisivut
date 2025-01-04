'use client'

import { motion } from 'framer-motion'
import { Mail, Search, Shield } from 'lucide-react'

const services = [
  {
    icon: Mail,
    title: "Appointment setting",
    description: "We find qualified B2B leads and set up meetings for you to close. Tell us your value proposition and target audience, and we'll do the rest."
  },
  {
    icon: Search,
    title: "Prospect research",
    description: "Research is more complex people think, especially when sourcing accurate, up-to-date contact info for decision-makers. We use top-tier research tools that are precise and reliable."
  },
  {
    icon: Shield,
    title: "Anti spam - services",
    description: "80% of emails are marked as spam. Fluentaleads ensures yours reach the other 20% we ensure this by using spam filters and following strict guidelines"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

export default function AboutServices() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About & our services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your cold email outreach into a lead-converting sales machine. 
            With our done-for-you services, you'll generate warm leads for you faster than ever.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl"
            >
              <service.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

