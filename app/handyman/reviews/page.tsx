import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, User } from "lucide-react"

export default function HandymanReviews() {
  const reviewStats = {
    averageRating: 4.8,
    totalReviews: 89,
    fiveStars: 72,
    fourStars: 12,
    threeStars: 3,
    twoStars: 1,
    oneStars: 1,
  }

  const reviews = [
    {
      id: 1,
      customer: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      job: "Kitchen Sink Repair",
      comment: "Excellent work! John was professional, punctual, and fixed the issue quickly. Highly recommend!",
    },
    {
      id: 2,
      customer: "Mike Wilson",
      rating: 5,
      date: "2024-01-12",
      job: "Electrical Outlet Installation",
      comment: "Great service! Very knowledgeable and explained everything clearly. Will definitely hire again.",
    },
    {
      id: 3,
      customer: "Lisa Brown",
      rating: 4,
      date: "2024-01-10",
      job: "Cabinet Door Repair",
      comment: "Good work overall. Arrived on time and completed the job as expected. Minor cleanup could be better.",
    },
    {
      id: 4,
      customer: "Robert Davis",
      rating: 5,
      date: "2024-01-08",
      job: "Bathroom Tile Replacement",
      comment:
        "Outstanding craftsmanship! The tiles look perfect and John was very careful with the surrounding areas.",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Reviews</h1>
        <p className="text-gray-600">See what customers are saying about your work</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">{reviewStats.averageRating}</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(reviewStats.averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-gray-600">Average Rating</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">{reviewStats.totalReviews}</div>
            <p className="text-gray-600">Total Reviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Rating Breakdown</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count =
                  reviewStats[
                    `${stars === 1 ? "oneStars" : stars === 2 ? "twoStars" : stars === 3 ? "threeStars" : stars === 4 ? "fourStars" : "fiveStars"}`
                  ]
                const percentage = (count / reviewStats.totalReviews) * 100

                return (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="text-sm w-6">{stars}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8">{count}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
          <CardDescription>Latest feedback from your customers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{review.customer}</h4>
                      <p className="text-sm text-gray-600">{review.job}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}