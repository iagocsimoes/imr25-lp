'use client'

import ExclusiveBanner from '@/components/exclusive-banner'
import BackgroundPaths from '@/components/background-paths'
import Description from '@/components/description'
import BentoGrid from '@/components/bento-grid'
import FAQ from '@/components/faq-questions'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import KeynoteSpeakers from '@/components/keynote-speakers'
import Metrics from '@/components/metrics'
import MyLp from '@/components/my-lp'
import ParticlesBackground from '@/components/particle-background'
import Plans from '@/components/plans'
import Speakers from '@/components/speakers'
import TestimonialOverlay from '@/components/testimonial-overlay'
import TestimonialsMarquee from '@/components/testimonials-marquee'
import VideoCTA from '@/components/video-cta'
import WhatIsIMR25 from '@/components/what-is-imr25'
import TicketModal from '@/components/ticket-modal'
import { useTicketModal } from '@/hooks/use-ticket-modal'
import { TicketModalProvider } from '@/contexts/ticket-modal-context'
import Image from 'next/image'

export default function Page() {
  const { isOpen, openModal, closeModal } = useTicketModal()

  return (
    <TicketModalProvider openModal={openModal}>
      <div className="relative bg-slate-950 overflow-hidden">
        <ExclusiveBanner />
        <BackgroundPaths />

        <div className="relative z-50">
          <Header />
          <HeroSection />
        </div>

        {/* Sections with Particles */}
        <div className="relative">
          {/* Particles for all sections below hero */}
          <div className="absolute inset-0 z-0">
            <ParticlesBackground />
          </div>

          <div className="relative z-10">
            <WhatIsIMR25 />
            <KeynoteSpeakers />
            <Speakers />
            <Description />
          </div>
        </div>

      <div className="relative h-full z-20">
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="relative z-10">
          <Metrics />
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="relative z-10">
          <TestimonialsMarquee />
        </div>
      </div>

      <div className="w-full relative bg-[url('/bgplans.png')] bg-cover bg-center">
        {/* Color overlay for red/blue tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9a0008]/20 via-slate-950/30 to-[#1c1d1c]/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>

        {/* Subtle dark overlay to make neon glow pop */}
        <div className="absolute inset-0 bg-slate-950/20"></div>

        {/* Particles layer */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        <div className="relative z-10">
          <Plans />
        </div>
      </div>

      {/* Video CTA and Bento Grid Sections */}
      <div className="w-full relative bg-slate-950 -mt-1">
        {/* Particles layer */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        <div className="relative z-10">
          <BentoGrid />
          <VideoCTA />
        </div>
      </div>

      <div className="w-full relative bg-slate-950">
        {/* Particles layer */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        <div className="relative z-10">
          <FAQ />
          <MyLp />
        </div>

        <Image
          src="/bgfaq.png"
          alt="Description"
          width={1520}
          height={880}
          className="absolute -z-10 -right-40 lg:-right-[550px] top-40 lg:top-0 object-cover"
          style={{ filter: 'hue-rotate(-30deg) saturate(0.7) brightness(0.8)' }}
        />
        {/* Color overlay for the FAQ background image */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-l from-[#9a0008]/20 via-transparent to-[#1c1d1c]/15 mix-blend-multiply"></div>

        <div className="absolute hidden z-10 xl:flex -left-24 -top-18 border-[20px] h-[400px] w-[200px] border-red-500/60 rounded-[200px]"></div>
        <div className="absolute hidden z-10 xl:flex -left-50 bottom-[33rem] border-[20px] h-[200px] w-[400px] border-white/60 rounded-[200px]"></div>
        <div className="absolute hidden z-10 xl:flex -right-88 bottom-[44rem] border-[20px] h-[500px] w-[500px] border-red-600/70 rounded-full"></div>
      </div>

        <Footer />

        <TicketModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </TicketModalProvider>
  )
}
