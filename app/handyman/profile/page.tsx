import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, Star, MapPin, Camera, Edit } from "lucide-react"

export default function HandymanProfile() {
  const profile = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    location: "Downtown Area",
    rating: 4.8,
    completedJobs: 127,
    joinDate: "March 2023",
    bio: "Experienced handyman with over 10 years in home repairs and maintenance. Specializing in plumbing, electrical work, and general repairs.",
    skills: ["Plumbing", "Electrical", "Carpentry", "Painting", "Tile Work"],
    certifications: ["Licensed Electrician", "Plumbing Certification", "OSHA Safety"],
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600">Manage your professional profile and skills</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1">
          <CardContent className="p-6 text-center">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                <User className="w-12 h-12 text-gray-400" />
              </div>
              <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <h2 className="text-xl font-bold mb-1">{profile.name}</h2>
            <p className="text-gray-600 mb-4">Professional Handyman</p>

            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold">{profile.rating}</span>
                <span className="text-gray-600">({profile.completedJobs} jobs)</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
              <div className="text-sm text-gray-500">Member since {profile.joinDate}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Profile Information
              <Button size="sm" variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={profile.name} readOnly />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={profile.email} readOnly />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={profile.phone} readOnly />
              </div>
              <div>
                <Label htmlFor="location">Service Area</Label>
                <Input id="location" value={profile.location} readOnly />
              </div>
            </div>

            <div>
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea id="bio" value={profile.bio} readOnly rows={3} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Skills & Expertise</CardTitle>
            <CardDescription>Your professional skills and specializations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {profile.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Update Skills
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
            <CardDescription>Your professional certifications and licenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              {profile.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Manage Certifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}