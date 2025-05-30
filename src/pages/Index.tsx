
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Play, Users, Heart, BookOpen, Zap, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Interactive Sessions",
      description: "Engage with real-time polls, reactions, and collaborative tools"
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Mood Tracking",
      description: "AI-powered sentiment analysis to ensure student wellbeing"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      title: "Smart Notes",
      description: "Auto-generated summaries and intelligent note organization"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Gamification",
      description: "Points, badges, and achievements to boost engagement"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Accessibility First",
      description: "Designed for everyone with comprehensive accessibility features"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200" variant="secondary">
            🚀 Revolutionizing Remote Learning
          </Badge>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LOVABLE
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Redesigning the classroom experience for remote & hybrid learning. 
            Boost engagement, foster collaboration, and create meaningful connections in virtual spaces.
          </p>
          
          <div className="flex gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate('/dashboard')}
            >
              <Play className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Students Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Educational Institutions</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Engagement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
