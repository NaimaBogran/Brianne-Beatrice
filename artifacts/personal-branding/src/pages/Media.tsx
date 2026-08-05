import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Podcast, Newspaper, Play, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const articles = [
  {
    title: 'Directing Change',
    publication: 'Merrimack Valley Life',
    description: 'A feature on Brianne\'s work as a director and educator — exploring how she uses theatre to create meaningful change in her students and community.',
    url: 'https://www.merrimackvalleylife.com/articles/directing-change/',
  },
  {
    title: 'Influential Women: Brianne Beatrice',
    publication: 'InfluentialWomen.com',
    description: 'Featured among the Influential Women of 2026 — recognized for her contributions to education, the performing arts, and empowering others through communication.',
    url: 'https://influentialwomen.com/connect/brianne-beatrice',
  },
];

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
            Podcast appearances, press features, and articles highlighting Brianne's work as an educator, director, and emerging voice in authentic communication.
          </p>
        </div>
      </section>

      {/* Podcast Feature */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Artwork placeholder */}
            <div className="bg-card border border-border p-12 rounded-sm">
              <div className="aspect-square bg-gradient-to-br from-muted via-accent to-card rounded-sm flex items-center justify-center">
                <Podcast className="w-24 h-24 text-muted-foreground/30" />
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
                Brianne joins the Women in Business Podcast to discuss how the skills of performance and storytelling translate directly into leadership, communication, and confidence in the workplace — and why every professional can benefit from thinking like a performer.
              </p>
              <a
                href="https://www.riverrun.com/women-in-business-podcast"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
              >
                Listen to the Episode
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
                Features and profiles highlighting Brianne's impact as an educator, director, and leader.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background border border-border p-10 rounded-sm hover:shadow-lg transition-shadow group flex flex-col justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      {article.publication}
                    </p>
                    <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-muted-foreground transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {article.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 font-medium text-sm">
                    Read Article
                    <ExternalLink size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Video — Coming Soon */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-semibold mb-4">Speaking Reel</h2>
            <p className="text-muted-foreground text-lg">
              Video content coming soon — contact Brianne to request a demo reel.
            </p>
          </div>
          <div className="aspect-video bg-gradient-to-br from-muted via-card to-accent rounded-sm border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4">
                <Play size={32} fill="currentColor" />
              </div>
              <p className="text-muted-foreground">Demo Reel — Coming Soon</p>
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
              Interested in featuring Brianne in your podcast, publication, or event? She is available for interviews, guest appearances, and editorial features on topics including education, communication, leadership, and the performing arts.
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
