import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Speaking from '@/pages/Speaking';
import Teaching from '@/pages/Teaching';
import Directing from '@/pages/Directing';
import Acting from '@/pages/Acting';
import Media from '@/pages/Media';
import Recognition from '@/pages/Recognition';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="min-h-[100dvh]">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/speaking" component={Speaking} />
          <Route path="/teaching" component={Teaching} />
          <Route path="/directing" component={Directing} />
          <Route path="/acting" component={Acting} />
          <Route path="/media" component={Media} />
          <Route path="/recognition" component={Recognition} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
