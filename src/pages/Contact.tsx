import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const inquiryTypes = [
  { id: 'strategy', label: 'Strategy Conversation' },
  { id: 'audit', label: 'Revenue Audit Request' },
  { id: 'creative', label: 'Creative & Video Project' },
  { id: 'partnership', label: 'Partnership / Integration' },
  { id: 'general', label: 'General Inquiry' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: inquiryTypes[0].id,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="bg-rs-light min-h-screen text-black">
      {/* Header */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-16 px-6 md:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-rs-orange" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange">
              Direct Engagement
            </span>
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.1] tracking-tight mb-5 max-w-4xl text-white">
            Start a direct conversation with our leadership.
          </h1>

          <p className="font-sans text-white/75 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            Whether exploring an operational revenue infrastructure partnership, a bespoke creative project, or a strategic consultation.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 font-sans">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-black/10 p-8 md:p-12"
              >
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg mb-6">
                  ✓
                </div>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-black mb-3 tracking-tight">
                  Message Transmitted.
                </h2>
                <p className="font-sans text-rs-gray leading-relaxed mb-6 text-sm sm:text-base">
                  Thank you, {formData.name}. Your inquiry has been routed to our direct architectural team. We typically respond within 24 business hours.
                </p>
                <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services"
                    className="bg-black text-white px-7 py-3.5 font-semibold uppercase tracking-wider text-xs hover:bg-rs-gray transition-colors text-center"
                  >
                    View Services
                  </Link>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-rs-gray hover:text-black py-3 px-2 font-semibold"
                  >
                    Send Another Note
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white border border-black/10 p-8 md:p-12 font-sans">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-6 text-black tracking-tight">
                  Direct Inquiries
                </h2>

                {errorMsg && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type Radio / Buttons */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-black mb-3">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {inquiryTypes.map(t => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setFormData(p => ({ ...p, inquiryType: t.id }))}
                          className={`text-left p-3 text-xs tracking-wider transition-all border ${
                            formData.inquiryType === t.id
                              ? 'border-black bg-black text-white font-semibold'
                              : 'border-black/10 bg-rs-light text-black/80 hover:border-black/30'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dr. Marie Dupont"
                        className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="marie@cabinet-dupont.fr"
                        className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-company" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                        Company / Practice
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Clinique Esthétique Paris"
                        className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                        Direct Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+33 6 00 00 00 00"
                        className="w-full bg-rs-light border border-black/10 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your primary objective, timeline, or current operational bottleneck..."
                      className="w-full bg-rs-light border border-black/10 p-4 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-black text-white px-8 py-3.5 font-semibold uppercase tracking-wider text-xs hover:bg-rs-gray transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Transmitting...' : 'Start a Conversation →'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Context & Secondary Audit Link */}
          <div className="lg:col-span-5 space-y-8 font-sans">
            {/* Secondary Audit Card */}
            <div className="bg-black text-white p-7 sm:p-8 border border-white/10">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-orange block mb-2">
                Alternative Path
              </span>
              <h3 className="font-display font-semibold text-2xl text-white mb-3 tracking-tight">
                Looking for an operational diagnosis?
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">
                If you want us to review your actual response velocity, intake conversion rates, and leakage bottlenecks before speaking, request a formal audit instead.
              </p>
              <Link
                to="/audit"
                className="inline-block bg-white text-black px-6 py-3 font-semibold uppercase tracking-wider text-xs hover:bg-rs-light transition-colors"
              >
                Request a Revenue Audit →
              </Link>
            </div>

            {/* Geographic & Operating Context */}
            <div className="bg-white border border-black/10 p-7 sm:p-8 space-y-5">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-gray block mb-1">
                  Primary Location
                </span>
                <p className="font-display font-semibold text-base text-black">Paris, France</p>
                <p className="font-sans text-xs text-rs-gray mt-1 leading-relaxed">
                  Serving private clinics across Île-de-France and premium European B2B enterprises.
                </p>
              </div>

              <div className="pt-4 border-t border-black/10">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-rs-gray block mb-1">
                  Confidentiality Notice
                </span>
                <p className="font-sans text-xs text-rs-gray leading-relaxed">
                  All strategic conversations and audit submissions are conducted under strict mutual non-disclosure principles. We never share proprietary practice workflow or commercial metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
