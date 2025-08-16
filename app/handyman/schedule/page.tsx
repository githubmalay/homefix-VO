import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Calendar, Clock, Plus, Settings } from "lucide-react"

export default function HandymanSchedule() {
  const availability = {
    monday: { available: true, start: "9:00 AM", end: "5:00 PM" },
    tuesday: { available: true, start: "9:00 AM", end: "5:00 PM" },
    wednesday: { available: true, start: "9:00 AM", end: "5:00 PM" },
    thursday: { available: true, start: "9:00 AM", end: "5:00 PM" },
    friday: { available: true, start: "9:00 AM", end: "5:00 PM" },
    saturday: { available: false, start: "10:00 AM", end: "3:00 PM" },
    sunday: { available: false, start: "10:00 AM", end: "3:00 PM" },
  }

  const upcomingJobs = [
    {
      id: 1,
      title: "Kitchen Sink Repair",
      customer: "John Doe",
      date: "Today",
      time: "2:00 PM - 3:00 PM",
      status: "Confirmed",
    },
    {
      id: 2,
      title: "Bathroom Tile Replacement",
      customer: "Sarah Johnson",
      date: "Tomorrow",
      time: "10:00 AM - 12:00 PM",
      status: "Confirmed",
    },
    {
      id: 3,
      title: "Electrical Outlet Installation",
      customer: "Mike Wilson",
      date: "Jan 18",
      time: "1:00 PM - 2:30 PM",
      status: "Pending",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule Management</h1>
        <p className="text-gray-600">Manage your availability and upcoming appointments</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Weekly Availability
            </CardTitle>
            <CardDescription>Set your working hours for each day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(availability).map(([day, schedule]) => (
                <div key={day} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Switch checked={schedule.available} />
                    <span className="font-medium capitalize">{day}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {schedule.available ? `${schedule.start} - ${schedule.end}` : "Unavailable"}
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4">
              <Plus className="w-4 h-4 mr-2" />
              Update Availability
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Upcoming Jobs
            </CardTitle>
            <CardDescription>Your scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingJobs.map((job) => (
                <div key={job.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-gray-600">Customer: {job.customer}</p>
                    </div>
                    <Badge
                      variant={job.status === "Confirmed" ? "default" : "secondary"}
                      className={job.status === "Confirmed" ? "bg-green-100 text-green-800" : ""}
                    >
                      {job.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.time}
                    </div>
                    <span className="text-sm font-medium">{job.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center justify-center bg-transparent">
              <Plus className="w-4 h-4 mr-2" />
              Block Time Off
            </Button>
            <Button variant="outline" className="flex items-center justify-center bg-transparent">
              <Calendar className="w-4 h-4 mr-2" />
              View Calendar
            </Button>
            <Button variant="outline" className="flex items-center justify-center bg-transparent">
              <Settings className="w-4 h-4 mr-2" />
              Schedule Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
