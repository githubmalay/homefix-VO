import type React from "react"
import HandymanSidebar from "@/components/handyman-sidebar"

export default function HandymanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <HandymanSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
