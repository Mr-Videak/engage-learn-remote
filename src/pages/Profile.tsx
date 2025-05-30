
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Settings, Bell, Shield, Palette, User, Award, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";

const Profile = () => {
  const achievements = [
    { title: "Early Bird", description: "Joined 5 classes before 9 AM", icon: "🌅", earned: true },
    { title: "Active Participant", description: "Contributed to 50+ discussions", icon: "💬", earned: true },
    { title: "Note Master", description: "Created 100+ notes", icon: "📝", earned: false },
    { title: "Collaboration Star", description: "Participated in 20 group projects", icon: "⭐", earned: true },
    { title: "Streak Champion", description: "Attended classes 30 days in a row", icon: "🔥", earned: false },
    { title: "Quiz Master", description: "Scored 90%+ on 10 quizzes", icon: "🏆", earned: false }
  ];

  const learningStats = [
    { label: "Classes Attended", value: "127", color: "text-blue-600" },
    { label: "Hours Learned", value: "89", color: "text-green-600" },
    { label: "Notes Created", value: "45", color: "text-purple-600" },
    { label: "Achievements", value: achievements.filter(a => a.earned).length.toString(), color: "text-yellow-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <User className="mr-3 text-blue-500" />
            Profile & Settings
          </h1>
          <p className="text-gray-600">
            Manage your account and learning preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Alex Johnson" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl">
                    AJ
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Alex Johnson</h2>
                <p className="text-gray-600 mb-2">Computer Science Student</p>
                <Badge className="bg-blue-100 text-blue-700">Level 7 Learner</Badge>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {learningStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Download Learning Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  View Certificates
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Settings */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Account Information
                </CardTitle>
                <CardDescription>
                  Update your personal information and contact details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Johnson" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex@university.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-id">Student ID</Label>
                    <Input id="student-id" defaultValue="STU2024001" />
                  </div>
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notifications
                </CardTitle>
                <CardDescription>
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Class Reminders</div>
                    <div className="text-sm text-gray-600">Get notified before classes start</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Assignment Due Dates</div>
                    <div className="text-sm text-gray-600">Reminders for upcoming assignments</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Grade Updates</div>
                    <div className="text-sm text-gray-600">When new grades are posted</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Study Group Invites</div>
                    <div className="text-sm text-gray-600">Invitations to join study groups</div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Privacy & Security
                </CardTitle>
                <CardDescription>
                  Control your privacy and security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Profile Visibility</div>
                    <div className="text-sm text-gray-600">Allow other students to see your profile</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Activity Status</div>
                    <div className="text-sm text-gray-600">Show when you're online in classes</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Data Analytics</div>
                    <div className="text-sm text-gray-600">Help improve LOVABLE with usage data</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Achievements
                </CardTitle>
                <CardDescription>
                  Your learning milestones and accomplishments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border-2 transition-all ${
                        achievement.earned 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200 opacity-60'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div>
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                        {achievement.earned && (
                          <Badge className="ml-auto bg-green-100 text-green-700">
                            Earned!
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
