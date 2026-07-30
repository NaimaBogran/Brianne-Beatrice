import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Dr. Mitchell's keynote transformed how our team approaches communication. Her insights on authentic leadership were exactly what we needed to hear.",
    author: "Jennifer Roberts",
    title: "VP of Human Resources, Tech Innovations Inc.",
  },
  {
    quote: "As a student, I've never had a professor who made me feel so empowered to use my voice. Dr. Mitchell doesn't just teach—she transforms.",
    author: "Marcus Chen",
    title: "Communication Studies Graduate, Class of 2023",
  },
  {
    quote: "Her directing work is nothing short of brilliant. She brings out performances that are raw, honest, and deeply moving. A true artist and educator.",
    author: "Lisa Patterson",
    title: "Theatre Critic, Regional Arts Review",
  },
];

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-card border border-border p-10 lg:p-16 rounded-sm"
              >
                <Quote className="w-12 h-12 text-muted-foreground/30 mb-6" />
                <blockquote className="text-lg lg:text-xl font-serif text-foreground leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.title}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full border border-border hover:bg-accent transition-colors flex items-center justify-center"
          data-testid="button-carousel-prev"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? 'bg-foreground w-8' : 'bg-border'
              }`}
              data-testid={`button-carousel-dot-${index}`}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          className="w-10 h-10 rounded-full border border-border hover:bg-accent transition-colors flex items-center justify-center"
          data-testid="button-carousel-next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
