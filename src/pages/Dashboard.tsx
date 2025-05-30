
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, Users, BookOpen, Award, Bell, Leaf, Sprout, TreePine } from "lucide-react";
import Navbar from "@/components/Navbar";
import MoodTracker from "@/components/MoodTracker";

const Dashboard = () => {
  const navigate = useNavigate();

  const upcomingClasses = [
    {
      id: 1,
      title: "Sustainable Web Development",
      instructor: "Dr. Sarah Chen",
      time: "2:00 PM - 3:30 PM",
      status: "live",
      participants: 24
    },
    {
      id: 2,
      title: "Biomimicry in Design Thinking",
      instructor: "Prof. Michael Kumar",
      time: "4:00 PM - 5:30 PM",
      status: "upcoming",
      participants: 18
    },
    {
      id: 3,
      title: "Mindful Learning Principles",
      instructor: "Ms. Emily Rodriguez",
      time: "Tomorrow 10:00 AM",
      status: "scheduled",
      participants: 32
    }
  ];

  const achievements = [
    { title: "Mindful Participant", points: 150, progress: 75, icon: <Leaf className="w-4 h-4" /> },
    { title: "Knowledge Cultivator", points: 100, progress: 100, icon: <Sprout className="w-4 h-4" /> },
    { title: "Collaboration Tree", points: 200, progress: 45, icon: <TreePine className="w-4 h-4" /> }
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-nature-beige via-white to-nature-lightGreen/20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0-11.046-8.954-20-20-20S-10 18.954-10 30s8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Header */}
        <div className="mb-8 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-nature-brown mb-4 font-serif">
            Welcome back, Alex! 🌱
          </h1>
          <p className="text-xl text-nature-brown/80 font-sans leading-relaxed max-w-2xl">
            Welcome to SapienRoot – Deep, mindful learning rooted in nature. 
            Ready to cultivate your knowledge garden today?
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Classes */}
            <Card className="shadow-xl border-0 rounded-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-semibold font-serif text-nature-brown">Today's Learning Sessions</CardTitle>
                  <Badge className="bg-nature-green/10 text-nature-darkGreen border-nature-green/30 rounded-2xl">
                    3 growing
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {upcomingClasses.map((class_) => (
                  <div key={class_.id} className="flex items-center justify-between p-6 bg-nature-beige/30 rounded-2xl hover:bg-nature-beige/50 transition-all duration-300 border border-nature-green/10">
                    <div className="flex items-center space-x-6">
                      <div className={`w-4 h-4 rounded-full ${
                        class_.status === 'live' ? 'bg-nature-green animate-pulse shadow-lg' : 
                        class_.status === 'upcoming' ? 'bg-yellow-500' : 'bg-gray-400'
                      }`} />
                      <div>
                        <h3 className="font-semibold text-nature-brown font-serif text-lg">{class_.title}</h3>
                        <p className="text-nature-brown/70 font-sans">{class_.instructor}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-nature-brown/60 flex items-center font-sans">
                            <Clock className="w-4 h-4 mr-2" />
                            {class_.time}
                          </span>
                          <span className="text-sm text-nature-brown/60 flex items-center font-sans">
                            <Users className="w-4 h-4 mr-2" />
                            {class_.participants} learners
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant={class_.status === 'live' ? 'default' : 'outline'}
                      className={`rounded-2xl font-sans ${
                        class_.status === 'live' 
                          ? 'bg-nature-green hover:bg-nature-darkGreen shadow-lg' 
                          : 'border-nature-green/50 hover:bg-nature-green/10 text-nature-brown'
                      }`}
                      onClick={() => navigate('/live-class')}
                    >
                      {class_.status === 'live' ? 'Join Garden' : 'View Details'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-xl border-0 rounded-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold font-serif text-nature-brown">Learning Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 hover:bg-nature-green/10 hover:border-nature-green rounded-2xl border-nature-green/30 group transition-all duration-300"
                    onClick={() => navigate('/notes')}
                  >
                    <BookOpen className="h-6 w-6 text-nature-green group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-sans text-nature-brown">My Garden</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 hover:bg-nature-green/10 hover:border-nature-green rounded-2xl border-nature-green/30 group transition-all duration-300"
                  >
                    <Calendar className="h-6 w-6 text-nature-green group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-sans text-nature-brown">Schedule</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 hover:bg-nature-green/10 hover:border-nature-green rounded-2xl border-nature-green/30 group transition-all duration-300"
                  >
                    <Users className="h-6 w-6 text-nature-green group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-sans text-nature-brown">Study Circles</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col space-y-3 hover:bg-nature-green/10 hover:border-nature-green rounded-2xl border-nature-green/30 group transition-all duration-300"
                  >
                    <Award className="h-6 w-6 text-nature-green group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-sans text-nature-brown">Growth Badges</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Mood Tracker */}
            <MoodTracker />

            {/* Learning Progress */}
            <Card className="shadow-xl border-0 rounded-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold font-serif text-nature-brown">Growth Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        {achievement.icon}
                        <span className="text-sm font-medium font-sans text-nature-brown">{achievement.title}</span>
                      </div>
                      <span className="text-sm text-nature-brown/60 font-sans">{achievement.points} pts</span>
                    </div>
                    <Progress value={achievement.progress} className="h-3 rounded-2xl bg-nature-beige/50" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="shadow-xl border-0 rounded-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center font-serif text-nature-brown">
                  <Bell className="w-5 h-5 mr-3 text-nature-green" />
                  Recent Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-nature-green rounded-full mt-2" />
                    <div>
                      <p className="text-nature-brown font-sans">New seed planted in Sustainable Web Development</p>
                      <p className="text-nature-brown/60 text-xs font-sans">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-nature-lightGreen rounded-full mt-2" />
                    <div>
                      <p className="text-nature-brown font-sans">Earned "Mindful Participant" leaf</p>
                      <p className="text-nature-brown/60 text-xs font-sans">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-nature-darkGreen rounded-full mt-2" />
                    <div>
                      <p className="text-nature-brown font-sans">Study circle session blooming soon</p>
                      <p className="text-nature-brown/60 text-xs font-sans">2 days ago</p>
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
