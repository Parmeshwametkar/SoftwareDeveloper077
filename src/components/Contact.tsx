import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  User, 
  Phone, 
  Send, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  FileText, 
  Layers, 
  Copy, 
  Check, 
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ContactProps {
  initialProjectType?: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  projectDescription: string;
  expectedTimeline: string;
  budget: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  projectDescription?: string;
  expectedTimeline?: string;
}

const PROJECT_TYPE_OPTIONS = [
  'Website Development',
  'Mobile App Development',
  'Custom Software Development',
  'Business Applications',
  'Automation Solutions',
  'Custom Development Projects',
  'Other / Custom Requirement',
];

const TIMELINE_OPTIONS = [
  'Urgent (Under 2 weeks)',
  '2 — 4 weeks',
  '1 — 2 months',
  '2 — 3 months',
  'Flexible / To be discussed',
];

export const Contact: React.FC<ContactProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    projectType: initialProjectType || 'Website Development',
    projectDescription: '',
    expectedTimeline: '2 — 4 weeks',
    budget: '',
  });

  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = 'Please provide a valid phone number.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project Description is required.';
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please provide at least 15 characters describing what you need built.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Project Enquiry: ${formData.projectType || 'Software Development'} - from ${formData.fullName}`
    );
    const bodyText = `Hi Parmeshwar,

I would like to discuss a software development project with SoftwareDeveloper077.

--- PROJECT ENQUIRY DETAILS ---
Full Name: ${formData.fullName}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Project Type: ${formData.projectType}
Expected Timeline: ${formData.expectedTimeline}
Budget: ${formData.budget || 'To be discussed'}

Project Description:
${formData.projectDescription}
------------------------------

Looking forward to hearing from you.

Best regards,
${formData.fullName}`;

    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const getFormattedMessageText = () => {
    return `Project Enquiry for SoftwareDeveloper077
------------------------------------
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Expected Timeline: ${formData.expectedTimeline}
Budget: ${formData.budget || 'To be discussed'}

Project Description:
${formData.projectDescription}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitted(true);
    // Open default mail client with pre-filled details
    const mailtoUrl = generateMailtoUrl();
    window.location.href = mailtoUrl;
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(getFormattedMessageText());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'Website Development',
      projectDescription: '',
      expectedTimeline: '2 — 4 weeks',
      budget: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-12 bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Direct Requirement Discussion
          </div>
          {/* Exact Required Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Your Project
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Have a project idea? Fill out the enquiry form below or reach out directly to founder Parmeshwar Metkar.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Founder & Company Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Founder Card */}
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-7 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-4">
                Founder & Lead Developer
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-500/30">
                  PM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {COMPANY_INFO.founder}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Software Development Specialist
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Direct Contact Email:</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-400 hover:text-blue-300 break-all transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{COMPANY_INFO.email}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold tracking-wide transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Email Client (mailto)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* What to expect after submitting */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 space-y-4 text-xs sm:text-sm text-slate-300">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>What Happens Next?</span>
              </h4>
              <ul className="space-y-2.5 text-slate-400 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>1. Review:</strong> Founder Parmeshwar Metkar personally analyzes your project specifications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>2. Discovery:</strong> We reply with questions, suggestions, or schedule a direct chat to clarify requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>3. Roadmap:</strong> We formulate a clear development plan, timeline, and proposal.</span>
                </li>
              </ul>
            </div>

            {/* Privacy pledge */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
              <AlertCircle className="w-4 h-4 text-blue-400 shrink-0" />
              <span>We respect your privacy. Your requirements and contact details remain strictly confidential.</span>
            </div>

          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-sm relative">
              
              {isSubmitted ? (
                /* Success State with mailto triggers and copy feature */
                <div className="py-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Project Enquiry Prepared!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Your enquiry has been formatted and the email client was launched. You can also send or copy it directly below.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 text-left font-mono text-xs text-slate-300 space-y-2 max-h-56 overflow-y-auto">
                    <div className="text-slate-500">// Enquiry Preview to {COMPANY_INFO.email}</div>
                    <div><span className="text-blue-400">Name:</span> {formData.fullName}</div>
                    <div><span className="text-blue-400">Email:</span> {formData.email}</div>
                    <div><span className="text-blue-400">Phone:</span> {formData.phone}</div>
                    <div><span className="text-blue-400">Type:</span> {formData.projectType}</div>
                    <div><span className="text-blue-400">Timeline:</span> {formData.expectedTimeline}</div>
                    {formData.budget && <div><span className="text-blue-400">Budget:</span> {formData.budget}</div>}
                    <div className="pt-2 border-t border-slate-800">
                      <span className="text-blue-400">Description:</span>
                      <p className="text-slate-300 mt-1 whitespace-pre-wrap">{formData.projectDescription}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateMailtoUrl()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/30"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Re-open Email App (mailto)</span>
                    </a>

                    <button
                      onClick={handleCopyText}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition-all cursor-pointer"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Enquiry Text'}</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <button
                      onClick={handleReset}
                      className="text-xs text-slate-400 hover:text-white transition-colors underline cursor-pointer"
                    >
                      Fill another enquiry or edit details
                    </button>
                  </div>
                </div>
              ) : (
                /* The Enquiry Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-400" />
                      <span>Project Enquiry Form</span>
                    </h3>
                    <span className="text-xs text-slate-400">* Required fields</span>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="fullName">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. John Doe / Alex Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-red-500/80 focus:ring-red-500/50'
                            : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/30'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone in 2 columns on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-500/80 focus:ring-red-500/50'
                            : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/30'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-500/80 focus:ring-red-500/50'
                            : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/30'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="projectType">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all cursor-pointer"
                    >
                      {PROJECT_TYPE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-slate-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="projectDescription">
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      rows={4}
                      placeholder="Tell us about your project requirements, target users, key features needed, or existing systems to integrate..."
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all resize-y ${
                        errors.projectDescription
                          ? 'border-red-500/80 focus:ring-red-500/50'
                          : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/30'
                      }`}
                    />
                    {errors.projectDescription ? (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.projectDescription}</span>
                      </p>
                    ) : (
                      <p className="mt-1 text-[11px] text-slate-400">
                        The more detail you provide about your requirements, the faster we can review and respond.
                      </p>
                    )}
                  </div>

                  {/* Expected Timeline & Budget (Optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Expected Timeline */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="expectedTimeline">
                        Expected Timeline
                      </label>
                      <select
                        id="expectedTimeline"
                        value={formData.expectedTimeline}
                        onChange={(e) => setFormData({ ...formData, expectedTimeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all cursor-pointer"
                      >
                        {TIMELINE_OPTIONS.map((time) => (
                          <option key={time} value={time} className="bg-slate-900 text-white">
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget (Optional) */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="budget">
                        Budget <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="budget"
                        type="text"
                        placeholder="e.g. $500 - $1,500 / Flexible"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button Required: "Send Project Enquiry" */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Enquiry</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-2">
                      Submitting prepares a direct enquiry sent to {COMPANY_INFO.email}
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
