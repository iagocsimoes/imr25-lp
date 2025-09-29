'use client'

import { useState, useEffect } from 'react'
import { useTicketModalContext } from '@/contexts/ticket-modal-context'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showMobileHeader, setShowMobileHeader] = useState(false)
  const { openModal } = useTicketModalContext()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Show mobile header after scrolling past hero section (90vh)
      setShowMobileHeader(window.scrollY > window.innerHeight * 0.9)
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
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-16 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-slate-950/80 md:flex backdrop-blur-sm border border-gray-800/50 shadow-lg transition-all duration-300 ${
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
          <Image
            src="/logo imr.png"
            alt="IMR25"
            width={isScrolled ? 80 : 100}
            height={isScrolled ? 32 : 40}
            className="transition-all duration-300"
          />
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
          <span className="relative z-20">Lineup</span>
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
          className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-[#ec020d] to-[#9a0008] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
        >
          Garanta Sua Vaga
        </a>
      </div>
    </header>

    {/* Mobile Header - Only shows after scrolling past hero */}
    {showMobileHeader && (
      <header className="md:hidden fixed top-0 left-0 right-0 z-[9998] bg-slate-950/95 backdrop-blur-sm border-b border-gray-800/50 animate-slide-down">
        <div className="flex items-center justify-between px-4 py-3">
          <Image
            src="/logo imr.png"
            alt="IMR25"
            width={80}
            height={32}
            className="transition-all duration-300"
          />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:bg-gray-800/50 rounded-lg transition-colors relative z-[9999]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    )}

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && showMobileHeader && (
      <>
        {/* Dark overlay background */}
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[9997]"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div className="md:hidden fixed top-[56px] left-0 right-0 bg-slate-950/98 backdrop-blur-sm border-b border-gray-800/50 z-[9998]">
          <div className="flex flex-col py-4">
            <a
              className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/30 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('sobre')
                setIsMobileMenuOpen(false)
              }}
            >
              Sobre
            </a>
            <a
              className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/30 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('planos')
                setIsMobileMenuOpen(false)
              }}
            >
              Ingressos
            </a>
            <a
              className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/30 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('speakers')
                setIsMobileMenuOpen(false)
              }}
            >
              Lineup
            </a>
            <a
              className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/30 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('faq')
                setIsMobileMenuOpen(false)
              }}
            >
              FAQ
            </a>
            <div className="px-6 py-3">
              <button
                onClick={() => {
                  openModal()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full rounded-md font-bold relative cursor-pointer transition duration-200 inline-block text-center bg-gradient-to-b from-[#ec020d] to-[#9a0008] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-3 text-sm"
              >
                Garanta Sua Vaga
              </button>
            </div>
          </div>
        </div>
      </>
    )}

    </>
  )
}

export default Header