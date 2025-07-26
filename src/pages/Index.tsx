import { useState } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";
import UserTypeModal from "@/components/modals/UserTypeModal";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);
  const { toast } = useToast();

  const handleUserTypeSelect = (type: 'seeker' | 'provider') => {
    setShowUserTypeModal(false);
    
    // For now, just show a toast - later this will redirect to Supabase auth
    toast({
      title: "Getting started...",
      description: `Setting up your ${type} profile. Authentication will be integrated with Supabase.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onUserTypeSelect={() => setShowUserTypeModal(true)} />
      <Hero onUserTypeSelect={handleUserTypeSelect} />
      <Features />
      <Pricing />
      <Footer />
      
      <UserTypeModal 
        isOpen={showUserTypeModal}
        onClose={() => setShowUserTypeModal(false)}
        onSelect={handleUserTypeSelect}
      />
    </div>
  );
};

export default Index;
