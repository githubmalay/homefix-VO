import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex items-center justify-center py-16">
        <div className="container mx-auto px-4 max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">Create Account</CardTitle>
              <p className="text-gray-600">Join HomeFix Now and get your repairs done fast</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full bg-transparent">
                  <span className="mr-2">🔍</span>
                  Google
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <span className="mr-2">📘</span>
                  Facebook
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <Input type="password" placeholder="Create a strong password" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <Input type="password" placeholder="Confirm your password" />
                </div>
                <div>
                  <label className="flex items-start">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-3 mt-1" />
                    <span className="text-sm text-gray-600">
                      I agree to the{" "}
                      <Link href="#" className="text-blue-600 hover:text-blue-700">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-blue-600 hover:text-blue-700">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Create Account</Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Sign in
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