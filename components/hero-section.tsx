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
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/30 to-muted/50 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <Zap className="w-4 h-4" />
              Fast & Reliable Service
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Home Problems?
                <br />
                <span className="gradient-text">Fixed Fast.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Connect with verified local handymen who can arrive within an hour. From leaky taps to broken chairs -
                get it fixed today, not next week.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                onClick={handleRequestFix}
              >
                Request a Fix Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-border hover:border-primary hover:text-primary transition-all duration-300 bg-transparent"
                onClick={handleBecomeWorker}
              >
                Become a Worker
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                <span className="text-sm text-muted-foreground font-medium">Satisfaction</span>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">&lt;1hr</div>
                <span className="text-sm text-muted-foreground font-medium">Response</span>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-5 h-5 text-yellow-600 fill-current" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">4.9</div>
                <span className="text-sm text-muted-foreground font-medium">Rating</span>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative float-animation">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform rotate-6"></div>
              <img
                src="/smiling-handyman.png"
                alt="Professional handyman"
                className="relative rounded-3xl w-full h-auto shadow-2xl border border-border/50"
              />

              <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-600 fill-current" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">4.9</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">JM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">John M.</div>
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
