import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Wrench, DollarSign, AlertTriangle, TrendingUp, Clock } from "lucide-react"

export default function AdminDashboard() {
  const stats = {
    totalCustomers: 1247,
    activeHandymen: 89,
    monthlyRevenue: 45230,
    pendingVerifications: 12,
    activeJobs: 34,
    completedJobs: 892,
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Monitor platform performance and key metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Users className="w-5 h-5 text-blue-500 mr-2" />
              Total Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.totalCustomers}</div>
            <p className="text-sm text-gray-600">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Wrench className="w-5 h-5 text-green-500 mr-2" />
              Active Handymen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.activeHandymen}</div>
            <p className="text-sm text-gray-600">+5 new this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <DollarSign className="w-5 h-5 text-green-500 mr-2" />
              Monthly Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${stats.monthlyRevenue.toLocaleString()}</div>
            <p className="text-sm text-gray-600">+18% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
              Pending Verifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.pendingVerifications}</div>
            <p className="text-sm text-gray-600">Require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Clock className="w-5 h-5 text-blue-500 mr-2" />
              Active Jobs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.activeJobs}</div>
            <p className="text-sm text-gray-600">Currently in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
              Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">96.3%</div>
            <p className="text-sm text-gray-600">Job completion rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Pending Verifications</h3>
            <p className="text-sm text-gray-600">{stats.pendingVerifications} waiting</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Active Jobs</h3>
            <p className="text-sm text-gray-600">{stats.activeJobs} in progress</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Disputes</h3>
            <p className="text-sm text-gray-600">3 need attention</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Analytics</h3>
            <p className="text-sm text-gray-600">View reports</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
