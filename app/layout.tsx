import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"
import { ChatWidget } from "@/components/chat-widget"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "HomeFix Now - Professional Home Repair Services",
  description:
    "Get your home problems fixed fast with HomeFix Now. Professional, reliable home repair services with 100% satisfaction guarantee.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
