import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { BookOpen, Users, Star, Award, Download, TrendingUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const courses = [
  { code: 'COMM 101', title: 'Public Speaking', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
  { code: 'COMM 220', title: 'Interpersonal Communication', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
  { code: 'THTR 150', title: 'Introduction to Theatre', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
  { code: 'COMM 310', title: 'Advanced Performance Studies', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
];

const accomplishments = [
  'xx+ years teaching at the community college level',
  'Highest-rated faculty member in Communication Studies department (2019-2023)',
  'x,xxx+ students taught across diverse backgrounds and experiences',
  'Developed innovative curriculum blending communication theory with performance practice',
  'Recipient of Distinguished Faculty Award, State Community College System (2023)',
  'Mentor to xx students who went on to graduate programs and professional careers',
];

const philosophyPrinciples = [
  {
    question: 'What drives my teaching?',
    answer:
      'I believe education is about transformation, not information. My goal is to create a space where students feel safe to take risks, make mistakes, and discover their authentic voice. Many of my students are first-generation college attendees, and I take seriously the responsibility of helping them see themselves as capable, articulate leaders.',
  },
  {
    question: 'How do I approach the classroom?',
    answer:
      "Every class is a performance and a conversation. I blend lecture, discussion, experiential activities, and real-world application. Students learn by doing—whether that's delivering speeches, analyzing performances, or engaging in dialogue about communication ethics. I meet students where they are and challenge them to grow.",
  },
  {
    question: 'What do students gain?',
    answer:
      'Beyond content knowledge, students develop confidence, critical thinking, empathy, and the ability to communicate across difference. They learn to craft and deliver compelling messages, whether in a boardroom, on a stage, or in everyday conversation. They leave with skills that matter in every aspect of life.',
  },
];

export default function Teaching() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-foreground" />
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Teaching</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
            Empowering Students to Find Their Voice
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-serif text-4xl font-semibold mb-12 text-center">Teaching Philosophy</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {philosophyPrinciples.map((principle, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-sm px-6"
              >
                <AccordionTrigger className="text-left font-serif text-xl font-semibold hover:no-underline">
                  {principle.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pt-4">
                  {principle.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </FadeInSection>

      {/* Courses Taught */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">Courses Taught</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course) => (
                <div key={course.code} className="bg-background border border-border p-8 rounded-sm">
                  <p className="text-sm font-mono text-muted-foreground mb-2">{course.code}</p>
                  <h3 className="font-serif text-2xl font-semibold mb-3">{course.title}</h3>
                  <p className="text-muted-foreground">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Student Impact */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Users className="w-12 h-12 mb-6 text-foreground" />
              <h2 className="font-serif text-4xl font-semibold mb-6">Student Impact</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-serif font-semibold flex-shrink-0">
                    xx%
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Student Success Rate</p>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-serif font-semibold flex-shrink-0">
                    x.x
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Average Rating</p>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border p-10 rounded-sm">
              <Star className="w-10 h-10 text-muted-foreground/30 mb-6" />
              <blockquote className="font-serif text-xl text-foreground leading-relaxed mb-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </blockquote>
              <p className="text-sm text-muted-foreground">— Former student, Class of 2022</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Accomplishments */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <Award className="w-12 h-12 mx-auto mb-6 text-foreground" />
              <h2 className="font-serif text-4xl font-semibold mb-4">Teaching Accomplishments</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {accomplishments.map((accomplishment, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-background border border-border p-6 rounded-sm"
                >
                  <TrendingUp className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{accomplishment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CV Download */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-6">Curriculum Vitae</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
            data-testid="button-download-cv"
          >
            <Download size={20} />
            Download CV (PDF)
          </button>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
