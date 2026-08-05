import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Podcast, Newspaper, Video, ExternalLink, Play, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const podcastEpisodes = [
  {
    number: 42,
    title: 'The Power of Pausing: Strategic Silence in Communication',
    description:
      'What if the most powerful thing you can say is nothing at all? In this episode, Brianne explores how deliberate pauses create space for meaning, build trust with audiences, and transform nervous silence into confident authority.',
    date: 'March 15, 2024',
    duration: '38 min',
  },
  {
    number: 41,
    title: 'Storytelling as Leadership with Marcus Johnson',
    description:
      'Brianne sits down with executive coach Marcus Johnson to unpack why the best leaders are first and foremost storytellers — and the simple narrative framework that anyone can learn to move a room.',
    date: 'March 8, 2024',
    duration: '44 min',
  },
  {
    number: 40,
    title: 'Overcoming Imposter Syndrome in Professional Settings',
    description:
      "Imposter syndrome doesn't disappear when you earn the credential — it just gets louder. Brianne draws on her experience coaching students and professionals to share practical tools for reclaiming your voice when self-doubt strikes.",
    date: 'March 1, 2024',
    duration: '31 min',
  },
];

// Real articles with live URLs come first; placeholders follow with coming-soon state.
const articles = [
  {
    title: 'Directing Change',
    publication: 'Merrimack Valley Life',
    description:
      "A feature on Brianne's work as a director and educator — exploring how she uses theatre to create meaningful change in her students and community.",
    date: null,
    url: 'https://www.merrimackvalleylife.com/articles/directing-change/',
  },
  {
    title: 'Influential Women: Brianne Beatrice',
    publication: 'InfluentialWomen.com',
    description:
      'Featured among the Influential Women of 2026 — recognized for her contributions to education, the performing arts, and empowering others through communication.',
    date: null,
    url: 'https://influentialwomen.com/connect/brianne-beatrice',
  },
  {
    title: 'Five Ways to Communicate with Authenticity in the Workplace',
    publication: 'Harvard Business Review',
    description: null,
    date: 'February 2024',
    url: null,
  },
  {
    title: 'Why Community Colleges Are the Future of Higher Education',
    publication: 'Inside Higher Ed',
    description: null,
    date: 'January 2024',
    url: null,
  },
  {
    title: 'The Art of the Pause: What Theatre Teaches Us About Public Speaking',
    publication: 'Forbes',
    description: null,
    date: 'December 2023',
    url: null,
  },
  {
    title: 'Directing Classic Plays for Contemporary Audiences',
    publication: 'American Theatre Magazine',
    description: null,
    date: 'November 2023',
    url: null,
  },
  {
    title: 'How to Help Students Find Their Voice',
    publication: 'Chronicle of Higher Education',
    description: null,
    date: 'October 2023',
    url: null,
  },
  {
    title: 'Leading with Vulnerability: Lessons from the Stage',
    publication: 'Fast Company',
    description: null,
    date: 'September 2023',
    url: null,
  },
];

const pressMedia = [
  {
    type: 'Interview',
    title: 'NPR Morning Edition: Communication in a Divided America',
    date: 'January 2024',
    url: null,
  },
  {
    type: 'Feature',
    title: 'Local News Profile: Educator Inspiring the Next Generation',
    date: 'December 2023',
    url: null,
  },
  {
    type: 'Podcast Guest',
    title: 'The Leadership Hour: Authentic Communication for Leaders',
    date: 'November 2023',
    url: null,
  },
  {
    type: 'Stage Talk',
    title: 'TEDx Bay Area: The Stories We Tell Ourselves',
    date: 'October 2023',
    url: null,
  },
];

function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground border border-border px-2.5 py-1 rounded-full">
      <Clock size={11} />
      Link coming soon
    </span>
  );
}

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
            Podcast appearances, press features, and articles highlighting Brianne's work as an
            educator, director, and emerging voice in authentic communication.
          </p>
        </div>
      </section>

      {/* Featured Podcast Appearance */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Artwork */}
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
                Brianne joins the Women in Business Podcast to discuss how the skills of performance
                and storytelling translate directly into leadership, communication, and confidence in
                the workplace — and why every professional can benefit from thinking like a performer.
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

          {/* The Inspired Voice — Recent Episodes */}
          <div>
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-semibold mb-1">The Inspired Voice</h3>
              <p className="text-muted-foreground">Brianne's weekly podcast — new episodes every Friday.</p>
            </div>
            <div className="space-y-6">
              {podcastEpisodes.map((episode) => (
                <div
                  key={episode.number}
                  className="bg-card border border-border p-8 rounded-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-foreground text-background rounded-sm flex items-center justify-center">
                        <Play size={24} fill="currentColor" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-muted-foreground">
                          Episode {episode.number}
                        </span>
                        <span className="text-sm text-muted-foreground">{episode.date}</span>
                        <span className="text-sm text-muted-foreground">· {episode.duration}</span>
                      </div>
                      <h4 className="font-serif text-xl font-semibold mb-3">{episode.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{episode.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Articles & Publications */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">Articles & Press</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Features and profiles highlighting Brianne's impact as an educator, director, and leader.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                article.url ? (
                  <a
                    key={index}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background border border-border p-8 rounded-sm hover:shadow-lg transition-shadow group flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        {article.publication}
                      </p>
                      <h3 className="font-serif text-lg font-semibold mb-3 leading-snug group-hover:text-muted-foreground transition-colors">
                        {article.title}
                      </h3>
                      {article.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {article.description}
                        </p>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-medium mt-2">
                      Read Article
                      <ExternalLink size={14} />
                    </div>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="bg-background border border-border p-8 rounded-sm hover:shadow-lg transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">{article.publication}</p>
                      <h3 className="font-serif text-lg font-semibold mb-3 leading-snug">
                        {article.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      {article.date && (
                        <p className="text-sm text-muted-foreground">{article.date}</p>
                      )}
                      <ComingSoonBadge />
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Press & Media Appearances */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold mb-4">Press & Media Appearances</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interviews, features, and guest appearances across media platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pressMedia.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border p-8 rounded-sm flex items-start gap-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <Video className="w-10 h-10 text-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {item.type}
                  </p>
                  <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Watch / Listen <ExternalLink size={13} />
                      </a>
                    ) : (
                      <ComingSoonBadge />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Speaking Reel — Coming Soon */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-semibold mb-4">Speaking Reel</h2>
              <p className="text-muted-foreground text-lg">
                Speaking clips and demo reel — coming soon.
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-muted via-card to-accent rounded-sm border border-border flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-20 h-20 bg-foreground/10 border-2 border-dashed border-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Video className="w-9 h-9 text-foreground/30" />
                </div>
                <p className="font-serif text-2xl font-semibold text-foreground/60 mb-2">
                  Video Coming Soon
                </p>
                <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
                  A speaking reel and select session recordings will be available here shortly.
                  Check back soon, or{' '}
                  <Link href="/contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
                    get in touch
                  </Link>{' '}
                  to request a sample.
                </p>
              </div>
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
