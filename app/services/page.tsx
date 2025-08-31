import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From minor fixes to major repairs, our skilled professionals handle it all with expertise and care.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Plumbing</h3>
                  <p className="text-gray-600 mb-4">
                    Leaky faucets, clogged drains, pipe repairs, and emergency plumbing services.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Faucet & fixture repair</li>
                    <li>• Drain cleaning</li>
                    <li>• Pipe installation</li>
                    <li>• Emergency repairs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Electrical</h3>
                  <p className="text-gray-600 mb-4">
                    Outlet installation, lighting fixes, electrical troubleshooting, and safety inspections.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Outlet & switch repair</li>
                    <li>• Light fixture installation</li>
                    <li>• Circuit breaker issues</li>
                    <li>• Safety inspections</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">General Repairs</h3>
                  <p className="text-gray-600 mb-4">
                    Drywall patching, door adjustments, window repairs, and general handyman services.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Drywall & painting</li>
                    <li>• Door & window repair</li>
                    <li>• Furniture assembly</li>
                    <li>• General maintenance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🌡️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">HVAC</h3>
                  <p className="text-gray-600 mb-4">
                    Air conditioning repair, heating system maintenance, and ventilation services.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• AC repair & maintenance</li>
                    <li>• Heating system service</li>
                    <li>• Filter replacement</li>
                    <li>• Thermostat installation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Carpentry</h3>
                  <p className="text-gray-600 mb-4">
                    Custom shelving, cabinet repair, trim work, and woodworking projects.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Custom shelving</li>
                    <li>• Cabinet installation</li>
                    <li>• Trim & molding</li>
                    <li>• Deck repairs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Painting</h3>
                  <p className="text-gray-600 mb-4">
                    Interior and exterior painting, touch-ups, and color consultation services.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Interior painting</li>
                    <li>• Exterior painting</li>
                    <li>• Touch-up services</li>
                    <li>• Color consultation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                When disaster strikes, we're here 24/7 to help with urgent repairs that can't wait.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🚨</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">24/7 Emergency Response</h3>
                      <p className="text-red-600 font-medium">Available anytime, anywhere</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Burst pipes & water damage</li>
                    <li>• Electrical emergencies</li>
                    <li>• Heating/cooling failures</li>
                    <li>• Security & safety issues</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">⏱️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Rapid Response</h3>
                      <p className="text-orange-600 font-medium">Average 30-minute arrival</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• GPS-tracked technicians</li>
                    <li>• Real-time updates</li>
                    <li>• Fully equipped vehicles</li>
                    <li>• Insurance coordination</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                No hidden fees, no surprises. Get upfront pricing before any work begins.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Service Call</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">₹150</div>
                  <p className="text-gray-600 mb-4">Diagnostic fee applied to repair cost</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Professional assessment</li>
                    <li>• Written estimate</li>
                    <li>• No obligation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Standard Repair</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">₹200</div>
                  <p className="text-gray-600 mb-4">Most common repairs and maintenance</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• 1-hour minimum</li>
                    <li>• Parts at cost</li>
                    <li>• 90-day warranty</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Emergency</h3>
                  <div className="text-3xl font-bold text-red-600 mb-4">₹300</div>
                  <p className="text-gray-600 mb-4">24/7 emergency response</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Immediate response</li>
                    <li>• Weekend/holiday rates</li>
                    <li>• Priority scheduling</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need a Repair? We've Got You Covered</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get matched with the perfect professional for your specific repair needs in minutes.
            </p>
            <Link href="/customer/request">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Request Service Now</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}