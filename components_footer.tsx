import { Instagram } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <div className="text-gray-400 space-y-2">
              <p>mikael@fluentaleads.com</p>
              <p>+358414890845</p>
              <p>© 2025 fluentaleads</p>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <Link 
              href="https://instagram.com/mikaelhyl" 
              target="_blank"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link 
              href="https://x.com/streakyzoo2324" 
              target="_blank"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Image
                src="/x-logo.svg"
                alt="X (formerly Twitter)"
                width={24}
                height={24}
                className="opacity-100 hover:opacity-80 transition-opacity"
              />
              <span className="sr-only">X (formerly Twitter)</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

