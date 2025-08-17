"use client"

import { Button } from "@/components/ui/button"
import { Star, Clock, CheckCircle, ArrowRight, Zap, Wrench, Shield, Users } from "lucide-react"

export function HeroSection() {
  const handleRequestFix = () => {
    window.location.href = "/customer/request"
  }

  const handleBecomeWorker = () => {
    window.location.href = "/handyman/register"
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/30 to-muted/50 py-12 md:py-20">
      {/* Floating background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-5 right-5 md:bottom-10 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-primary/20 shadow-sm">
              <Zap className="w-3 h-3 md:w-4 md:h-4" />
              Fast & Reliable Service
            </div>

            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
                Home Problems?
                <br />
                <span className="gradient-text">Fixed Fast.</span>
              </h1>

              <p className="text-base md:text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
                Connect with trusted local handymen who arrive within an hour. From leaky taps to broken chairs — get it fixed today, not next week.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group w-full sm:w-auto"
                onClick={handleRequestFix}
              >
                Request a Fix Now
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl border-2 border-border hover:border-primary hover:text-primary transition-all duration-300 bg-transparent w-full sm:w-auto"
                onClick={handleBecomeWorker}
              >
                Become a Worker
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8">
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                </div>
                <div className="text-xl md:text-3xl font-bold text-foreground mb-1">100%</div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">Satisfaction</span>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                </div>
                <div className="text-xl md:text-3xl font-bold text-foreground mb-1">&lt;1hr</div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">Response</span>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 fill-current" />
                  </div>
                </div>
                <div className="text-xl md:text-3xl font-bold text-foreground mb-1">4.9</div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">Rating</span>
              </div>
            </div>
          </div>

          {/* Right Side: Animated Feature Card */}
          <div className="relative lg:pl-8 mt-8 lg:mt-0">
            <div className="relative bg-card/80 backdrop-blur-lg border border-border/50 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col gap-6 hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">Verified Experts</h3>
                  <p className="text-sm text-muted-foreground">Only trusted, background-checked handymen.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">Secure & Reliable</h3>
                  <p className="text-sm text-muted-foreground">Safety and reliability guaranteed with every booking.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">Happy Customers</h3>
                  <p className="text-sm text-muted-foreground">Thousands of satisfied households trust us daily.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
