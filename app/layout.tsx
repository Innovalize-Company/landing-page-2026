import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: 'Innovalize | We digitalize your business',
  description: 'Digital agency specializing in web development, SEO optimization, branding, and social media management. Transform your business with cutting-edge technology.',
  keywords: ['web development', 'SEO', 'branding', 'digital agency', 'responsive design', 'hosting'],
  openGraph: {
    title: 'Innovalize | We digitalize your business',
    description: 'Transform your business with cutting-edge digital solutions',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: '#0a0f1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
