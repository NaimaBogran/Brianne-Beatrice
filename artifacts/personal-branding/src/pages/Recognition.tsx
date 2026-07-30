import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Award, Trophy, Star } from 'lucide-react';

const awards = [
  {
    year: '2023',
    award: 'Distinguished Faculty Award',
    organization: 'State Community College System',
    description: 'Recognizing excellence in teaching, student impact, and contribution to the academic community.',
  },
  {
    year: '2022',
    award: 'Influential Women in Education',
    organization: 'Regional Leadership Council',
    description: 'Honored for transformative leadership in higher education and commitment to student success.',
  },
  {
    year: '2021',
    award: 'Excellence in Teaching Award',
    organization: 'National Communication Association',
    description: 'National recognition for innovative pedagogy and outstanding student outcomes.',
  },
  {
    year: '2020',
    award: 'Community Impact Award',
    organization: 'Bay Area Arts & Culture Foundation',
    description: 'For contributions to the performing arts and community education through theatre.',
  },
  {
    year: '2019',
    award: 'Best Director',
    organization: 'Regional Theatre Festival',
    description: "For direction of August Wilson's \"Fences\" at Bay Area Community College Theatre.",
  },
  {
    year: '2018',
    award: 'Faculty Leadership Award',
    organization: 'Bay Area Community College',
    description: 'Recognizing exceptional leadership in curriculum development and student advocacy.',
  },
];

const honors = [
  'Featured Speaker, National Communication Association Annual Conference (2023)',
  'Keynote Speaker, State Community College Leadership Summit (2022)',
  'Guest Lecturer, UC Berkeley Graduate School of Education (2021-2023)',
  'Advisory Board Member, Regional Arts & Theatre Alliance (2020-Present)',
  'Consultant, National Endowment for the Arts Education Initiative (2019)',
  'Mentor, Faculty Development Program for New Educators (2018-Present)',
];

const communityRecognition = [
  {
    title: 'Local Hero Award',
    org: 'Bay Area Community Foundation',
    year: '2022',
    description: 'For dedication to community education and empowering underserved populations.',
  },
  {
    title: 'Woman of the Year',
    org: "Regional Business & Professional Women's Network",
    year: '2021',
    description: 'Celebrating achievements in education, leadership, and community service.',
  },
  {
    title: 'Arts Educator of the Year',
    org: 'Bay Area Arts Council',
    year: '2019',
    description: 'Honoring excellence in integrating performing arts with education.',
  },
];

export default function Recognition() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-foreground" />
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Recognition</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
            Honored for Impact and Excellence
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Recognition for contributions to education, the performing arts, and community leadership.
          </p>
        </div>
      </section>

      {/* Awards Timeline */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold mb-4">Awards & Honors</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Celebrating milestones in teaching, directing, and public speaking.
            </p>
          </div>
          <div className="space-y-8">
            {awards.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-4 gap-0">
                  {/* Year Badge */}
                  <div className="bg-gradient-to-br from-muted to-accent p-8 flex items-center justify-center border-r border-border">
                    <div className="text-center">
                      <Trophy className="w-10 h-10 mx-auto mb-3 text-foreground/60" />
                      <p className="text-3xl font-serif font-bold text-foreground">{item.year}</p>
                    </div>
                  </div>
                  {/* Award Details */}
                  <div className="md:col-span-3 p-8">
                    <h3 className="font-serif text-2xl font-semibold mb-2">{item.award}</h3>
                    <p className="text-muted-foreground font-medium mb-4">{item.organization}</p>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Professional Honors */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <Star className="w-12 h-12 mx-auto mb-6 text-foreground" />
              <h2 className="font-serif text-4xl font-semibold mb-4">Professional Honors</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Leadership roles, speaking engagements, and professional contributions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {honors.map((honor, index) => (
                <div
                  key={index}
                  className="bg-background border border-border p-6 rounded-sm flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-foreground rounded-full flex-shrink-0 mt-2" />
                  <p className="text-foreground leading-relaxed">{honor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Community Recognition */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold mb-4">Community Recognition</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Celebrating service, impact, and leadership beyond the classroom and stage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {communityRecognition.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border p-10 rounded-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={28} />
                </div>
                <p className="text-2xl font-serif font-semibold text-muted-foreground/50 mb-4">
                  {item.year}
                </p>
                <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-4">{item.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Quote Section */}
      <FadeInSection>
        <section className="bg-foreground text-background py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <blockquote className="font-serif text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
              "Recognition is meaningful not for what it says about me, but for what it represents: the power of education, the importance of storytelling, and the potential in every student I've had the privilege to teach."
            </blockquote>
            <p className="text-background/70 text-lg">— Dr. Sarah Mitchell</p>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
