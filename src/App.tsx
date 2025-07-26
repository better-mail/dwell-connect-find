import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import all page components
import LoginPage from "./pages/login/page";
import RegisterPage from "./pages/register/page";
import DashboardPage from "./pages/dashboard/page";
import SearchPage from "./pages/search/page";
import ProfilePage from "./pages/profile/page";
import MessagesPage from "./pages/messages/page";
import HelpPage from "./pages/help/page";
import ForgotPasswordPage from "./pages/forgot-password/page";
import ListRoomPage from "./pages/list-room/page";
import OnboardingPage from "./pages/onboarding/page";
import ListingPage from "./pages/listing/[id]/page";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          
          {/* Main App Routes */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/list-room" element={<ListRoomPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          
          {/* Dynamic Routes */}
          <Route path="/listing/:id" element={<ListingPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
