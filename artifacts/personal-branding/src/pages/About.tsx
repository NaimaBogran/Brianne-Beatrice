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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: Lightbulb,
    title: 'Empowerment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: GraduationCap,
    title: 'Lifelong Learning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent via-muted to-card rounded-sm overflow-hidden border border-border shadow-lg">
                <img
                  src={aboutPortrait}
                  alt="Brianne Beatrice portrait"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </blockquote>
            <p className="text-background/70 text-lg">— Brianne Beatrice</p>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
