import { Button } from "@/components/ui/button";
import { Home, MessageCircle, User, Menu } from "lucide-react";

interface HeaderProps {
  onUserTypeSelect?: (type: 'seeker' | 'provider') => void;
}

const Header = ({ onUserTypeSelect }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Home className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            RoomieMatch
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
            How it works
          </a>
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Sign in
          </Button>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => onUserTypeSelect?.('seeker')}
          >
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;