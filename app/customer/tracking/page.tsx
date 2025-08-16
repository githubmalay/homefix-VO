import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function TrackingPage() {
  const jobDetails = {
    id: "JOB-001",
    service: "Kitchen Sink Repair",
    handyman: {
      name: "John Smith",
      phone: "+1 (555) 123-4567",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      eta: "15 minutes",
    },
    status: "On the way",
    timeline: [
      { step: "Job Confirmed", completed: true, time: "10:30 AM" },
      { step: "Handyman Assigned", completed: true, time: "10:35 AM" },
      { step: "On the way", completed: true, time: "11:00 AM" },
      { step: "Work in Progress", completed: false, time: "" },
      { step: "Job Completed", completed: false, time: "" },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Track Your Job</h1>
          <p className="text-gray-600">Job ID: {jobDetails.id}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Job Status</CardTitle>
              <CardDescription>{jobDetails.service}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Current Status:</span>
                  <Badge className="bg-blue-100 text-blue-800">{jobDetails.status}</Badge>
                </div>

                <div className="space-y-3">
                  {jobDetails.timeline.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${item.completed ? "bg-green-500" : "bg-gray-300"}`}>
                        {item.completed && <CheckCircle className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex-1">
                        <span className={`${item.completed ? "text-green-700" : "text-gray-500"}`}>{item.step}</span>
                        {item.time && <span className="text-sm text-gray-500 ml-2">{item.time}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Handyman</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={jobDetails.handyman.avatar || "/placeholder.svg"} />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{jobDetails.handyman.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Rating: {jobDetails.handyman.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Clock className="w-4 h-4" />
                  <span>ETA: {jobDetails.handyman.eta}</span>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Live Location</CardTitle>
            <CardDescription>Track your handyman's location in real-time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Live tracking map would appear here</p>
                <p className="text-sm text-gray-500">Handyman is 0.5 miles away</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/customer/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
