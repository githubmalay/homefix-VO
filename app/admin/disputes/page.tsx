"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, Clock, CheckCircle, XCircle, MessageSquare } from "lucide-react"

const disputes = [
  {
    id: 1,
    jobId: "JOB-2024-001",
    customer: "Rajesh Kumar",
    handyman: "Suresh Yadav",
    issue: "Work not completed as promised",
    description: "The plumbing work was left incomplete and there are still leaks in the bathroom.",
    amount: "₹3,500",
    status: "open",
    priority: "high",
    createdAt: "2024-01-15",
    customerAvatar: "/placeholder.svg?height=32&width=32",
    handymanAvatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    jobId: "JOB-2024-002",
    customer: "Priya Sharma",
    handyman: "Ramesh Singh",
    issue: "Payment dispute",
    description: "Handyman is asking for extra payment not mentioned in original quote.",
    amount: "₹2,800",
    status: "in-progress",
    priority: "medium",
    createdAt: "2024-01-18",
    customerAvatar: "/placeholder.svg?height=32&width=32",
    handymanAvatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    jobId: "JOB-2024-003",
    customer: "Amit Patel",
    handyman: "Vikash Kumar",
    issue: "Quality of work",
    description: "AC repair was done poorly and the unit stopped working again within 2 days.",
    amount: "₹4,200",
    status: "resolved",
    priority: "low",
    createdAt: "2024-01-10",
    customerAvatar: "/placeholder.svg?height=32&width=32",
    handymanAvatar: "/placeholder.svg?height=32&width=32",
  },
]

export default function DisputesPage() {
  const [selectedDispute, setSelectedDispute] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "destructive"
      case "in-progress":
        return "default"
      case "resolved":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600"
      case "medium":
        return "text-yellow-600"
      case "low":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dispute Management</h1>
          <p className="text-muted-foreground">Handle customer and handyman disputes</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Disputes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Disputes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Needs attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">65% resolution rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3 days</div>
            <p className="text-xs text-muted-foreground">-0.5 days from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Active Disputes</CardTitle>
            <CardDescription>Click on a dispute to view details and take action</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {disputes.map((dispute) => (
                <div
                  key={dispute.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedDispute === dispute.id ? "bg-muted border-primary" : "hover:bg-muted/50"
                  }`}
                  onClick={() => setSelectedDispute(dispute.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{dispute.jobId}</h3>
                        <Badge variant={getStatusColor(dispute.status)}>{dispute.status}</Badge>
                        <span className={`text-xs font-medium ${getPriorityColor(dispute.priority)}`}>
                          {dispute.priority} priority
                        </span>
                      </div>
                      <p className="text-sm font-medium">{dispute.issue}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={dispute.customerAvatar || "/placeholder.svg"} />
                            <AvatarFallback>{dispute.customer[0]}</AvatarFallback>
                          </Avatar>
                          {dispute.customer}
                        </div>
                        <span>vs</span>
                        <div className="flex items-center gap-2">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={dispute.handymanAvatar || "/placeholder.svg"} />
                            <AvatarFallback>{dispute.handyman[0]}</AvatarFallback>
                          </Avatar>
                          {dispute.handyman}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{dispute.amount}</p>
                      <p className="text-xs text-muted-foreground">{dispute.createdAt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dispute Details</CardTitle>
            <CardDescription>
              {selectedDispute ? "Review and resolve the selected dispute" : "Select a dispute to view details"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDispute ? (
              <div className="space-y-6">
                {(() => {
                  const dispute = disputes.find((d) => d.id === selectedDispute)
                  if (!dispute) return null

                  return (
                    <>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Issue Description</h3>
                          <p className="text-sm text-muted-foreground">{dispute.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">Customer</h4>
                            <div className="flex items-center gap-2">
                              <Avatar>
                                <AvatarImage src={dispute.customerAvatar || "/placeholder.svg"} />
                                <AvatarFallback>{dispute.customer[0]}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{dispute.customer}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Handyman</h4>
                            <div className="flex items-center gap-2">
                              <Avatar>
                                <AvatarImage src={dispute.handymanAvatar || "/placeholder.svg"} />
                                <AvatarFallback>{dispute.handyman[0]}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{dispute.handyman}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-semibold">Admin Response</h3>
                        <Textarea placeholder="Enter your resolution notes..." />
                        <div className="flex gap-2">
                          <Button className="flex-1">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Resolve in Favor of Customer
                          </Button>
                          <Button variant="outline" className="flex-1 bg-transparent">
                            <XCircle className="w-4 h-4 mr-2" />
                            Resolve in Favor of Handyman
                          </Button>
                        </div>
                        <Button variant="outline" className="w-full bg-transparent">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Request More Information
                        </Button>
                      </div>
                    </>
                  )
                })()}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                Select a dispute from the list to view details and take action
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
