import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Award, Trophy, Star } from 'lucide-react';
import brianneTeachingAward from '@/assets/brianne-teaching-award.jpg';
import brianneCareerRecognition from '@/assets/brianne-career-recognition.jpg';

const professionalAwards = [
  {
    year: '2026',
    award: 'National Alliance Acting Teacher of Excellence',
    organization: 'National Alliance of Acting Teachers',
  },
  {
    year: '2026',
    award: 'Influential Women of 2026',
    organization: 'Influential Women',
  },
  {
    year: '2023',
    award: 'Golden Lamp Award',
    organization: 'Northern Essex Community College',
  },
  {
    year: '2019',
    award: 'Distinguished Teaching Award',
    organization: 'Salem State University',
  },
  {
    year: '2018',
    award: 'National Society of Leadership and Success Award',
    organization: 'Salem State University',
  },
  {
    year: '2017',
    award: 'Winner — Best Actress in a Play',
    organization: 'Broadway World',
  },
  {
    year: '2017',
    award: 'Stephen Sondheim Teaching Award',
    organization: 'Kennedy Center',
  },
  {
    year: '2017',
    award: 'Outstanding First Year Advocate Award',
    organization: 'Salem State University',
  },
  {
    year: '2017',
    award: 'IRNE Award Nominee — Best Actress in a Play',
    organization: 'Independent Reviewers of New England',
  },
];

const directingAwards = [
  {
    year: '2025',
    production: 'The Vagina Monologues',
    venue: 'NECC',
    honor: '7 National Awards from ACTF',
  },
  {
    year: '2023',
    production: 'Hurricane Diane',
    venue: 'NECC',
    honor: '13 National Awards from KCACTF',
  },
  {
    year: '2022',
    production: 'Lighten Up',
    venue: 'NECC',
    honor: 'Outstanding Achievement in Ensemble',
  },
  {
    year: '2021',
    production: 'Tiny Beautiful Things',
    venue: 'NECC',
    honor: 'Outstanding Achievement in Ensemble',
  },
  {
    year: '2019',
    production: 'Five Women Wearing the Same Dress',
    venue: 'NECC',
    honor: 'Outstanding Achievement in Ensemble',
  },
  {
    year: '2019',
    production: 'Good People',
    venue: 'NECC',
    honor: 'Outstanding Achievement in Ensemble',
  },
  {
    year: '2019',
    production: 'Uncommon Women and Others',
    venue: 'SSU',
    honor: 'Outstanding Achievement in Ensemble',
  },
  {
    year: '2018',
    production: 'Stupid Fucking Bird',
    venue: 'NECC',
    honor: 'Nationally Recognized — Outstanding Achievement in Ensemble',
  },
  {
    year: '2017',
    production: 'Clybourne Park',
    venue: 'SSU',
    honor: 'Outstanding Achievement in Ensemble',
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

      {/* Teaching Award Photo Feature */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] max-h-[500px] rounded-sm overflow-hidden border border-border shadow-lg">
              <img
                src={brianneTeachingAward}
                alt="Brianne Beatrice holding her Excellence in Teaching Award from the National Society of Leadership and Success"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Excellence in Teaching</p>
              <h2 className="font-serif text-4xl font-semibold mb-6">
                A Career Built on Recognition
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                From national teaching societies to the Kennedy Center, Brianne's commitment to excellence has been recognized across every dimension of her career — in the classroom, on stage as a director, and as a performer.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Each award reflects not just individual achievement, but the students, collaborators, and communities who made it meaningful.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Professional Awards */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold mb-4">Professional Recognition</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Teaching awards, performing arts honors, and advocacy recognition spanning more than a decade.
            </p>
          </div>
          <div className="space-y-5">
            {professionalAwards.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-4 gap-0">
                  <div className="bg-gradient-to-br from-muted to-accent p-6 flex items-center justify-center border-r border-border">
                    <div className="text-center">
                      <Trophy className="w-8 h-8 mx-auto mb-2 text-foreground/60" />
                      <p className="text-xl font-serif font-bold text-foreground">{item.year}</p>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-6">
                    <h3 className="font-serif text-xl font-semibold mb-1">{item.award}</h3>
                    <p className="text-muted-foreground font-medium">{item.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Career Recognition Photo */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">15 Years of Impact</p>
                <h2 className="font-serif text-4xl font-semibold mb-6">
                  Recognized for Leading with Purpose
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Brianne's 15-year recognition at Northern Essex Community College, colleagues acknowledged not only her national awards and accolades, but her mission to connect students with what is human in themselves and each other — and her dedication to free expression through the medium of the stage.
                </p>
              </div>
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-lg">
                <img
                  src={brianneCareerRecognition}
                  alt="Slide from Brianne Beatrice's 15-year recognition ceremony at Northern Essex Community College"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Directing Recognition */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <Star className="w-12 h-12 mx-auto mb-6 text-foreground" />
            <h2 className="font-serif text-4xl font-semibold mb-4">Directing Recognition</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Productions recognized by the Kennedy Center American College Theatre Festival and regional adjudicators.
            </p>
          </div>

          {/* Top 2 flagship honors */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {directingAwards.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="bg-foreground text-background p-10 rounded-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-background/60 text-sm mb-1">{item.year} · {item.venue}</p>
                    <h3 className="font-serif text-2xl font-semibold">{item.production}</h3>
                  </div>
                </div>
                <p className="text-background/80 font-medium text-lg">{item.honor}</p>
              </div>
            ))}
          </div>

          {/* Remaining ensemble awards */}
          <div className="space-y-4">
            {directingAwards.slice(2).map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-sm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.year} · {item.venue}</p>
                  <h3 className="font-serif text-lg font-semibold">{item.production}</h3>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block border border-border text-sm font-medium px-4 py-1.5 rounded-full text-foreground/80">
                    {item.honor}
                  </span>
                </div>
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
