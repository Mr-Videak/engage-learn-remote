
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Heart } from "lucide-react";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  
  const moods = [
    { emoji: "😊", label: "Great", value: 5, color: "text-green-500" },
    { emoji: "🙂", label: "Good", value: 4, color: "text-blue-500" },
    { emoji: "😐", label: "Okay", value: 3, color: "text-yellow-500" },
    { emoji: "😕", label: "Meh", value: 2, color: "text-orange-500" },
    { emoji: "😢", label: "Down", value: 1, color: "text-red-500" }
  ];

  const handleMoodSelect = (value: number) => {
    setSelectedMood(value);
    // Here you would typically save to backend
    console.log(`Mood selected: ${value}`);
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center">
          <Heart className="w-5 h-5 mr-2 text-pink-500" />
          How are you feeling today?
        </CardTitle>
        <CardDescription>
          Your wellbeing matters to us
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-2 mb-4">
          {moods.map((mood) => (
            <Button
              key={mood.value}
              variant={selectedMood === mood.value ? "default" : "outline"}
              className={`h-12 flex-col space-y-1 text-xs ${
                selectedMood === mood.value 
                  ? "bg-blue-500 hover:bg-blue-600" 
                  : "hover:bg-gray-50"
              }`}
              onClick={() => handleMoodSelect(mood.value)}
            >
              <span className="text-lg">{mood.emoji}</span>
              <span className={selectedMood === mood.value ? "text-white" : mood.color}>
                {mood.label}
              </span>
            </Button>
          ))}
        </div>
        
        {selectedMood && (
          <div className="text-center text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
            Thanks for sharing! Your mood helps us improve your learning experience.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
