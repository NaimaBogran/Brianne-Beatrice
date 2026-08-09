import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { MessageSquare, Users, Lightbulb, Heart, Star, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import speakingImage from '@/assets/brianne-speaking-to-audience.jpg';

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
      "Confidence is built, not born. Brianne shares the tools and techniques she's used with thousands of students to help audiences speak with clarity, presence, and conviction.",
  },
  {
    icon: Heart,
    title: 'Authenticity in Action',
    description:
      'The most powerful communication happens when you show up exactly as you are. Brianne explores what authentic presence looks like in leadership, relationships, and the moments that matter most.',
  },
  {
    icon: Users,
    title: 'Leadership Through Storytelling',
    description:
      "The world's most effective leaders are storytellers. Brianne helps audiences understand how to craft and deliver narratives that move people, build trust, and inspire meaningful action.",
  },
  {
    icon: Star,
    title: 'Performance Beyond the Stage',
    description:
      'Every boardroom is a stage. Every meeting, presentation, and difficult conversation is a performance. Brianne translates the craft of acting into practical skills for leaders and communicators in any field.',
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
      "Every engagement begins with a conversation about your organization's goals, audience, and desired outcomes. Brianne integrates your themes, language, and challenges into the presentation so it feels like it was written specifically for your event — because it was.",
  },
  {
    question: 'Does she offer workshops and trainings in addition to keynotes?',
    answer:
      'Yes. Brianne offers interactive workshops on communication, public speaking, storytelling, and authentic leadership — drawing directly on her 20+ years of teaching experience. These range from 90-minute sessions to full-day intensives.',
  },
  {
    question: 'Does she offer virtual presentations?',
    answer:
      'Yes. Brianne brings the same energy and preparation to virtual presentations as she does to in-person events, with an eye toward dynamic visuals and audience engagement across any format.',
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
            With more than two decades of experience helping people find their voice — in classrooms, rehearsal rooms, and on national stages — Brianne Beatrice brings a rare combination of expertise, warmth, and performance craft to every speaking engagement.
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

      {/* Signature Talk */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Visual — swap this <img> for an <iframe> embed when the talk video is ready */}
            <div className="relative order-2 lg:order-1">
              <div
                className="absolute -top-3 left-0 w-14 h-0.5"
                style={{ backgroundColor: '#C6A15B' }}
              />
              <img
                src={speakingImage}
                alt="Brianne Beatrice speaking on stage"
                className="w-full rounded-sm"
                style={{ aspectRatio: '4/3', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>

            {/* Editorial content */}
            <div className="order-1 lg:order-2">
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-5"
                style={{ color: '#C6A15B' }}
              >
                Signature Talk
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Unshakable: Confidence, Resilience &amp; Integrity
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Unshakable is a signature talk centered on the power of confidence, resilience, and integrity — and what it means to remain grounded in who you are through challenge, change, and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Book Brianne to Speak
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-foreground text-foreground px-8 py-4 rounded-sm font-medium hover:bg-muted/40 transition-colors"
                >
                  Contact Brianne
                </Link>
              </div>
            </div>

          </div>
        </section>
      </FadeInSection>

      {/* Keynote Topics */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold mb-4">Keynote Topics</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each keynote is customized to your audience and goals — rooted in real expertise and shaped by what your organization actually needs.
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
              Ready to Bring Brianne to Your Stage?
            </h2>
            <p className="text-background/80 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're planning a conference, a workshop, a leadership retreat, or a community event — Brianne is ready to bring her expertise and presence to your audience.
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
