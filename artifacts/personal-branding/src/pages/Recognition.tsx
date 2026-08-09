import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Award, Trophy, Star, Quote, ExternalLink } from 'lucide-react';
import brianneTeachingAward from '@/assets/brianne-teaching-award.jpg';

const professionalAwards = [
  { year: '2026', award: 'National Alliance Acting Teacher of Excellence', organization: 'National Alliance of Acting Teachers' },
  { year: '2026', award: 'Influential Women of 2026', organization: 'Influential Women' },
  { year: '2023', award: 'Golden Lamp Award', organization: 'Northern Essex Community College' },
  { year: '2019', award: 'Distinguished Teaching Award', organization: 'Salem State University' },
  { year: '2018', award: 'National Society of Leadership and Success Award', organization: 'Salem State University' },
  { year: '2017', award: 'Winner — Best Actress in a Play', organization: 'Broadway World' },
  { year: '2017', award: 'Stephen Sondheim Teaching Award', organization: 'Kennedy Center', isNominee: true },
  { year: '2017', award: 'Outstanding First Year Advocate Award', organization: 'Salem State University' },
  { year: '2017', award: 'IRNE Award Nominee — Best Actress in a Play', organization: 'Independent Reviewers of New England' },
];

const directingAwards = [
  { year: '2025', production: 'The Vagina Monologues', venue: 'NECC', honor: '7 National Awards from ACTF' },
  { year: '2023', production: 'Hurricane Diane', venue: 'NECC', honor: '13 National Awards from KCACTF' },
  { year: '2022', production: 'Lighten Up', venue: 'NECC', honor: 'Outstanding Achievement in Ensemble' },
  { year: '2021', production: 'Tiny Beautiful Things', venue: 'NECC', honor: 'Outstanding Achievement in Ensemble' },
  { year: '2019', production: 'Five Women Wearing the Same Dress', venue: 'NECC', honor: 'Outstanding Achievement in Ensemble' },
  { year: '2019', production: 'Good People', venue: 'NECC', honor: 'Outstanding Achievement in Ensemble' },
  { year: '2019', production: 'Uncommon Women and Others', venue: 'SSU', honor: 'Outstanding Achievement in Ensemble' },
  { year: '2018', production: 'Stupid Fucking Bird', venue: 'NECC', honor: 'Nationally Recognized — Outstanding Achievement in Ensemble' },
  { year: '2017', production: 'Clybourne Park', venue: 'SSU', honor: 'Outstanding Achievement in Ensemble' },
];

const neccTestimonials = [
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

const rmpReviews = [
  { quote: "Bri is the best professor I've had.", category: 'Communication', course: 'COM111', school: 'Northern Essex Community College' },
  { quote: 'She gave great feedback for speeches.', category: 'Communication', course: 'Communication', school: 'Northern Essex Community College' },
  { quote: 'Bri is awesome, one of my favorite professors at NECC!', category: 'Communication', course: null, school: 'Northern Essex Community College' },
  { quote: 'She is inspiring in the way she handles herself with such confidence.', category: 'Public Speaking', course: 'SPC101A', school: 'Salem State University' },
  { quote: 'She builds confidence, supports every student.', category: 'Public Speaking', course: null, school: 'Salem State University' },
  { quote: 'She truly cares about her students.', category: 'Public Speaking', course: null, school: 'Salem State University' },
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
            From national teaching awards to ACTF directing recognition — a career defined by distinction.
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
                From national teaching societies to the American College Theatre Festival, Brianne's commitment to excellence has been recognized across every dimension of her career — in the classroom, on stage as a director, and as a performer.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Each award reflects not just individual achievement, but the students, collaborators, and communities who made it meaningful.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Professional Recognition */}
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
                style={{ borderTop: '3px solid #C6A15B' }}
              >
                <div className="grid md:grid-cols-4 gap-0">
                  {/* Year column */}
                  <div
                    className="p-6 flex items-center justify-center border-r border-border"
                    style={{ background: 'linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--accent)) 100%)' }}
                  >
                    <div className="text-center">
                      <Trophy className="w-8 h-8 mx-auto mb-2" style={{ color: '#C6A15B' }} />
                      <p className="text-xl font-serif font-bold text-foreground">{item.year}</p>
                    </div>
                  </div>
                  {/* Award details */}
                  <div className="md:col-span-3 p-6 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-1">{item.award}</h3>
                      <p className="text-muted-foreground font-medium">{item.organization}</p>
                    </div>
                    {item.isNominee && (
                      <span
                        className="flex-shrink-0 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border"
                        style={{ color: '#C6A15B', borderColor: '#C6A15B' }}
                      >
                        Nominee
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Directing Recognition */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24 border-t border-border">
          <div className="text-center mb-16">
            <Star className="w-12 h-12 mx-auto mb-6 text-foreground" />
            <h2 className="font-serif text-4xl font-semibold mb-4">Directing Recognition</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Productions recognized by the American College Theatre Festival and regional adjudicators.
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

      {/* TED-Ed Educator Talks */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Professional Development</p>
              <h2 className="font-serif text-4xl font-semibold mb-4">TED-Ed Educator Talks</h2>
            </div>
            <div
              className="max-w-2xl mx-auto bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
              style={{ borderTop: '3px solid #C6A15B' }}
            >
              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(198,161,91,0.12)' }}
                  >
                    <Trophy className="w-6 h-6" style={{ color: '#C6A15B' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg font-serif">Idea Workshop Completion</p>
                    <p className="text-muted-foreground text-sm">TED-Ed Educator Talks</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Completed the TED-Ed Educator Talks Idea Workshop, a professional learning experience focused on developing ideas, storytelling, communication, and public speaking.
                </p>
                <a
                  href="/ted-ed-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium border border-border px-5 py-2.5 rounded-sm hover:bg-accent transition-colors"
                  aria-label="View TED-Ed Educator Talks certificate (opens in new tab)"
                >
                  <ExternalLink size={15} />
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* 15 Years of Impact — Amy Callahan Quote */}
      <FadeInSection>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-16 text-center">15 Years of Impact</p>
            <div className="relative">
              {/* Decorative oversized quote mark */}
              <span
                className="absolute -top-10 -left-4 font-serif text-9xl leading-none select-none pointer-events-none"
                style={{ color: '#C6A15B', opacity: 0.18 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="relative">
                <p className="font-serif text-2xl lg:text-3xl font-medium leading-relaxed text-foreground mb-10">
                  Brianne, your numerous national awards and accolades tell just one part of your success in leading the college's theater program. You teach your students to connect with what is human in themselves and each other. Especially in the context of our current political environment, you have made it a mission to assert the rights of individuals and the right of free expression through the medium of the stage.
                </p>
                <footer>
                  <div className="w-12 h-px mb-6" style={{ backgroundColor: '#C6A15B' }} />
                  <p className="font-semibold text-foreground">Dr. Amy Callahan</p>
                  <p className="text-muted-foreground text-sm mt-1">Dean of Liberal Arts · Northern Essex Community College</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Impact in Their Words */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Students · Peers · Leaders</p>
              <h2 className="font-serif text-4xl font-semibold mb-4">Impact in Their Words</h2>
            </div>

            {/* Lane Glenn — NECC President */}
            <div className="bg-foreground text-background rounded-sm p-12 mb-16">
              <Quote className="w-10 h-10 text-background/30 mb-6" />
              <p className="font-serif text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                "Theater at Northern Essex isn't simply a creative outlet. It serves as a catalyst for so many strengths and attributes that allow our students to thrive in any field they pursue."
              </p>
              <p className="text-background/70 text-sm font-medium uppercase tracking-wider">
                Lane Glenn, President — Northern Essex Community College
                <span className="ml-2 normal-case font-normal">· Merrimack Valley Life</span>
              </p>
            </div>

            {/* NECC Student Testimonials */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-semibold mb-8 text-center">Student Voices</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {neccTestimonials.map((item, index) => (
                  <div key={index} className="bg-card border border-border p-8 rounded-sm">
                    <Quote className="w-6 h-6 text-foreground/20 mb-4" />
                    <p className="text-foreground leading-relaxed mb-6 italic">"{item.quote}"</p>
                    <p className="text-sm text-muted-foreground font-medium">— {item.attribution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rate My Professors */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-2xl font-semibold">Rate My Professors</h3>
                <span className="text-xs text-muted-foreground uppercase tracking-wider border border-border px-3 py-1 rounded-full">Anonymous Reviews</span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rmpReviews.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border p-6 rounded-sm hover:shadow-md transition-shadow"
                  >
                    <div className="mb-4">
                      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#C6A15B' }}>
                        {item.category}
                        {item.course ? ` · ${item.course}` : ''}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.school}</p>
                    </div>
                    <p className="text-foreground leading-relaxed italic mb-5">"{item.quote}"</p>
                    <p className="text-xs text-muted-foreground">— Anonymous Student · Rate My Professors</p>
                  </div>
                ))}
              </div>
            </div>
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
              From the American College Theatre Festival to the classroom — every award reflects the students, collaborators, and communities who made it possible.
            </p>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
