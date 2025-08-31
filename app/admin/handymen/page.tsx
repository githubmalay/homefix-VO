"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Eye, CheckCircle, XCircle, Star, MapPin } from "lucide-react"

const handymen = [
  {
    id: 1,
    name: "Suresh Yadav",
    email: "suresh.yadav@email.com",
    phone: "+91 98765 43210",
    skills: ["Plumbing", "Electrical"],
    rating: 4.8,
    completedJobs: 156,
    earnings: "₹2,34,500",
    status: "verified",
    location: "Mumbai, Maharashtra",
    joinDate: "2023-08-15",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Ramesh Singh",
    email: "ramesh.singh@email.com",
    phone: "+91 87654 32109",
    skills: ["Carpentry", "Painting"],
    rating: 4.6,
    completedJobs: 89,
    earnings: "₹1,67,800",
    status: "verified",
    location: "Delhi, NCR",
    joinDate: "2023-10-20",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Vikash Kumar",
    email: "vikash.kumar@email.com",
    phone: "+91 76543 21098",
    skills: ["AC Repair", "Appliance"],
    rating: 4.2,
    completedJobs: 45,
    earnings: "₹89,200",
    status: "pending",
    location: "Bangalore, Karnataka",
    joinDate: "2024-01-10",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function HandymenPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredHandymen = handymen.filter(
    (handyman) =>
      handyman.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      handyman.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Handyman Management</h1>
          <p className="text-muted-foreground">Manage and monitor handyman accounts</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search handymen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Handymen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">456</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Verified</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">389</div>
            <p className="text-xs text-muted-foreground">85% of total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67</div>
            <p className="text-xs text-muted-foreground">Needs review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹45,67,800</div>
            <p className="text-xs text-muted-foreground">+22% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Handyman List</CardTitle>
          <CardDescription>Manage handyman accounts and verification status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredHandymen.map((handyman) => (
              <div
                key={handyman.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={handyman.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {handyman.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{handyman.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {handyman.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {handyman.rating}
                      </span>
                    </div>
                    <div className="flex gap-1 mt-1">
                      {handyman.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold">{handyman.earnings}</p>
                    <p className="text-sm text-muted-foreground">{handyman.completedJobs} jobs</p>
                  </div>
                  <Badge variant={handyman.status === "verified" ? "default" : "secondary"}>{handyman.status}</Badge>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    {handyman.status === "pending" && (
                      <>
                        <Button size="sm" variant="outline" className="text-green-600 bg-transparent">
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}