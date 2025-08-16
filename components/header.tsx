import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-background border-border">
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

        <div className="flex items-center gap-3">
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
      </div>
    </header>
  )
}
