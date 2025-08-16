import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MessageSquare, Search, User, Clock } from "lucide-react"

export default function HandymanMessages() {
  const conversations = [
    {
      id: 1,
      customer: "Sarah Johnson",
      lastMessage: "Thank you for the great work on the tiles!",
      timestamp: "2 hours ago",
      unread: false,
      job: "Bathroom Tile Replacement",
    },
    {
      id: 2,
      customer: "Mike Wilson",
      lastMessage: "What time will you arrive tomorrow?",
      timestamp: "1 day ago",
      unread: true,
      job: "Electrical Outlet Installation",
    },
    {
      id: 3,
      customer: "Lisa Brown",
      lastMessage: "The cabinet door looks perfect now!",
      timestamp: "3 days ago",
      unread: false,
      job: "Cabinet Door Repair",
    },
    {
      id: 4,
      customer: "Robert Davis",
      lastMessage: "Can you send me the invoice?",
      timestamp: "1 week ago",
      unread: true,
      job: "Kitchen Sink Repair",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
        <p className="text-gray-600">Communicate with your customers</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Customer Conversations
          </CardTitle>
          <CardDescription>Your recent messages and conversations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </div>

          <div className="space-y-4">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow ${
                  conversation.unread ? "bg-blue-50 border-blue-200" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        {conversation.customer}
                        {conversation.unread && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            New
                          </Badge>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600">{conversation.job}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {conversation.timestamp}
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{conversation.lastMessage}</p>
                <div className="flex justify-end">
                  <Button size="sm" variant="outline">
                    Reply
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
