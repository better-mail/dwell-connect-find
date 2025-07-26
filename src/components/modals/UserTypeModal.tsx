import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, MapPin, ArrowRight } from "lucide-react";

interface UserTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (type: 'seeker' | 'provider') => void;
}

const UserTypeModal = ({ isOpen, onClose, onSelect }: UserTypeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Welcome to RoomieMatch!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <p className="text-center text-foreground/70 mb-6">
            Let's get started by understanding what you're looking for:
          </p>
          
          <div className="space-y-3">
            <Card 
              className="p-6 cursor-pointer group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/20"
              onClick={() => onSelect('seeker')}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">I'm Looking for a Room</h3>
                  <p className="text-sm text-foreground/70">Find the perfect room and roommates</p>
                </div>
                <ArrowRight className="h-5 w-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Card>
            
            <Card 
              className="p-6 cursor-pointer group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border-2 hover:border-accent/20"
              onClick={() => onSelect('provider')}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">I Have a Room</h3>
                  <p className="text-sm text-foreground/70">List your space and find great roommates</p>
                </div>
                <ArrowRight className="h-5 w-5 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </Card>
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-xs text-center text-foreground/50">
              You can always change this later in your profile settings
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserTypeModal;