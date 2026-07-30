import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Theater, Download, Award } from 'lucide-react';
import theatreStage from '@/assets/theatre-stage.png';

const productions = [
  {
    title: 'A Raisin in the Sun',
    playwright: 'Lorraine Hansberry',
    year: '2023',
    venue: 'Bay Area Community College Theatre',
    role: 'Director',
    description: 'A powerful revival exploring dreams deferred and resilience in the face of systemic barriers.',
  },
  {
    title: 'The Glass Menagerie',
    playwright: 'Tennessee Williams',
    year: '2022',
    venue: 'Regional Theatre Festival',
    role: 'Director',
    description: 'An intimate portrait of memory, longing, and the fragility of hope.',
  },
  {
    title: 'Into the Woods',
    playwright: 'Stephen Sondheim & James Lapine',
    year: '2021',
    venue: 'Bay Area Community College Theatre',
    role: 'Director',
    description: 'A darkly comic musical exploring the consequences of our wishes and choices.',
  },
  {
    title: 'August: Osage County',
    playwright: 'Tracy Letts',
    year: '2020',
    venue: 'Community Repertory Theatre',
    role: 'Director',
    description: 'A searing family drama that lays bare the complexity of love and dysfunction.',
  },
  {
    title: 'Fences',
    playwright: 'August Wilson',
    year: '2019',
    venue: 'Bay Area Community College Theatre',
    role: 'Director',
    description: "An exploration of responsibility, regret, and the American Dream through one family's story.",
  },
  {
    title: 'The Crucible',
    playwright: 'Arthur Miller',
    year: '2018',
    venue: 'Bay Area Community College Theatre',
    role: 'Director',
    description: 'A timeless examination of fear, power, and moral courage in the face of hysteria.',
  },
];

export default function Directing() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={theatreStage}
            alt="Theatre stage"
            className="w-full h-full object-cover opacity-20"
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
            For over a decade, I've directed productions that honor the text, elevate the performers, and speak to the moment we're living in.
          </p>
        </div>
      </section>

      {/* Directing Philosophy */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-serif text-4xl font-semibold mb-8 text-center">Directing Philosophy</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I believe theatre is a site of transformation—for the actors, for the audience, and for the community. My directing work begins with deep respect for the playwright's vision and a commitment to excavating the emotional truth at the heart of every scene.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I work collaboratively with actors, designers, and production teams to create a rehearsal environment where risk-taking is encouraged and every voice is valued. I'm drawn to plays that grapple with social justice, family dynamics, and the complexity of the human experience.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Whether directing classics or contemporary works, my goal is always the same: to tell stories that matter, with honesty, rigor, and heart.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Featured Productions */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">Featured Productions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Selected directing credits from the past five years.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productions.map((production, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Placeholder Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted via-accent to-card relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                      <div>
                        <p className="text-background/80 text-sm font-medium mb-1">{production.year}</p>
                        <h3 className="font-serif text-xl font-semibold text-background">
                          {production.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{production.playwright}</p>
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

      {/* Recognition */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <Award className="w-12 h-12 mx-auto mb-6 text-foreground" />
            <h2 className="font-serif text-4xl font-semibold mb-4">Recognition & Reviews</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-card border border-border p-10 rounded-sm">
              <blockquote className="font-serif text-xl text-foreground leading-relaxed mb-6">
                "Mitchell's direction of <em>A Raisin in the Sun</em> was nothing short of revelatory. She drew performances that were raw, honest, and deeply moving. This is what theatre should be."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                — Regional Arts Review, 2023
              </p>
            </div>
            <div className="bg-card border border-border p-10 rounded-sm">
              <blockquote className="font-serif text-xl text-foreground leading-relaxed mb-6">
                "Under Mitchell's direction, <em>The Glass Menagerie</em> became a haunting meditation on memory and loss. Her vision honored Williams while making it feel urgent and contemporary."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                — Theatre Critic, Bay Area Arts Journal, 2022
              </p>
            </div>
            <div className="bg-card border border-border p-10 rounded-sm">
              <blockquote className="font-serif text-xl text-foreground leading-relaxed mb-6">
                "Best Director Award for <em>Fences</em>. Mitchell's work demonstrates a rare combination of artistic vision and deep respect for the actor's process."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                — Regional Theatre Festival, 2019
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Resume Download */}
      <FadeInSection>
        <section className="bg-foreground text-background py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-4xl font-semibold mb-6">Directing Resume</h2>
            <p className="text-background/80 text-lg mb-10 max-w-2xl mx-auto">
              For a complete list of directing credits, design collaborations, and production history, download my directing resume.
            </p>
            <button
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
              data-testid="button-download-resume"
            >
              <Download size={20} />
              Download Resume (PDF)
            </button>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
