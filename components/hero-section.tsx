"use client"

import { Button } from "@/components/ui/button"
import { Star, Clock, CheckCircle, ArrowRight, Zap } from "lucide-react"

export function HeroSection() {
  const handleRequestFix = () => {
    window.location.href = "/customer/request"
  }

  const handleBecomeWorker = () => {
    window.location.href = "/handyman/register"
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/30 to-muted/50 py-10 md:py-14">
      {/* Floating background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 left-8 w-32 h-32 md:w-44 md:h-44 bg-primary/10 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-8 right-8 w-44 h-44 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs md:text-sm font-medium border border-primary/20">
              <Zap className="w-3 h-3 md:w-4 md:h-4" />
              Fast & Reliable Service
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Home Problems?
              <br />
              <span className="gradient-text">Fixed Fast.</span>
            </h1>

            {/* Sub-text */}
            <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mx-auto lg:mx-0">
              Connect with verified local handymen who can arrive within an hour. From leaky taps to broken chairs – 
              get it fixed today, not next week.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg group w-full sm:w-auto"
                onClick={handleRequestFix}
              >
                Request a Fix Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-3 text-base font-semibold rounded-xl border-2 border-border hover:border-primary hover:text-primary transition-all duration-300 bg-transparent w-full sm:w-auto"
                onClick={handleBecomeWorker}
              >
                Become a Worker
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-bold text-foreground">100%</div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">Satisfaction</span>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-bold text-foreground">&lt;1hr</div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">Response</span>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-4 h-4 text-yellow-600 fill-current" />
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-bold text-foreground">4.9</div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">Rating</span>
              </div>
            </div>
          </div>

          {/* Right Section (Image with overlays) */}
          <div className="relative lg:pl-6">
            <div className="relative float-animation">
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl transform rotate-6"></div>
              
              {/* Main Image */}
              <img
                src="/smiling-handyman.png"
                alt="Professional handyman"
                className="relative rounded-2xl w-2/3 md:w-1/2 lg:w-3/5 h-auto shadow-xl border border-border/40 mx-auto"
              />

              {/* Rating Badge */}
              <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-lg p-2 shadow-md border border-border/40">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-yellow-600 fill-current" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-xs">4.9</div>
                    <div className="text-[10px] text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>

              {/* Worker Info Badge */}
              <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur-sm rounded-lg p-2 shadow-md border border-border/40">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">JM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-xs">John M.</div>
                    <div className="text-[10px] text-muted-foreground">Expert Handyman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
