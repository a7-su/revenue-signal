import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Market Intelligence',
    subtitle: 'Data-Driven Signals',
    description: 'Proprietary signal models that detect market shifts before they happen. Our algorithms process millions of data points daily to surface actionable intelligence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    stat: 'From $15,000',
  },
  {
    number: '02',
    title: 'Enterprise Growth',
    subtitle: 'Scale Operations',
    description: 'A dedicated team working with you to architect the next phase of global revenue expansion. Customized frameworks built for your specific business model.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    stat: 'From $45,000',
  },
  {
    number: '03',
    title: 'Private Advisory',
    subtitle: 'Exclusive Network',
    description: 'Join an elite inner circle of executives and investors shaping the future of global commerce. Invite-only access to our highest-impact engagements.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    stat: 'Invite Only',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black"
          animate={{ opacity: hovered ? 0.5 : 0.2 }}
          transition={{ duration: 0.4 }}
        />
        {/* Number */}
        <div className="absolute top-6 left-6 text-white/60 font-mono text-xs tracking-wider">
          {service.number}
        </div>
        {/* Stat badge */}
        <div className="absolute top-6 right-6 bg-white text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1.5">
          {service.stat}
        </div>
        {/* Hover CTA */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="border border-white text-white text-hero-label font-semibold uppercase tracking-wider px-8 py-3">
            Learn More
          </div>
        </motion.div>
      </div>

      {/* Card footer */}
      <div className="pt-6 pb-8 border-b border-black/10">
        <div className="text-hero-label text-rs-gray uppercase tracking-wider mb-2">{service.subtitle}</div>
        <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4 tracking-tight">{service.title}</h3>
        <p className="text-rs-gray text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="bg-white pt-0 pb-32 px-6 md:px-12" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={sectionRef} className="flex items-end justify-between mb-16 pt-24 border-t border-black/10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-black" />
              <span className="text-hero-label font-semibold uppercase tracking-wider text-rs-gray">Our Solutions</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-black text-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 6vw, 7rem)' }}
            >
              Our<br />Trips
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:block btn-text text-black"
          >
            <span>View all solutions</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        {/* 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
          {services.map((service, i) => (
            <div key={service.number} className="bg-white p-0 md:pr-8">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
