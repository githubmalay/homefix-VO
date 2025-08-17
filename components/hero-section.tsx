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
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/30 to-muted/50 py-16 md:py-24">
      {/* Floating background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 md:w-60 md:h-60 bg-primary/10 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 bg-secondary/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <Zap className="w-4 h-4" />
              Fast & Reliable Service
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              Home Problems?
              <br />
              <span className="gradient-text">Fixed Fast.</span>
            </h1>

            {/* Sub-text */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
              Connect with verified local handymen who can arrive within an hour. From leaky taps to broken chairs – 
              get it fixed today, not next week.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group w-full sm:w-auto"
                onClick={handleRequestFix}
              >
                Request a Fix Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-border hover:border-primary hover:text-primary transition-all duration-300 bg-transparent w-full sm:w-auto"
                onClick={handleBecomeWorker}
              >
                Become a Worker
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">100%</div>
                <span className="text-sm text-muted-foreground font-medium">Satisfaction</span>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">&lt;1hr</div>
                <span className="text-sm text-muted-foreground font-medium">Response</span>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-5 h-5 text-yellow-600 fill-current" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">4.9</div>
                <span className="text-sm text-muted-foreground font-medium">Rating</span>
              </div>
            </div>
          </div>

          {/* Right Section (Image with overlays) */}
          <div className="relative lg:pl-8">
            <div className="relative float-animation">
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform rotate-6"></div>
              
              {/* Main Image */}
              <img
                src="/smiling-handyman.png"
                alt="Professional handyman"
                className="relative rounded-2xl w-3/4 md:w-2/3 lg:w-4/5 h-auto shadow-2xl border border-border/50 mx-auto"
              />

              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-600 fill-current" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">4.9</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>

              {/* Worker Info Badge */}
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">JM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">John M.</div>
                    <div className="text-xs text-muted-foreground">Expert Handyman</div>
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
