import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function ParallaxBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-black" id="platform">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop"
          alt="Our Season"
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>

      {/* Content over image */}
      <div className="relative z-10 h-full flex items-end px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-white/60" />
            <span className="text-hero-label font-semibold uppercase tracking-wider text-white/60">Our Season</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-lg md:text-xl leading-relaxed"
          >
            Between Q1 and Q4, during the high-velocity windows of market expansion, we fly our clients' growth into territories others dare not enter. Limited to just 12 engagements each quarter, our process creates an experience both intimate and transformative.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
