import { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title: 'DUP PROGRAM',
  description: 'Treine pesado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  )
}
