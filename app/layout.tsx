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
  title: 'IMR 2025 - Imersão Máquina de Resultados',
  description: 'O Chamado para a Transformação Empresarial. 12 de Novembro de 2025 em Vitória/ES. O maior evento de negócios do Espírito Santo com 9 mentores e mais de 1000 empresários.',
  keywords: 'IMR 2025, Imersão Máquina de Resultados, evento empresarial, negócios, Vitória ES, Enjoy, transformação empresarial',
  authors: [{ name: 'Enjoy Educação' }],
  creator: 'Enjoy Educação',
  publisher: 'Enjoy Educação',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://imr25.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'IMR 2025 - Imersão Máquina de Resultados',
    description: 'O Chamado para a Transformação Empresarial. 12 de Novembro de 2025 em Vitória/ES. O maior evento de negócios do Espírito Santo.',
    url: 'https://imr25.com.br',
    siteName: 'IMR 2025',
    images: [
      {
        url: '/IMR logo quadrado.png',
        width: 1200,
        height: 1200,
        alt: 'IMR 2025 - Imersão Máquina de Resultados',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMR 2025 - Imersão Máquina de Resultados',
    description: 'O Chamado para a Transformação Empresarial. 12 de Novembro de 2025 em Vitória/ES.',
    images: ['/IMR logo quadrado.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/IMR logo quadrado.png',
    shortcut: '/IMR logo quadrado.png',
    apple: '/IMR logo quadrado.png',
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
