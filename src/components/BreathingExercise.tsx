import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, RotateCcw } from "lucide-react";

export const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [seconds, setSeconds] = useState(4);
  const [cycle, setCycle] = useState(0);

  const phases = {
    inhale: { duration: 4, next: "hold", text: "Breathe in..." },
    hold: { duration: 4, next: "exhale", text: "Hold..." },
    exhale: { duration: 6, next: "inhale", text: "Breathe out..." },
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            const currentPhase = phases[phase];
            const nextPhase = currentPhase.next as keyof typeof phases;
            setPhase(nextPhase);
            
            if (nextPhase === "inhale") {
              setCycle((c) => c + 1);
            }
            
            return phases[nextPhase].duration;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const reset = () => {
    setIsActive(false);
    setPhase("inhale");
    setSeconds(4);
    setCycle(0);
  };

  const getCircleScale = () => {
    const progress = (phases[phase].duration - seconds + 1) / phases[phase].duration;
    if (phase === "inhale") return 0.5 + progress * 0.5;
    if (phase === "exhale") return 1 - progress * 0.5;
    return 1;
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-soft">
      <CardHeader className="text-center">
        <CardTitle className="text-foreground">Breathing Exercise</CardTitle>
        <CardDescription className="text-muted-foreground">
          4-4-6 breathing pattern to help you relax
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="relative w-48 h-48 mx-auto">
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 transition-transform duration-1000 ease-in-out"
            style={{ transform: `scale(${getCircleScale()})` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-medium text-foreground mb-2">
                {phases[phase].text}
              </div>
              <div className="text-4xl font-bold text-primary">
                {seconds}
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Cycle: {cycle} | Phase: {phase}
        </div>
        
        <div className="flex gap-3 justify-center">
          <Button
            variant={isActive ? "outline" : "hero"}
            onClick={() => setIsActive(!isActive)}
            className="flex items-center gap-2"
          >
            {isActive ? <Pause size={16} /> : <Play size={16} />}
            {isActive ? "Pause" : "Start"}
          </Button>
          <Button variant="outline" onClick={reset} className="flex items-center gap-2">
            <RotateCcw size={16} />
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};