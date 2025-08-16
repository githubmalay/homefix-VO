import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, CheckCircle, XCircle } from "lucide-react"

export default function AdminVerifications() {
  const pendingHandymen = [
    {
      id: 1,
      name: "Mike Johnson",
      email: "mike@email.com",
      skills: ["Plumbing", "Electrical"],
      appliedDate: "2024-01-15",
      status: "Document Review",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah@email.com",
      skills: ["Carpentry", "Painting"],
      appliedDate: "2024-01-14",
      status: "Background Check",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Handyman Verifications</h1>
        <p className="text-gray-600">Review and approve new handyman applications</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Applications</CardTitle>
          <CardDescription>Applications requiring review and approval</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingHandymen.map((handyman) => (
              <div key={handyman.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold">{handyman.name}</h3>
                    <p className="text-sm text-gray-600">{handyman.email}</p>
                  </div>
                  <Badge variant="secondary">{handyman.status}</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {handyman.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Applied: {handyman.appliedDate}</span>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      Review
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive">
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
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
