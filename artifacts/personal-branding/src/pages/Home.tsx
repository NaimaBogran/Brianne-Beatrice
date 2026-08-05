import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Mic, GraduationCap, Theater, Users, ArrowRight, Award, Star } from 'lucide-react';
import { PageTransition } from '@/components/layout/PageTransition';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import brianneHeadshot from '@/assets/brianne-headshot.jpg';

const roleCards = [
  {
    icon: Mic,
    title: 'Speaker',
    description: 'Helping audiences communicate with confidence and authenticity — from the stage to the boardroom.',
  },
  {
    icon: GraduationCap,
    title: 'Educator',
    description: 'Over two decades helping students develop confidence, creativity, and communication skills.',
  },
  {
    icon: Theater,
    title: 'Director',
    description: 'Award-winning theatrical productions receiving national recognition at the Kennedy Center and beyond.',
  },
  {
    icon: Users,
    title: 'Mentor',
    description: 'Helping people discover their authentic voice both on and off the stage.',
  },
];

const stats = [
  { label: 'Years of Teaching', value: '20+' },
  { label: 'National Teaching Awards', value: '★★★' },
  { label: 'Award-Winning Director', value: '✦' },
  { label: 'Nationally Recognized Productions', value: '★★★' },
];

const recognitionHighlights = [
  {
    year: '2026',
    award: 'National Alliance Acting Teacher of Excellence',
    org: 'National Alliance of Acting Teachers – Region I',
  },
  {
    year: '2026',
    award: 'Influential Women of 2026',
    org: 'National Recognition',
  },
  {
    year: '2022–23',
    award: 'Golden Lamp Award of Teaching Excellence',
    org: 'Northern Essex Community College',
  },
  {
    year: '2024',
    award: 'Hurricane Diane — 13 National Awards',
    org: 'KCACTF Distinguished Directing',
  },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
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
                Master of Performance & Inspiration
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                Helping individuals and organizations unlock confidence, authentic communication, and meaningful connection through performance, storytelling, and education.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
                  data-testid="link-book-speaking"
                >
                  Book Brianne
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-sm font-medium hover:bg-accent transition-colors"
                  data-testid="link-learn-more"
                >
                  Explore Her Journey
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
                  src={brianneHeadshot}
                  alt="Brianne Beatrice"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credibility Stats */}
      <FadeInSection>
        <section className="bg-foreground text-background py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-3xl lg:text-4xl font-bold text-background mb-2">
                    {stat.value}
                  </p>
                  <p className="text-background/70 text-sm uppercase tracking-wider leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Four Pillars */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">What Brianne Brings</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A career that weaves education, directing, communication, storytelling, and performance into one cohesive vision.
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

      {/* Recognition Preview */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <Award className="w-12 h-12 text-foreground/50 mx-auto mb-6" />
              <h2 className="font-serif text-4xl font-semibold mb-4">Featured Recognition</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Nationally recognized for excellence in teaching, directing, and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recognitionHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 border border-border rounded-sm bg-background hover:shadow-lg transition-shadow"
                >
                  <p className="font-serif text-2xl font-semibold text-muted-foreground/50 mb-4">{item.year}</p>
                  <Star className="w-6 h-6 text-foreground/40 mx-auto mb-4" />
                  <h3 className="font-semibold text-base mb-2 leading-snug">{item.award}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.org}</p>
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
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold mb-4">What People Say</h2>
              <p className="text-muted-foreground text-lg">
                From students, collaborators, and colleagues.
              </p>
            </div>
            <TestimonialsCarousel />
          </div>
        </section>
      </FadeInSection>

      {/* Bio Preview */}
      <FadeInSection>
        <section className="bg-muted/30 py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-6">About Brianne Beatrice</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Brianne Beatrice is an Associate Professor of Theatre at Northern Essex Community College, an award-winning director whose productions have earned national recognition at the Kennedy Center American College Theatre Festival, and an emerging motivational speaker whose mission is simple: help people discover their authentic voice. With a career spanning more than two decades and a Master of Fine Arts from Penn State, Brianne brings the discipline of the stage to every room she enters.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-sm font-medium hover:bg-accent transition-colors"
              data-testid="link-full-bio"
            >
              Read Full Biography
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">Ready to Inspire Your Audience?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Whether you're booking a keynote, planning a workshop, or exploring a collaboration — Brianne is ready to bring her energy, expertise, and passion to your stage.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </section>
      </FadeInSection>
    </PageTransition>
  );
}
