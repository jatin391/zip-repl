import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Page Imports
import Home from '@/pages/home';
import About from '@/pages/about';
import Academics from '@/pages/academics';
import PrincipalsMessage from '@/pages/principals-message';
import Facilities from '@/pages/facilities';
import Gallery from '@/pages/gallery';
import Admissions from '@/pages/admissions';
import Contact from '@/pages/contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-background text-foreground">
      <Navbar />
      <main className="flex-1 w-full">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/academics" component={Academics} />
          <Route path="/principals-message" component={PrincipalsMessage} />
          <Route path="/facilities" component={Facilities} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
