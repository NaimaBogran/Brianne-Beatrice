import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Mail, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import heroPortrait from '@/assets/hero-portrait.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 text-foreground" />
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Contact</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Whether you're looking for a keynote speaker, a workshop facilitator, or a collaborator on a creative project, I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Portrait & Info */}
            <div>
              <div className="aspect-[3/4] bg-gradient-to-br from-muted via-card to-accent rounded-sm overflow-hidden border border-border shadow-lg mb-8">
                <img
                  src={heroPortrait}
                  alt="Dr. Sarah Mitchell"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Get in Touch</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I respond to all inquiries within 48 hours. For speaking engagements, please include event details, audience size, and preferred dates.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:sarah.mitchell@example.com"
                    className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                    data-testid="link-email-contact"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">sarah.mitchell@example.com</p>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                    data-testid="link-linkedin-contact"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">Dr. Sarah Mitchell</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-card border border-border p-10 lg:p-12 rounded-sm">
              <h2 className="font-serif text-3xl font-semibold mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="w-full"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    className="w-full"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your event, project, or inquiry..."
                    rows={8}
                    required
                    className="w-full resize-none"
                    data-testid="input-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-foreground text-background hover:opacity-90 transition-opacity py-6 text-base font-medium"
                  data-testid="button-submit"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Collaboration CTA */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-4xl font-semibold mb-6">Let's Collaborate</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              I'm always interested in meaningful partnerships—whether that's co-facilitating workshops, collaborating on research, or creating innovative educational programs. If you have an idea, let's explore it together.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-background border border-border p-8 rounded-sm">
                <h3 className="font-serif text-xl font-semibold mb-3">Speaking Engagements</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Keynotes, workshops, and panels on communication, leadership, and storytelling.
                </p>
              </div>
              <div className="bg-background border border-border p-8 rounded-sm">
                <h3 className="font-serif text-xl font-semibold mb-3">Consulting & Coaching</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Executive communication coaching and organizational culture consulting.
                </p>
              </div>
              <div className="bg-background border border-border p-8 rounded-sm">
                <h3 className="font-serif text-xl font-semibold mb-3">Creative Projects</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Theatre collaborations, curriculum development, and content creation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
