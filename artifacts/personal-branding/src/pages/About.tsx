import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { GraduationCap, Heart, Lightbulb, Target } from 'lucide-react';
import aboutPortrait from '@/assets/about-portrait.png';

const timeline = [
  { year: '2023', event: 'Distinguished Faculty Award, State Community College System' },
  { year: '2022', event: 'Named to Influential Women in Education by Regional Leadership Council' },
  { year: '2020', event: 'Launched "The Inspired Voice" podcast' },
  { year: '2018', event: 'Directed award-winning production of "A Raisin in the Sun"' },
  { year: '2015', event: 'Earned Ph.D. in Communication Studies, University of California' },
  { year: '2012', event: 'Began teaching at Bay Area Community College' },
  { year: '2008', event: 'Master of Fine Arts in Theatre Directing, Northwestern University' },
];

const values = [
  {
    icon: Heart,
    title: 'Authenticity',
    description: 'True leadership begins when we show up as our whole selves, vulnerabilities included.',
  },
  {
    icon: Lightbulb,
    title: 'Empowerment',
    description: 'Everyone has a story worth telling and a voice that deserves to be heard.',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Meaningful change happens through connection, not perfection.',
  },
  {
    icon: GraduationCap,
    title: 'Lifelong Learning',
    description: 'The best teachers remain students, constantly curious and evolving.',
  },
];

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">About</p>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
                A Life Dedicated to Voice and Vision
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Educator, director, speaker—each role is a different stage for the same mission: helping people communicate with courage and clarity.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent via-muted to-card rounded-sm overflow-hidden border border-border shadow-lg">
                <img
                  src={aboutPortrait}
                  alt="Dr. Sarah Mitchell portrait"
                  className="w-full h-full object-cover mix-blend-multiply opacity-85"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-serif text-3xl font-semibold mb-8">Professional Biography</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dr. Sarah Mitchell is a community college professor, theatre director, and sought-after public speaker who has spent over 15 years empowering individuals to communicate authentically and lead with confidence. Her unique approach combines academic rigor, artistic sensitivity, and real-world applicability.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a professor of Communication Studies at Bay Area Community College, Dr. Mitchell has transformed the lives of thousands of students, many of whom are first-generation college attendees finding their voice for the first time. Her courses on public speaking, interpersonal communication, and performance studies consistently earn the highest student evaluations in the department.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In the theatre, Sarah has directed over 30 productions, including critically acclaimed interpretations of classics and bold new works. Her direction is known for its emotional depth, cultural relevance, and ability to draw out transformative performances from actors at all levels.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a keynote speaker and workshop facilitator, she works with corporations, nonprofits, and educational institutions to develop leaders who communicate with authenticity and impact. Her keynotes blend storytelling, research-backed insights, and actionable strategies that audiences can implement immediately.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Mission & Values */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">Mission & Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide every lesson, every production, and every keynote.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-background border border-border p-8 rounded-sm text-center"
                >
                  <value.icon className="w-12 h-12 mx-auto mb-6 text-foreground" />
                  <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Career Timeline */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-serif text-4xl font-semibold mb-16 text-center">Career Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20">
                  {/* Year marker */}
                  <div className="absolute left-0 top-0 w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center font-serif font-semibold text-sm">
                    {item.year}
                  </div>
                  <div className="bg-card border border-border p-6 rounded-sm">
                    <p className="text-foreground leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Education */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-serif text-3xl font-semibold mb-8">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="font-semibold text-xl mb-2">Ph.D. in Communication Studies</h3>
              <p className="text-muted-foreground mb-1">University of California, Berkeley</p>
              <p className="text-sm text-muted-foreground">
                Dissertation: "Embodied Rhetoric: How Performance Shapes Public Discourse"
              </p>
            </div>
            <div className="border-l-2 border-muted-foreground pl-6">
              <h3 className="font-semibold text-xl mb-2">M.F.A. in Theatre Directing</h3>
              <p className="text-muted-foreground">Northwestern University</p>
            </div>
            <div className="border-l-2 border-muted-foreground pl-6">
              <h3 className="font-semibold text-xl mb-2">B.A. in Theatre Arts & Communication</h3>
              <p className="text-muted-foreground">University of Michigan</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Philosophy Quote */}
      <FadeInSection>
        <section className="bg-foreground text-background py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <blockquote className="font-serif text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
              "The most powerful thing we can do is help someone discover they have something worth saying—and then give them the tools to say it with conviction."
            </blockquote>
            <p className="text-background/70 text-lg">— Dr. Sarah Mitchell</p>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
