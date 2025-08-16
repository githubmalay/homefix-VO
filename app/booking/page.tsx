"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedWorker, setSelectedWorker] = useState("")
  const [step, setStep] = useState(1)

  const services = [
    { id: "plumbing", name: "Plumbing", price: "₹6,400-12,000", duration: "1-2 hours" },
    { id: "electrical", name: "Electrical", price: "₹8,000-16,000", duration: "1-3 hours" },
    { id: "hvac", name: "HVAC", price: "₹9,600-20,000", duration: "2-4 hours" },
    { id: "carpentry", name: "Carpentry", price: "₹7,200-14,400", duration: "2-5 hours" },
    { id: "painting", name: "Painting", price: "₹4,800-9,600", duration: "3-6 hours" },
    { id: "appliance", name: "Appliance Repair", price: "₹5,600-11,200", duration: "1-2 hours" },
  ]

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ]

  const availableWorkers = [
    {
      id: "1",
      name: "Mike Johnson",
      rating: 4.9,
      reviews: 127,
      specialties: ["Plumbing", "HVAC"],
      price: "₹6,800/hr",
      image: "/placeholder-tjwzg.png",
    },
    {
      id: "2",
      name: "Sarah Wilson",
      rating: 4.8,
      reviews: 94,
      specialties: ["Electrical", "Appliance Repair"],
      price: "₹7,200/hr",
      image: "/female-electrician-headshot.png",
    },
    {
      id: "3",
      name: "Tom Davis",
      rating: 4.7,
      reviews: 156,
      specialties: ["Carpentry", "Painting"],
      price: "₹6,400/hr",
      image: "/placeholder-g5i6d.png",
    },
  ]

  const handleBooking = () => {
    alert("Booking confirmed! You'll receive a confirmation email shortly.")
    // In a real app, this would submit to an API
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Service</h1>
            <p className="text-gray-600">Schedule your home repair in just a few steps</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNum ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {stepNum}
                  </div>
                  {stepNum < 4 && <div className={`w-16 h-1 mx-2 ${step > stepNum ? "bg-blue-600" : "bg-gray-200"}`} />}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Service Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedService === service.id
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <h3 className="font-semibold mb-2">{service.name}</h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>Price: {service.price}</div>
                        <div>Duration: {service.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-6">
                  <Button onClick={() => setStep(2)} disabled={!selectedService}>
                    Next: Select Date & Time
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Date & Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Choose Date</h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Available Times</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          className={`p-2 text-sm border rounded-lg transition-colors ${
                            selectedTime === time
                              ? "border-blue-600 bg-blue-50 text-blue-600"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} disabled={!selectedDate || !selectedTime}>
                    Next: Choose Worker
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Worker Selection */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Worker</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableWorkers.map((worker) => (
                    <div
                      key={worker.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedWorker === worker.id
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedWorker(worker.id)}
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={worker.image || "/placeholder.svg"}
                          alt={worker.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{worker.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              ⭐ {worker.rating} ({worker.reviews} reviews)
                            </span>
                            <span>•</span>
                            <span>{worker.price}</span>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">Specialties: {worker.specialties.join(", ")}</div>
                        </div>
                        <Badge variant="secondary">Available</Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button onClick={() => setStep(4)} disabled={!selectedWorker}>
                    Next: Confirm Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Confirm Your Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-4">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span>{services.find((s) => s.id === selectedService)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{selectedDate?.toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Worker:</span>
                        <span>{availableWorkers.find((w) => w.id === selectedWorker)?.name}</span>
                      </div>
                      <div className="flex justify-between font-semibold pt-2 border-t">
                        <span>Estimated Cost:</span>
                        <span>{services.find((s) => s.id === selectedService)?.price}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Additional Details</h3>
                    <textarea
                      placeholder="Describe your problem in detail..."
                      className="w-full p-3 border rounded-lg h-24 resize-none"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Full Name" className="p-3 border rounded-lg" />
                      <input type="tel" placeholder="Phone Number" className="p-3 border rounded-lg" />
                      <input type="email" placeholder="Email Address" className="p-3 border rounded-lg" />
                      <input type="text" placeholder="Address" className="p-3 border rounded-lg" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setStep(3)}>
                    Back
                  </Button>
                  <Button onClick={handleBooking} className="bg-blue-600 hover:bg-blue-700">
                    Confirm Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
