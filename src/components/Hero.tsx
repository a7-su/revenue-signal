import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const mistY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.75]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] overflow-hidden bg-black">
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2560&auto=format&fit=crop"
          alt="B2B Revenue Systems"
          className="w-full h-full object-cover grayscale opacity-75"
        />
      </motion.div>

      {/* Dark Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:flex max-w-[1600px] mx-auto">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-white/[0.04] h-full" />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ y: textY, opacity: contentOpacity }}
        className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-16 md:pt-20"
      >
        <div className="max-w-4xl">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-rs-orange inline-block" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-white/80">
              European B2B Revenue Infrastructure
            </span>
          </motion.div>

          {/* Main Headline - Instrument Sans, Sentence Case, No Italics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-white text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold leading-[1.08] tracking-tight mb-8">
              Turn missed opportunities into <span className="font-bold text-white">measurable revenue.</span>
            </h1>
          </motion.div>

          {/* Supporting Copy - Manrope */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-white/75 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-10"
          >
            Revenue Signal builds the systems businesses need to attract better opportunities, convert more inquiries, and recover revenue that would otherwise disappear.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link
              to="/audit"
              className="bg-white text-black px-7 py-3.5 font-sans font-semibold uppercase tracking-wider text-xs hover:bg-rs-light transition-colors"
            >
              Book a Revenue Audit
            </Link>
            <a
              href="#how-it-works"
              className="btn-text text-white font-sans text-xs font-semibold uppercase tracking-wider"
            >
              <span>See How It Works</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Mist fade into white section */}
      <motion.div
        style={{ y: mistY, background: 'linear-gradient(to top, white 0%, rgba(255,255,255,0.7) 30%, transparent 100%)' }}
        className="absolute bottom-0 left-0 right-0 h-[38vh] pointer-events-none z-30"
      />

      {/* Side Quick Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <Link
          to="/services"
          className="bg-rs-orange hover:bg-[#e05526] transition-colors px-3 py-5 text-white flex items-center justify-center rounded-l-sm shadow-xl group"
        >
          <span
            className="font-sans text-[0.7rem] font-bold tracking-wider uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Systems & Growth +
          </span>
        </Link>
      </div>
    </section>
  );
}
