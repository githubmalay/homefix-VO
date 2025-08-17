import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ForWorkersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Join Our Network of Skilled Professionals
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Turn your skills into steady income. Connect with homeowners who need your expertise and grow your
                  business with HomeFix Now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/handyman/register">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Apply Now</Button>
                  </Link>
                  <Link href="/handyman/login">
                    <Button variant="outline" className="border-gray-300 px-8 py-3 bg-transparent">
                      Worker Login
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-orange-100 rounded-lg p-8">
                <img
                  src="/home-repair-team.png"
                  alt="Professional worker"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Earn More</h3>
                  <p className="text-gray-600">
                    Set your own rates and keep 85% of what you earn. No hidden fees or surprise deductions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Work Flexibly</h3>
                  <p className="text-gray-600">
                    Choose your own schedule and work area. Accept jobs that fit your availability and expertise.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Grow Your Business</h3>
                  <p className="text-gray-600">
                    Build your reputation with customer reviews and get more high-paying jobs over time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Apply & Get Verified</h3>
                <p className="text-gray-600 text-sm">
                  Submit your application with credentials and pass our background check process.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Set Your Profile</h3>
                <p className="text-gray-600 text-sm">
                  Create your professional profile, set your rates, and define your service areas.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Receive Job Offers</h3>
                <p className="text-gray-600 text-sm">
                  Get matched with jobs that fit your skills and availability through our app.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Complete & Get Paid</h3>
                <p className="text-gray-600 text-sm">
                  Finish the job, get rated by customers, and receive payment within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Professional Experience</h4>
                      <p className="text-gray-600 text-sm">Minimum 2 years in your trade or relevant certifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Background Check</h4>
                      <p className="text-gray-600 text-sm">Clean criminal background and identity verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Insurance Coverage</h4>
                      <p className="text-gray-600 text-sm">General liability insurance (we can help you get it)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Own Tools & Transportation</h4>
                      <p className="text-gray-600 text-sm">
                        Professional tools and reliable vehicle to reach customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Earning Potential</h2>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">₹3,600-6,800</div>
                      <div className="text-sm text-gray-600">Per Hour Average</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">₹2.4L-6.4L</div>
                      <div className="text-sm text-gray-600">Monthly Potential</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Plumbing</span>
                      <span className="font-semibold">₹4,400-7,600/hr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Electrical</span>
                      <span className="font-semibold">₹4,800-8,000/hr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>General Handyman</span>
                      <span className="font-semibold">₹3,200-5,600/hr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>HVAC</span>
                      <span className="font-semibold">₹5,200-8,800/hr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Workers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/placeholder-gvk65.png"
                      alt="Mike Rodriguez"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Mike Rodriguez</h4>
                      <p className="text-sm text-gray-600">Plumber, 3 years</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "I've doubled my income since joining HomeFix Now. The steady stream of jobs and fair pricing makes
                    this the best platform I've used."
                  </p>
                  <div className="flex text-yellow-400 mt-3">★★★★★</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/placeholder-gvk65.png"
                      alt="Sarah Chen"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Sarah Chen</h4>
                      <p className="text-sm text-gray-600">Electrician, 2 years</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "The flexibility is amazing. I can work around my family schedule and still earn great money.
                    Customer support is always helpful too."
                  </p>
                  <div className="flex text-yellow-400 mt-3">★★★★★</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/placeholder-4izxq.png"
                      alt="David Thompson"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">David Thompson</h4>
                      <p className="text-sm text-gray-600">Handyman, 5 years</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "Fast payments, quality customers, and no hassle with scheduling. This platform has transformed my
                    business completely."
                  </p>
                  <div className="flex text-yellow-400 mt-3">★★★★★</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Earning?</h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are building successful businesses with HomeFix Now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/handyman/register">
                <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">Apply Now - It's Free</Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
