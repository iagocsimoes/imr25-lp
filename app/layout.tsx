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
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KSKKHW77');`
        }} />
      </head>
      <body className={montserrat.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSKKHW77"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        {children}
      </body>
    </html>
  )
}
