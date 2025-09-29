import type React from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IMR 2025',
  description: 'O Chamado para a Transformação Empresarial',
  icons: {
    icon: '/logo imr.png',
    shortcut: '/logo imr.png',
    apple: '/logo imr.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${montserrat.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
