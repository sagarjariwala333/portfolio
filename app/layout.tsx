import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sagar Jariwala - Software Engineer',
  description: 'Software Engineer with 2+ years of experience specializing in MERN stack, AWS, and AI/ML solutions.',
  keywords: 'Software Engineer, MERN Stack, React, Node.js, AWS, AI, Machine Learning',
  authors: [{ name: 'Sagar Jariwala' }],
  openGraph: {
    title: 'Sagar Jariwala - Software Engineer',
    description: 'Software Engineer with 2+ years of experience specializing in MERN stack, AWS, and AI/ML solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}