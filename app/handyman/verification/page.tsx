import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle, FileText, Shield, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function VerificationPage() {
  const verificationSteps = [
    {
      step: "Application Submitted",
      status: "completed",
      description: "Your application has been received",
      icon: FileText,
    },
    {
      step: "Document Review",
      status: "in-progress",
      description: "We're reviewing your submitted documents",
      icon: Shield,
    },
    {
      step: "Background Check",
      status: "pending",
      description: "Background verification will begin after document approval",
      icon: User,
    },
    {
      step: "Account Activation",
      status: "pending",
      description: "Your account will be activated once all checks are complete",
      icon: CheckCircle,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "in-progress":
        return <Clock className="w-5 h-5 text-blue-500" />
      case "pending":
        return <AlertCircle className="w-5 h-5 text-gray-400" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      default:
        return <Badge variant="secondary">Pending</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Application Under Review</h1>
          <p className="text-gray-600">We're verifying your information to ensure quality service</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Verification Progress</CardTitle>
            <CardDescription>Track the status of your handyman application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {verificationSteps.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{getStatusIcon(item.status)}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">{item.step}</h3>
                      {getStatusBadge(item.status)}
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <p>• Document review typically takes 1-2 business days</p>
                <p>• Background check may take 3-5 business days</p>
                <p>• You'll receive email updates on your progress</p>
                <p>• Once approved, you can start accepting jobs immediately</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  If you have questions about your application or need to update your information, contact our support
                  team.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full bg-transparent">
                    Contact Support
                  </Button>
                  <Link href="/handyman/login">
                    <Button variant="outline" className="w-full bg-transparent">
                      Back to Login
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Verification Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <FileText className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Valid Documents</h3>
                <p className="text-sm text-gray-600">Government ID, business license, insurance certificates</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Background Check</h3>
                <p className="text-sm text-gray-600">Criminal background verification for customer safety</p>
              </div>
              <div className="text-center">
                <User className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Identity Verification</h3>
                <p className="text-sm text-gray-600">Confirm your identity and professional credentials</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
