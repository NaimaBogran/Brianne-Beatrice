import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Podcast, Newspaper, ExternalLink, ArrowRight, Play } from 'lucide-react';
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

      {/* Featured Video */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl font-semibold mb-4">Watch Brianne in Action</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how Brianne brings her expertise in performance, storytelling, and authentic communication to life.
            </p>
          </div>
          <div className="aspect-video w-full rounded-sm overflow-hidden border border-border shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/5Kig2V3Bl1w"
              title="Brianne Beatrice — Master of Performance & Inspiration"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <p className="text-center mt-4">
            <a
              href="https://www.youtube.com/watch?v=5Kig2V3Bl1w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Play size={14} />
              Watch on YouTube
              <ExternalLink size={13} />
            </a>
          </p>
        </section>
      </FadeInSection>

      {/* Featured Podcast */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Podcast thumbnail */}
              <div className="bg-card border border-border p-4 rounded-sm">
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img
                    src="https://img.youtube.com/vi/eQ6xmxy0lIg/hqdefault.jpg"
                    alt="Women in Business Podcast — Brianne Beatrice: The Art of Public Speaking"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div
                    className="hidden w-full h-full bg-gradient-to-br from-foreground/10 via-muted to-card items-center justify-center"
                    style={{ aspectRatio: '1' }}
                  >
                    <div className="text-center px-8">
                      <Podcast className="w-20 h-20 text-foreground/40 mx-auto mb-6" />
                      <p className="font-serif text-2xl font-semibold text-foreground/70 leading-snug">
                        Women in Business
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm">Podcast · River Run</p>
                    </div>
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
                <p className="text-muted-foreground font-medium mb-6">
                  Season 1, Episode 7 — Brianne Beatrice: The Art of Public Speaking
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Brianne joins the Women in Business Podcast to discuss how the skills of performance
                  and storytelling translate directly into leadership, communication, and confidence in
                  the workplace — and why every professional can benefit from thinking like a performer.
                </p>

                {/* Primary link */}
                <a
                  href="https://www.riverrun.com/women-in-business-podcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity mb-6"
                >
                  Visit Podcast Website
                  <ExternalLink size={18} />
                </a>

                {/* Platform buttons */}
                <p className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-wider">Listen on</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://open.spotify.com/episode/08IPVdNCoikypxHDI2vSRi?si=92856d34cd25457f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-4 py-2.5 rounded-sm text-sm font-medium hover:bg-accent transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-foreground"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                    Spotify
                  </a>
                  <a
                    href="https://podcasts.apple.com/us/podcast/brianne-beatrice-the-art-of-public-speaking/id1862240243?i=1000771803514"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-4 py-2.5 rounded-sm text-sm font-medium hover:bg-accent transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-foreground"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.419c4.197 0 7.601 3.404 7.601 7.601 0 4.197-3.404 7.601-7.601 7.601-4.197 0-7.601-3.404-7.601-7.601 0-4.197 3.404-7.601 7.601-7.601zm0 2.4c-2.871 0-5.201 2.33-5.201 5.201s2.33 5.201 5.201 5.201 5.201-2.33 5.201-5.201S14.871 6.819 12 6.819zm0 1.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm0 3.301c1.26 0 2.14 1.019 2.14 2.14 0 .54-.12 1.26-.42 2.52-.24.96-.54 1.56-.9 1.86-.12.12-.3.18-.48.18h-.84c-.18 0-.36-.06-.48-.18-.36-.3-.66-.9-.9-1.86-.3-1.26-.42-1.98-.42-2.52 0-1.121.88-2.14 2.14-2.14z"/></svg>
                    Apple Podcasts
                  </a>
                  <a
                    href="https://music.amazon.com/podcasts/d53e018c-8b96-42be-bc24-1d7383909bdc/episodes/681fd452-b8f8-4550-adae-a407ce07d87b/women-in-business-brianne-beatrice---the-art-of-public-speaking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-4 py-2.5 rounded-sm text-sm font-medium hover:bg-accent transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-foreground"><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654C17.945 22.513 14.97 23.17 11.89 23.17c-3.02 0-5.942-.633-8.77-1.903-.428-.2-.86-.42-1.293-.67-.13-.076-.17-.195-.125-.344l.342-.23zM7.87 15.38c.12-.188.297-.196.527-.02 1.244.906 2.608 1.36 4.09 1.36 1.485 0 2.785-.424 3.904-1.27.15-.107.284-.14.404-.096.12.045.18.13.18.256 0 .086-.032.17-.096.25-.733.814-1.63 1.384-2.686 1.71a7.9 7.9 0 0 1-2.41.393c-2.158 0-4.047-.726-5.668-2.175-.143-.132-.18-.27-.108-.408zm4.12-9.16c1.41 0 2.592.49 3.548 1.473.955.98 1.432 2.178 1.432 3.593 0 1.43-.482 2.64-1.448 3.63-.963.99-2.14 1.485-3.534 1.485-1.398 0-2.576-.494-3.535-1.48-.96-.99-1.44-2.194-1.44-3.612 0-1.41.48-2.607 1.44-3.59.96-.983 2.136-1.474 3.536-1.474v-.025zm.19 2.06c-.784 0-1.437.284-1.96.85-.52.566-.782 1.27-.782 2.11 0 .844.262 1.553.786 2.126.524.573 1.173.86 1.946.86.784 0 1.44-.288 1.966-.864.527-.576.79-1.282.79-2.12 0-.834-.263-1.538-.79-2.11-.526-.572-1.18-.858-1.955-.858l-.002.006zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>
                    Amazon Music
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Articles */}
      <FadeInSection>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">Articles & Press</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Published features highlighting Brianne's impact as an educator, director, and leader.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Article 1 — Merrimack Valley Life */}
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
