'use client'

import { Calendar } from '@/components/ui/calendar'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Video } from 'lucide-react'
import { useState } from 'react'

export default function DiscoveryCall() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <section id="discovery" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Schedule a Discovery Call
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Let's discuss how we can help your agency grow
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <Video className="w-5 h-5" />
              <span>Video Call</span>
            </div>
            <div className="text-gray-300">
              30 Minutes
            </div>
          </div>
          <p className="text-2xl font-semibold text-white mb-8">
            with Mikael Hyle
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border-gray-800">
            <div className="p-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border border-gray-800"
              />
              {date && (
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Confirm Booking
                </motion.button>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

