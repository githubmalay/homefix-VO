"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function QuotePage() {
  const quotes = [
    {
      id: 1,
      handyman: "John Smith",
      rating: 4.8,
      reviews: 127,
      price: 85,
      eta: "2 hours",
      distance: "1.2 miles",
      specialties: ["Plumbing", "General Repair"],
      verified: true,
    },
    {
      id: 2,
      handyman: "Sarah Johnson",
      rating: 4.9,
      reviews: 89,
      price: 95,
      eta: "1.5 hours",
      distance: "0.8 miles",
      specialties: ["Plumbing", "Emergency Repair"],
      verified: true,
    },
  ]

  const handleAcceptQuote = (quoteId: number) => {
    console.log("Accepting quote:", quoteId)
    // Redirect to payment page
    window.location.href = "/customer/payment"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Available Quotes</h1>
          <p className="text-gray-600">Choose the best handyman for your repair job</p>
        </div>

        <div className="grid gap-6">
          {quotes.map((quote) => (
            <Card key={quote.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold mr-3">{quote.handyman}</h3>
                      {quote.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center mb-3">
                      <div className="flex items-center mr-4">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{quote.rating}</span>
                        <span className="text-gray-500 ml-1">({quote.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">{quote.distance} away</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">ETA: {quote.eta}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {quote.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="md:text-right">
                    <div className="text-3xl font-bold text-blue-600 mb-2">${quote.price}</div>
                    <p className="text-sm text-gray-600 mb-4">Total estimated cost</p>
                    <Button
                      onClick={() => handleAcceptQuote(quote.id)}
                      className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
                    >
                      Accept Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Not satisfied with these quotes?</p>
          <Link href="/customer/request">
            <Button variant="outline">Request New Quotes</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
