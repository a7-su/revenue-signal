import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-rs-light min-h-screen text-black">
      {/* Header */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 px-6 md:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-rs-orange" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">
              Company Philosophy
            </span>
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.08] tracking-tight mb-6 max-w-5xl text-white">
            Revenue systems for businesses that cannot afford to lose opportunities.
          </h1>

          <p className="font-sans text-white/75 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
            Revenue Signal was founded on a simple commercial reality: businesses do not fail because they lack marketing advice. They fail because their inbound opportunities leak through operational gaps before conversion.
          </p>
        </div>
      </section>

      {/* The Core Contrast Section */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-white font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange block mb-3">
              The Structural Flaw
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl md:text-5xl leading-[1.12] text-black tracking-tight">
              Why traditional marketing retainers fail high-ticket businesses.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-rs-gray leading-relaxed">
            <p>
              Most businesses spend thousands of euros generating traffic and social media presence, only to have valuable inquiries sit unanswered in an overcrowded email inbox or an unmonitored voicemail box.
            </p>
            <p>
              Traditional digital marketing agencies focus on vanity deliverables—impressions, clicks, and generic social posts. They stop at the lead form. What happens in the crucial 5 minutes after a prospective customer reaches out is treated as someone else's problem.
            </p>
            <div className="border-l-2 border-rs-orange pl-6 py-2 my-6 text-black font-display font-semibold text-lg sm:text-xl leading-snug tracking-tight">
              "If a €5,000 inquiry takes 4 hours to receive a response, marketing did not succeed—operational friction lost the customer to a faster competitor."
            </div>
            <p>
              Revenue Signal integrates workflow automation, instant triage, missed-call recovery, and performance creative into one single engineering discipline: ensuring no qualified commercial opportunity is ever dropped.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Commercial Pillars */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-rs-light border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange block mb-2">
              The Architecture
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl md:text-5xl tracking-tight text-black">
              The Revenue Signal lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 font-sans">
            <div className="bg-white p-7 border border-black/10">
              <span className="font-mono text-xs font-bold text-rs-orange block mb-2.5">01 // ATTRACT</span>
              <h3 className="font-display font-semibold text-lg sm:text-xl mb-2 text-black tracking-tight">Targeted Demand</h3>
              <p className="text-xs text-rs-gray leading-relaxed">
                Precision outbound research, high-authority commercial video production, and conversion landing pages that draw in serious decision-makers.
              </p>
            </div>

            <div className="bg-white p-7 border border-black/10">
              <span className="font-mono text-xs font-bold text-rs-orange block mb-2.5">02 // CONVERT</span>
              <h3 className="font-display font-semibold text-lg sm:text-xl mb-2 text-black tracking-tight">Frictionless Intake</h3>
              <p className="text-xs text-rs-gray leading-relaxed">
                Sub-90-second response workflows, multi-channel triage, automated intake qualification, and direct calendar locking.
              </p>
            </div>

            <div className="bg-white p-7 border border-black/10">
              <span className="font-mono text-xs font-bold text-rs-orange block mb-2.5">03 // RECOVER</span>
              <h3 className="font-display font-semibold text-lg sm:text-xl mb-2 text-black tracking-tight">Leakage Plugging</h3>
              <p className="text-xs text-rs-gray leading-relaxed">
                Automated missed-call textback, multi-stage no-show prevention protocols, and dormant proposal re-engagement campaigns.
              </p>
            </div>

            <div className="bg-white p-7 border border-black/10">
              <span className="font-mono text-xs font-bold text-rs-orange block mb-2.5">04 // MEASURE</span>
              <h3 className="font-display font-semibold text-lg sm:text-xl mb-2 text-black tracking-tight">Telemetry</h3>
              <p className="text-xs text-rs-gray leading-relaxed">
                Real-time operational dashboards tracking speed-to-lead, qualified pipeline value, attendance rates, and closed transaction yield.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Positioning Note */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-rs-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-5 font-sans">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange block">
            Initial Geographic & Vertical Focus
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug tracking-tight text-white">
            Built first for high-value dental businesses in Paris. Scaled for premium B2B enterprises globally.
          </h2>
          <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our frameworks were refined around the extreme demands of private surgical practices in Paris—where consultation slots represent thousands of euros and patient trust is paramount. The underlying infrastructure applies directly to aesthetic clinics, private medical practices, and high-ticket B2B professional services.
          </p>
          <div className="pt-6">
            <Link
              to="/audit"
              className="inline-block bg-white text-black px-8 py-3.5 font-semibold uppercase tracking-wider text-xs hover:bg-rs-light transition-colors"
            >
              Request a Revenue Audit →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
