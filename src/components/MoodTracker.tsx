
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Leaf } from "lucide-react";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  
  const moods = [
    { emoji: "🌟", label: "Flourishing", value: 5, color: "text-nature-green" },
    { emoji: "🌱", label: "Growing", value: 4, color: "text-nature-lightGreen" },
    { emoji: "🍃", label: "Steady", value: 3, color: "text-yellow-500" },
    { emoji: "🌾", label: "Rooting", value: 2, color: "text-orange-500" },
    { emoji: "🌰", label: "Dormant", value: 1, color: "text-nature-brown" }
  ];

  const handleMoodSelect = (value: number) => {
    setSelectedMood(value);
    console.log(`Mood selected: ${value}`);
  };

  return (
    <Card className="shadow-xl border-0 rounded-2xl bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center font-serif text-nature-brown">
          <Leaf className="w-5 h-5 mr-3 text-nature-green" />
          How are you growing today?
        </CardTitle>
        <CardDescription className="font-sans text-nature-brown/70">
          Your wellbeing nurtures your learning garden
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-3 mb-6">
          {moods.map((mood) => (
            <Button
              key={mood.value}
              variant={selectedMood === mood.value ? "default" : "outline"}
              className={`h-16 flex-col space-y-2 text-xs rounded-2xl transition-all duration-300 ${
                selectedMood === mood.value 
                  ? "bg-nature-green hover:bg-nature-darkGreen text-white shadow-lg scale-105" 
                  : "hover:bg-nature-beige/50 border-nature-green/30"
              }`}
              onClick={() => handleMoodSelect(mood.value)}
            >
              <span className="text-xl">{mood.emoji}</span>
              <span className={`font-sans ${selectedMood === mood.value ? "text-white" : mood.color}`}>
                {mood.label}
              </span>
            </Button>
          ))}
        </div>
        
        {selectedMood && (
          <div className="text-center text-sm text-nature-brown/80 bg-nature-green/10 p-4 rounded-2xl border border-nature-green/20">
            <p className="font-sans">
              Thank you for sharing! Your energy helps us cultivate a better learning environment for everyone. 🌱
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
