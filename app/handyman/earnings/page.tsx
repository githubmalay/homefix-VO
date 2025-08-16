import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, Calendar, CreditCard } from "lucide-react"

export default function HandymanEarnings() {
  const earningsData = {
    totalEarnings: 12450,
    monthlyEarnings: 2450,
    weeklyEarnings: 580,
    pendingPayouts: 340,
  }

  const recentEarnings = [
    {
      id: 1,
      job: "Kitchen Sink Repair",
      customer: "John Doe",
      amount: 85,
      date: "2024-01-16",
      status: "Paid",
    },
    {
      id: 2,
      job: "Bathroom Tile Replacement",
      customer: "Jane Smith",
      amount: 120,
      date: "2024-01-15",
      status: "Pending",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Earnings Dashboard</h1>
        <p className="text-gray-600">Track your income and payment history</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <DollarSign className="w-5 h-5 text-green-500 mr-2" />
              Total Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${earningsData.totalEarnings.toLocaleString()}</div>
            <p className="text-sm text-gray-600">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Calendar className="w-5 h-5 text-blue-500 mr-2" />
              This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${earningsData.monthlyEarnings}</div>
            <p className="text-sm text-gray-600">+18% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="w-5 h-5 text-purple-500 mr-2" />
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${earningsData.weeklyEarnings}</div>
            <p className="text-sm text-gray-600">+12% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <CreditCard className="w-5 h-5 text-orange-500 mr-2" />
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${earningsData.pendingPayouts}</div>
            <p className="text-sm text-gray-600">Awaiting payout</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Earnings</CardTitle>
          <CardDescription>Your latest completed jobs and payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentEarnings.map((earning) => (
              <div key={earning.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{earning.job}</h3>
                    <p className="text-sm text-gray-600">Customer: {earning.customer}</p>
                  </div>
                  <Badge
                    variant={earning.status === "Paid" ? "default" : "secondary"}
                    className={earning.status === "Paid" ? "bg-green-100 text-green-800" : ""}
                  >
                    {earning.status}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">${earning.amount}</span>
                  <span className="text-sm text-gray-500">{earning.date}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
