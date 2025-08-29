import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const moods = [
  { emoji: "😊", label: "Great", value: 5 },
  { emoji: "🙂", label: "Good", value: 4 },
  { emoji: "😐", label: "Okay", value: 3 },
  { emoji: "😔", label: "Not great", value: 2 },
  { emoji: "😢", label: "Struggling", value: 1 },
];

export const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const { toast } = useToast();

  const handleMoodSelect = (mood: typeof moods[0]) => {
    setSelectedMood(mood.value);
    toast({
      title: "Mood checked in!",
      description: `Thanks for sharing that you're feeling ${mood.label.toLowerCase()}. Remember, it's okay to have ups and downs.`,
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-soft">
      <CardHeader className="text-center">
        <CardTitle className="text-foreground">How are you feeling today?</CardTitle>
        <CardDescription className="text-muted-foreground">
          Take a moment to check in with yourself
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-3">
          {moods.map((mood) => (
            <Button
              key={mood.value}
              variant={selectedMood === mood.value ? "hero" : "outline"}
              className="h-16 flex-col p-2 transition-all duration-200"
              onClick={() => handleMoodSelect(mood)}
            >
              <span className="text-2xl mb-1">{mood.emoji}</span>
              <span className="text-xs">{mood.label}</span>
            </Button>
          ))}
        </div>
        {selectedMood && (
          <div className="mt-4 p-4 bg-calm rounded-lg text-center">
            <p className="text-sm text-calm-foreground">
              Your feelings are valid. Consider taking a few deep breaths or trying our breathing exercise.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};