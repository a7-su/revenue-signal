import Hero from '../components/Hero';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section className="bg-white py-24 sm:py-32 px-6 md:px-12 relative z-40">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-8 h-px bg-rs-orange" />
            <h2 className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">
              The Revenue Leak
            </h2>
            <div className="w-8 h-px bg-rs-orange" />
          </div>
          
          <div className="flex flex-col items-center gap-5 font-display font-medium text-xl sm:text-2xl md:text-3xl text-black/40 tracking-tight">
            <span className="text-black font-semibold">Lead arrives</span>
            <span className="h-6 w-px bg-black/15" />
            <span>Slow response</span>
            <span className="h-6 w-px bg-black/15" />
            <span>No follow-up</span>
            <span className="h-6 w-px bg-black/15" />
            <span>Missed appointment</span>
            <span className="h-6 w-px bg-black/15" />
            <span>Lost customer</span>
            <span className="h-6 w-px bg-black/15" />
            <span className="text-rs-orange font-bold">Lost revenue</span>
          </div>

          <div className="mt-16">
            <h3 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-black">
              Revenue Signal closes the operational gaps.
            </h3>
            <p className="font-sans text-rs-gray mt-5 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We engineer the capture, response, qualification, and recovery infrastructure so no qualified commercial opportunity slips away unaddressed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CoreSystems() {
  const cards = [
    {
      title: 'Revenue Systems',
      tagline: 'Stop losing revenue between inquiry and payment',
      desc: 'Lead capture, instant sub-90-second response, calendar booking automation, missed-call recovery, no-show reduction, and dormant database reactivation.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Revenue Growth',
      tagline: 'Create a predictable flow of qualified opportunities',
      desc: 'Precision ICP research, decision-maker verification, personalized multi-channel outbound with human approval, and high-converting landing pages.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
    },
    {
      title: 'Revenue Creative',
      tagline: 'Creative built to generate demand and convert attention',
      desc: 'Commercial brand films, high-retention short-form video, multi-hook paid advertising creatives, and strategic social editorial production.',
      img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop'
    }
  ];

  return (
    <section className="bg-rs-black py-24 sm:py-32 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-rs-orange" />
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">Three Core Systems</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="group relative overflow-hidden bg-black aspect-[4/5] border border-white/10">
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-35 grayscale group-hover:scale-105 group-hover:opacity-45 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="font-mono text-xs font-bold text-rs-orange mb-2">SYSTEM 0{i + 1}</span>
                <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-2 text-white tracking-tight">{card.title}</h3>
                <span className="font-sans text-xs font-medium uppercase tracking-wider text-white/70 block mb-4">
                  {card.tagline}
                </span>
                <p className="font-sans text-white/60 text-xs sm:text-sm leading-relaxed mb-8">{card.desc}</p>
                <Link to="/services" className="btn-text text-white w-max">
                  <span>Explore Architecture</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecoveryFunnel() {
  return (
    <section className="bg-rs-light py-24 sm:py-32 px-6 md:px-12 border-b border-black/5">
      <div className="max-w-5xl mx-auto text-center">
        <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange block mb-4">
          Pipeline Telemetry
        </span>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-12 text-black">
          Revenue recovery funnel
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 font-display font-medium text-base sm:text-lg md:text-xl mb-12 bg-white p-6 sm:p-8 border border-black/10 shadow-sm">
          <span className="text-black">Opportunity</span>
          <span className="text-rs-orange font-bold">→</span>
          <span className="text-black">Response</span>
          <span className="text-rs-orange font-bold">→</span>
          <span className="text-black">Qualification</span>
          <span className="text-rs-orange font-bold">→</span>
          <span className="text-black">Booking</span>
          <span className="text-rs-orange font-bold">→</span>
          <span className="text-black">Attendance</span>
          <span className="text-rs-orange font-bold">→</span>
          <span className="text-black font-semibold">Conversion</span>
        </div>

        <p className="font-sans text-rs-gray max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed">
          Every arrow represents a drop-off point where potential revenue disappears. We build the automated infrastructure to plug these leaks and recover missed opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/audit"
            className="bg-black text-white px-7 py-3.5 font-sans font-semibold uppercase tracking-wider text-xs hover:bg-rs-gray transition-colors w-full sm:w-auto"
          >
            Find Your Revenue Leaks
          </Link>
          <Link
            to="/work"
            className="btn-text text-black font-sans text-xs font-semibold uppercase tracking-wider"
          >
            <span>See Workflow Demonstration</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CreativeSection() {
  return (
    <section className="bg-white py-24 sm:py-32 px-6 md:px-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
        <div className="relative aspect-square md:aspect-[4/5] bg-rs-light overflow-hidden group border border-black/10">
          <img 
            src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop" 
            alt="Creative Production Architecture" 
            className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
          <div className="absolute top-4 left-4 bg-black/85 text-white px-3 py-1 font-mono text-[10px] tracking-wider uppercase border border-white/20">
            CREATIVE FRAMEWORK DEMO
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-rs-orange" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">Revenue Creative</span>
          </div>
          
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl mb-6 leading-[1.12] tracking-tight text-black">
            Turn your brand into content that creates demand.
          </h2>
          
          <div className="flex items-center gap-5 font-display font-semibold text-base sm:text-xl uppercase tracking-tight text-black/35 mb-6 border-y border-black/10 py-3.5">
            <span className="text-black font-bold">Attention</span>
            <span className="text-rs-orange text-lg">→</span>
            <span className="text-black font-bold">Interest</span>
            <span className="text-rs-orange text-lg">→</span>
            <span className="text-black font-bold">Action</span>
          </div>

          <p className="font-sans text-rs-gray mb-8 max-w-md text-sm leading-relaxed">
            Commercial video, vertical social content, and advertising creative built explicitly to generate demand and convert attention into business.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/services" className="btn-text text-black font-sans text-xs font-semibold uppercase tracking-wider">
              <span>View Creative Services</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/work" className="font-sans text-xs uppercase tracking-wider font-semibold text-rs-gray hover:text-black">
              See Creative Formats
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { num: '01', title: 'Diagnose', desc: 'Understand your current funnel and identify exact operational revenue leaks.' },
    { num: '02', title: 'Build', desc: 'Implement the required automation, routing, and multi-channel follow-up systems.' },
    { num: '03', title: 'Optimize', desc: 'Improve speed-to-lead, qualification scoring, and conversion sequences.' },
    { num: '04', title: 'Measure', desc: 'Track speed, show-up rates, and recovered revenue through real-time dashboards.' },
  ];

  return (
    <section className="bg-white py-24 sm:py-32 px-6 md:px-12" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-rs-orange" />
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">How We Work</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="border-t border-black/10 pt-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-rs-orange mb-3 block">
                PHASE {step.num}
              </span>
              <h3 className="font-display font-semibold text-xl sm:text-2xl mb-3 text-black tracking-tight">{step.title}</h3>
              <p className="font-sans text-rs-gray text-xs sm:text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InitialMarket() {
  return (
    <section className="bg-rs-black text-white py-24 sm:py-28 px-6 md:px-12 text-center border-b border-white/10">
      <div className="max-w-4xl mx-auto space-y-6">
        <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange block">
          Initial Market Focus
        </span>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug tracking-tight text-white">
          Built first for high-value dental businesses in Paris. Scaled for premium B2B enterprises globally.
        </h2>
        <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Private dental clinics in Paris focused on implants, cosmetic dentistry, and other high-value treatments require zero opportunity loss. The underlying service architecture remains applicable to other high-value B2B businesses.
        </p>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/audit"
            className="bg-white text-black px-7 py-3.5 font-sans font-semibold uppercase tracking-wider text-xs hover:bg-rs-light transition-colors w-full sm:w-auto"
          >
            Book a Revenue Audit
          </Link>
          <Link
            to="/work"
            className="btn-text text-white font-sans text-xs font-semibold uppercase tracking-wider"
          >
            <span>Explore Clinical Workflows</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <CoreSystems />
      <RecoveryFunnel />
      <CreativeSection />
      <ProcessSection />
      <InitialMarket />
    </>
  );
}
