import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Providers } from "@/_components/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RGE.js',
  description: 'Powering imagination and creativity, one line at a time.',
}

import DefaultNavbar from '@/_components/Navbars/DefaultNavbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <DefaultNavbar />
          {children}

        </Providers>
      </body>
    </html>
  )
}
