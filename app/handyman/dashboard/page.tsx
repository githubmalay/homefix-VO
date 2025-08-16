import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, DollarSign, CheckCircle, TrendingUp, Briefcase, User, Calendar } from "lucide-react"
import Link from "next/link"

export default function HandymanDashboard() {
  const handymanStats = {
    rating: 4.8,
    completedJobs: 127,
    earnings: 2450,
    responseTime: "< 5 min",
    weeklyEarnings: 580,
    pendingJobs: 3,
  }

  const availableJobs = [
    {
      id: 1,
      title: "Kitchen Sink Repair",
      description: "Leaky faucet needs fixing",
      location: "Downtown, 1.2 miles",
      urgency: "Medium",
      estimatedPay: 85,
      timePosted: "15 min ago",
    },
    {
      id: 2,
      title: "Bathroom Tile Replacement",
      description: "Replace 3 cracked tiles in shower",
      location: "Uptown, 2.1 miles",
      urgency: "Low",
      estimatedPay: 120,
      timePosted: "1 hour ago",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
        <p className="text-gray-600">Manage your jobs and grow your business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{handymanStats.rating}</div>
            <p className="text-sm text-gray-600">Average rating</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Jobs Done
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{handymanStats.completedJobs}</div>
            <p className="text-sm text-gray-600">Completed successfully</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <DollarSign className="w-5 h-5 text-green-500 mr-2" />
              Monthly Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${handymanStats.earnings}</div>
            <p className="text-sm text-gray-600">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
              Weekly Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${handymanStats.weeklyEarnings}</div>
            <p className="text-sm text-gray-600">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Clock className="w-5 h-5 text-orange-500 mr-2" />
              Pending Jobs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{handymanStats.pendingJobs}</div>
            <p className="text-sm text-gray-600">Awaiting response</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Clock className="w-5 h-5 text-blue-500 mr-2" />
              Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{handymanStats.responseTime}</div>
            <p className="text-sm text-gray-600">Average response</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Link href="/handyman/jobs">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Briefcase className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Find Jobs</h3>
              <p className="text-sm text-gray-600">Browse available work</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/handyman/earnings">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Earnings</h3>
              <p className="text-sm text-gray-600">Track your income</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/handyman/schedule">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Schedule</h3>
              <p className="text-sm text-gray-600">Manage availability</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/handyman/profile">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <User className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Profile</h3>
              <p className="text-sm text-gray-600">Update your info</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Available Jobs</CardTitle>
          <CardDescription>New job requests in your area</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {availableJobs.map((job) => (
              <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{job.title}</h3>
                  <Badge
                    variant={
                      job.urgency === "High" ? "destructive" : job.urgency === "Medium" ? "default" : "secondary"
                    }
                  >
                    {job.urgency}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{job.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="text-sm text-gray-500">{job.timePosted}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-green-600">${job.estimatedPay}</div>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Accept Job
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/handyman/jobs">
              <Button variant="outline">View All Available Jobs</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
