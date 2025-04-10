import { Metadata } from 'next'
import React from 'react'
import './styles.css'

export const metadata: Metadata = {
  title: 'IMPHNEN',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
