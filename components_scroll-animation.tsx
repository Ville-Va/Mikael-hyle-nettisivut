'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollAnimation() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1])
  
  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className="absolute inset-0 z-0"
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/Bckground 1 revised fluentaleads (1).jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-y'
        }}
      />
    </motion.div>
  )
}

