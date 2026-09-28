import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AuditFormData {
  name: string;
  company: string;
  businessType: string;
  website: string;
  email: string;
  phone: string;
  currentCrm: string;
  monthlyInquiries: string;
  mainChallenge: string;
  afterInquiryProcess: string;
  interestedService: string;
  additionalContext: string;
  consent: boolean;
}

const businessTypes = [
  'Private Dental Clinic (Implants / Cosmetics / Surgery)',
  'Aesthetic & Dermatology Clinic',
  'Private Medical Practice',
  'High-Value Professional Services (Law, Advisory, Wealth)',
  'B2B Enterprise / Technology',
  'Other High-Value Service Business'
];

const crmOptions = [
  'Doctolib / Julie / Dental Software',
  'HubSpot',
  'Salesforce',
  'Pipedrive / ActiveCampaign',
  'Zoho CRM',
  'Spreadsheets / Manual Notes',
  'None / Looking to Implement',
  'Other'
];

const inquiryVolumes = [
  'Fewer than 25 / month',
  '25 – 75 / month',
  '75 – 200 / month',
  '200 – 500 / month',
  '500+ / month'
];

const serviceOptions = [
  'Revenue Systems (Response, Recovery & Automation)',
  'Revenue Growth (Targeted Outbound & Funnels)',
  'Revenue Creative (Commercial Video, Ads & Social Content)',
  'Full Revenue Infrastructure (Systems + Creative + Growth)',
  'Uncertain / Recommend Based on Audit'
];

export default function Audit() {
  const [formData, setFormData] = useState<AuditFormData>({
    name: '',
    company: '',
    businessType: businessTypes[0],
    website: '',
    email: '',
    phone: '',
    currentCrm: crmOptions[0],
    monthlyInquiries: inquiryVolumes[1],
    mainChallenge: '',
    afterInquiryProcess: '',
    interestedService: serviceOptions[0],
    additionalContext: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setErrorMsg('Please complete all required fields (Name, Company, and Email).');
      return;
    }

    if (!formData.consent) {
      setErrorMsg('Please confirm your consent for Revenue Signal to review your details and contact you.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission handling without external backend dependencies
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 750);
  };

  return (
    <div className="bg-rs-light min-h-screen text-black">
      {/* Top Banner */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-16 px-6 md:px-12 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-rs-orange" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">
              Strategic Commercial Diagnostic
            </span>
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.1] tracking-tight mb-5 text-white">
            Find where your business is losing revenue.
          </h1>

          <p className="font-sans text-white/75 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
            We analyze the path from first inquiry to conversion and identify the gaps that can cost your business opportunities.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-black/10 p-8 md:p-12 shadow-sm font-sans"
            >
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg mb-6">
                ✓
              </div>

              <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-black mb-3 tracking-tight">
                Your Revenue Audit request has been received.
              </h2>

              <p className="font-sans text-rs-gray text-sm sm:text-base leading-relaxed mb-8">
                Thank you, {formData.name}. Our revenue architects will analyze the conversion pathways for <strong className="text-black font-semibold">{formData.company}</strong>.
              </p>

              <div className="border-t border-b border-black/10 py-8 my-8 space-y-6">
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">
                  What Happens Next
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-sans">
                  <div className="p-5 bg-rs-light border border-black/5">
                    <span className="font-mono text-xs text-black/40 block mb-2 font-bold">STAGE 01</span>
                    <h4 className="font-display font-semibold text-base mb-1.5 text-black tracking-tight">Funnel Reconnaissance</h4>
                    <p className="text-xs text-rs-gray leading-relaxed">
                      We examine your digital touchpoints, response speed baseline, and inquiry intake structure.
                    </p>
                  </div>

                  <div className="p-5 bg-rs-light border border-black/5">
                    <span className="font-mono text-xs text-black/40 block mb-2 font-bold">STAGE 02</span>
                    <h4 className="font-display font-semibold text-base mb-1.5 text-black tracking-tight">Leakage Mapping</h4>
                    <p className="text-xs text-rs-gray leading-relaxed">
                      We calculate estimated drop-off friction and pinpoint where qualified inquiries slip away unmonitored.
                    </p>
                  </div>

                  <div className="p-5 bg-rs-light border border-black/5">
                    <span className="font-mono text-xs text-black/40 block mb-2 font-bold">STAGE 03</span>
                    <h4 className="font-display font-semibold text-base mb-1.5 text-black tracking-tight">Executive Briefing</h4>
                    <p className="text-xs text-rs-gray leading-relaxed">
                      We contact you at {formData.email} within 24-48 business hours with your audit findings and options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 font-sans">
                <Link
                  to="/services"
                  className="bg-black text-white px-7 py-3.5 font-semibold uppercase tracking-wider text-xs hover:bg-rs-gray transition-colors w-full sm:w-auto text-center"
                >
                  Explore Revenue Architecture
                </Link>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-wider text-rs-gray hover:text-black py-3 px-2 font-semibold"
                >
                  Submit Additional Information
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="bg-white border border-black/10 p-8 md:p-12 shadow-sm font-sans">
              <div className="mb-8 pb-6 border-b border-black/10">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange block mb-1.5">
                  Diagnostic Intake Form
                </span>
                <p className="font-sans text-sm text-rs-gray leading-relaxed">
                  Please complete the commercial questions below. This allows us to inspect your operational workflow with precision prior to our briefing.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Basics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="audit-name" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      id="audit-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Alexandre Laurent"
                      className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="audit-email" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Work Email *
                    </label>
                    <input
                      id="audit-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alexandre@cabinetlaurent.fr"
                      className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="audit-company" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Company / Practice Name *
                    </label>
                    <input
                      id="audit-company"
                      type="text"
                      name="company"
                      autoComplete="organization"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Clinique Dentaire Madeleine"
                      className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="audit-website" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Website URL
                    </label>
                    <input
                      id="audit-website"
                      type="url"
                      name="website"
                      autoComplete="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://clinique-madeleine.fr"
                      className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="audit-phone" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Phone Number (Direct / WhatsApp)
                    </label>
                    <input
                      id="audit-phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 1 42 00 00 00"
                      className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="audit-business-type" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Business Type
                    </label>
                    <select
                      id="audit-business-type"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    >
                      {businessTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Operations & CRM */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-black/10">
                  <div>
                    <label htmlFor="audit-crm" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Current CRM / Practice Software
                    </label>
                    <select
                      id="audit-crm"
                      name="currentCrm"
                      value={formData.currentCrm}
                      onChange={handleChange}
                      className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    >
                      {crmOptions.map((crm, idx) => (
                        <option key={idx} value={crm}>{crm}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="audit-monthly-inquiries" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Approximate Monthly Inquiries
                    </label>
                    <select
                      id="audit-monthly-inquiries"
                      name="monthlyInquiries"
                      value={formData.monthlyInquiries}
                      onChange={handleChange}
                      className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    >
                      {inquiryVolumes.map((vol, idx) => (
                        <option key={idx} value={vol}>{vol}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Operational Questions */}
                <div className="space-y-6 pt-4 border-t border-black/10">
                  <div>
                    <label htmlFor="audit-after-inquiry" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      What happens immediately after a new inquiry arrives? *
                    </label>
                    <textarea
                      id="audit-after-inquiry"
                      name="afterInquiryProcess"
                      rows={3}
                      value={formData.afterInquiryProcess}
                      onChange={handleChange}
                      placeholder="e.g. An email notification goes to reception. If they are busy with patients, they call back later in the afternoon or the next morning..."
                      className="w-full bg-rs-light border border-black/10 p-4 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="audit-main-challenge" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      What is your single greatest commercial challenge right now?
                    </label>
                    <textarea
                      id="audit-main-challenge"
                      name="mainChallenge"
                      rows={2}
                      value={formData.mainChallenge}
                      onChange={handleChange}
                      placeholder="e.g. Unanswered phone calls during peak hours, high no-show rate for surgical consultations, or poor lead quality from current ads."
                      className="w-full bg-rs-light border border-black/10 p-4 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="audit-interested-service" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Primary Service Category of Interest
                    </label>
                    <select
                      id="audit-interested-service"
                      name="interestedService"
                      value={formData.interestedService}
                      onChange={handleChange}
                      className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    >
                      {serviceOptions.map((serv, idx) => (
                        <option key={idx} value={serv}>{serv}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="audit-additional-context" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Additional Context (Optional)
                    </label>
                    <textarea
                      id="audit-additional-context"
                      name="additionalContext"
                      rows={2}
                      value={formData.additionalContext}
                      onChange={handleChange}
                      placeholder="Any specific treatment focus, high-ticket offering, or timeline details..."
                      className="w-full bg-rs-light border border-black/10 p-4 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Consent & Privacy */}
                <div className="pt-6 border-t border-black/10">
                  <label htmlFor="audit-consent" className="flex items-start gap-3 cursor-pointer">
                    <input
                      id="audit-consent"
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded-none border-black text-black focus:ring-0"
                    />
                    <span className="text-xs text-rs-gray leading-relaxed">
                      I agree to allow Revenue Signal to review our submitted digital information and contact me regarding this audit. We respect your confidentiality. Information is never sold or shared with external parties.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-black text-white px-8 py-4 font-semibold uppercase tracking-wider text-xs hover:bg-rs-gray transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Analyzing Submission...' : 'Request My Revenue Audit →'}
                  </button>
                  <p className="text-[11px] text-rs-gray mt-3">
                    Complimentary executive audit. Delivered within 48 business hours. No automated spam.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
