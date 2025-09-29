import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'

const skModernist = {
  fontFamily:
    'SK-Modernist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

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
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/sk-modernist"
          rel="stylesheet"
        />
      </head>
      <body style={skModernist}>{children}</body>
    </html>
  )
}
