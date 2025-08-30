"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Clock, MessageSquare } from "lucide-react"

export function NearbyJobsSection() {
  const jobs = [
    {
      id: 1,
      worker: {
        name: "John Davis",
        avatar: "/placeholder-gvk65.png",
        rating: 4.9,
        reviews: 127,
        skills: ["Plumbing", "Electrical", "Furniture"],
      },
      job: {
        title: "Plumbing",
        description: "Kitchen tap leaking, needs quick fix",
        distance: "0.3 miles",
        time: "3 min ago",
        price: "₹6,000-8,000",
        urgent: true,
      },
    },
    {
      id: 2,
      worker: {
        name: "Mike Johnson",
        avatar: "/placeholder-4izxq.png",
        rating: 4.8,
        reviews: 89,
        skills: ["Furniture", "Assembly"],
      },
      job: {
        title: "Furniture",
        description: "IKEA wardrobe assembly needed",
        distance: "0.5 miles",
        time: "8 min ago",
        price: "₹4,800-6,400",
        urgent: false,
      },
    },
    {
      id: 3,
      worker: {
        name: "Sarah Wilson",
        avatar: "/placeholder-4izxq.png",
        rating: 4.7,
        reviews: 156,
        skills: ["Electrical", "Painting"],
      },
      job: {
        title: "Electrical",
        description: "Ceiling fan not working, possible wiring issue",
        distance: "0.8 miles",
        time: "15 min ago",
        price: "₹6,400-9,600",
        urgent: false,
      },
    },
  ]

  const handleMessage = (workerName: string) => {
    console.log(`[v0] Message clicked for: ${workerName}`)
    alert(`Messaging feature coming soon! You can contact ${workerName} directly once implemented.`)
  }

  const handleAcceptJob = (jobId: number, workerName: string) => {
    console.log(`[v0] Accept job clicked for job ${jobId} with ${workerName}`)
    alert(`Job accepted! You will be connected with ${workerName} shortly.`)
  }

  const handleLoadMore = () => {
    console.log("[v0] Load more jobs clicked")
    alert("Loading more jobs... This feature will show additional nearby opportunities.")
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Nearby Jobs</h2>
          <Badge variant="outline" className="text-secondary border-secondary/20 bg-secondary/10">
            🔥 3 jobs within 1 mile
          </Badge>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={job.worker.avatar || "/placeholder.svg"}
                      alt={job.worker.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-border"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{job.worker.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-medium">{job.worker.rating}</span>
                            <span>({job.worker.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-foreground">{job.job.price}</div>
                        {job.job.urgent && (
                          <Badge variant="destructive" className="text-xs">
                            URGENT
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs border-border">
                          {job.job.title}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{job.job.distance}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{job.job.time}</span>
                        </div>
                      </div>
                      <p className="text-foreground">{job.job.description}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {job.worker.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleMessage(job.worker.name)}>
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Message
                        </Button>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                          onClick={() => handleAcceptJob(job.id, job.worker.name)}
                        >
                          Accept Job
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" onClick={handleLoadMore}>
            Load More Jobs
          </Button>
        </div>
      </div>
    </section>
  )
}