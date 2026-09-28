import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section className="bg-white py-32 md:py-48 px-6 md:px-12" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-20">
          <div className="w-8 h-px bg-black" />
          <span className="text-hero-label font-semibold uppercase tracking-wider text-rs-gray">
            The Signal Advantage
          </span>
        </div>

        {/* 12-col grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0">
          {/* Text block */}
          <div ref={ref} className="md:col-span-7 md:pr-16">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold text-2xl md:text-3xl leading-tight mb-10 tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
            >
              Vast, precise and unimaginably powerful — unlocking your revenue potential remains a rare and extraordinary advantage.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-rs-gray leading-relaxed text-base md:text-lg max-w-xl"
            >
              Revenue Signal is the world's leading predictive intelligence platform — offering once-in-a-cycle insights to founders, executives, and investors who refuse to guess.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12"
            >
              <a href="#services" className="btn-text text-black">
                <span>Explore the platform</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Image block with parallax */}
          <div className="md:col-span-5 relative overflow-hidden">
            <motion.div style={{ y: imgY }} className="w-full h-[500px] md:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Platform"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black p-8">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '12×', label: 'Avg Revenue Lift' },
                  { value: '98%', label: 'Signal Accuracy' },
                  { value: '500+', label: 'Clients Globally' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="text-white font-black text-2xl md:text-3xl tracking-tight">{stat.value}</div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
