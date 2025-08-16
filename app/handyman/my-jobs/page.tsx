import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Phone, MessageSquare, CheckCircle } from "lucide-react"

export default function HandymanMyJobs() {
  const activeJobs = [
    {
      id: 1,
      title: "Kitchen Sink Repair",
      customer: "John Doe",
      customerPhone: "+1 (555) 123-4567",
      address: "123 Main St, Downtown",
      scheduledTime: "Today, 2:00 PM",
      status: "In Progress",
      amount: 85,
      description: "Fix leaky kitchen faucet and replace worn gaskets",
    },
    {
      id: 2,
      title: "Bathroom Tile Replacement",
      customer: "Sarah Johnson",
      customerPhone: "+1 (555) 987-6543",
      address: "456 Oak Ave, Uptown",
      scheduledTime: "Tomorrow, 10:00 AM",
      status: "Scheduled",
      amount: 120,
      description: "Replace 3 cracked tiles in shower area",
    },
  ]

  const completedJobs = [
    {
      id: 3,
      title: "Electrical Outlet Installation",
      customer: "Mike Wilson",
      address: "789 Pine St, Midtown",
      completedDate: "2024-01-15",
      status: "Completed",
      amount: 150,
      rating: 5,
    },
    {
      id: 4,
      title: "Cabinet Door Repair",
      customer: "Lisa Brown",
      address: "321 Elm St, Downtown",
      completedDate: "2024-01-14",
      status: "Completed",
      amount: 75,
      rating: 4,
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Jobs</h1>
        <p className="text-gray-600">Manage your active and completed jobs</p>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Active Jobs</TabsTrigger>
          <TabsTrigger value="completed">Completed Jobs</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="space-y-4">
            {activeJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">Customer: {job.customer}</p>
                    </div>
                    <Badge
                      variant={job.status === "In Progress" ? "default" : "secondary"}
                      className={job.status === "In Progress" ? "bg-blue-100 text-blue-800" : ""}
                    >
                      {job.status}
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.address}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.scheduledTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-green-600">${job.amount}</div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                      {job.status === "In Progress" && (
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Complete
                        </Button>
                      )}
                      {job.status === "Scheduled" && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Start Job
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="space-y-4">
            {completedJobs.map((job) => (
              <Card key={job.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                      <p className="text-sm text-gray-600">Customer: {job.customer}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{job.status}</Badge>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.address}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-semibold text-green-600">${job.amount}</div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-1">Rating:</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < job.rating ? "text-yellow-400" : "text-gray-300"}`}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">Completed: {job.completedDate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
