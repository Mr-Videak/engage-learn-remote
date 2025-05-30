
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, Users, BookOpen, Award, Bell, Settings, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import MoodTracker from "@/components/MoodTracker";

const Dashboard = () => {
  const navigate = useNavigate();

  const upcomingClasses = [
    {
      id: 1,
      title: "Advanced React Concepts",
      instructor: "Dr. Sarah Chen",
      time: "2:00 PM - 3:30 PM",
      status: "live",
      participants: 24
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      instructor: "Prof. Michael Kumar",
      time: "4:00 PM - 5:30 PM",
      status: "upcoming",
      participants: 18
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Ms. Emily Rodriguez",
      time: "Tomorrow 10:00 AM",
      status: "scheduled",
      participants: 32
    }
  ];

  const achievements = [
    { title: "Active Participant", points: 150, progress: 75 },
    { title: "Note Master", points: 100, progress: 100 },
    { title: "Collaboration Star", points: 200, progress: 45 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-gray-600">
            Ready to dive into today's learning journey?
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Classes */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Today's Classes</CardTitle>
                  <Badge className="bg-green-100 text-green-700">
                    3 scheduled
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingClasses.map((class_) => (
                  <div key={class_.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        class_.status === 'live' ? 'bg-red-500 animate-pulse' : 
                        class_.status === 'upcoming' ? 'bg-yellow-500' : 'bg-gray-400'
                      }`} />
                      <div>
                        <h3 className="font-semibold text-gray-900">{class_.title}</h3>
                        <p className="text-sm text-gray-600">{class_.instructor}</p>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {class_.time}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {class_.participants} students
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant={class_.status === 'live' ? 'default' : 'outline'}
                      className={class_.status === 'live' ? 'bg-red-500 hover:bg-red-600' : ''}
                      onClick={() => navigate('/live-class')}
                    >
                      {class_.status === 'live' ? 'Join Now' : 'View Details'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col space-y-2 hover:bg-blue-50 hover:border-blue-300"
                    onClick={() => navigate('/notes')}
                  >
                    <BookOpen className="h-6 w-6 text-blue-500" />
                    <span className="text-sm">My Notes</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col space-y-2 hover:bg-purple-50 hover:border-purple-300"
                  >
                    <Calendar className="h-6 w-6 text-purple-500" />
                    <span className="text-sm">Schedule</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col space-y-2 hover:bg-green-50 hover:border-green-300"
                  >
                    <Users className="h-6 w-6 text-green-500" />
                    <span className="text-sm">Study Groups</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col space-y-2 hover:bg-yellow-50 hover:border-yellow-300"
                  >
                    <Award className="h-6 w-6 text-yellow-500" />
                    <span className="text-sm">Achievements</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Mood Tracker */}
            <MoodTracker />

            {/* Learning Progress */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Learning Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{achievement.title}</span>
                      <span className="text-sm text-gray-500">{achievement.points} pts</span>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div>
                      <p className="text-gray-800">New assignment posted in React class</p>
                      <p className="text-gray-500 text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <p className="text-gray-800">Earned "Active Participant" badge</p>
                      <p className="text-gray-500 text-xs">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                    <div>
                      <p className="text-gray-800">Study group session reminder</p>
                      <p className="text-gray-500 text-xs">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
