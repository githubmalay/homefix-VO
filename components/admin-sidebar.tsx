"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Wrench,
  FileCheck,
  AlertTriangle,
  BarChart3,
  Settings,
  LogOut,
  Shield,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    title: "Handymen",
    href: "/admin/handymen",
    icon: Wrench,
  },
  {
    title: "Verifications",
    href: "/admin/verifications",
    icon: FileCheck,
  },
  {
    title: "Jobs",
    href: "/admin/jobs",
    icon: AlertTriangle,
  },
  {
    title: "Disputes",
    href: "/admin/disputes",
    icon: AlertTriangle,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border shadow-lg">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border bg-gradient-to-r from-primary to-secondary">
        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">Admin Panel</h1>
          <p className="text-sm text-white/80">HomeFix Now</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-primary",
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  isActive ? "scale-110" : "group-hover:scale-105",
                )}
              />
              {item.title}
              {isActive && <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />}
            </Link>
          )
        })}
      </nav>

      <div className="px-4 py-4 border-t border-sidebar-border bg-muted/30">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-sidebar-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200 group">
          <LogOut className="w-5 h-5 group-hover:scale-105 transition-transform duration-200" />
          Logout
        </button>
      </div>
    </div>
  )
}
