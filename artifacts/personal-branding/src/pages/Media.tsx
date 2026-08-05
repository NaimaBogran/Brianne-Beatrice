import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Podcast, Newspaper, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import haverhillLifeCover from '@/assets/brianne-haverhill-life-cover.jpg';

export default function Media() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <Newspaper className="w-16 h-16 mx-auto mb-6 text-foreground" />
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Media</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
            Brianne in the Media
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Podcast appearances, press features, and published articles highlighting Brianne's work
            as an educator, director, and emerging voice in authentic communication.
          </p>
        </div>
      </section>

      {/* Featured Podcast */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Artwork */}
            <div className="bg-card border border-border p-10 rounded-sm">
              <div className="aspect-square bg-gradient-to-br from-foreground/10 via-muted to-card rounded-sm flex items-center justify-center">
                <div className="text-center px-8">
                  <Podcast className="w-20 h-20 text-foreground/40 mx-auto mb-6" />
                  <p className="font-serif text-2xl font-semibold text-foreground/70 leading-snug">
                    Women in Business
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">Podcast</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Podcast size={16} />
                Podcast Appearance
              </div>
              <h2 className="font-serif text-4xl font-semibold mb-2">Women in Business Podcast</h2>
              <p className="text-muted-foreground font-medium mb-6">Season 1, Episode 7 — River Run</p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Brianne joins the Women in Business Podcast to discuss how the skills of performance
                and storytelling translate directly into leadership, communication, and confidence in
                the workplace — and why every professional can benefit from thinking like a performer.
              </p>
              <a
                href="https://riverrun.com/podcast/women-in-business/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
              >
                Visit Podcast Website
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Articles */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">Articles & Press</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Published features highlighting Brianne's impact as an educator, director, and leader.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Article 1 — Merrimack Valley Life / Haverhill Life */}
              <a
                href="https://www.merrimackvalleylife.com/articles/directing-change/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background border border-border rounded-sm overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={haverhillLifeCover}
                    alt="Haverhill Life magazine cover — Directing Change, featuring Brianne Beatrice"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Merrimack Valley Life
                  </p>
                  <h3 className="font-serif text-2xl font-semibold mb-4 leading-snug group-hover:text-muted-foreground transition-colors">
                    Directing Change
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    A feature on Brianne's work as a director and educator — exploring how she uses
                    theatre to create meaningful change in her students and community.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium mt-auto">
                    Read Article
                    <ExternalLink size={14} />
                  </div>
                </div>
              </a>

              {/* Article 2 — InfluentialWomen.com */}
              <a
                href="https://influentialwomen.com/connect/brianne-beatrice"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background border border-border rounded-sm overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-foreground/10 via-muted to-accent flex items-center justify-center">
                  <div className="text-center px-8">
                    <Newspaper className="w-14 h-14 text-foreground/30 mx-auto mb-4" />
                    <p className="font-serif text-xl font-semibold text-foreground/60">InfluentialWomen.com</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    InfluentialWomen.com
                  </p>
                  <h3 className="font-serif text-2xl font-semibold mb-4 leading-snug group-hover:text-muted-foreground transition-colors">
                    Influential Women of 2026: Brianne Beatrice
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    Featured among the Influential Women of 2026 — recognized for her contributions
                    to education, the performing arts, and empowering others through communication.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium mt-auto">
                    Read Article
                    <ExternalLink size={14} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection>
        <section className="bg-foreground text-background py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-4xl font-semibold mb-6">
              Media Inquiries Welcome
            </h2>
            <p className="text-background/80 text-lg mb-10 max-w-2xl mx-auto">
              Interested in featuring Brianne in your podcast, publication, or event? She is
              available for interviews, guest appearances, and editorial features on topics including
              education, communication, leadership, and the performing arts.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
