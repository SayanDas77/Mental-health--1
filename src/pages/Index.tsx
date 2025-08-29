import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoodCheckIn } from "@/components/MoodCheckIn";
import { BreathingExercise } from "@/components/BreathingExercise";
import { WellnessResources } from "@/components/WellnessResources";
import { Heart, Smile, Wind, BookOpen, Users } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("mood");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-calm/30 to-soothing/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Peaceful wellness background with flowing shapes" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Breathe Easy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            A safe space for students and young professionals to check in with their mental wellness
          </p>
          <p className="text-lg mb-8 text-muted-foreground max-w-xl mx-auto">
            No clinical jargon, no pressure - just simple tools to help you navigate stress, anxiety, and daily challenges
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => setActiveTab("mood")}
            className="text-lg px-8 py-3"
          >
            Start Your Check-in
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-white/80 backdrop-blur-sm shadow-soft">
            <TabsTrigger value="mood" className="flex items-center gap-2">
              <Smile size={16} />
              <span className="hidden sm:inline">Mood</span>
            </TabsTrigger>
            <TabsTrigger value="breathing" className="flex items-center gap-2">
              <Wind size={16} />
              <span className="hidden sm:inline">Breathe</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <BookOpen size={16} />
              <span className="hidden sm:inline">Resources</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <Heart size={16} />
              <span className="hidden sm:inline">Support</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mood" className="mt-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-3 text-foreground">Daily Mood Check-in</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Take a moment to acknowledge how you're feeling. There's no right or wrong answer.
              </p>
            </div>
            <MoodCheckIn />
          </TabsContent>

          <TabsContent value="breathing" className="mt-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-3 text-foreground">Guided Breathing</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try this simple breathing exercise when you feel overwhelmed or stressed.
              </p>
            </div>
            <BreathingExercise />
          </TabsContent>

          <TabsContent value="resources" className="mt-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-3 text-foreground">Wellness Resources</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Practical tips and strategies for managing stress and building resilience.
              </p>
            </div>
            <WellnessResources />
          </TabsContent>

          <TabsContent value="support" className="mt-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-3 text-foreground">You're Not Alone</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Remember that seeking help is a sign of strength. Whether you're dealing with academic stress, 
                work pressure, or just life's challenges, there are people who care and want to support you.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Remember</h3>
                  <p className="text-muted-foreground">
                    Your feelings are valid. It's okay to have difficult days. Progress isn't always linear, 
                    and small steps count.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-warm to-accent rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Connect</h3>
                  <p className="text-muted-foreground">
                    Consider reaching out to counseling services at your school or workplace. 
                    Many offer free, confidential support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Take care of yourself. You matter. 💙
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;