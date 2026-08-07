import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const GOLD = '#C6A15B';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/teaching', label: 'Teaching' },
  { href: '/directing', label: 'Directing' },
  { href: '/acting', label: 'Acting' },
  { href: '/media', label: 'Media' },
  { href: '/recognition', label: 'Recognition' },
  { href: '/contact', label: 'Contact' },
];

function ScriptLogo({ size = 'desktop' }: { size?: 'desktop' | 'mobile' }) {
  const scriptSize = size === 'desktop' ? '2.1rem' : '1.55rem';
  const subtitleSize = size === 'desktop' ? '0.52rem' : '0.44rem';
  const dashWidth = size === 'desktop' ? '16px' : '10px';

  return (
    <div className="flex flex-col leading-none">
      <span
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: scriptSize,
          lineHeight: '1.1',
          color: 'hsl(var(--foreground))',
          letterSpacing: '0.01em',
        }}
      >
        Brianne Beatrice
      </span>
      <div className="flex items-center gap-1.5 mt-0.5">
        <div style={{ height: '1px', width: dashWidth, backgroundColor: GOLD, flexShrink: 0 }} />
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: subtitleSize,
            letterSpacing: '0.13em',
            fontWeight: 600,
            textTransform: 'uppercase',
            color: GOLD,
          }}
        >
          Master of Performance &amp; Inspiration
        </span>
      </div>
    </div>
  );
}

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group transition-opacity hover:opacity-75">
              {/* Desktop */}
              <span className="hidden md:flex">
                <ScriptLogo size="desktop" />
              </span>
              {/* Mobile — smaller version of the same script logo */}
              <span className="md:hidden">
                <ScriptLogo size="mobile" />
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative py-2',
                    location === link.href
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: GOLD }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'block py-3 px-4 rounded-md text-base font-medium transition-colors',
                    location === link.href
                      ? 'text-foreground bg-accent'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                  )}
                  style={location === link.href ? { borderLeft: `3px solid ${GOLD}` } : {}}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
