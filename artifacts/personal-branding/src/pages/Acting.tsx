import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Theater, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import lastSchwartz1 from '@/assets/last-schwartz-1.jpg';
import lastSchwartz2 from '@/assets/last-schwartz-2.jpg';
import lastSchwartz3 from '@/assets/last-schwartz-3.jpg';
import lastSchwartz4 from '@/assets/last-schwartz-4.jpg';
import notConstantinople1 from '@/assets/not-constantinople-1.jpg';
import notConstantinople2 from '@/assets/not-constantinople-2.jpg';
import northShoreFish from '@/assets/north-shore-fish.jpg';
import kimberlyAkimbo from '@/assets/kimberly-akimbo.jpg';
import mrBurns from '@/assets/mr-burns.jpg';
import brianneGroup from '@/assets/brianne-large-group.jpg';

const productions = [
  {
    title: 'The Last Schwartz',
    company: 'Gloucester Stage Company',
    images: [lastSchwartz1, lastSchwartz2, lastSchwartz3, lastSchwartz4],
    primaryImage: lastSchwartz1,
    altText: 'Scene from The Last Schwartz at Gloucester Stage Company',
  },
  {
    title: 'Not Constantinople',
    company: 'Martha\'s Vineyard Playhouse',
    images: [notConstantinople1, notConstantinople2],
    primaryImage: notConstantinople1,
    altText: 'Scene from Not Constantinople at Martha\'s Vineyard Playhouse',
  },
  {
    title: 'North Shore Fish',
    company: 'Gloucester Stage Company',
    images: [northShoreFish],
    primaryImage: northShoreFish,
    altText: 'Scene from North Shore Fish at Gloucester Stage Company',
  },
  {
    title: 'Kimberly Akimbo',
    company: 'New Century Theater',
    images: [kimberlyAkimbo],
    primaryImage: kimberlyAkimbo,
    altText: 'Scene from Kimberly Akimbo at New Century Theater',
  },
  {
    title: 'Mr. Burns, a Post-Electric Play',
    company: 'New Century Theater',
    images: [mrBurns],
    primaryImage: mrBurns,
    altText: 'Scene from Mr. Burns, a Post-Electric Play at New Century Theater',
  },
];

export default function Acting() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <Theater className="w-16 h-16 mx-auto mb-6 text-foreground" />
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Acting</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
            A Life on Stage
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Before the classroom and the rehearsal room, there was the stage. Brianne Beatrice built her craft as a professional actress across New England's most respected regional theatres — a foundation that informs everything she teaches, directs, and speaks about today.
          </p>
        </div>
      </section>

      {/* Selected Productions */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold mb-4">Selected Productions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of Brianne's professional acting work across regional theatre companies in New England.
            </p>
          </div>

          <div className="space-y-20">
            {productions.map((production, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                  {/* Image area */}
                  <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                    {production.images.length > 1 ? (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2 aspect-[16/9] rounded-sm overflow-hidden border border-border shadow-lg">
                          <img
                            src={production.primaryImage}
                            alt={production.altText}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                        {production.images.slice(1, 3).map((img, i) => (
                          <div key={i} className="aspect-[4/3] rounded-sm overflow-hidden border border-border">
                            <img
                              src={img}
                              alt={`${production.title} — production photo ${i + 2}`}
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                          </div>
                        ))}
                        {production.images[3] && (
                          <div className="aspect-[4/3] rounded-sm overflow-hidden border border-border">
                            <img
                              src={production.images[3]}
                              alt={`${production.title} — production photo 4`}
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-lg">
                        <img
                          src={production.primaryImage}
                          alt={production.altText}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* Text area */}
                  <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">{production.company}</p>
                    <h3 className="font-serif text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
                      {production.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-foreground/30 mb-6" />
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      A professional production at {production.company}.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </FadeInSection>

      {/* Acting Workshop Legacy */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Workshop Legacy</p>
                <h2 className="font-serif text-4xl font-semibold mb-6">
                  Region 1 ACTF Meisner Acting Workshop
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  From 2010 through 2023, Brianne led an ongoing acting workshop focused on craft, confidence, collaboration, and artistic growth — as part of Region 1 of the American College Theater Festival.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  The professional discipline she developed on New England's regional stages became the heart of her teaching method — one that has shaped hundreds of students across more than two decades in the classroom.
                </p>
                <Link
                  href="/teaching"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-sm font-medium hover:bg-accent transition-colors"
                >
                  Explore Her Teaching
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-lg">
                <img
                  src={brianneGroup}
                  alt="Brianne Beatrice leading an acting workshop at Region 1 American College Theater Festival"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Connection to current work */}
      <FadeInSection>
        <section className="bg-foreground text-background py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <p className="font-serif text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
              The stage trained her. The classroom shaped her. Now she brings it all to the platform.
            </p>
            <p className="text-background/70 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Every speaking engagement, every keynote, every workshop carries the discipline, presence, and authenticity that only a lifetime on stage can teach.
            </p>
            <Link
              href="/speaking"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
            >
              Explore Speaking Topics
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
