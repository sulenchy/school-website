import "../styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MCHS",
  description: "Welcome to MCHS - Perseverance wins the success",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-20 md:pt-24">
          <div className="container mx-auto px-4 py-8">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}


