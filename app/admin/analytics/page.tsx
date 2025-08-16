"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, Wrench, IndianRupee, Calendar } from "lucide-react"

const analyticsData = {
  revenue: {
    current: "₹12,45,600",
    previous: "₹10,89,400",
    growth: 14.3,
  },
  customers: {
    current: 1234,
    previous: 1098,
    growth: 12.4,
  },
  handymen: {
    current: 456,
    previous: 421,
    growth: 8.3,
  },
  jobs: {
    current: 2567,
    previous: 2234,
    growth: 14.9,
  },
}

const topServices = [
  { name: "Plumbing", jobs: 456, revenue: "₹3,45,600", growth: 12.5 },
  { name: "Electrical", jobs: 389, revenue: "₹2,89,400", growth: 8.7 },
  { name: "Carpentry", jobs: 234, revenue: "₹1,89,200", growth: 15.2 },
  { name: "Painting", jobs: 198, revenue: "₹1,56,800", growth: -2.3 },
  { name: "AC Repair", jobs: 167, revenue: "₹1,34,500", growth: 22.1 },
]

const monthlyData = [
  { month: "Jan", revenue: "₹8,45,600", jobs: 1234 },
  { month: "Feb", revenue: "₹9,23,400", jobs: 1456 },
  { month: "Mar", revenue: "₹10,67,800", jobs: 1678 },
  { month: "Apr", revenue: "₹11,89,200", jobs: 1890 },
  { month: "May", revenue: "₹12,45,600", jobs: 2567 },
]

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Platform performance and insights</p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm text-muted-foreground">Last 30 days</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.revenue.current}</div>
            <div className="flex items-center gap-1 text-xs">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+{analyticsData.revenue.growth}%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.customers.current.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+{analyticsData.customers.growth}%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Handymen</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.handymen.current}</div>
            <div className="flex items-center gap-1 text-xs">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+{analyticsData.handymen.growth}%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jobs Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.jobs.current.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+{analyticsData.jobs.growth}%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Services */}
        <Card>
          <CardHeader>
            <CardTitle>Top Services</CardTitle>
            <CardDescription>Most popular services by job count and revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topServices.map((service, index) => (
                <div key={service.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.jobs} jobs</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{service.revenue}</p>
                    <div className="flex items-center gap-1">
                      {service.growth > 0 ? (
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-600" />
                      )}
                      <span className={`text-xs ${service.growth > 0 ? "text-green-600" : "text-red-600"}`}>
                        {service.growth > 0 ? "+" : ""}
                        {service.growth}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
            <CardDescription>Revenue and job completion trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((month) => (
                <div key={month.month} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{month.month} 2024</h3>
                    <p className="text-sm text-muted-foreground">{month.jobs} jobs completed</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{month.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">4.8/5</div>
            <p className="text-sm text-muted-foreground">Average rating across all jobs</p>
            <div className="mt-2">
              <Badge variant="secondary">+0.2 from last month</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">45 min</div>
            <p className="text-sm text-muted-foreground">Average response time</p>
            <div className="mt-2">
              <Badge variant="secondary">-5 min from last month</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Job Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">96.5%</div>
            <p className="text-sm text-muted-foreground">Jobs completed successfully</p>
            <div className="mt-2">
              <Badge variant="secondary">+1.2% from last month</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
