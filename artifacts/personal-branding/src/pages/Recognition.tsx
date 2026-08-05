import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Award, Trophy, Star } from 'lucide-react';

const professionalAwards = [
  {
    year: '2026',
    award: 'National Alliance Acting Teacher of Excellence',
    organization: 'National Alliance of Acting Teachers — Region I',
    description: 'One of the most prestigious honors in performance education, recognizing exceptional teaching artistry, student impact, and contribution to the field of acting pedagogy.',
  },
  {
    year: '2026',
    award: 'Influential Women of 2026',
    organization: 'National Recognition',
    description: 'Named among the Influential Women of 2026 for her contributions to education, the arts, and empowering others through performance and communication.',
  },
  {
    year: '2025',
    award: 'Achievement Award — Outstanding Success & Inspiring Vision',
    organization: 'Northern Essex Community College',
    description: 'Institutional recognition for sustained excellence, visionary leadership, and inspiring impact on the NECC community.',
  },
  {
    year: '2022–23',
    award: 'Golden Lamp Award of Teaching Excellence',
    organization: 'Northern Essex Community College',
    description: 'The highest teaching honor awarded by NECC, recognizing transformative classroom leadership and dedication to student success.',
  },
  {
    year: '2017',
    award: 'Stephen Sondheim Teaching Award Nominee',
    organization: 'Kennedy Center — American College Theatre Festival',
    description: 'A national nomination honoring outstanding teaching in collegiate theatre — one of the most competitive and prestigious nominations in the field.',
  },
  {
    year: '2015–17',
    award: 'Distinguished Teaching Award Nominee',
    organization: 'Salem State University',
    description: 'Nominated for the university\'s highest teaching honor, recognizing excellence in instruction, mentorship, and curriculum innovation.',
  },
  {
    year: '2017',
    award: 'Outstanding First Year Advocate Award Nominee',
    organization: 'Salem State University',
    description: 'Recognized for exceptional support and advocacy on behalf of first-year students during a critical transition in their academic lives.',
  },
];

const performanceRecognition = [
  {
    year: '2017',
    award: 'Best Actress in a Play',
    organization: 'Broadway World',
    description: 'Winner of the Broadway World regional award for Best Actress in a Play — recognizing an outstanding professional performance.',
  },
  {
    year: '2017',
    award: 'IRNE Award Nominee — Best Actress in a Play',
    organization: 'Independent Reviewers of New England (Gloucester Stage)',
    description: 'Nominated by the Independent Reviewers of New England for Best Actress in a Play, one of the region\'s most respected theatre honors.',
  },
];

const directingRecognition = [
  {
    title: 'Hurricane Diane',
    subtitle: '13 National Awards',
    year: '2023–2024',
    description: 'One of the most recognized collegiate productions of the season. Received 13 national awards through the Kennedy Center ACTF process, including recognition for Outstanding Achievement in Ensemble. Invited to multiple ACTF festivals across the country.',
  },
  {
    title: 'The Vagina Monologues',
    subtitle: '7 National Awards',
    year: '2025–2026',
    description: 'Eve Ensler\'s landmark work earned 7 national awards under Brianne\'s direction, with productions invited to both NECC and Sierra University for the Kennedy Center American College Theatre Festival.',
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
            Honored for Excellence in Teaching, Directing & Performance
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From national teaching awards to Kennedy Center directing recognition — a career defined by distinction.
          </p>
        </div>
      </section>

      {/* Professional Awards */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold mb-4">Professional Recognition</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Teaching awards, advocacy honors, and institutional recognition spanning more than a decade.
            </p>
          </div>
          <div className="space-y-8">
            {professionalAwards.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-4 gap-0">
                  <div className="bg-gradient-to-br from-muted to-accent p-8 flex items-center justify-center border-r border-border">
                    <div className="text-center">
                      <Trophy className="w-10 h-10 mx-auto mb-3 text-foreground/60" />
                      <p className="text-2xl font-serif font-bold text-foreground">{item.year}</p>
                    </div>
                  </div>
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

      {/* Directing Recognition */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <Star className="w-12 h-12 mx-auto mb-6 text-foreground" />
              <h2 className="font-serif text-4xl font-semibold mb-4">Directing Recognition</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Productions that earned national attention at the Kennedy Center American College Theatre Festival.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {directingRecognition.map((item, index) => (
                <div
                  key={index}
                  className="bg-background border border-border p-10 rounded-sm"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.year}</p>
                    </div>
                    <div className="bg-foreground text-background text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap ml-4">
                      {item.subtitle}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Performance Recognition */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold mb-4">Performance Recognition</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              As a performer, Brianne has earned recognition from the region's most respected theatre organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {performanceRecognition.map((item, index) => (
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
                <h3 className="font-serif text-xl font-semibold mb-2">{item.award}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-4">{item.organization}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Closing CTA */}
      <FadeInSection>
        <section className="bg-foreground text-background py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <p className="font-serif text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
              A career defined by national recognition in teaching, directing, and performance.
            </p>
            <p className="text-background/70 text-xl leading-relaxed max-w-2xl mx-auto">
              From the Kennedy Center to the classroom — every award reflects the students, collaborators, and communities who made it possible.
            </p>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
