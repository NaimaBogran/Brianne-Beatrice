import { Link } from 'wouter';
import { Mail, Linkedin } from 'lucide-react';

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

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-3">Dr. Sarah Mitchell</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering authentic communication and transformative leadership through education, performance, and speaking.
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
            <div className="flex gap-4">
              <a
                href="mailto:sarah.mitchell@example.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-foreground hover:text-background transition-colors"
                data-testid="link-email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-foreground hover:text-background transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Dr. Sarah Mitchell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
