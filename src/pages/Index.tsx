
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-nature-beige via-white to-nature-lightGreen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-nature-green mx-auto mb-4" />
          <p className="text-nature-brown">Loading your SapienRoot experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-beige via-white to-nature-lightGreen">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-nature-green to-nature-darkGreen rounded-3xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-3xl font-serif">🌳</span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 bg-gradient-to-r from-nature-green to-nature-darkGreen bg-clip-text text-transparent">
              SapienRoot
            </h1>
            
            <p className="text-xl md:text-2xl text-nature-brown/80 mb-8 leading-relaxed">
              Deep, mindful learning rooted in nature
            </p>
            
            <p className="text-lg text-nature-brown/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your educational experience with our nature-inspired Design Thinking platform. 
              Collaborate, ideate, and create meaningful solutions in a mindful learning environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => navigate('/auth')}
                className="bg-nature-green hover:bg-nature-darkGreen text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
              
              <Button 
                variant="outline" 
                className="border-nature-green text-nature-green hover:bg-nature-green hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🧠",
                title: "Empathy Wall",
                description: "Gather insights and understand user needs through collaborative empathy mapping."
              },
              {
                icon: "💡",
                title: "Ideation Hub", 
                description: "Brainstorm and vote on creative solutions in a structured, collaborative environment."
              },
              {
                icon: "🧪",
                title: "Prototype Lab",
                description: "Build and test your ideas with rapid prototyping tools and feedback loops."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-nature-green/20">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold font-serif text-nature-brown mb-3">{feature.title}</h3>
                <p className="text-nature-brown/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
