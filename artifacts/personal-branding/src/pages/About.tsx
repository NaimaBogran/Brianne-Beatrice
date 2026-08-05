import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Heart, Lightbulb, Target, Mic } from 'lucide-react';
import brianneHeadshot from '@/assets/brianne-headshot.jpg';

const timeline = [
  { year: '2026', event: 'National Alliance Acting Teacher of Excellence Award — National Alliance of Acting Teachers, Region I' },
  { year: '2024', event: 'Hurricane Diane receives 13 national awards; KCACTF Citizens Award for Distinguished Directing' },
  { year: '2022–23', event: 'Golden Lamp Award of Teaching Excellence — Northern Essex Community College' },
  { year: '2017', event: 'Winner, Best Actress in a Play — Broadway World; Stephen Sondheim Teaching Award Nominee — Kennedy Center' },
  { year: '2010', event: 'Joined Northern Essex Community College as Associate Professor and Theater Coordinator' },
  { year: '2008', event: 'Head Meisner Acting for Film Instructor, Actor\'s Workshop Boston' },
  { year: '2007', event: 'Master of Fine Arts in Acting — Pennsylvania State University' },
  { year: '2004', event: 'Bachelor of Fine Arts in Acting — Salem State University' },
];

const values = [
  {
    icon: Heart,
    title: 'Authenticity',
    description: 'Every performance, every lesson, every conversation begins with truth. Brianne believes authentic expression is the foundation of meaningful connection.',
  },
  {
    icon: Lightbulb,
    title: 'Empowerment',
    description: 'Education is transformation, not information. Her goal is to help every student and audience member discover their own capacity for confidence and leadership.',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'From the classroom to the national stage, Brianne measures success by the lasting change she creates in the people she teaches, directs, and inspires.',
  },
  {
    icon: Mic,
    title: 'Voice',
    description: 'Whether speaking, directing, or teaching — helping people find and use their voice is the through-line of everything Brianne does.',
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
                Performer. Director. Professor. Mentor. Brianne Beatrice has spent over two decades helping people step into their power — on stage, in the classroom, and in life.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-accent via-muted to-card rounded-sm overflow-hidden border border-border shadow-lg">
                <img
                  src={brianneHeadshot}
                  alt="Brianne Beatrice"
                  className="w-full h-full object-cover object-top"
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
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Brianne Beatrice is an award-winning theatre director, performing arts educator, and emerging motivational speaker whose career has been defined by one abiding mission: helping people discover confidence through communication, storytelling, and performance. A native of the greater Boston area, she holds a Master of Fine Arts in Acting from Pennsylvania State University and a Bachelor of Fine Arts in Acting from Salem State University.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since 2010, Brianne has served as Associate Professor and Theater Coordinator at Northern Essex Community College, where she teaches acting, directing, improvisation, public speaking, and Shakespeare. She brings more than two decades of classroom experience to her teaching, drawing on her extensive professional background as both a performer and director to create dynamic, transformative learning environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a director, Brianne has built a remarkable body of work recognized at the highest levels of collegiate theatre. Her productions have received invitations to the Kennedy Center American College Theatre Festival multiple times, and her 2023–2024 production of <em>Hurricane Diane</em> received 13 national awards — a testament to the level of artistry and intention she brings to every project. Her 2026 production of <em>Angels in America: Part I</em> and her ACTF-invited staging of <em>The Vagina Monologues</em> continue that tradition of excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In 2026, Brianne received the National Alliance Acting Teacher of Excellence Award from the National Alliance of Acting Teachers — Region I, one of the most prestigious honors in her field. She is also a recipient of the Golden Lamp Award of Teaching Excellence, the Stephen Sondheim Teaching Award nomination, a Broadway World Best Actress award, and the IRNE Award nomination for Best Actress in a Play.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Now, Brianne is channeling her expertise into a growing speaking platform — bringing her unique perspective on performance, authenticity, and human connection to conferences, workshops, and leadership events. She believes that the skills cultivated on stage — presence, listening, vulnerability, and courage — are exactly the skills every leader, communicator, and human being needs.
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
              {values.map((value) => (
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
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center font-serif font-semibold text-xs text-center leading-tight px-1">
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
              <h3 className="font-semibold text-xl mb-2">Master of Fine Arts in Acting</h3>
              <p className="text-muted-foreground mb-1">Pennsylvania State University, State College, PA</p>
              <p className="text-sm text-muted-foreground">2007</p>
            </div>
            <div className="border-l-2 border-muted-foreground pl-6">
              <h3 className="font-semibold text-xl mb-2">Bachelor of Fine Arts in Acting</h3>
              <p className="text-muted-foreground mb-1">Salem State University, Salem, MA</p>
              <p className="text-sm text-muted-foreground">2004</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Philosophy Quote */}
      <FadeInSection>
        <section className="bg-foreground text-background py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <blockquote className="font-serif text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
              "The skills you develop on stage — presence, courage, listening, vulnerability — are exactly the skills every leader needs in real life."
            </blockquote>
            <p className="text-background/70 text-lg">— Brianne Beatrice</p>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
