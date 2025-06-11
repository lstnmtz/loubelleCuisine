import React, { createContext, useContext, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RecipeDetail from "./pages/RecipeDetail";

const queryClient = new QueryClient();

// Contexte pour le dark mode
const DarkModeContext = createContext({
  dark: false,
  toggleDark: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(() => {
    // Préférence utilisateur ou système
    return (
      localStorage.getItem("darkmode") === "true" ||
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkmode", dark.toString());
  }, [dark]);

  const toggleDark = () => setDark((d) => !d);

  return (
    <DarkModeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Bouton pour changer le mode
const DarkModeToggle = () => {
  const { dark, toggleDark } = useDarkMode();
  return (
    <button
      onClick={toggleDark}
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1000,
        padding: "8px 12px",
      }}
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <DarkModeProvider>
        <DarkModeToggle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/recette/:id" element={<RecipeDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
