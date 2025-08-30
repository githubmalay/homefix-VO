import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Clock, Search, Filter } from "lucide-react"

export default function HandymanJobs() {
  const availableJobs = [
    {
      id: 1,
      title: "Kitchen Sink Repair",
      description: "Leaky faucet needs fixing, customer available all day",
      location: "Downtown, 1.2 miles",
      urgency: "Medium",
      estimatedPay: 85,
      timePosted: "15 min ago",
      category: "Plumbing",
    },
    {
      id: 2,
      title: "Bathroom Tile Replacement",
      description: "Replace 3 cracked tiles in shower area",
      location: "Uptown, 2.1 miles",
      urgency: "Low",
      estimatedPay: 120,
      timePosted: "1 hour ago",
      category: "Tiling",
    },
    {
      id: 3,
      title: "Electrical Outlet Installation",
      description: "Install 2 new outlets in home office",
      location: "Midtown, 0.8 miles",
      urgency: "High",
      estimatedPay: 150,
      timePosted: "30 min ago",
      category: "Electrical",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Jobs</h1>
        <p className="text-gray-600">Find and accept jobs in your area</p>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search jobs..." className="pl-10" />
          </div>
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="space-y-4">
        {availableJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                  <Badge variant="outline" className="mb-2">
                    {job.category}
                  </Badge>
                </div>
                <Badge
                  variant={job.urgency === "High" ? "destructive" : job.urgency === "Medium" ? "default" : "secondary"}
                >
                  {job.urgency} Priority
                </Badge>
              </div>

              <p className="text-gray-600 mb-4">{job.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {job.timePosted}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-600">₹{job.estimatedPay}</div>
                <div className="space-x-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Accept Job
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}