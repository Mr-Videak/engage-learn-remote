
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { 
  Heart, 
  ThumbsUp, 
  Laugh, 
  HandHeart,
  MessageSquare, 
  Users, 
  Mic, 
  MicOff,
  Camera,
  CameraOff,
  Hand,
  Settings
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const LiveClass = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [reactions, setReactions] = useState<{[key: string]: number}>({
    "❤️": 15,
    "👍": 8,
    "😂": 3,
    "🔥": 12
  });

  const chatMessages = [
    { user: "Sarah M.", message: "Great explanation of React hooks!", time: "2:34 PM" },
    { user: "Mike R.", message: "Can you share the slides?", time: "2:35 PM" },
    { user: "Emily K.", message: "This is so helpful! 🎉", time: "2:36 PM" },
    { user: "Alex J.", message: "Question about useEffect dependencies", time: "2:37 PM" },
  ];

  const participants = [
    { name: "Dr. Sarah Chen", role: "Instructor", status: "speaking" },
    { name: "Alex Johnson", role: "Student", status: "listening" },
    { name: "Mike Rodriguez", role: "Student", status: "hand-raised" },
    { name: "Emily Kim", role: "Student", status: "listening" },
    { name: "David Park", role: "Student", status: "listening" },
    { name: "Lisa Wang", role: "Student", status: "listening" },
  ];

  const handleReaction = (emoji: string) => {
    setReactions(prev => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1
    }));
  };

  const sendMessage = () => {
    if (chatMessage.trim()) {
      console.log("Sending message:", chatMessage);
      setChatMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-4">
        {/* Class Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">
              Advanced React Concepts
            </h1>
            <p className="text-gray-400">Dr. Sarah Chen • 24 participants</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-red-500 hover:bg-red-600 animate-pulse">
              🔴 LIVE
            </Badge>
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
              onClick={() => navigate('/dashboard')}
            >
              Leave Class
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Video Area */}
          <div className="lg:col-span-3 space-y-4">
            {/* Video Container */}
            <Card className="bg-gray-800 border-gray-700 h-96">
              <CardContent className="p-0 h-full relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-full rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl font-bold">SC</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Dr. Sarah Chen</h3>
                    <Badge className="bg-green-500">Speaking</Badge>
                  </div>
                </div>
                
                {/* Floating Reactions */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {Object.entries(reactions).map(([emoji, count]) => (
                    <Badge key={emoji} className="bg-black/50 text-white">
                      {emoji} {count}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Controls */}
            <div className="flex justify-center space-x-4">
              <Button
                variant={isMuted ? "destructive" : "outline"}
                size="lg"
                className={`${isMuted ? "bg-red-500 hover:bg-red-600" : "border-gray-600 text-gray-300 hover:bg-gray-800"}`}
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </Button>
              
              <Button
                variant={isVideoOff ? "destructive" : "outline"}
                size="lg"
                className={`${isVideoOff ? "bg-red-500 hover:bg-red-600" : "border-gray-600 text-gray-300 hover:bg-gray-800"}`}
                onClick={() => setIsVideoOff(!isVideoOff)}
              >
                {isVideoOff ? <CameraOff className="w-5 h-5" /> : <Camera className="w-5 h-5" />}
              </Button>
              
              <Button
                variant={isHandRaised ? "default" : "outline"}
                size="lg"
                className={`${isHandRaised ? "bg-yellow-500 hover:bg-yellow-600" : "border-gray-600 text-gray-300 hover:bg-gray-800"}`}
                onClick={() => setIsHandRaised(!isHandRaised)}
              >
                <Hand className="w-5 h-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Settings className="w-5 h-5" />
              </Button>
            </div>

            {/* Reaction Bar */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Quick Reactions:</span>
                  <div className="flex space-x-2">
                    {["❤️", "👍", "😂", "🔥"].map((emoji) => (
                      <Button
                        key={emoji}
                        variant="ghost"
                        size="sm"
                        className="text-2xl hover:bg-gray-700"
                        onClick={() => handleReaction(emoji)}
                      >
                        {emoji}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            {/* Participants */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Participants ({participants.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 max-h-48 overflow-y-auto">
                {participants.map((participant, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700">
                    <div>
                      <p className="text-white text-sm font-medium">{participant.name}</p>
                      <p className="text-gray-400 text-xs">{participant.role}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {participant.status === "speaking" && (
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      )}
                      {participant.status === "hand-raised" && (
                        <Hand className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Chat */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-400 text-sm font-medium">{msg.user}</span>
                        <span className="text-gray-500 text-xs">{msg.time}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{msg.message}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type a message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Button onClick={sendMessage} size="sm">
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClass;
