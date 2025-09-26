'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      const particleCount = 70

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.08, // Velocidade muito mais lenta
          speedY: (Math.random() - 0.5) * 0.08,
          opacity: Math.random() * 0.4 + 0.3,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()

    const handleResize = () => {
      generateParticles()
    }

    window.addEventListener('resize', handleResize)

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          if (newX > 100) newX = -2
          if (newX < -2) newX = 100
          if (newY > 100) newY = -2
          if (newY < -2) newY = 100

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )
      animationRef.current = requestAnimationFrame(animateParticles)
    }

    animationRef.current = requestAnimationFrame(animateParticles)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-red-500"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: `translate3d(0, 0, 0)`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  )
}
