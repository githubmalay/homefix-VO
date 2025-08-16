import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Bell, Shield, CreditCard, MapPin } from "lucide-react"

export default function HandymanSettings() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and notifications</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notification Preferences
            </CardTitle>
            <CardDescription>Choose how you want to be notified</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="job-notifications">New Job Notifications</Label>
                <p className="text-sm text-gray-600">Get notified when new jobs are available</p>
              </div>
              <Switch id="job-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="message-notifications">Message Notifications</Label>
                <p className="text-sm text-gray-600">Get notified when customers send messages</p>
              </div>
              <Switch id="message-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="payment-notifications">Payment Notifications</Label>
                <p className="text-sm text-gray-600">Get notified when payments are received</p>
              </div>
              <Switch id="payment-notifications" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Service Area
            </CardTitle>
            <CardDescription>Set your preferred working locations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="service-radius">Service Radius (miles)</Label>
              <Input id="service-radius" type="number" defaultValue="15" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="primary-location">Primary Location</Label>
              <Input id="primary-location" defaultValue="Downtown Area" className="mt-1" />
            </div>
            <Button>Update Service Area</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Settings
            </CardTitle>
            <CardDescription>Manage your payment information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="bank-account">Bank Account</Label>
              <Input id="bank-account" defaultValue="****1234" className="mt-1" readOnly />
            </div>
            <div>
              <Label htmlFor="tax-id">Tax ID</Label>
              <Input id="tax-id" defaultValue="***-**-1234" className="mt-1" readOnly />
            </div>
            <Button variant="outline">Update Payment Info</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Security
            </CardTitle>
            <CardDescription>Manage your account security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline">Change Password</Button>
            <Button variant="outline">Enable Two-Factor Authentication</Button>
            <Button variant="destructive">Delete Account</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
