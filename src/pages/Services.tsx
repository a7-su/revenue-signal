import { useState } from 'react';
import { Link } from 'react-router-dom';

const systemsServices = [
  {
    id: 'lead-capture',
    title: 'Lead Capture & Multi-Channel Routing',
    problem: 'Inquiries arrive through websites, WhatsApp, Instagram DMs, phone calls, and referral channels with no centralized intake, causing 20-40% to slip through the cracks unnoticed.',
    implements: 'Bespoke intake forms, unified webhook routing, instant CRM ingestion, and immediate multi-channel notification to your front-desk or commercial team.',
    outcome: 'Zero uncaptured inquiries. Every prospect enters a tracked pipeline within 3 seconds of submission.',
    useCase: 'A private dental clinic in Paris capturing emergency implant inquiries from Google Ads directly into their patient coordinator queue with source attribution.'
  },
  {
    id: 'lead-qualification',
    title: 'Automated Lead Qualification & Scoring',
    problem: 'High-value clinicians and sales directors waste hours fielding unqualified, low-intent price shoppers instead of serious treatment candidates.',
    implements: 'Interactive triage sequences, clinical/budget intake screening, automated qualification scoring, and dynamic lead routing based on prospective value.',
    outcome: 'Your team only spends consultation time with high-intent, qualified prospects who meet your target criteria.',
    useCase: 'Screening cosmetic dentistry inquiries to filter full-mouth veneer candidates from single-tooth cleanings before calendar booking.'
  },
  {
    id: 'instant-response',
    title: 'Instant Lead Response (< 90 Seconds)',
    problem: 'Lead conversion drops by 391% if response time exceeds 5 minutes. Most private clinics and firms take 3-24 hours to return an email or missed inquiry.',
    implements: 'Triggered conversational SMS, WhatsApp, and email follow-up initiated within 60-90 seconds of form submission, warming the lead immediately with human handoff protocol.',
    outcome: 'Dramatic increase in contact rate and booking conversion while interest is at its absolute peak.',
    useCase: 'A prospective patient requests a smile makeover consultation at 8:30 PM on a Sunday and receives an immediate personalized WhatsApp response offering priority morning booking.'
  },
  {
    id: 'appointment-automation',
    title: 'Appointment Booking & Calendar Automation',
    problem: 'Back-and-forth phone tag and delayed calendar links lead to drop-offs before an initial consultation is ever scheduled.',
    implements: 'Direct calendar integration, room/practitioner availability logic, instant confirmation notifications, calendar invite generation, and automatic pre-consultation intake.',
    outcome: 'Self-serve booking experience with zero manual friction and immediate calendar locking.',
    useCase: 'Automated direct scheduling for complex implant diagnostic scans synchronized with specialist surgery room availability.'
  },
  {
    id: 'missed-call-recovery',
    title: 'Missed-Call Revenue Recovery',
    problem: 'Front desks are busy with in-person patients. An unanswered phone call is almost always a prospect immediately calling the next competitor on Google.',
    implements: 'Instant missed-call detection that automatically triggers an immediate personalized SMS: "Hello, we missed your call while assisting a patient. How can we help you right now?"',
    outcome: 'Converts lost phone drop-offs into active two-way text conversations within seconds.',
    useCase: 'Recovering 15-25 missed patient phone calls per week during peak surgical hours in an 8th arrondissement clinic.'
  },
  {
    id: 'no-show-recovery',
    title: 'No-Show & Cancellation Recovery',
    problem: 'High-value consultation slots left empty due to last-minute cancellations directly erode monthly profitability and clinician utilization.',
    implements: 'Multi-touch confirmation protocols (T-72h, T-24h, T-2h), instant cancellation detection, and automated fast-track rebooking campaigns.',
    outcome: 'No-show rates pushed below 5%, with cancelled slots automatically re-offered to standby priority candidates.',
    useCase: 'A surgical consultation canceled 24 hours in advance automatically triggers a notification to 3 waitlisted patients, filling the chair immediately.'
  },
  {
    id: 'lead-reactivation',
    title: 'Dormant Database Lead Reactivation',
    problem: 'Hundreds of past inquiries, abandoned treatment estimates, and cold contacts sit untouched in legacy spreadsheets and software.',
    implements: 'Structured reactivation campaigns delivered via personalized SMS and direct email sequences to re-engage past consultations without ad spend.',
    outcome: 'Immediate windfall revenue generated entirely from existing dormant assets.',
    useCase: 'Reactivating 45 dormant implant proposals from the prior 12 months, resulting in 8 confirmed high-ticket procedures.'
  },
  {
    id: 'crm-automation',
    title: 'CRM Setup & Pipeline Architecture',
    problem: 'Off-the-shelf CRMs are either over-complicated bloatware or unconfigured contact lists where deals stall without clear lifecycle stages.',
    implements: 'Clean, customized pipeline architecture tailored to your specific commercial lifecycle, stage gating, automated task assignments, and data hygiene.',
    outcome: 'Complete operational visibility where every team member knows the exact next action for every open opportunity.',
    useCase: 'Mapping high-value clinical treatment pipelines from "Inquiry" to "3D Scan Booked" to "Treatment Plan Presented" to "Deposit Received".'
  },
  {
    id: 'follow-up-automation',
    title: 'Long-Term Follow-Up Sequences',
    problem: 'Over 60% of high-ticket decisions happen between the 4th and 12th touchpoint, but manual follow-up almost universally stops after 1-2 attempts.',
    implements: 'Multi-month educational, objection-handling, and case-demonstration drip workflows that nurture prospects until they are ready to buy.',
    outcome: 'Compounding conversion gains over 60, 90, and 180 days with zero manual overhead.',
    useCase: 'Nurturing undecided all-on-4 dental implant prospects with clinical safety standards, financing explanations, and recovery timeline insights.'
  },
  {
    id: 'revenue-dashboard',
    title: 'Revenue Analytics Dashboard',
    problem: 'Business owners receive generic marketing metrics (clicks, impressions, views) that fail to correlate with actual collected revenue.',
    implements: 'Real-time telemetry tracking: Net Inquiries, Qualified Opportunities, Speed-to-Lead, Booked Consultations, Show-Up Rate, and Closed Revenue Value.',
    outcome: 'Clear, executive-level visibility into commercial throughput and exact bottleneck identification.',
    useCase: 'Executive view comparing Google Ads revenue yield vs. organic referral conversion across specific high-margin clinical offerings.'
  },
  {
    id: 'client-reporting',
    title: 'Monthly Executive Performance Reporting',
    problem: 'Agencies provide automated 30-page PDF dumps of vanity metrics designed to confuse rather than inform strategic decisions.',
    implements: 'A concise monthly executive summary reviewing funnel conversion velocity, revenue captured, pipeline value generated, and concrete next-cycle recommendations.',
    outcome: 'Strategic clarity and ongoing alignment on commercial growth levers.',
    useCase: 'Monthly strategic review with clinic founders analyzing cost-per-consultation-attended and pipeline recovery ROI.'
  }
];

const growthServices = [
  {
    category: 'Prospect Research & Intelligence',
    items: [
      { name: 'Ideal Customer Profile (ICP) Mapping', desc: 'Precise definition of highest-margin accounts and decision-maker characteristics.' },
      { name: 'Decision-Maker Identification', desc: 'Direct sourcing of verified C-suite, clinical director, or founder contact intelligence.' },
      { name: 'Lead List Validation & Enrichment', desc: 'Bespoke list curation with verified direct dial, email deliverability, and firmographic data.' }
    ]
  },
  {
    category: 'Outbound & Direct Acquisition',
    items: [
      { name: 'Personalized Multi-Channel Outbound', desc: 'Highly contextualized email and LinkedIn outreach built on relevant business triggers.' },
      { name: 'Human Approval Safeguards', desc: 'Strict human verification before outbound dispatch to preserve brand reputation.' },
      { name: 'Response Management Infrastructure', desc: 'Dedicated inbox routing, warm reply triage, and instant escalation to your commercial team.' }
    ]
  },
  {
    category: 'Conversion Asset Architecture',
    items: [
      { name: 'Campaign-Specific Landing Pages', desc: 'Single-objective, high-converting acquisition pages tailored to specific high-ticket offers.' },
      { name: 'Frictionless Booking & Offer Flows', desc: 'Streamlined intake steps engineered to maximize form-completion rates.' },
      { name: 'Continuous Funnel Conversion Auditing', desc: 'Iterative bottleneck analysis, copy split-testing, and user interaction diagnostics.' }
    ]
  }
];

const creativeServices = [
  {
    title: 'Commercial Video Production',
    subtitle: 'High-Fidelity Demand Generation',
    desc: 'Bespoke brand commercials, promotional campaign assets, corporate authority films, and clinical treatment showcases engineered to establish immediate trust and premium positioning.',
    bullets: ['Brand Commercials & Authority Films', 'Service & Clinical Treatment Spotlights', 'Patient & Client Narrative Testimonials', 'Founder & Executive Positioning Videos']
  },
  {
    title: 'Short-Form Video Architecture',
    subtitle: 'Attention Capture at Scale',
    desc: 'Vertical video crafted for Instagram Reels, LinkedIn, YouTube Shorts, and TikTok that cuts through market noise, demonstrates authority, and converts passive viewers into active inquiries.',
    bullets: ['Clinical Insight & Procedure Explanations', 'Behind-the-Scenes Expertise & Trust Building', 'Myth-Busting & Objection Handling Formats', 'Algorithmic Hook Optimization']
  },
  {
    title: 'Performance Ad Creatives',
    subtitle: 'Direct-Response Conversion',
    desc: 'High-intent visual assets designed for Meta, Google, and YouTube advertising. Built with deliberate hook variations, narrative structures, and clear commercial call-to-actions.',
    bullets: ['Multi-Hook Angle Testing', 'High-Converting Offer Creatives', 'Dynamic Retargeting Asset Suites', 'Creative Iteration Based on Real Data']
  },
  {
    title: 'Editorial Social Media Content',
    subtitle: 'Strategic Brand Presence',
    desc: 'End-to-end creative direction, monthly content architecture, multi-slide educational carousels, and high-value editorial writing that positions your company as the preeminent choice.',
    bullets: ['Strategic Content Pillar Design', 'Monthly Multi-Format Content Calendar', 'Editorial Carousels & Static Authority Posts', 'Professional Creative Direction & Scheduling']
  }
];

const intelligenceServices = [
  {
    title: 'Comprehensive Revenue Audit',
    desc: 'An exhaustive, forensic analysis of your entire commercial funnel—from initial digital touchpoint through first response, triage, calendar booking, attendance, and closed transaction.'
  },
  {
    title: 'Patient & Customer Journey Audit',
    desc: 'Mapping every friction point, psychological hesitation, and procedural drop-off that prospects encounter when interacting with your organization.'
  },
  {
    title: 'Speed-to-Lead & Response Audit',
    desc: 'Real-world mystery shopper diagnostic testing your response latency across web forms, live chat, missed calls, and weekend inquiries.'
  },
  {
    title: 'Digital Authority & Competitor Diagnostic',
    desc: 'Benchmarking your market positioning, conversion assets, and creative messaging against the top 5 direct competitors in your regional vertical.'
  },
  {
    title: 'Revenue Opportunity & Leakage Report',
    desc: 'A concrete executive diagnostic quantifying the estimated revenue lost to operational leakage, with an actionable blueprint to recover it.'
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<'systems' | 'growth' | 'creative' | 'intelligence'>('systems');

  return (
    <div className="bg-rs-light min-h-screen text-black">
      {/* Hero Header */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 px-6 md:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-rs-orange" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">
              Commercial Architecture
            </span>
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.08] tracking-tight mb-6 max-w-5xl text-white">
            Revenue systems built to eliminate opportunity loss.
          </h1>

          <p className="font-sans text-white/75 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-normal">
            Revenue Signal combines workflow automation, direct acquisition, commercial video creative, and intelligence into a unified commercial infrastructure.
          </p>

          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/10">
            <button
              onClick={() => setActiveTab('systems')}
              className={`px-4 py-2.5 font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'systems' ? 'bg-white text-black' : 'border border-white/20 text-white/80 hover:border-white'
              }`}
            >
              1. Revenue Systems
            </button>
            <button
              onClick={() => setActiveTab('growth')}
              className={`px-4 py-2.5 font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'growth' ? 'bg-white text-black' : 'border border-white/20 text-white/80 hover:border-white'
              }`}
            >
              2. Revenue Growth
            </button>
            <button
              onClick={() => setActiveTab('creative')}
              className={`px-4 py-2.5 font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'creative' ? 'bg-white text-black' : 'border border-white/20 text-white/80 hover:border-white'
              }`}
            >
              3. Revenue Creative
            </button>
            <button
              onClick={() => setActiveTab('intelligence')}
              className={`px-4 py-2.5 font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'intelligence' ? 'bg-white text-black' : 'border border-white/20 text-white/80 hover:border-white'
              }`}
            >
              4. Revenue Intelligence
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: REVENUE SYSTEMS */}
      <section id="systems" className={`py-20 sm:py-24 px-6 md:px-12 bg-white ${activeTab !== 'systems' && 'hidden md:block'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 pb-8 border-b border-black/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">Category 01</span>
              <div className="w-8 h-px bg-black/15" />
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-rs-gray">Core Retainer Foundation</span>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl mb-4 text-black tracking-tight">
              Revenue Systems
            </h2>
            <p className="font-display font-medium text-lg sm:text-2xl text-black max-w-3xl leading-snug">
              Stop losing revenue between inquiry and payment.
            </p>
            <p className="font-sans text-rs-gray mt-3 max-w-2xl text-sm leading-relaxed">
              Every system below is designed to eliminate drop-off, decrease response friction, and transform unorganized inbound leads into closed revenue opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {systemsServices.map((service, index) => (
              <div key={service.id} className="border border-black/10 p-7 sm:p-8 bg-rs-light flex flex-col justify-between hover:border-black/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold tracking-wider text-rs-orange">
                      SYSTEM {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-wider px-2.5 py-1 bg-white border border-black/10 font-semibold text-black/70">
                      Automated Pipeline
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-xl sm:text-2xl mb-5 text-black tracking-tight">
                    {service.title}
                  </h3>

                  <div className="space-y-4 text-sm font-sans">
                    <div>
                      <strong className="block text-xs uppercase tracking-wider font-semibold text-black/50 mb-1">
                        The Operational Problem
                      </strong>
                      <p className="text-rs-gray leading-relaxed text-xs sm:text-sm">{service.problem}</p>
                    </div>

                    <div className="pt-1">
                      <strong className="block text-xs uppercase tracking-wider font-semibold text-black mb-1">
                        What Revenue Signal Implements
                      </strong>
                      <p className="text-black/85 leading-relaxed text-xs sm:text-sm">{service.implements}</p>
                    </div>

                    <div className="pt-1">
                      <strong className="block text-xs uppercase tracking-wider font-semibold text-rs-orange mb-1">
                        Commercial Business Outcome
                      </strong>
                      <p className="text-black font-semibold leading-relaxed text-xs sm:text-sm">{service.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-black/10 bg-white p-4">
                  <span className="font-sans text-[10px] uppercase font-bold tracking-wider text-rs-gray block mb-1">
                    Representative Deployment
                  </span>
                  <p className="font-sans text-xs text-black/75 leading-relaxed">{service.useCase}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: REVENUE GROWTH */}
      <section id="growth" className={`py-20 sm:py-24 px-6 md:px-12 bg-rs-light border-t border-black/10 ${activeTab !== 'growth' && 'hidden md:block'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 pb-8 border-b border-black/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">Category 02</span>
              <div className="w-8 h-px bg-black/15" />
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-rs-gray">Predictable Acquisition</span>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl mb-4 text-black tracking-tight">
              Revenue Growth
            </h2>
            <p className="font-display font-medium text-lg sm:text-2xl text-black max-w-3xl leading-snug">
              Create a predictable flow of qualified opportunities.
            </p>
            <p className="font-sans text-rs-gray mt-3 max-w-2xl text-sm leading-relaxed">
              We engineer direct prospecting, high-converting offer landing pages, and account-based outreach systems designed specifically for high-ticket decision-makers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growthServices.map((group, idx) => (
              <div key={idx} className="bg-white p-7 sm:p-8 border border-black/10 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-rs-orange block mb-3">
                    PHASE {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl mb-6 pb-4 border-b border-black/10 tracking-tight text-black">
                    {group.category}
                  </h3>
                  <div className="space-y-5 font-sans">
                    {group.items.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wide text-black mb-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-rs-gray leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-5 border-t border-black/10 font-sans">
                  <span className="text-xs font-bold uppercase tracking-wider text-black block mb-1">
                    Quality Standard
                  </span>
                  <p className="text-xs text-rs-gray leading-relaxed">
                    All outbound communications require human verification before dispatch to safeguard brand standing and client reputation.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: REVENUE CREATIVE */}
      <section id="creative" className={`py-20 sm:py-24 px-6 md:px-12 bg-rs-black text-white ${activeTab !== 'creative' && 'hidden md:block'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">Category 03</span>
              <div className="w-8 h-px bg-white/20" />
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-white/60">Commercial Media Engine</span>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl mb-4 text-white tracking-tight">
              Revenue Creative
            </h2>
            <p className="font-display font-medium text-lg sm:text-2xl text-white max-w-3xl leading-snug">
              Creative built to generate demand and convert attention into business.
            </p>
            <p className="font-sans text-white/60 mt-3 max-w-2xl text-sm leading-relaxed">
              We do not provide generic video editing or vanity social posts. We build targeted commercial visual assets that establish authority and compel prospects to act.
            </p>
          </div>

          {/* 4 Creative Service Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {creativeServices.map((cat, i) => (
              <div key={i} className="bg-black p-7 sm:p-9 border border-white/10">
                <span className="font-mono text-xs font-bold text-rs-orange tracking-wider block mb-2">
                  PILLAR 0{i + 1}
                </span>
                <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white mb-1.5 tracking-tight">{cat.title}</h3>
                <span className="font-sans text-xs uppercase tracking-wider text-white/50 block mb-5 font-semibold">
                  {cat.subtitle}
                </span>
                <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">
                  {cat.desc}
                </p>
                <div className="space-y-2 pt-4 border-t border-white/10 font-sans">
                  {cat.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3 text-xs text-white/80">
                      <span className="w-1.5 h-1.5 bg-rs-orange rounded-full flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Video Repurposing Framework */}
          <div className="bg-black border border-white/10 p-7 sm:p-10">
            <div className="max-w-3xl mb-10">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange block mb-2">
                Operational Framework
              </span>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                The Video Repurposing Architecture
              </h3>
              <p className="font-sans text-sm text-white/65 leading-relaxed">
                High-value clinicians and executives have limited time. Our production methodology extracts maximum commercial mileage from a single strategic recording session.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center font-sans">
              <div className="bg-white/5 border border-white/10 p-6 text-center">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-4 text-xs font-bold text-white font-mono">
                  01
                </div>
                <h4 className="font-display font-semibold text-base text-white mb-2 tracking-tight">1 Core Production Recording</h4>
                <p className="text-xs text-white/60 leading-relaxed">60-90 min strategic recording covering treatment mastery, clinical workflows, and authority positioning.</p>
              </div>

              <div className="hidden lg:flex justify-center text-rs-orange text-xl font-bold">→</div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rs-orange block mb-1">Asset Suite A</span>
                  <h5 className="font-display font-semibold text-sm text-white mb-1.5 tracking-tight">8-12 Vertical Shorts</h5>
                  <p className="text-[11px] text-white/60 leading-relaxed">TikTok, Reels, LinkedIn & Shorts with dynamic typography and surgical hooks.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rs-orange block mb-1">Asset Suite B</span>
                  <h5 className="font-display font-semibold text-sm text-white mb-1.5 tracking-tight">4-6 Direct Ads</h5>
                  <p className="text-[11px] text-white/60 leading-relaxed">Meta & YouTube paid ads formatted with multiple hook angles and conversion CTAs.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rs-orange block mb-1">Asset Suite C</span>
                  <h5 className="font-display font-semibold text-sm text-white mb-1.5 tracking-tight">Editorial Carousels</h5>
                  <p className="text-[11px] text-white/60 leading-relaxed">Educational slide graphics and authority breakdowns transcribed into social assets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: REVENUE INTELLIGENCE */}
      <section id="intelligence" className={`py-20 sm:py-24 px-6 md:px-12 bg-white ${activeTab !== 'intelligence' && 'hidden md:block'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 pb-8 border-b border-black/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">Category 04</span>
              <div className="w-8 h-px bg-black/15" />
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-rs-gray">Diagnosis & Optimization</span>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl mb-4 text-black tracking-tight">
              Revenue Intelligence
            </h2>
            <p className="font-display font-medium text-lg sm:text-2xl text-black max-w-3xl leading-snug">
              Find where potential revenue is disappearing before it becomes revenue.
            </p>
            <p className="font-sans text-rs-gray mt-3 max-w-2xl text-sm leading-relaxed">
              We audit your operational funnel to identify exact drop-off points, quantify unrealized opportunity value, and deliver actionable engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
            {intelligenceServices.map((item, idx) => (
              <div key={idx} className="border border-black/10 p-7 bg-rs-light flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-rs-orange tracking-wider block mb-3">
                    DIAGNOSTIC 0{idx + 1}
                  </span>
                  <h3 className="font-display font-semibold text-xl mb-3 text-black tracking-tight">{item.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-rs-gray leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Policy Statement */}
          <div className="bg-rs-black text-white p-8 md:p-11">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange block mb-2">
                  Engagement Model
                </span>
                <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white mb-2.5 tracking-tight">
                  Custom Monthly Retainer & System Engagements
                </h3>
                <p className="font-sans text-sm text-white/65 max-w-2xl leading-relaxed">
                  Revenue Signal works through customized monthly retainers and staged system implementations. Exact pricing depends directly on opportunity volume, workflow complexity, team handoff requirements, and technical scope.
                </p>
              </div>
              <Link
                to="/audit"
                className="bg-white text-black px-7 py-3.5 font-sans font-semibold uppercase tracking-wider text-xs hover:bg-rs-light transition-colors whitespace-nowrap flex-shrink-0"
              >
                Request a Revenue Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Global CTA */}
      <section className="py-20 px-6 md:px-12 bg-rs-light border-t border-black/10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl mb-4 text-black tracking-tight">
            Ready to identify your revenue leaks?
          </h2>
          <p className="font-sans text-rs-gray text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Book an initial diagnostic audit. We analyze your customer acquisition pathway and present concrete opportunities to recover lost business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/audit"
              className="bg-black text-white px-7 py-3.5 font-sans font-semibold uppercase tracking-wider text-xs hover:bg-rs-gray transition-colors w-full sm:w-auto"
            >
              Request Revenue Audit
            </Link>
            <Link
              to="/contact"
              className="btn-text text-black font-sans text-xs font-semibold uppercase tracking-wider"
            >
              <span>Speak with an Architect</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
