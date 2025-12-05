import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/shared/NotFound";
import Home from "@/pages/shared/Home";
import Portfolio from "@/pages/portfolio/Portfolio";
import ProjectDetail from "@/pages/portfolio/ProjectDetail";
import Partnerships from "@/pages/partnerships/Partnerships";
import Ventures from "@/pages/ventures/Ventures";
import Contact from "@/pages/contact/Contact";
import Blog from "@/pages/blog/Blog";
import Dashboard from "@/pages/dashboard/Dashboard";
import Events from "@/pages/events/Events";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import { ThemeProvider } from "./lib/hooks/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/portfolio"} component={Portfolio} />
      <Route path={"/portfolio/:id"} component={ProjectDetail} />
      <Route path={"/partnerships"} component={Partnerships} />
      <Route path={"/ventures"} component={Ventures} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/events"} component={Events} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook
//
// NOTE: About Routes
// - Project detail page route must come before the general portfolio route to avoid conflicts
// - Wouter matches routes in order, so more specific routes should come first

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
