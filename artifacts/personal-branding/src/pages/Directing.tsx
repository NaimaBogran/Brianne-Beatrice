import { useState } from 'react';
import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Theater, Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import brianneStageDirecting from '@/assets/brianne-stage-directing.jpg';
import haverhillLifeCover from '@/assets/brianne-haverhill-life-cover.jpg';

const featuredProductions = [
  {
    title: 'Angels in America: Part I',
    playwright: 'Tony Kushner',
    year: 'May 2026',
    venue: 'Northern Essex Community College',
    badge: null,
    description: 'Tony Kushner\'s landmark work about love, loss, identity, and the AIDS crisis. A bold, visionary production anchoring the 2026 season.',
  },
  {
    title: 'The Vagina Monologues',
    playwright: 'Eve Ensler',
    year: 'January 2026',
    venue: 'Sierra University',
    badge: 'ACTF Invited Production',
    description: 'Invited to the Kennedy Center American College Theatre Festival. This landmark production received 7 national awards for its honesty, power, and ensemble performance.',
  },
  {
    title: 'The Vagina Monologues',
    playwright: 'Eve Ensler',
    year: 'May 2025',
    venue: 'Northern Essex Community College',
    badge: 'ACTF Invited Production',
    description: 'A second ACTF invitation for this production — a testament to the depth of storytelling and ensemble craft that Brianne brings to this defining work.',
  },
  {
    title: 'Hurricane Diane',
    playwright: 'Madeleine George',
    year: 'October 2024',
    venue: 'Firehouse Center For The Arts',
    badge: '13 National Awards',
    description: 'A darkly comedic masterpiece about nature, desire, and transformation. This production traveled to professional stages and earned 13 national awards — one of the most decorated productions in NECC\'s history.',
  },
  {
    title: 'Hurricane Diane',
    playwright: 'Madeleine George',
    year: 'January 2024',
    venue: 'CCSU',
    badge: 'ACTF Invited Production',
    description: 'A second life for this acclaimed production — invited to CCSU for the Kennedy Center American College Theatre Festival, continuing its national recognition.',
  },
  {
    title: 'Hurricane Diane',
    playwright: 'Madeleine George',
    year: 'April 2023',
    venue: 'Northern Essex Community College',
    badge: 'ACTF Invited Production',
    description: 'The original ACTF-invited staging that launched a remarkable national journey for this production. Brianne\'s direction was cited for its exceptional ensemble work and inventive staging.',
  },
];

const productionHistory = [
  { year: 'October 2025', title: 'All in the Timing', venue: 'Northern Essex Community College' },
  { year: 'November 2024', title: 'A Night Of Comedy', venue: 'Northern Essex Community College' },
  { year: 'October 2023', title: 'Almost, Maine', venue: 'Northern Essex Community College' },
  { year: 'September 2022', title: 'Love Sick', venue: 'Northern Essex Community College (Outdoor Theater)' },
  { year: 'May 2022', title: 'Lighten Up', venue: 'Northern Essex Community College (Outdoor Theater)' },
  { year: 'November 2021', title: 'Tiny Beautiful Things', venue: 'Northern Essex Community College (Outdoor Theater)' },
  { year: 'December 2020', title: 'Love Letters', venue: 'Northern Essex Community College' },
  { year: 'May 2020', title: 'Rabbit Hole', venue: 'Northern Essex Community College' },
  { year: 'November 2019', title: 'Five Women Wearing the Same Dress', venue: 'Northern Essex Community College' },
  { year: 'November 2019', title: 'All in the Timing', venue: 'Merrimack College' },
  { year: 'May 2019', title: 'Good People', venue: 'Northern Essex Community College' },
  { year: 'February 2019', title: 'Uncommon Women and Others', venue: 'Salem State University' },
  { year: 'October 2018', title: 'Stupid Fucking Bird', venue: 'Northern Essex Community College' },
  { year: 'February 2018', title: 'The Last of the Red Hot Lovers', venue: 'Northern Essex Community College' },
  { year: 'November 2017', title: 'The Odd Couple', venue: 'Northern Essex Community College' },
  { year: 'September 2017', title: 'Escape from Happiness', venue: 'Northern Essex Community College' },
  { year: 'April 2017', title: 'Laundry and Bourbon / Lonestar', venue: 'Salem State University' },
  { year: 'February 2017', title: 'Clybourne Park', venue: 'Northern Essex Community College' },
  { year: 'March 2014', title: 'How the Other Half Loves', venue: 'Marblehead Little Theater' },
  { year: 'March 2013', title: 'The Odd Couple', venue: 'Northern Essex Community College' },
  { year: 'November 2012', title: 'Arsenic and Old Lace', venue: 'Summer Theater at Salem' },
  { year: 'August 2012', title: 'Greater Tuna', venue: 'Marblehead Little Theater' },
  { year: 'March 2012', title: 'Rabbit Hole', venue: 'Marblehead Little Theater' },
  { year: 'May 2011', title: 'Proof', venue: 'Marblehead Little Theater' },
  { year: 'April 2011', title: 'Bedroom Farce', venue: 'Marblehead Little Theater' },
  { year: 'October 2010', title: 'Almost, Maine', venue: 'Northern Essex Community College' },
  { year: 'April 2010', title: 'Let Me Check My Calendar', venue: 'Marblehead Little Theater' },
  { year: 'February 2010', title: 'Italian American Reconciliation', venue: 'Marblehead Little Theater' },
];

export default function Directing() {
  const [showFullHistory, setShowFullHistory] = useState(false);
  const visibleHistory = showFullHistory ? productionHistory : productionHistory.slice(0, 8);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={brianneStageDirecting}
            alt="Brianne Beatrice on stage at Firehouse Center for the Arts"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <Theater className="w-16 h-16 mx-auto mb-6 text-foreground" />
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Directing</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
            Theatre That Moves, Challenges, and Inspires
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            With productions invited to the Kennedy Center American College Theatre Festival, 13 national awards for a single production, and a directing career spanning more than 15 years — Brianne Beatrice brings an extraordinary standard to every project.
          </p>
          <p className="text-sm text-muted-foreground/60 mt-6 italic">
            Brianne Beatrice on stage at Firehouse Center for the Arts
          </p>
        </div>
      </section>

      {/* Directing Philosophy */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-serif text-4xl font-semibold mb-8 text-center">Directing Philosophy</h2>
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Theatre, at its best, is a conversation — between the story and the audience, between the performers and the truth, between the world on stage and the world outside it. Brianne approaches every production as an act of communication: intentional, rigorously prepared, and deeply human.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              She is drawn to work that challenges her collaborators and her audiences — plays that ask difficult questions, that create space for empathy, and that leave people changed. Whether working with first-year college students or seasoned performers, she creates rehearsal rooms built on trust, rigor, and the belief that every person in the room has something essential to bring.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The national recognition her productions have received reflects not just her vision, but the collective excellence she draws out of every company she works with.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Featured Productions */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <Award className="w-12 h-12 mx-auto mb-6 text-foreground" />
              <h2 className="font-serif text-4xl font-semibold mb-4">Featured Productions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                ACTF-invited productions and award-winning work spanning professional stages and national recognition.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProductions.map((production, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted via-accent to-card relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                      <div>
                        <p className="text-background/80 text-sm font-medium mb-1">{production.year}</p>
                        <h3 className="font-serif text-xl font-semibold text-background">
                          {production.title}
                        </h3>
                      </div>
                    </div>
                    {production.badge && (
                      <div className="absolute top-4 right-4 bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-full">
                        {production.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">by {production.playwright}</p>
                    <p className="text-sm text-muted-foreground mb-4">{production.venue}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {production.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Press Feature — Haverhill Life */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-serif text-3xl font-semibold mb-10 text-center">In the Press</h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-card border border-border rounded-sm overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={haverhillLifeCover}
                alt="Haverhill Life magazine cover featuring Brianne Beatrice — Directing Change"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="p-8 lg:p-10">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Merrimack Valley Life
              </p>
              <h3 className="font-serif text-2xl font-semibold mb-4 leading-snug">
                Directing Change
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A feature on Brianne's work as a director and educator — exploring how she uses theatre to create meaningful change in her students and community.
              </p>
              <a
                href="https://www.merrimackvalleylife.com/articles/directing-change/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-sm font-medium hover:bg-accent transition-colors"
              >
                Read Article
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Full Production History */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-serif text-4xl font-semibold mb-4 text-center">Production History</h2>
          <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
            A chronological record of Brianne's directing work across Northern Essex Community College, Salem State University, Merrimack College, Marblehead Little Theater, and beyond.
          </p>
          <div className="space-y-3">
            {visibleHistory.map((prod, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between border border-border rounded-sm p-5 bg-card hover:shadow-sm transition-shadow gap-2"
              >
                <div>
                  <p className="font-serif font-semibold text-foreground">{prod.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{prod.venue}</p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{prod.year}</p>
              </div>
            ))}
          </div>
          {productionHistory.length > 8 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowFullHistory(!showFullHistory)}
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-sm font-medium hover:bg-accent transition-colors"
              >
                {showFullHistory ? (
                  <>Show Less <ChevronUp size={18} /></>
                ) : (
                  <>View Full History ({productionHistory.length} Productions) <ChevronDown size={18} /></>
                )}
              </button>
            </div>
          )}
        </section>
      </FadeInSection>

      {/* Recognition */}
      <FadeInSection>
        <section className="bg-foreground text-background py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-4xl font-semibold mb-12">Directing Recognition</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
              <div className="border border-background/20 p-8 rounded-sm">
                <p className="font-serif text-5xl font-bold text-background mb-3">13</p>
                <p className="text-background/80 leading-snug">National Awards<br />Hurricane Diane</p>
              </div>
              <div className="border border-background/20 p-8 rounded-sm">
                <p className="font-serif text-5xl font-bold text-background mb-3">7</p>
                <p className="text-background/80 leading-snug">National Awards<br />The Vagina Monologues</p>
              </div>
              <div className="border border-background/20 p-8 rounded-sm">
                <p className="font-serif text-5xl font-bold text-background mb-3">4+</p>
                <p className="text-background/80 leading-snug">ACTF<br />Invited Productions</p>
              </div>
            </div>
            <p className="text-background/70 text-lg max-w-2xl mx-auto">
              The KCACTF Citizens Award for Distinguished Directing, multiple ACTF invitations, and national recognition for ensemble excellence — Brianne's directing work speaks for itself.
            </p>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
