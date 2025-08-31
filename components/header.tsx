"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b bg-background border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">H</span>
          </div>
          <Link href="/" className="font-semibold text-lg hover:text-primary text-foreground">
            HomeFix Now
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/for-workers" className="text-muted-foreground hover:text-foreground transition-colors">
            For Workers
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/customer/login">
            <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
              Customer Login
            </Button>
          </Link>
          <Link href="/handyman/login">
            <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
              Worker Login
            </Button>
          </Link>
          <Link href="/customer/register">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/for-workers"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  For Workers
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <div className="border-t pt-4 space-y-3">
                  <Link href="/customer/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Customer Login
                    </Button>
                  </Link>
                  <Link href="/handyman/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Worker Login
                    </Button>
                  </Link>
                  <Link href="/customer/register" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}