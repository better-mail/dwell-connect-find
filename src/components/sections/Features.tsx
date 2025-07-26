import { Card } from "@/components/ui/card";
import { 
  Users, 
  MessageCircle, 
  Shield, 
  Search, 
  Star, 
  MapPin,
  Clock,
  CheckCircle,
  Filter
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Matching",
      description: "Our algorithm considers lifestyle, preferences, and compatibility to find your perfect match.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "All users are verified with phone numbers and ID verification for your safety.",
      color: "text-accent"
    },
    {
      icon: MessageCircle,
      title: "Secure Messaging",
      description: "Chat safely with potential roommates through our built-in messaging system.",
      color: "text-primary"
    },
    {
      icon: Filter,
      title: "Advanced Filters",
      description: "Filter by budget, location, lifestyle, cleanliness preferences, and more.",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Location Based",
      description: "Find roommates and rooms in your preferred neighborhoods and areas.",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "Reviews & Ratings",
      description: "Read reviews from previous roommates to make informed decisions.",
      color: "text-accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> RoomieMatch</span>?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We've built the most comprehensive platform to help you find your perfect living situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 group border-0 shadow-card bg-background"
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-${feature.color.split('-')[1]}/10 to-${feature.color.split('-')[1]}/5`}>
                    <Icon className={`h-6 w-6 ${feature.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Process steps */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Sign Up", desc: "Create your profile in minutes" },
              { step: "2", title: "Set Preferences", desc: "Tell us what you're looking for" },
              { step: "3", title: "Get Matched", desc: "We'll find compatible roommates" },
              { step: "4", title: "Connect", desc: "Chat and meet your perfect match" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto group-hover:scale-110 transition-transform shadow-elegant">
                  {item.step}
                </div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;