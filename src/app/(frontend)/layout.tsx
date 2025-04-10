import React from 'react'
import './styles.css'

export const metadata = {
  title: 'IMPHNEN',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
