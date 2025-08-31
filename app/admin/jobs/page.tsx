"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"
import { getBookings } from "@/lib/localStorage";
import { useEffect, useState } from "react";

export default function AdminJobs() {
  const [recentJobs, setRecentJobs] = useState<any[]>([]);

  useEffect(() => {
    setRecentJobs(getBookings());
  }, []);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Management</h1>
        <p className="text-gray-600">Monitor ongoing and completed jobs</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Jobs</CardTitle>
          <CardDescription>Track job progress and completion</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentJobs.length > 0 ? (
              recentJobs.map((job) => (
                <div key={job.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{job.service}</h3>
                      <p className="text-sm text-gray-600">
                        Customer: {job.customerName} | Handyman: {job.handyman}
                      </p>
                    </div>
                    <Badge
                      variant={job.status === "Completed" ? "default" : "secondary"}
                      className={job.status === "Completed" ? "bg-green-100 text-green-800" : ""}
                    >
                      {job.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-green-600">₹{job.amount}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{job.date}</span>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No jobs found.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}