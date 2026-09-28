import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <footer className="bg-rs-black text-white pt-20 sm:pt-24 pb-12 px-6 md:px-12 border-t border-white/10 font-sans" id="contact">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20 sm:mb-24">
          
          {/* Main CTA Area */}
          <div className="md:col-span-7 lg:col-span-8">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange block mb-3">
              Revenue Leakage Diagnostic
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-7 text-white"
            >
              Find where your business is losing revenue before it disappears.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-wrap gap-5 items-center pt-2"
            >
              <Link
                to="/audit"
                className="bg-white text-black px-7 py-3.5 font-sans font-semibold uppercase tracking-wider text-xs hover:bg-rs-light transition-colors"
              >
                Request a Revenue Audit
              </Link>
              <Link
                to="/contact"
                className="btn-text text-white font-sans text-xs font-semibold uppercase tracking-wider"
              >
                <span>Speak with an Architect</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col gap-3">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Architecture</span>
                <Link to="/services" className="text-xs tracking-wide text-white/80 hover:text-white transition-colors">Revenue Systems</Link>
                <Link to="/services" className="text-xs tracking-wide text-white/80 hover:text-white transition-colors">Revenue Growth</Link>
                <Link to="/services" className="text-xs tracking-wide text-white/80 hover:text-white transition-colors">Revenue Creative</Link>
                <Link to="/services" className="text-xs tracking-wide text-white/80 hover:text-white transition-colors">Revenue Intelligence</Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Company</span>
                <Link to="/about" className="text-xs tracking-wide text-white/80 hover:text-white transition-colors">About Us</Link>
                <Link to="/work" className="text-xs tracking-wide text-white/80 hover:text-white transition-colors">Demonstrations</Link>
                <Link to="/audit" className="text-xs tracking-wide text-white/80 hover:text-white transition-colors">Free Audit</Link>
                <Link to="/contact" className="text-xs tracking-wide text-white/80 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <p className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange mb-1">European Operations</p>
              <p className="text-xs text-white/70 leading-relaxed">
                Paris, France<br />
                Dedicated revenue architecture for private medical, dental, and high-value B2B enterprises.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} Revenue Signal. All rights reserved. Registered commercial revenue systems.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-[11px] text-white/40 hover:text-white transition-colors">Confidentiality Protocol</Link>
            <Link to="/contact" className="text-[11px] text-white/40 hover:text-white transition-colors">Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
