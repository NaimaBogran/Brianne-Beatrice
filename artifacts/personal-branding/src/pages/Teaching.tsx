import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { BookOpen, Users, Award, Download, TrendingUp, Quote } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import brianneGroup from '@/assets/brianne-large-group.jpg';

const courseCategories = [
  {
    category: 'Performance',
    courses: [
      { title: 'Acting Theory and Practice', description: 'A performance-based exploration of vocal, physical, and psychological technique through exercises, scenes, and monologues. Students develop the tools to take creative risks and work truthfully with scene partners.' },
      { title: 'Acting Scene Study', description: 'In-depth scene and monologue work emphasizing character development and script analysis. Students overcome fears, build confidence in public, and develop the ability to make bold creative choices.' },
      { title: 'Improvisation, Voice & Movement', description: 'The actor\'s instruments are the voice and the body. This course isolates these areas through mime, rudimentary improvisation, and physical awareness — culminating in performed improvised scenes.' },
      { title: 'Audition Preparation', description: 'Contemporary, classical, and on-camera audition techniques including Meisner and Rotenberg approaches. Covers the business of acting: headshots, resumes, casting, and interview skills.' },
    ],
  },
  {
    category: 'Communication',
    courses: [
      { title: 'Public Speaking', description: 'Practical training in the craft of confident, persuasive public communication. Students learn to research, organize, and deliver compelling messages in a variety of professional contexts.' },
      { title: 'Interpersonal Communication', description: 'The science and art of communicating across difference — developing empathy, active listening, and the ability to connect meaningfully with others in personal and professional life.' },
      { title: 'Leadership Through Communication', description: 'Explores how language, presence, and storytelling drive effective leadership. Students examine the communication habits of transformative leaders and develop their own authentic leadership voice.' },
    ],
  },
  {
    category: 'Theatre',
    courses: [
      { title: 'Introduction to Theatre', description: 'A broad introduction to the theatrical world — playwright, producer, director, actor, designer, and technician — through reading, discussing, and attending performances.' },
      { title: 'Shakespeare Literature', description: 'Close reading and analysis of selected Shakespeare plays, with attention to language, performance, and cultural context. Students learn to read plays comfortably and write about them with insight.' },
      { title: 'Script Analysis', description: 'A methodology for breaking down a dramatic text: identifying action, objectives, obstacles, and relationships. An essential foundation for both actors and directors.' },
      { title: 'Directing', description: 'Students direct a one-act play performed before a live audience. Each student selects a script, conducts research and analysis, blocks the production, casts actors, and completes a full director\'s book.' },
    ],
  },
];

const accomplishments = [
  'Associate Professor and Theatre Coordinator, Northern Essex Community College (2010–Present)',
  'More than 20 years teaching across undergraduate universities, film studios, and community colleges',
  'National Alliance Acting Teacher of Excellence Award — National Alliance of Acting Teachers, Region I (2026)',
  'Golden Lamp Award — Northern Essex Community College (2023)',
  'Stephen Sondheim Teaching Award Nominee — Kennedy Center (2017)',
  'Distinguished Teaching Award — Salem State University (2019)',
];

const philosophyPrinciples = [
  {
    question: 'What drives my teaching?',
    answer:
      'I believe education is about transformation, not information. My goal is to create a space where students feel safe to take risks, make mistakes, and discover their authentic voice. Many of my students are first-generation college attendees, and I take seriously the responsibility of helping them see themselves as capable, articulate, confident people — both on stage and in life.',
  },
  {
    question: 'How do I approach the classroom?',
    answer:
      'Every class is a performance and a conversation. I blend technique, discussion, experiential activities, and real-world application. Students learn by doing — whether that\'s delivering speeches, analyzing performances, directing scenes, or improvising together. I meet students where they are and challenge them to go further than they thought possible.',
  },
  {
    question: 'What do students gain?',
    answer:
      'Beyond content knowledge, students develop confidence, critical thinking, empathy, and the ability to communicate across difference. They leave with skills that matter in every aspect of life — in the boardroom, on a stage, in a job interview, or in an everyday conversation. The skills of the stage are the skills of a full life.',
  },
];

// Verified testimonials only
const studentTestimonials = [
  {
    quote: 'These courses had helped me feel young again with self-confidence and pride for working through difficulties of forgetfulness, fear of public speaking or belonging.',
    attribution: 'NECC Student',
  },
  {
    quote: "It's such a privilege to have award winning [NECC Theater] be so accessible… Not only do we get to learn from the best, but I've also met an amazing community who inspires me to do what I love!",
    attribution: 'NECC Student',
  },
  {
    quote: "I can't even begin to explain how much my confidence in myself has grown since taking [her] classes [and] joining the NECC theater family. I've personally met some of the greatest people through [her] courses.",
    attribution: 'NECC Student',
  },
  {
    quote: "It's my honor to say that I was able to be part of NECC theater. The classes are so much more than I could've ever imagined!",
    attribution: 'NECC Student',
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
            For more than twenty years, Brianne has taught acting, communication, and theatre across universities and community colleges — transforming classrooms into laboratories of confidence and creativity.
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

      {/* Courses by Category */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">Courses Taught</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Taught across Northern Essex Community College, Salem State University, UMass Boston, Merrimack College, Actor's Workshop Boston, and Penn State — spanning more than two decades.
              </p>
            </div>
            <div className="space-y-16">
              {courseCategories.map((cat) => (
                <div key={cat.category}>
                  <h3 className="font-serif text-2xl font-semibold mb-8 pb-4 border-b border-border">{cat.category}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {cat.courses.map((course) => (
                      <div key={course.title} className="bg-background border border-border p-8 rounded-sm">
                        <h4 className="font-serif text-xl font-semibold mb-3">{course.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Meisner Workshop Legacy */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-lg">
              <img
                src={brianneGroup}
                alt="Brianne Beatrice leading an acting workshop at Region 1 American College Theater Festival"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Workshop Legacy</p>
              <h2 className="font-serif text-4xl font-semibold mb-6">
                Region 1 ACTF Meisner Acting Workshop
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                From 2010 through 2023, Brianne led an ongoing acting workshop focused on craft, confidence, collaboration, and artistic growth — as part of Region 1 of the American College Theater Festival.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Each year, students and theatre educators from across the region gathered to develop their Meisner technique alongside one of New England's most respected acting educators.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Student Impact */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Users className="w-12 h-12 mb-6 text-foreground" />
                <h2 className="font-serif text-4xl font-semibold mb-6">The Impact of the Classroom</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Teaching isn't just Brianne's profession — it's her calling. For more than two decades, she has helped students across New England develop the confidence to speak up, take risks, and show up authentically in their lives. Her students have gone on to careers in performance, business, education, and beyond.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  She believes that every student who walks into a performance classroom is capable of transformation — and her teaching is built to prove it.
                </p>
              </div>
              <div className="bg-card border border-border p-10 rounded-sm space-y-6">
                <div className="border-l-4 border-foreground pl-6">
                  <p className="font-semibold text-lg mb-1">20+ Years Teaching</p>
                  <p className="text-muted-foreground text-sm">Across Northern Essex Community College, Salem State University, UMass Boston, Merrimack College, Actor's Workshop Boston, and Penn State</p>
                </div>
                <div className="border-l-4 border-foreground pl-6">
                  <p className="font-semibold text-lg mb-1">National Alliance Acting Teacher of Excellence</p>
                  <p className="text-muted-foreground text-sm">Awarded 2026 — National Alliance of Acting Teachers, Region I</p>
                </div>
                <div className="border-l-4 border-foreground pl-6">
                  <p className="font-semibold text-lg mb-1">Golden Lamp Award</p>
                  <p className="text-muted-foreground text-sm">Northern Essex Community College, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* What Colleagues & NECC President Say */}
      <FadeInSection>
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">What Students & Colleagues Say</h2>
            </div>

            {/* Lane Glenn — NECC President */}
            <div className="bg-foreground text-background rounded-sm p-12 mb-10">
              <Quote className="w-10 h-10 text-background/30 mb-6" />
              <p className="font-serif text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                "Theater at Northern Essex isn't simply a creative outlet. It serves as a catalyst for so many strengths and attributes that allow our students to thrive in any field they pursue."
              </p>
              <p className="text-background/70 text-sm font-medium uppercase tracking-wider">
                Lane Glenn, President — Northern Essex Community College
                <span className="ml-2 normal-case font-normal">· Merrimack Valley Life</span>
              </p>
            </div>

            {/* Student testimonials grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {studentTestimonials.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border p-8 rounded-sm"
                >
                  <Quote className="w-6 h-6 text-foreground/20 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">"{item.quote}"</p>
                  <p className="text-sm text-muted-foreground font-medium">— {item.attribution}</p>
                </div>
              ))}
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
            For a complete record of Brianne's teaching experience, training, and professional history, download her full CV.
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
