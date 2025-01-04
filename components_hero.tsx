'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ScrollAnimation from './scroll-animation'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ScrollAnimation />
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      <div className="container mx-auto px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Agency growth partner
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            We help agencies scale by delivering high-quality leads through targeted email marketing
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#discovery"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              Book a call
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

