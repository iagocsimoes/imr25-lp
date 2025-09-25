'use client'

import { useState, useEffect } from 'react'
import { useTicketModalContext } from '@/contexts/ticket-modal-context'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { openModal } = useTicketModalContext()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header
      className={`fixed top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-slate-950/80 md:flex backdrop-blur-sm border border-gray-800/50 shadow-lg transition-all duration-300 ${
        isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
      } py-2`}
      style={{
        willChange: "transform",
        transform: "translateX(-50%) translateZ(0)",
        backfaceVisibility: "hidden",
        perspective: "1000px",
        left: "50%",
      }}
    >
      <a
        className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
          isScrolled ? "ml-4" : ""
        }`}
        href="#"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
        </div>
      </a>

      <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-gray-400 transition duration-200 hover:text-white md:flex md:space-x-2">
        <a
          className="relative px-4 py-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('sobre')
          }}
        >
          <span className="relative z-20">Sobre</span>
        </a>
        <a
          className="relative px-4 py-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('planos')
          }}
        >
          <span className="relative z-20">Ingressos</span>
        </a>
        <a
          className="relative px-4 py-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('speakers')
          }}
        >
          <span className="relative z-20">Palestrantes</span>
        </a>
        <a
          className="relative px-4 py-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('faq')
          }}
        >
          <span className="relative z-20">FAQ</span>
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a
          onClick={openModal}
          className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-red-500 to-red-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
        >
          Garantir Vaga
        </a>
      </div>
    </header>
  )
}

export default Header