import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { RequestFixSection } from "@/components/request-fix-section"
import { NearbyJobsSection } from "@/components/nearby-jobs-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <RequestFixSection />
        <NearbyJobsSection />
      </main>
      <Footer />
    </div>
  )
}