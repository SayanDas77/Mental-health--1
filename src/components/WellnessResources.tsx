import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Users, Phone } from "lucide-react";

const resources = [
  {
    icon: Heart,
    title: "Self-Care Tips",
    description: "Simple daily practices to improve your mental wellness",
    tips: [
      "Take 5-minute breaks every hour",
      "Practice gratitude journaling",
      "Get 10 minutes of sunlight daily",
      "Stay hydrated throughout the day"
    ]
  },
  {
    icon: Brain,
    title: "Stress Management",
    description: "Techniques to handle academic and work pressure",
    tips: [
      "Break large tasks into smaller steps",
      "Use the Pomodoro Technique",
      "Practice saying 'no' to overcommitment",
      "Schedule regular downtime"
    ]
  },
  {
    icon: Users,
    title: "Building Support",
    description: "Connect with others and build meaningful relationships",
    tips: [
      "Reach out to one friend each week",
      "Join clubs or interest groups",
      "Practice active listening",
      "Share your feelings with trusted people"
    ]
  }
];

const emergencyContacts = [
  { name: "Crisis Text Line", contact: "Text HOME to 741741" },
  { name: "National Suicide Prevention Lifeline", contact: "988" },
  { name: "SAMHSA National Helpline", contact: "1-800-662-4357" }
];

export const WellnessResources = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.title} className="shadow-soft hover:shadow-warm transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <resource.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {resource.tips.map((tip, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-warm/10 border-warm/20 shadow-warm">
        <CardHeader className="text-center">
          <div className="w-12 h-12 mx-auto mb-3 bg-warm rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-warm-foreground" />
          </div>
          <CardTitle className="text-warm-foreground">Need immediate support?</CardTitle>
          <CardDescription className="text-warm-foreground/80">
            If you're in crisis, please reach out for help immediately
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {emergencyContacts.map((contact) => (
            <div key={contact.name} className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
              <span className="font-medium text-warm-foreground">{contact.name}</span>
              <Button variant="warm" size="sm">
                {contact.contact}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};