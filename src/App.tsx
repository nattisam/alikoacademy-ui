import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LmsDashboard from "./pages/lms/LmsDashboard";
import LmsExplore from "./pages/lms/LmsExplore";
import LmsMyLearning from "./pages/lms/LmsMyLearning";
import LmsCertifications from "./pages/lms/LmsCertifications";
import LmsProfile from "./pages/lms/LmsProfile";
import LmsPhoto from "./pages/lms/LmsPhoto";
import LmsAccountSecurity from "./pages/lms/LmsAccountSecurity";
import LmsSubscriptions from "./pages/lms/LmsSubscriptions";
import LmsNotifications from "./pages/lms/LmsNotifications";
import LmsSettings from "./pages/lms/LmsSettings";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lms" element={<LmsDashboard />} />
          <Route path="/lms/explore" element={<LmsExplore />} />
          <Route path="/lms/my-learning" element={<LmsMyLearning />} />
          <Route path="/lms/certifications" element={<LmsCertifications />} />
          <Route path="/lms/profile" element={<LmsProfile />} />
          <Route path="/lms/photo" element={<LmsPhoto />} />
          <Route path="/lms/account-security" element={<LmsAccountSecurity />} />
          <Route path="/lms/subscriptions" element={<LmsSubscriptions />} />
          <Route path="/lms/notifications" element={<LmsNotifications />} />
          <Route path="/lms/settings" element={<LmsSettings />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
