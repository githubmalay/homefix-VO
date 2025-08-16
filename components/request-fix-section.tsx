"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, AlertCircle, MapPin, Phone, Calendar, Wrench } from "lucide-react"
import { useState } from "react"

export function RequestFixSection() {
  const [formData, setFormData] = useState({
    issue: "",
    category: "",
    description: "",
    urgency: "",
    location: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    window.location.href = "/customer/register"
  }

  const handleFileUpload = () => {
    console.log("[v0] File upload clicked")
    // File upload functionality would be implemented here
    alert("Photo upload feature coming soon!")
  }

  return (
    <section
      id="request-fix-section"
      className="py-12 md:py-20 bg-gradient-to-br from-background via-card/30 to-muted/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 md:top-20 md:right-20 w-32 h-32 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-32 h-32 md:w-64 md:h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4">
              <Wrench className="w-3 h-3 md:w-4 md:h-4" />
              Get Started Now
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Request a <span className="gradient-text">Fix</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Tell us what needs fixing and we'll connect you with the perfect handyman in your area. It's fast, easy,
              and reliable.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Benefits */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Why Choose HomeFix Now?</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
                        Local Verified Experts
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        All handymen are background-checked and locally based for quick response times.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
                        Flexible Scheduling
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Book same-day service or schedule for a time that works for you.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">24/7 Support</h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Our customer support team is always here to help with any questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-4 md:p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2 md:mb-3 text-sm md:text-base">
                      What happens next?
                    </p>
                    <ul className="text-muted-foreground space-y-1.5 md:space-y-2 text-xs md:text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full flex-shrink-0"></div>
                        We'll match you with 3-5 nearby verified handymen
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        You'll receive quotes and estimated arrival times
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full flex-shrink-0"></div>
                        Choose your preferred handyman and confirm
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        Track their arrival in real-time
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-xl order-1 lg:order-2">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs md:text-sm font-semibold text-foreground">What needs fixing?</label>
                    <Input
                      placeholder="e.g., Leaky faucet"
                      className="bg-input border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl text-sm md:text-base h-10 md:h-11"
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs md:text-sm font-semibold text-foreground">Issue Category</label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger className="bg-input border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl h-10 md:h-11 text-sm md:text-base">
                        <SelectValue placeholder="Choose category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plumbing">🚿 Plumbing</SelectItem>
                        <SelectItem value="electrical">⚡ Electrical</SelectItem>
                        <SelectItem value="furniture">🪑 Furniture Assembly</SelectItem>
                        <SelectItem value="appliance">🔧 Appliance Repair</SelectItem>
                        <SelectItem value="painting">🎨 Painting</SelectItem>
                        <SelectItem value="other">🔨 Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-semibold text-foreground">Describe the problem</label>
                  <Textarea
                    placeholder="e.g., Kitchen sink is dripping constantly, tried tightening but still leaks..."
                    rows={3}
                    className="bg-input border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl resize-none text-sm md:text-base"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs md:text-sm font-semibold text-foreground">Urgency Level</label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                    >
                      <SelectTrigger className="bg-input border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl h-10 md:h-11 text-sm md:text-base">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">🚨 ASAP (Emergency)</SelectItem>
                        <SelectItem value="today">⏰ Today</SelectItem>
                        <SelectItem value="week">📅 This week</SelectItem>
                        <SelectItem value="flexible">🕐 I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs md:text-sm font-semibold text-foreground">Your Location</label>
                    <Input
                      placeholder="Enter your address"
                      className="bg-input border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl text-sm md:text-base h-10 md:h-11"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-semibold text-foreground">Contact Number</label>
                  <Input
                    placeholder="(555) 123-4567"
                    className="bg-input border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl text-sm md:text-base h-10 md:h-11"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-semibold text-foreground">
                    Photos (optional but helpful)
                  </label>
                  <div
                    className="border-2 border-dashed border-border/50 rounded-xl p-4 md:p-8 text-center hover:border-primary/50 transition-all duration-300 bg-muted/20 cursor-pointer"
                    onClick={handleFileUpload}
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <Upload className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <p className="text-foreground font-medium mb-1 md:mb-2 text-sm md:text-base">
                      Upload up to 5 photos
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                      Help us understand the problem better
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="rounded-xl bg-transparent text-xs md:text-sm"
                    >
                      Choose Photos
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  🔧 Find My Handyman Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
