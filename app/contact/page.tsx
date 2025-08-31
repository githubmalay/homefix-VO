"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '240px',
  borderRadius: '0.5rem',
};

const center = {
  lat: 37.7749, // Example coordinates for San Francisco
  lng: -122.4194,
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY" // Replace with your actual API key
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you within 2 hours.")
    setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleLiveChat = () => {
    console.log("[v0] Live chat clicked")
    alert("Live chat feature coming soon! Please call us at (555) 123-4567 for immediate assistance.")
  }

  const handleEmergencyCall = () => {
    console.log("[v0] Emergency call clicked")
    window.location.href = "tel:+15551234567"
  }

  const handleCallNow = () => {
    console.log("[v0] Call now clicked")
    window.location.href = "tel:+15551234567"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? Need support? We're here to help you get the most out of HomeFix Now.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">📞</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Call Us</h3>
                  <p className="text-muted-foreground mb-4">Speak with our support team</p>
                  <p className="text-lg font-semibold text-primary">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
                </CardContent>
              </Card>

              <Card className="text-center border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary text-2xl">📧</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Email Us</h3>
                  <p className="text-muted-foreground mb-4">Send us a detailed message</p>
                  <p className="text-lg font-semibold text-secondary">support@homefixnow.com</p>
                  <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                </CardContent>
              </Card>

              <Card className="text-center border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Live Chat</h3>
                  <p className="text-muted-foreground mb-4">Chat with us in real-time</p>
                  <Button className="bg-accent hover:bg-accent/90" onClick={handleLiveChat}>
                    Start Chat
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">Available 6 AM - 10 PM</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <Input
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <Input
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="worker">Worker Application</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Office</h2>
                <div className="bg-muted rounded-lg p-6 mb-6">
                  {isLoaded ? (
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                    />
                  ) : (
                    <div className="aspect-video bg-muted-foreground/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-muted-foreground">Loading map...</span>
                    </div>
                  )}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary mt-1">📍</span>
                      <div>
                        <p className="font-semibold text-foreground">HomeFix Now Headquarters</p>
                        <p className="text-muted-foreground">123 Main Street, Suite 400</p>
                        <p className="text-muted-foreground">San Francisco, CA 94105</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">🕒</span>
                      <div>
                        <p className="font-semibold text-foreground">Office Hours</p>
                        <p className="text-muted-foreground">Monday - Friday: 8 AM - 6 PM</p>
                        <p className="text-muted-foreground">Saturday: 9 AM - 4 PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Emergency Support</h3>
                    <p className="text-muted-foreground mb-4">
                      For urgent repairs and emergencies, our 24/7 hotline connects you directly with available
                      professionals in your area.
                    </p>
                    <Button className="w-full bg-destructive hover:bg-destructive/90" onClick={handleEmergencyCall}>
                      Call Emergency Line
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How quickly can I get help?</h3>
                    <p className="text-muted-foreground text-sm">
                      Most requests receive a response within 1 hour. Emergency services are available 24/7 with average
                      response times of 30 minutes.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Are your workers insured?</h3>
                    <p className="text-muted-foreground text-sm">
                      Yes, all professionals on our platform carry general liability insurance and pass comprehensive
                      background checks.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">What if I'm not satisfied?</h3>
                    <p className="text-muted-foreground text-sm">
                      We offer a 100% satisfaction guarantee. If you're not happy with the work, we'll make it right or
                      refund your money.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How do I pay for services?</h3>
                    <p className="text-muted-foreground text-sm">
                      We accept all major credit cards, debit cards, and digital payments. Payment is processed securely
                      after job completion.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Can I schedule recurring services?</h3>
                    <p className="text-muted-foreground text-sm">
                      Set up weekly, monthly, or seasonal maintenance with your preferred professionals through our
                      platform.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Do you serve my area?</h3>
                    <p className="text-muted-foreground text-sm">
                      We currently serve 50+ major metropolitan areas. Enter your zip code on our homepage to check
                      availability in your location.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">Still Have Questions?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Our friendly support team is standing by to help you with anything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3"
                onClick={handleCallNow}
              >
                Call Now
              </Button>
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 bg-transparent"
                onClick={handleLiveChat}
              >
                Start Live Chat
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
