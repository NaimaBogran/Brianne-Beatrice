import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function TestimonialsCarousel() {
  return (
    <div className="bg-card border border-border rounded-sm p-12 lg:p-16 text-center">
      <Mail className="w-12 h-12 text-muted-foreground/30 mx-auto mb-6" />
      <h3 className="font-serif text-2xl font-semibold mb-4">Testimonials Coming Soon</h3>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-8">
        Student, colleague, and audience testimonials will be featured here. Interested in working with Brianne or sharing a recommendation?
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-sm font-medium hover:bg-accent transition-colors"
      >
        Get in Touch
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
