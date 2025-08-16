import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About HomeFix Now</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing home repairs by connecting homeowners with skilled professionals for fast, reliable,
              and affordable solutions.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At HomeFix Now, we believe that home repairs shouldn't be a hassle. Our mission is to make quality
                  home maintenance accessible, affordable, and stress-free for everyone.
                </p>
                <p className="text-gray-600">
                  We've built a platform that connects homeowners with vetted, skilled professionals who can handle any
                  repair job, big or small, with guaranteed satisfaction.
                </p>
              </div>
              <div className="bg-blue-100 rounded-lg p-8">
                <img src="/mission-team.png" alt="Our team" className="w-full h-64 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Speed</h3>
                  <p className="text-gray-600">
                    We respond within an hour and get your repairs done fast without compromising quality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Trust</h3>
                  <p className="text-gray-600">
                    All our professionals are background-checked, insured, and rated by real customers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💯</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Quality</h3>
                  <p className="text-gray-600">
                    We guarantee 100% satisfaction on every job with our money-back promise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600">Repairs Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">2K+</div>
                <div className="text-gray-600">Verified Workers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied homeowners who trust HomeFix Now for all their repair needs.
            </p>
            <Link href="/customer/request">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Request a Fix Now</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
