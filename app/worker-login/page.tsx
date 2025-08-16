import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function WorkerLoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex items-center justify-center py-16">
        <div className="container mx-auto px-4 max-w-md">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Worker Portal</CardTitle>
              <p className="text-gray-600">Access your professional dashboard</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Worker ID or Email</label>
                  <Input placeholder="Enter your worker ID or email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <Input type="password" placeholder="Enter your password" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-orange-500 mr-2" />
                    <span className="text-sm text-gray-600">Keep me signed in</span>
                  </label>
                  <Link href="#" className="text-sm text-orange-500 hover:text-orange-600">
                    Forgot password?
                  </Link>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Access Dashboard</Button>
              </form>

              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-semibold text-orange-800 mb-2">New to HomeFix Now?</h3>
                <p className="text-sm text-orange-700 mb-3">
                  Join our network of skilled professionals and start earning more.
                </p>
                <Link href="/for-workers">
                  <Button
                    variant="outline"
                    className="w-full border-orange-300 text-orange-600 hover:bg-orange-100 bg-transparent"
                  >
                    Apply to Become a Worker
                  </Button>
                </Link>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Need help?{" "}
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                    Contact Support
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
