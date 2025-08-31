"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Phone, MessageSquare, CheckCircle, Star } from "lucide-react"
import { getBookings } from "@/lib/localStorage"
import { useEffect, useState } from "react"

export default function HandymanMyJobs() {
  const [activeJobs, setActiveJobs] = useState<any[]>([]);
  const [completedJobs, setCompletedJobs] = useState<any[]>([]);
  
  useEffect(() => {
    const allBookings = getBookings();
    setActiveJobs(allBookings.filter(job => job.status === "In Progress" || job.status === "Confirmed"));
    setCompletedJobs(allBookings.filter(job => job.status === "Completed"));
  }, []);

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
            {activeJobs.length > 0 ? (
              activeJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{job.service}</h3>
                        <p className="text-sm text-gray-600 mb-2">Customer: {job.customerName}</p>
                      </div>
                      <Badge
                        variant={job.status === "In Progress" ? "default" : "secondary"}
                        className={job.status === "In Progress" ? "bg-blue-100 text-blue-800" : ""}
                      >
                        {job.status}
                      </Badge>
                    </div>

                    <p className="text-gray-600 mb-4">Scheduled for: {job.date} at {job.time}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        123 Main St, Downtown
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        Scheduled: {job.time}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-green-600">₹{job.amount}</div>
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
                        {job.status === "Confirmed" && (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Start Job
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-gray-500">No active jobs.</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="space-y-4">
            {completedJobs.length > 0 ? (
              completedJobs.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{job.service}</h3>
                        <p className="text-sm text-gray-600">Customer: {job.customerName}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">{job.status}</Badge>
                    </div>

                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      123 Main St, Downtown
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-lg font-semibold text-green-600">₹{job.amount}</div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 mr-1">Rating:</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-sm ${i < 5 ? "text-yellow-400" : "text-gray-300"}`}>
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">Completed: {job.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-gray-500">No completed jobs yet.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}