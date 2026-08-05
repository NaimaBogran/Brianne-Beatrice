import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { MessageSquare, Users, Lightbulb, Heart, Star, Play, Mail, ArrowRight } from 'lucide-react';
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
    title: 'Finding Your Voice',
    description:
      'Drawing on more than two decades of performance training and teaching, Brianne guides audiences through the process of discovering and owning their authentic voice — the one that leads, connects, and inspires.',
  },
  {
    icon: Lightbulb,
    title: 'Confidence Through Communication',
    description:
      'Confidence isn\'t something you\'re born with — it\'s something you build. Brianne shares the tools and techniques she\'s used with thousands of students to help audiences speak with clarity, presence, and conviction.',
  },
  {
    icon: Heart,
    title: 'Authenticity — The Ultimate Performance',
    description:
      'The greatest performance you will ever give is the one where you show up exactly as you are. Brianne explores what authentic communication looks like in leadership, relationships, and the moments that matter most.',
  },
  {
    icon: Users,
    title: 'Leadership Through Storytelling',
    description:
      'The world\'s most effective leaders are storytellers. Brianne helps audiences understand how to craft and deliver narratives that move people, build trust, and inspire meaningful action.',
  },
  {
    icon: Star,
    title: 'Performance Beyond the Stage',
    description:
      'Every boardroom is a stage. Every meeting, every presentation, every difficult conversation is a performance. Brianne translates the craft of acting into practical skills for leaders and communicators in any field.',
  },
];

const faqs = [
  {
    question: 'What types of events does Brianne speak at?',
    answer:
      'Brianne speaks at corporate conferences, educational summits, leadership retreats, professional development workshops, nonprofit events, and college and university gatherings. Whether your audience is 50 or 5,000, she tailors her message to your specific goals and community.',
  },
  {
    question: 'How does she customize keynotes?',
    answer:
      'Every engagement begins with a conversation about your organization\'s goals, audience, and desired outcomes. Brianne integrates your themes, language, and challenges into the presentation so it feels like it was written specifically for your event — because it was.',
  },
  {
    question: 'Does she offer workshops and trainings in addition to keynotes?',
    answer:
      'Absolutely. Brianne offers interactive workshops on communication, public speaking, storytelling, and authentic leadership — drawing directly on her 20+ years of teaching experience. These range from 90-minute sessions to full-day intensives.',
  },
  {
    question: 'Does she offer virtual presentations?',
    answer:
      'Yes. Brianne brings the same energy, preparation, and engagement to virtual presentations as she does to in-person events. She uses dynamic visuals, interactive elements, and a deep understanding of how to hold an audience\'s attention across any format.',
  },
  {
    question: 'What is her speaking fee?',
    answer:
      'Fees vary based on event type, location, duration, and customization requirements. Contact Brianne directly for a personalized quote. Discounted rates are available for educational institutions and nonprofit organizations.',
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
            With more than two decades of experience helping people discover their voice — in classrooms, rehearsal rooms, and on national stages — Brianne Beatrice brings a rare combination of expertise, warmth, and performance craft to every speaking engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
            data-testid="link-book-engagement"
          >
            Book Brianne to Speak
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
              Each keynote is customized to your audience and goals — rooted in real expertise and delivered with genuine passion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {keynoteTopics.map((topic) => (
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
              <h2 className="font-serif text-4xl font-semibold mb-4">See Brianne Speak</h2>
              <p className="text-muted-foreground text-lg">
                Video coming soon — contact Brianne to request a demo reel.
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-muted via-card to-accent rounded-sm border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play size={32} fill="currentColor" />
                </div>
                <p className="text-muted-foreground">Keynote Demo Reel — Coming Soon</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">What Audiences Say</h2>
              <p className="text-muted-foreground text-lg">
                From students, colleagues, and collaborators who have experienced Brianne's teaching and presence.
              </p>
            </div>
            <TestimonialsCarousel />
          </div>
        </section>
      </FadeInSection>

      {/* FAQ */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
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
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection>
        <section className="bg-foreground text-background py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <Mail className="w-16 h-16 mx-auto mb-8 opacity-80" />
            <h2 className="font-serif text-4xl font-semibold mb-6">
              Let's Inspire Your Audience Together
            </h2>
            <p className="text-background/80 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're planning a conference, a workshop, a leadership retreat, or a community event — Brianne is ready to bring her passion, expertise, and presence to your stage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
              data-testid="link-contact"
            >
              Book a Speaking Engagement
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
