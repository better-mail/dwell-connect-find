import { Home, MessageCircle, Shield, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                RoomieMatch
              </span>
            </div>
            <p className="text-sm text-foreground/70">
              Connect with like-minded people and discover your ideal living situation.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-xs text-foreground/60">Verified & Secure</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">How it works</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Browse rooms</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">List your room</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Success stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Help center</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Safety tips</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Community guidelines</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Terms of service</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Cookie policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-foreground/60">
            © 2024 RoomieMatch. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Mail className="h-4 w-4 text-foreground/40" />
            <span className="text-sm text-foreground/60">hello@roomiematch.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;