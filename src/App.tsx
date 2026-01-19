import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CatalogueProvider } from "@/context/CatalogueContext";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import Index from "./pages/Index";
import RegisterPage from "./pages/RegisterPage";
import BrandPage from "./pages/BrandPage";
import SystemPage from "./pages/SystemPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CatalogueProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <FloatingNav />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/brand" element={<BrandPage />} />
            <Route path="/system" element={<SystemPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product" element={<ProductPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CatalogueProvider>
  </QueryClientProvider>
);

export default App;
