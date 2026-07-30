import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Mic, GraduationCap, Theater, Users, ArrowRight, Award, Podcast } from 'lucide-react';
import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import heroPortrait from '@/assets/hero-portrait.png';

const roleCards = [
  {
    icon: Mic,
    title: 'Speaker',
    description: 'Keynote presentations on authentic communication, leadership, and meaningful storytelling.',
  },
  {
    icon: GraduationCap,
    title: 'Professor',
    description: 'Inspiring students in communication studies and performance at the community college level.',
  },
  {
    icon: Theater,
    title: 'Director',
    description: 'Bringing powerful theatrical productions to life with vision and emotional depth.',
  },
  {
    icon: Users,
    title: 'Educator',
    description: 'Committed to empowering individuals to find their voice and lead with confidence.',
  },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background z-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
                Speaker • Educator • Director
              </p>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
                Helping people communicate with confidence, lead with authenticity, and tell meaningful stories.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                I bring together the art of performance, the science of communication, and the power of education to help individuals and organizations find their voice.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/speaking"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
                  data-testid="link-book-speaking"
                >
                  Book a Speaking Engagement
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-sm font-medium hover:bg-accent transition-colors"
                  data-testid="link-learn-more"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-muted via-card to-accent rounded-sm overflow-hidden border border-border shadow-xl">
                <img
                  src={heroPortrait}
                  alt="Dr. Sarah Mitchell"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role Cards */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">What I Do</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four interconnected roles, one unified mission: empowering authentic expression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roleCards.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border p-8 rounded-sm hover:shadow-lg transition-shadow group"
              >
                <role.icon className="w-10 h-10 text-foreground mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl font-semibold mb-3">{role.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Podcast Preview */}
      <FadeInSection>
        <section className="bg-muted/50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Podcast size={16} />
                  Featured Podcast
                </div>
                <h2 className="font-serif text-4xl font-semibold mb-4">The Inspired Voice</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Weekly conversations exploring authentic communication, leadership development, and the art of meaningful connection. Join thousands of listeners finding their voice.
                </p>
                <Link
                  href="/media"
                  className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
                  data-testid="link-explore-podcast"
                >
                  Explore All Episodes
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="bg-card border border-border p-12 rounded-sm">
                <div className="aspect-video bg-gradient-to-br from-muted to-accent rounded-sm flex items-center justify-center">
                  <Podcast className="w-20 h-20 text-muted-foreground/30" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Recognition Preview */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <Award className="w-12 h-12 text-muted-foreground/50 mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-semibold mb-4">Recognition & Impact</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Honored for contributions to education, community leadership, and the performing arts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { award: 'Distinguished Faculty Award', org: 'State Community College System', year: '2023' },
              { award: 'Influential Women in Education', org: 'Regional Leadership Council', year: '2022' },
              { award: 'Excellence in Teaching', org: 'National Communication Association', year: '2021' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 border border-border rounded-sm bg-card"
              >
                <p className="text-3xl font-serif font-semibold text-muted-foreground/40 mb-4">{item.year}</p>
                <h3 className="font-semibold text-lg mb-2">{item.award}</h3>
                <p className="text-sm text-muted-foreground">{item.org}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/recognition"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
              data-testid="link-view-recognition"
            >
              View All Recognition
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">What People Say</h2>
              <p className="text-muted-foreground text-lg">
                From keynote audiences, students, and collaborators.
              </p>
            </div>
            <TestimonialsCarousel />
          </div>
        </section>
      </FadeInSection>

      {/* Bio Preview */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-6">About Dr. Sarah Mitchell</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            With over 15 years of experience as a community college professor, theatre director, and public speaker, I've dedicated my career to helping people discover and amplify their authentic voice. My work bridges academia, the stage, and the speaking circuit—creating spaces where communication becomes transformation.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-sm font-medium hover:bg-accent transition-colors"
            data-testid="link-full-bio"
          >
            Read Full Biography
            <ArrowRight size={18} />
          </Link>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
