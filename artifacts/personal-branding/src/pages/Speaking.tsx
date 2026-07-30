import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { MessageSquare, Users, Lightbulb, Heart, Play, Podcast, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const keynoteTopics = [
  {
    icon: MessageSquare,
    title: 'The Power of Authentic Communication',
    description:
      'Learn how to communicate with clarity and confidence by embracing vulnerability and showing up as your whole self. This keynote transforms how teams and leaders connect.',
  },
  {
    icon: Users,
    title: 'Leadership Through Storytelling',
    description:
      'Great leaders are great storytellers. Discover how to craft narratives that inspire action, build trust, and create lasting organizational change.',
  },
  {
    icon: Lightbulb,
    title: 'Confidence in the Spotlight',
    description:
      'Overcome public speaking anxiety and performance pressure. Practical techniques drawn from theatre and communication science to help you shine when it matters most.',
  },
  {
    icon: Heart,
    title: 'The Art of Meaningful Connection',
    description:
      'In a digital age, human connection is more important than ever. Explore strategies for building genuine relationships in professional and personal contexts.',
  },
];

const faqs = [
  {
    question: 'What types of events do you speak at?',
    answer:
      'I speak at corporate conferences, educational summits, nonprofit galas, leadership retreats, and professional development workshops. Whether your audience is 50 or 5,000, I tailor my message to your specific needs.',
  },
  {
    question: 'How do you customize keynotes?',
    answer:
      "Every keynote begins with a conversation about your organization's goals, audience demographics, and desired outcomes. I integrate your themes, challenges, and language to ensure the message resonates and drives action.",
  },
  {
    question: 'Do you offer virtual presentations?',
    answer:
      "Absolutely. I've delivered dozens of virtual keynotes and workshops with the same energy and engagement as in-person events. I use interactive elements, breakout discussions, and dynamic visuals to keep virtual audiences engaged.",
  },
  {
    question: 'What is your speaking fee?',
    answer:
      'Fees vary based on event type, location, and customization requirements. Contact me directly for a personalized quote. I also offer discounted rates for educational institutions and nonprofit organizations.',
  },
];

export default function Speaking() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Speaking</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
            Inspiring Audiences to Lead with Authenticity
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Keynotes and workshops that blend research, storytelling, and actionable insights to transform how people communicate and lead.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
            data-testid="link-book-engagement"
          >
            Book a Speaking Engagement
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Keynote Topics */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold mb-4">Keynote Topics</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Signature presentations tailored to your organization's unique needs and goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {keynoteTopics.map((topic, index) => (
              <div
                key={topic.title}
                className="bg-card border border-border p-10 rounded-sm hover:shadow-lg transition-shadow"
              >
                <topic.icon className="w-12 h-12 text-foreground mb-6" />
                <h3 className="font-serif text-2xl font-semibold mb-4">{topic.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Video Embed Placeholder */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-semibold mb-4">See Sarah Speak</h2>
              <p className="text-muted-foreground text-lg">
                Watch a recent keynote on authentic leadership and communication.
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-muted via-card to-accent rounded-sm border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play size={32} fill="currentColor" />
                </div>
                <p className="text-muted-foreground">Keynote Video Placeholder</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Podcast Feature */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card border border-border p-12 rounded-sm">
              <div className="aspect-square bg-gradient-to-br from-accent to-muted rounded-sm flex items-center justify-center">
                <Podcast className="w-24 h-24 text-muted-foreground/30" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Podcast size={16} />
                The Inspired Voice
              </div>
              <h2 className="font-serif text-4xl font-semibold mb-4">
                Weekly Conversations on Communication & Leadership
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Join thousands of listeners exploring authentic communication, storytelling, and leadership development through in-depth interviews and solo episodes.
              </p>
              <Link
                href="/media"
                className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
                data-testid="link-podcast"
              >
                Listen to Episodes
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">What Audiences Say</h2>
              <p className="text-muted-foreground text-lg">
                From corporate leaders to nonprofit teams to educational institutions.
              </p>
            </div>
            <TestimonialsCarousel />
          </div>
        </section>
      </FadeInSection>

      {/* FAQ */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-serif text-4xl font-semibold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-sm px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection>
        <section className="bg-foreground text-background py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <Mail className="w-16 h-16 mx-auto mb-8 opacity-80" />
            <h2 className="font-serif text-4xl font-semibold mb-6">
              Let's Create Something Meaningful Together
            </h2>
            <p className="text-background/80 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're planning a conference keynote, leadership retreat, or professional development workshop, I'd love to hear about your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
              data-testid="link-contact"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
