import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, MapPin, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-roommates.jpg";

interface HeroProps {
  onUserTypeSelect: (type: 'seeker' | 'provider') => void;
}

const Hero = ({ onUserTypeSelect }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary-glow/5 to-accent/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Find Your Perfect
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Roommate</span>
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Connect with like-minded people and discover your ideal living situation. 
                Safe, verified, and designed for modern professionals.
              </p>
            </div>

            {/* User type selection */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card 
                className="p-6 cursor-pointer group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20"
                onClick={() => onUserTypeSelect('seeker')}
              >
                <Users className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">I'm Looking for a Room</h3>
                <p className="text-sm text-foreground/70">Find the perfect room and roommates</p>
              </Card>
              
              <Card 
                className="p-6 cursor-pointer group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-accent/20"
                onClick={() => onUserTypeSelect('provider')}
              >
                <MapPin className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">I Have a Room</h3>
                <p className="text-sm text-foreground/70">List your space and find great roommates</p>
              </Card>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-foreground/60">Happy matches</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-foreground/60">Available rooms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-foreground/60">Success rate</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Happy roommates in modern living space"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating feature cards */}
            <div className="absolute -top-4 -right-4 bg-background rounded-xl p-4 shadow-card border animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <Heart className="h-5 w-5 text-accent mb-1" />
              <div className="text-sm font-medium">Verified Profiles</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-card border animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Shield className="h-5 w-5 text-primary mb-1" />
              <div className="text-sm font-medium">Safe & Secure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;