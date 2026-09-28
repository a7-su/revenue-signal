import { useState } from 'react';
import { Link } from 'react-router-dom';

const workflowSteps = [
  {
    step: '01',
    title: 'Inquiry Ingestion',
    time: '0.00s',
    action: 'Prospect submits private implant consultation request on website or Google ad.',
    system: 'Revenue Signal webhook captures payload, extracts treatment intent, and writes record to CRM.',
    metric: 'Instant logging with zero drop-off.'
  },
  {
    step: '02',
    title: 'Instant Multi-Channel Outreach',
    time: '< 75 Seconds',
    action: 'Prospect receives a personalized, conversational message via WhatsApp / SMS.',
    system: '"Hello [Name], this is the patient coordinator at [Practice]. We received your implant inquiry. Would you prefer a quick morning or afternoon consultation this week?"',
    metric: 'Engages prospect while still actively browsing.'
  },
  {
    step: '03',
    title: 'Automated Clinical Qualification',
    time: '2 - 3 Minutes',
    action: 'Prospect selects morning and completes a 3-question qualification triage.',
    system: 'Screens candidate for bone graft history, timeline urgency, and single vs. full-arch requirement.',
    metric: 'Separates €8,000 full-arch candidates from general dentistry inquiries.'
  },
  {
    step: '04',
    title: 'Direct Specialist Calendar Locking',
    time: '5 Minutes',
    action: 'Qualified candidate selects an available 3D diagnostic scan slot.',
    system: 'Direct calendar integration syncs with surgeon availability. Confirmation SMS and calendar invite dispatched.',
    metric: 'Zero phone-tag delay.'
  },
  {
    step: '05',
    title: 'No-Show Prevention Protocol',
    time: 'T-48h, T-24h, T-2h',
    action: 'Automated multi-touch prep sequence sends clinic directions, clinician credentials, and reminder.',
    system: 'Requires one-click SMS confirmation. If unconfirmed at T-24h, the slot is re-offered to standby candidates.',
    metric: 'No-show rate minimized under 5%.'
  },
  {
    step: '06',
    title: 'Dormant Proposal Reactivation',
    time: 'Day 7, 21, 45, 90',
    action: 'Prospect attended consultation but hasn’t paid deposit yet.',
    system: 'Automated educational drip delivers clinical safety videos, patient testimonials, and financing options.',
    metric: 'Recovers undecided cases over 90 days without manual staff chasing.'
  }
];

const creativeDemos = [
  {
    type: 'Commercial Authority Film',
    title: 'The Implant Surgery Standard',
    ratio: '16:9 Landscape',
    category: 'Brand Commercial',
    desc: 'Cinematic visual showcase emphasizing surgical hygiene, advanced CBCT 3D guided surgery, and calm patient care in central Paris.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop'
  },
  {
    type: 'High-Intent Acquisition Ad',
    title: 'Smile Transformation in 48 Hours',
    ratio: '4:5 Meta Feed',
    category: 'Paid Performance Creative',
    desc: 'Direct-response multi-hook video creative highlighting cosmetic veneer artistry and permanent full-arch solutions with direct consultation booking link.',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    type: 'Vertical Clinical Short',
    title: '3 Things You Must Know Before Dental Implants',
    ratio: '9:16 Vertical',
    category: 'Reels / TikTok / Shorts',
    desc: 'Educational short-form content featuring clinical director explaining bone density and surgical recovery. Built for organic reach and high engagement.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop'
  },
  {
    type: 'Executive Narrative Spotlight',
    title: 'The Art of Precision Medicine',
    ratio: '16:9 Corporate',
    category: 'Founder / Specialist Positioning',
    desc: 'High-end documentary-style profile framing the clinic founders as international authorities in restorative and aesthetic dentistry.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Work() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  return (
    <div className="bg-rs-light min-h-screen text-black">
      {/* Top Hero */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-16 px-6 md:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-rs-orange" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">
              Architectural Demonstrations
            </span>
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.1] tracking-tight mb-5 max-w-4xl text-white">
            Systems & creative in action.
          </h1>

          <p className="font-sans text-white/75 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
            To maintain client confidentiality and ensure zero fabricated claims, we demonstrate our revenue systems through explicit functional models and illustrative audits.
          </p>
        </div>
      </section>

      {/* SECTION 1: WORKFLOW DEMONSTRATION */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Strict Compliance Label */}
          <div className="inline-block bg-rs-light border border-black/10 px-3.5 py-1.5 mb-6">
            <span className="font-mono text-[10px] tracking-wider text-black/60 uppercase font-bold">
              DEMONSTRATION — NOT CLIENT RESULTS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-black/10">
            <div>
              <h2 className="font-display font-semibold text-2xl sm:text-4xl md:text-5xl mb-3 text-black tracking-tight">
                Interactive revenue system workflow
              </h2>
              <p className="font-sans text-rs-gray text-sm sm:text-base max-w-2xl leading-relaxed">
                Walk through the automated engine deployed for a high-value private clinic in Paris, tracking an inquiry from initial click to paid surgical chair.
              </p>
            </div>
            <Link
              to="/audit"
              className="btn-text text-black flex-shrink-0 font-sans text-xs font-semibold uppercase tracking-wider"
            >
              <span>Build this for your business</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Workflow Interactive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Selection Tabs */}
            <div className="lg:col-span-4 space-y-2 font-sans">
              {workflowSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflow(idx)}
                  className={`w-full text-left p-4 sm:p-5 transition-all border flex items-center justify-between ${
                    activeWorkflow === idx
                      ? 'border-black bg-black text-white'
                      : 'border-black/10 bg-rs-light text-black hover:border-black/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold ${activeWorkflow === idx ? 'text-rs-orange' : 'text-black/40'}`}>
                      {step.step}
                    </span>
                    <span className="font-display font-semibold text-sm sm:text-base tracking-tight">
                      {step.title}
                    </span>
                  </div>
                  <span className={`font-mono text-[10px] uppercase tracking-wider ${activeWorkflow === idx ? 'text-white/60' : 'text-black/40'}`}>
                    {step.time}
                  </span>
                </button>
              ))}
            </div>

            {/* Step Detail Display */}
            <div className="lg:col-span-8 bg-rs-light border border-black/10 p-7 sm:p-10 md:p-12 min-h-[380px] flex flex-col justify-between font-sans">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-black/10 mb-7">
                  <div>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-rs-orange block mb-1">
                      EXECUTION STAGE {workflowSteps[activeWorkflow].step}
                    </span>
                    <h3 className="font-display font-semibold text-2xl sm:text-3xl text-black tracking-tight">
                      {workflowSteps[activeWorkflow].title}
                    </h3>
                  </div>
                  <div className="bg-white border border-black/10 px-3 py-1.5 text-xs font-mono font-bold">
                    Latency: {workflowSteps[activeWorkflow].time}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-black/50 mb-1">
                      Prospect Experience
                    </h4>
                    <p className="text-sm sm:text-base text-black font-medium leading-relaxed">
                      {workflowSteps[activeWorkflow].action}
                    </p>
                  </div>

                  <div className="pt-1">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-black/50 mb-1">
                      Automated System Logic
                    </h4>
                    <p className="text-xs sm:text-sm text-rs-gray leading-relaxed font-mono bg-white p-4 border border-black/5">
                      {workflowSteps[activeWorkflow].system}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-black/10 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-wider font-bold text-rs-orange">
                  Commercial Objective: {workflowSteps[activeWorkflow].metric}
                </span>
                <span className="text-xs text-black/40">
                  Step {activeWorkflow + 1} of {workflowSteps.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SAMPLE REVENUE AUDIT */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-rs-light border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Strict Compliance Label */}
          <div className="inline-block bg-white border border-black/10 px-3.5 py-1.5 mb-6">
            <span className="font-mono text-[10px] tracking-wider text-black/60 uppercase font-bold">
              SAMPLE AUDIT — ILLUSTRATIVE EXAMPLE
            </span>
          </div>

          <div className="mb-14 pb-8 border-b border-black/10">
            <h2 className="font-display font-semibold text-2xl sm:text-4xl md:text-5xl mb-3 text-black tracking-tight">
              Executive funnel diagnostic: representative model
            </h2>
            <p className="font-sans text-rs-gray text-sm sm:text-base max-w-3xl leading-relaxed">
              Below is an illustrative diagnostic demonstrating how we audit a practice funnel. All metrics reflect illustrative scenarios based on typical high-ticket dental clinic procedures (implants, full-arch restorations, smile designs).
            </p>
          </div>

          {/* Sample Audit Profile */}
          <div className="bg-white border border-black/10 p-7 sm:p-10 mb-12 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-8 border-b border-black/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-black/40 block mb-1 font-semibold">Subject Profile</span>
                <p className="font-display font-semibold text-base">Private Clinic Model (Paris 8e)</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-black/40 block mb-1 font-semibold">Inbound Volume</span>
                <p className="font-display font-semibold text-base">120 Inquiries / Month</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-black/40 block mb-1 font-semibold">Avg. Procedure Value</span>
                <p className="font-display font-semibold text-base">€4,500 (Implant / Cosmetic)</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-black/40 block mb-1 font-semibold">Current State</span>
                <p className="text-xs text-red-600 font-bold uppercase tracking-wider">High Latency & Manual Tag</p>
              </div>
            </div>

            {/* 5 Discovered Leakage Points */}
            <div className="pt-8">
              <h3 className="font-display font-semibold text-xl sm:text-2xl mb-6 text-black tracking-tight">
                Identified revenue leaks across the inbound pathway
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-rs-light border border-black/5">
                  <div className="text-xs font-mono text-rs-orange font-bold mb-2">LEAK 01</div>
                  <h4 className="font-display font-semibold text-base mb-1.5 text-black tracking-tight">4.8-Hour Response Latency</h4>
                  <p className="text-xs text-rs-gray leading-relaxed mb-3">
                    Website forms emailed to reception are answered hours later. Prospects have already called rival practices.
                  </p>
                  <span className="text-[11px] font-semibold text-black block">Est. Drop-Off: ~40% of leads lost</span>
                </div>

                <div className="p-6 bg-rs-light border border-black/5">
                  <div className="text-xs font-mono text-rs-orange font-bold mb-2">LEAK 02</div>
                  <h4 className="font-display font-semibold text-base mb-1.5 text-black tracking-tight">Unanswered Missed Calls</h4>
                  <p className="text-xs text-rs-gray leading-relaxed mb-3">
                    Over 20 weekly calls go to voicemail during lunch & surgical hours with zero automated SMS callback.
                  </p>
                  <span className="text-[11px] font-semibold text-black block">Est. Drop-Off: ~15 high-intent callers/mo</span>
                </div>

                <div className="p-6 bg-rs-light border border-black/5">
                  <div className="text-xs font-mono text-rs-orange font-bold mb-2">LEAK 03</div>
                  <h4 className="font-display font-semibold text-base mb-1.5 text-black tracking-tight">24% Consultation No-Show Rate</h4>
                  <p className="text-xs text-rs-gray leading-relaxed mb-3">
                    Unconfirmed diagnostic slots left open without structured T-48h / T-24h verification sequences.
                  </p>
                  <span className="text-[11px] font-semibold text-black block">Direct Impact: Clinician idle chair time</span>
                </div>

                <div className="p-6 bg-rs-light border border-black/5">
                  <div className="text-xs font-mono text-rs-orange font-bold mb-2">LEAK 04</div>
                  <h4 className="font-display font-semibold text-base mb-1.5 text-black tracking-tight">Zero Long-Term Proposal Drips</h4>
                  <p className="text-xs text-rs-gray leading-relaxed mb-3">
                    Candidates who received a €5,000+ treatment estimate but didn’t book immediately receive no further follow-up.
                  </p>
                  <span className="text-[11px] font-semibold text-black block">Est. Dormant Value: Over €200,000 / yr</span>
                </div>

                <div className="p-6 bg-rs-light border border-black/5">
                  <div className="text-xs font-mono text-rs-orange font-bold mb-2">LEAK 05</div>
                  <h4 className="font-display font-semibold text-base mb-1.5 text-black tracking-tight">Lack of Conversion Video Creative</h4>
                  <p className="text-xs text-rs-gray leading-relaxed mb-3">
                    Inbound ads use generic stock visuals that fail to demonstrate surgeon authority, lowering inbound trust.
                  </p>
                  <span className="text-[11px] font-semibold text-black block">Impact: Sub-optimal inquiry qualification</span>
                </div>

                <div className="p-6 bg-black text-white border border-black">
                  <div className="text-xs font-mono text-rs-orange font-bold mb-2">RECOMMENDED ARCHITECTURE</div>
                  <h4 className="font-display font-semibold text-base mb-1.5 text-white tracking-tight">Full Revenue System Fix</h4>
                  <p className="text-xs text-white/70 leading-relaxed mb-3">
                    Deploy instant 90-sec SMS intake + Missed Call Recovery + Automated Deposit Gating + 90-Day Proposal Reactivation.
                  </p>
                  <Link to="/audit" className="text-xs text-rs-orange font-semibold uppercase tracking-wider block mt-2 hover:underline">
                    Get Your Practice Audit →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CREATIVE DEMONSTRATIONS */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-rs-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* Strict Compliance Label */}
          <div className="inline-block bg-black border border-white/20 px-3.5 py-1.5 mb-6">
            <span className="font-mono text-[10px] tracking-wider text-white/60 uppercase font-bold">
              CREATIVE DEMO — CONCEPT FORMATS
            </span>
          </div>

          <div className="mb-14 pb-8 border-b border-white/10">
            <h2 className="font-display font-semibold text-2xl sm:text-4xl md:text-5xl text-white mb-3 tracking-tight">
              Commercial video & creative frameworks
            </h2>
            <p className="font-sans text-white/60 text-sm sm:text-base max-w-3xl leading-relaxed">
              We design and produce commercial video, vertical content, and paid ads positioned strictly for demand generation. Below are our four core creative frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {creativeDemos.map((demo, idx) => (
              <div key={idx} className="bg-black border border-white/10 overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={demo.img}
                    alt={demo.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white border border-white/10">
                    {demo.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-rs-orange px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-white">
                    {demo.ratio}
                  </div>
                </div>

                <div className="p-7 sm:p-8 font-sans">
                  <span className="text-xs uppercase tracking-wider font-semibold text-rs-orange block mb-2">
                    {demo.type}
                  </span>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-white mb-2.5 tracking-tight">
                    {demo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {demo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 border border-white/10 bg-black text-center font-sans">
            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white mb-3 tracking-tight">
              Ready to see the gaps in your own acquisition funnel?
            </h3>
            <p className="font-sans text-sm text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
              We conduct a personalized, confidential diagnostic of your current customer journey.
            </p>
            <Link
              to="/audit"
              className="inline-block bg-white text-black px-8 py-3.5 font-semibold uppercase tracking-wider text-xs hover:bg-rs-light transition-colors"
            >
              Request Your Revenue Audit →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
