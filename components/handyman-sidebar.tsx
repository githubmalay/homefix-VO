"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Briefcase,
  DollarSign,
  Calendar,
  User,
  Star,
  MessageSquare,
  Settings,
  LogOut,
  Wrench,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/handyman/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Available Jobs",
    href: "/handyman/jobs",
    icon: Briefcase,
  },
  {
    title: "My Jobs",
    href: "/handyman/my-jobs",
    icon: Wrench,
  },
  {
    title: "Earnings",
    href: "/handyman/earnings",
    icon: DollarSign,
  },
  {
    title: "Schedule",
    href: "/handyman/schedule",
    icon: Calendar,
  },
  {
    title: "Profile",
    href: "/handyman/profile",
    icon: User,
  },
  {
    title: "Reviews",
    href: "/handyman/reviews",
    icon: Star,
  },
  {
    title: "Messages",
    href: "/handyman/messages",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/handyman/settings",
    icon: Settings,
  },
]

export default function HandymanSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border shadow-lg">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border bg-gradient-to-r from-primary to-secondary">
        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
          <Wrench className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">Handyman Panel</h1>
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
