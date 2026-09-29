import React from 'react';
import { ArrowRight, Mail, Sparkles, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface CTAProps {
  onStartProject: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onStartProject }) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-indigo-600/20 to-sky-600/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 border border-slate-800 p-8 sm:p-12 lg:p-16 text-center shadow-2xl shadow-black/60 overflow-hidden">
          
          {/* Subtle top highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turn Your Idea Into Code</span>
          </div>

          {/* Exact Required Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Have a Project in Mind?
          </h2>

          {/* Exact Required Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Whether you need a website, mobile application, custom software or a business solution, tell us about your requirements.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base border border-slate-700 transition-all"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Email Founder Directly</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
            Directly reviewed by founder <span className="text-slate-200 font-semibold">{COMPANY_INFO.founder}</span> • Typical response within 24 hours
          </div>

        </div>
      </div>
    </section>
  );
};
