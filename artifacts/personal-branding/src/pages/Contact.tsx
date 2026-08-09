import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import brianneHeadshot from '@/assets/brianne-headshot.jpg';
import { Mail, Send, Mic, BookOpen, Theater, Users, CheckCircle, AlertCircle, Linkedin, Instagram, Facebook } from 'lucide-react';
import { INQUIRY_TYPES } from '@workspace/api-zod';


const opportunities = [
  {
    icon: Mic,
    title: 'Speaking Engagements',
    description: 'Keynotes, workshops, and professional development sessions for conferences, corporate events, educational summits, and leadership retreats.',
  },
  {
    icon: BookOpen,
    title: 'Workshops & Coaching',
    description: 'Interactive sessions on communication, public speaking, storytelling, and authentic leadership — from 90 minutes to full-day intensives.',
  },
  {
    icon: Theater,
    title: 'Directing Opportunities',
    description: 'Interested in working with an award-winning director whose productions have earned national recognition? Brianne welcomes directing inquiries.',
  },
  {
    icon: Users,
    title: 'Educational Collaborations',
    description: 'Curriculum partnerships, guest residencies, and educational events for colleges, universities, and community organizations.',
  },
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    otherDetail: '',
    message: '',
    website: '', // honeypot — hidden from users
  });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json() as { success?: boolean; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }

      setFormState('success');
      setFormData({ name: '', email: '', subject: '', otherDetail: '', message: '', website: '' });
    } catch (err) {
      setFormState('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try emailing directly.'
      );
    }
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
            Let's Inspire Your Audience Together
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Whether you're booking a keynote, planning a workshop, exploring a directing collaboration, or simply want to connect — Brianne would love to hear from you.
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
                  src={brianneHeadshot}
                  alt="Brianne Beatrice"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Get in Touch</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Brianne is available for speaking engagements, workshops, directing projects, and educational collaborations. She looks forward to learning how she can bring her expertise and passion to your event or organization.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:bribeats@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                    data-testid="link-email-contact"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">bribeats@gmail.com</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-border space-y-6">
                  {/* Brianne Beatrice */}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider mb-3">Brianne Beatrice</p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://www.linkedin.com/in/brianne-beatrice-5457a627/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Brianne Beatrice on LinkedIn (opens in new tab)"
                        className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                      >
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <Linkedin size={18} />
                        </div>
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                      <a
                        href="https://www.instagram.com/bribeats79/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Brianne Beatrice on Instagram (opens in new tab)"
                        className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                      >
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <Instagram size={18} />
                        </div>
                        <span className="text-sm font-medium">Instagram · @bribeats79</span>
                      </a>
                      <a
                        href="https://www.facebook.com/bribeats79/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Brianne Beatrice on Facebook (opens in new tab)"
                        className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                      >
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <Facebook size={18} />
                        </div>
                        <span className="text-sm font-medium">Facebook</span>
                      </a>
                    </div>
                  </div>

                  {/* NECC Theater */}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider mb-3">NECC Theater</p>
                    <a
                      href="https://www.instagram.com/necctheater/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="NECC Theater on Instagram (opens in new tab)"
                      className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                    >
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Instagram size={18} />
                      </div>
                      <span className="text-sm font-medium">Instagram · @necctheater</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-card border border-border p-10 lg:p-12 rounded-sm">
              <h2 className="font-serif text-3xl font-semibold mb-8">Send a Message</h2>

              {formState === 'success' ? (
                <div className="flex flex-col items-center text-center py-12 gap-6" data-testid="success-message">
                  <CheckCircle className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Thank you for reaching out. Brianne will be in touch with you soon.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setFormState('idle')}
                    className="mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field — hidden from real users, bots fill it */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

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
                      disabled={formState === 'submitting'}
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
                      disabled={formState === 'submitting'}
                      className="w-full"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Reason for Reaching Out
                    </Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value, otherDetail: value !== 'Other' ? '' : formData.otherDetail })
                      }
                      disabled={formState === 'submitting'}
                    >
                      <SelectTrigger id="subject" className="w-full" data-testid="input-subject">
                        <SelectValue placeholder="Select an inquiry type…" />
                      </SelectTrigger>
                      <SelectContent>
                        {INQUIRY_TYPES.map(({ value, label }) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.subject === 'Other' && (
                    <div>
                      <Label htmlFor="otherDetail" className="text-sm font-medium mb-2 block">
                        Please briefly describe your inquiry
                      </Label>
                      <Input
                        id="otherDetail"
                        name="otherDetail"
                        type="text"
                        value={formData.otherDetail}
                        onChange={handleChange}
                        placeholder="e.g. podcast interview, media inquiry…"
                        disabled={formState === 'submitting'}
                        className="w-full"
                        data-testid="input-other-detail"
                        maxLength={200}
                      />
                    </div>
                  )}
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell Brianne about your event, project, or inquiry — including date, location, audience size, and any other details that would help her respond helpfully."
                      rows={8}
                      required
                      disabled={formState === 'submitting'}
                      className="w-full resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  {formState === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-sm text-sm text-destructive" data-testid="error-message">
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-foreground text-background hover:opacity-90 transition-opacity py-6 text-base font-medium disabled:opacity-60"
                    data-testid="button-submit"
                  >
                    <Send size={18} className="mr-2" />
                    {formState === 'submitting' ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Collaboration Opportunities */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font--semibold mb-6">Ways to Work Together</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Brianne is passionate about collaboration — whether it's helping your audience unlock their potential or bringing a powerful story to the stage.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {opportunities.map((opp) => (
                <div key={opp.title} className="bg-background border border-border p-8 rounded-sm">
                  <opp.icon className="w-10 h-10 text-foreground mb-6" />
                  <h3 className="font-serif text-xl font-semibold mb-3">{opp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {opp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
