"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Clock, CheckCircle, Plus } from "lucide-react"
import { getBookings } from "@/lib/localStorage";
import { useEffect, useState } from "react";

export default function CustomerDashboard() {
  const [activeJobs, setActiveJobs] = useState<any[]>([]);
  const [jobHistory, setJobHistory] = useState<any[]>([]);

  useEffect(() => {
    const allBookings = getBookings();
    setActiveJobs(allBookings.filter(job => job.status === "In Progress" || job.status === "Confirmed"));
    setJobHistory(allBookings.filter(job => job.status === "Completed"));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Welcome back, Customer!</h1>
          <p className="text-gray-600">Manage your repair requests and track progress</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/customer/request">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Repair Request
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Active Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{activeJobs.length}</div>
              <p className="text-sm text-gray-600">Currently in progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Loyalty Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">250</div>
              <p className="text-sm text-gray-600">Points earned</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Active Jobs</CardTitle>
              <CardDescription>Track your ongoing repair requests</CardDescription>
            </CardHeader>
            <CardContent>
              {activeJobs.length > 0 ? (
                <div className="space-y-4">
                  {activeJobs.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{job.service}</h3>
                        <Badge variant="secondary">
                          <Clock className="w-3 h-3 mr-1" />
                          {job.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Handyman: {job.handyman}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm">4.8</span>
                        </div>
                        <Link href={`/customer/track/${job.id}`}>
                          <Button size="sm" variant="outline">
                            Track Progress
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No active jobs</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Job History</CardTitle>
              <CardDescription>Your completed repair requests</CardDescription>
            </CardHeader>
            <CardContent>
              {jobHistory.length > 0 ? (
                <div className="space-y-4">
                  {jobHistory.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{job.service}</h3>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {job.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Handyman: {job.handyman}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm">5.0</span>
                        </div>
                        <span className="text-sm text-gray-500">{job.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No completed jobs yet</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}