import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Star } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-sidebar-foreground">HomeFix Now</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for all home repair needs. Professional, reliable, and fast service that gets your
              home back to perfect condition.
            </p>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-2">4.9/5 from 2,500+ reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sidebar-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "For Workers", href: "/for-workers" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sidebar-foreground">Get Started</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/customer/register"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Customer Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/handyman/register"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Become a Handyman
                </Link>
              </li>
              <li>
                <Link
                  href="/customer/request"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Request a Fix
                </Link>
              </li>
              <li>
                <Link
                  href="/customer/login"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Customer Login
                </Link>
              </li>
              <li>
                <Link
                  href="/handyman/login"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Handyman Login
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/login"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sidebar-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">help@homefixnow.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Available in 50+ cities</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-sidebar-foreground mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sidebar-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© 2024 HomeFix Now. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
