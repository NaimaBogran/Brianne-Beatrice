import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { Podcast, Newspaper, Video, ExternalLink, Play } from 'lucide-react';

const podcastEpisodes = [
  {
    number: 42,
    title: 'The Power of Pausing: Strategic Silence in Communication',
    description: 'Exploring how silence can be just as powerful as speech in public speaking and leadership.',
    date: 'March 15, 2024',
  },
  {
    number: 41,
    title: 'Storytelling as Leadership with Marcus Johnson',
    description: 'A conversation about narrative, authenticity, and leading through story.',
    date: 'March 8, 2024',
  },
  {
    number: 40,
    title: 'Overcoming Imposter Syndrome in Professional Settings',
    description: 'Practical strategies for showing up with confidence even when doubt creeps in.',
    date: 'March 1, 2024',
  },
];

const articles = [
  {
    title: 'Five Ways to Communicate with Authenticity in the Workplace',
    publication: 'Harvard Business Review',
    date: 'February 2024',
    url: '#',
  },
  {
    title: 'Why Community Colleges Are the Future of Higher Education',
    publication: 'Inside Higher Ed',
    date: 'January 2024',
    url: '#',
  },
  {
    title: 'The Art of the Pause: What Theatre Teaches Us About Public Speaking',
    publication: 'Forbes',
    date: 'December 2023',
    url: '#',
  },
  {
    title: 'Directing Classic Plays for Contemporary Audiences',
    publication: 'American Theatre Magazine',
    date: 'November 2023',
    url: '#',
  },
  {
    title: 'How to Help Students Find Their Voice',
    publication: 'Chronicle of Higher Education',
    date: 'October 2023',
    url: '#',
  },
  {
    title: 'Leading with Vulnerability: Lessons from the Stage',
    publication: 'Fast Company',
    date: 'September 2023',
    url: '#',
  },
];

const pressMedia = [
  {
    type: 'Interview',
    title: 'NPR Morning Edition: Communication in a Divided America',
    date: 'January 2024',
  },
  {
    type: 'Feature',
    title: 'Local News Profile: Educator Inspiring the Next Generation',
    date: 'December 2023',
  },
  {
    type: 'Podcast Guest',
    title: 'The Leadership Hour: Authentic Communication for Leaders',
    date: 'November 2023',
  },
  {
    type: 'Video',
    title: 'TEDx Bay Area: The Stories We Tell Ourselves',
    date: 'October 2023',
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
            Amplifying Ideas Through Multiple Platforms
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From podcasts to publications, sharing insights on communication, leadership, and the transformative power of storytelling.
          </p>
        </div>
      </section>

      {/* Podcast Section */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Podcast size={16} />
                Weekly Episodes
              </div>
              <h2 className="font-serif text-4xl font-semibold mb-4">The Inspired Voice</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A weekly podcast exploring authentic communication, leadership development, and the art of meaningful connection. Join thousands of listeners finding their voice and leading with confidence.
              </p>
              <p className="text-muted-foreground mb-4">
                Available on Apple Podcasts, Spotify, and wherever you listen.
              </p>
            </div>
            <div className="bg-card border border-border p-12 rounded-sm">
              <div className="aspect-square bg-gradient-to-br from-muted via-accent to-card rounded-sm flex items-center justify-center">
                <Podcast className="w-24 h-24 text-muted-foreground/30" />
              </div>
            </div>
          </div>

          {/* Recent Episodes */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-8">Recent Episodes</h3>
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
              <h2 className="font-serif text-4xl font-semibold mb-4">Articles & Publications</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Written contributions to leading publications on communication, education, and leadership.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-background border border-border p-8 rounded-sm hover:shadow-lg transition-shadow group"
                >
                  <p className="text-sm text-muted-foreground mb-2">{article.publication}</p>
                  <h3 className="font-serif text-lg font-semibold mb-3 leading-snug group-hover:text-muted-foreground transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{article.date}</p>
                    <ExternalLink size={16} className="text-muted-foreground" />
                  </div>
                </div>
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
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {item.type}
                  </p>
                  <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Video Placeholder */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-semibold mb-4">Featured Video</h2>
              <p className="text-muted-foreground text-lg">
                TEDx Bay Area: "The Stories We Tell Ourselves"
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-muted via-card to-accent rounded-sm border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play size={32} fill="currentColor" />
                </div>
                <p className="text-muted-foreground">TEDx Talk Video Placeholder</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
