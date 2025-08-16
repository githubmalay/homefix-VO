"use client"

import { MessageSquare, Users, Calendar, CheckCircle } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Post Your Problem",
      description: "Describe what needs fixing and upload photos. Takes less than 5 minutes.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Get Matched",
      description: "Our system instantly matches you with 3-5 nearby verified handymen.",
      color: "text-secondary",
    },
    {
      icon: Calendar,
      title: "Choose & Schedule",
      description: "Compare quotes, reviews, and ETAs. Pick your preferred handyman.",
      color: "text-accent",
    },
    {
      icon: CheckCircle,
      title: "Get It Fixed",
      description: "Track arrival in real-time. Pay securely after the job is complete.",
      color: "text-primary",
    },
  ]

  const handleStepClick = (stepTitle: string) => {
    console.log(`[v0] Step clicked: ${stepTitle}`)
    const requestSection = document.getElementById("request-fix-section")
    if (requestSection) {
      requestSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">How HomeFix Now Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From problem to solution in under an hour. It's that simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => handleStepClick(step.title)}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto shadow-lg border border-border group-hover:shadow-xl transition-shadow">
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-accent font-medium">🕒 Average time from request to handyman arrival: 47 minutes</p>
        </div>
      </div>
    </section>
  )
}
