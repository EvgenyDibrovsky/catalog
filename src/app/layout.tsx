import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
const poppins = Poppins({
  display: 'swap',
  weight: ["400","500","600","700"],
    subsets: ['latin', 'latin-ext']
})
export const metadata: Metadata = {
  title: 'New Project',
  description: 'Next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className} >
        <Header/>
        <main className='h-screen'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}