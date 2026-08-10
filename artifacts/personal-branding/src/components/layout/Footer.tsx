import { Link } from 'wouter';
import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/teaching', label: 'Teaching' },
  { href: '/directing', label: 'Directing' },
  { href: '/media', label: 'Media' },
  { href: '/recognition', label: 'Recognition' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'mailto:bribeats@gmail.com',
    icon: Mail,
    label: 'Email Brianne Beatrice',
    testId: 'link-email',
  },
  {
    href: 'https://www.linkedin.com/in/brianne-beatrice-5457a627/',
    icon: Linkedin,
    label: 'Brianne Beatrice on LinkedIn',
    testId: 'link-linkedin',
    external: true,
  },
  {
    href: 'https://www.instagram.com/bribeats79/',
    icon: Instagram,
    label: 'Brianne Beatrice on Instagram',
    testId: 'link-instagram',
    external: true,
  },
  {
    href: 'https://www.facebook.com/bribeats79/',
    icon: Facebook,
    label: 'Brianne Beatrice on Facebook',
    testId: 'link-facebook',
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-3">Brianne Beatrice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Award-winning director. Master educator. Emerging speaker. Helping people find their voice — on stage and in life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Navigate</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Connect</h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.testId}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-foreground hover:text-background transition-colors"
                  data-testid={link.testId}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border space-y-2">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Brianne Beatrice. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 text-center">
            Website designed &amp; developed by{' '}
            <a
              href="https://naimabogran-portfolio.us"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors underline underline-offset-2"
              aria-label="Naima Eve Bogran — website designer (opens in new tab)"
            >
              Naima Eve Bogran
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
