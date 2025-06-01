
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Play, Users, Heart, BookOpen, Zap, Shield, Leaf } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="h-8 w-8 text-nature-green" />,
      title: "Interactive Sessions",
      description: "Engage with real-time polls, reactions, and collaborative tools in harmony with nature"
    },
    {
      icon: <Heart className="h-8 w-8 text-nature-green" />,
      title: "Mindful Learning",
      description: "AI-powered sentiment analysis and mood tracking for holistic student wellbeing"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-nature-green" />,
      title: "Organic Notes",
      description: "Auto-generated summaries and intelligent note organization that grows with you"
    },
    {
      icon: <Zap className="h-8 w-8 text-nature-green" />,
      title: "Growth Gamification",
      description: "Points, badges, and achievements inspired by natural growth patterns"
    },
    {
      icon: <Shield className="h-8 w-8 text-nature-green" />,
      title: "Inclusive by Nature",
      description: "Designed for everyone with comprehensive accessibility and universal design"
    },
    {
      icon: <Leaf className="h-8 w-8 text-nature-green" />,
      title: "Sustainable Learning",
      description: "Environmentally conscious platform that reduces digital footprint"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-nature-beige via-white to-nature-lightGreen/20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0-11.046-8.954-20-20-20S-10 18.954-10 30s8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="text-center max-w-5xl mx-auto">
          <Badge className="mb-8 bg-nature-green/10 text-nature-darkGreen hover:bg-nature-green/20 border-nature-green/30 rounded-2xl px-6 py-2" variant="secondary">
            🌱 Cultivating Deep, Mindful Learning
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-nature-brown mb-8 leading-tight font-serif">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-nature-green to-nature-darkGreen bg-clip-text text-transparent">
              SapienRoot
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-nature-brown/80 mb-12 leading-relaxed font-sans max-w-4xl mx-auto">
            Deep, mindful learning rooted in nature. Transform your educational experience with our nature-inspired platform that fosters growth, connection, and sustainable knowledge cultivation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-nature-green to-nature-darkGreen hover:from-nature-darkGreen hover:to-nature-green text-white px-10 py-6 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 font-sans text-lg"
              onClick={() => navigate('/dashboard')}
            >
              <Play className="mr-3 h-6 w-6" />
              Begin Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-nature-green/50 hover:border-nature-green hover:bg-nature-green/10 px-10 py-6 rounded-2xl font-semibold transition-all duration-300 font-sans text-lg text-nature-brown"
            >
              <Leaf className="mr-3 h-6 w-6" />
              Explore Platform
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden group">
              <CardHeader className="text-center pb-4 pt-8">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-nature-green/10 rounded-2xl">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-nature-brown font-serif">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8">
                <CardDescription className="text-center text-nature-brown/70 leading-relaxed font-sans">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-nature-brown mb-16 font-serif">Growing Together Naturally</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl font-bold text-nature-green mb-4 font-serif">15K+</div>
              <div className="text-nature-brown/70 font-sans">Mindful Learners</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl font-bold text-nature-green mb-4 font-serif">800+</div>
              <div className="text-nature-brown/70 font-sans">Educational Gardens</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl font-bold text-nature-green mb-4 font-serif">98%</div>
              <div className="text-nature-brown/70 font-sans">Growth Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center bg-gradient-to-r from-nature-green/10 to-nature-lightGreen/10 rounded-2xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-nature-brown mb-6 font-serif">Ready to Plant Your Learning Seeds?</h3>
          <p className="text-lg text-nature-brown/80 mb-8 font-sans max-w-2xl mx-auto">
            Join thousands of learners who have discovered the power of nature-inspired education. Start your journey towards deeper, more meaningful learning today.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-nature-green to-nature-darkGreen hover:from-nature-darkGreen hover:to-nature-green text-white px-10 py-6 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 font-sans text-lg"
            onClick={() => navigate('/dashboard')}
          >
            <Leaf className="mr-3 h-6 w-6" />
            Start Growing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
