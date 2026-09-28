import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    quote: "Revenue Signal transformed how we think about growth. Our ARR doubled in 6 months using their intelligence platform.",
    name: "Sarah Chen",
    role: "CEO, NovaTech",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "The precision of their market signals is unmatched. We now move with confidence rather than intuition alone.",
    name: "Marcus Williams",
    role: "VP Growth, Apex Capital",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "Like having a GPS for revenue — we always know which direction to move, and when. Exceptional team.",
    name: "Leila Santos",
    role: "Founder, Meridian Group",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section className="bg-rs-light py-32 px-6 md:px-12" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <div className="w-8 h-px bg-black" />
          <span className="text-hero-label font-semibold uppercase tracking-wider text-rs-gray">Clients</span>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <blockquote className="font-display font-medium text-lg md:text-xl leading-relaxed text-black mb-8 flex-1 tracking-tight">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <div className="font-semibold text-sm text-black">{t.name}</div>
                  <div className="text-hero-label text-rs-gray uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
