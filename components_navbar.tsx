'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative w-48 h-12">
            <Image
              src="/Mikael hyle logo.png"
              alt="Fluentaleads"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

