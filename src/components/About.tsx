import React from 'react';
import { User, CheckCircle, Target, Sparkles, Shield, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutProps {
  onStartProject: () => void;
}

export const About: React.FC<AboutProps> = ({ onStartProject }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900/40 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Foundation & Approach
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About {COMPANY_INFO.name}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Description & Founder Note */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Target className="w-5 h-5 text-blue-400" />
                <span>Dedicated Custom Software Development</span>
              </h3>

              {/* Exact content required */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {COMPANY_INFO.name} is a software development company focused on building customized digital solutions for businesses, startups and individuals. We understand your requirements, plan the solution and develop software according to your project needs.
              </p>

              {/* Exact founder text required */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20">
                    PM
                  </div>
                  <div>
                    <div className="text-base font-bold text-white tracking-tight">
                      Founded by {COMPANY_INFO.founder}
                    </div>
                    <div className="text-xs text-blue-400 font-medium">
                      Lead Developer & Founder
                    </div>
                  </div>
                </div>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-xs text-slate-400 hover:text-slate-200 transition-colors font-mono underline underline-offset-4"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Core Mission Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/50 via-slate-900/60 to-indigo-950/50 border border-blue-900/40">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-blue-300 mb-1">
                    Our Direct Promise
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    &ldquo;If you have a software project idea, tell us your requirements and we can build it for you.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Principles / How we operate */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Requirement-First Approach</h4>
                  <p className="text-sm text-slate-400 leading-normal">
                    We listen carefully before writing a single line of code. Every feature is aligned with your real operational goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Direct Communication</h4>
                  <p className="text-sm text-slate-400 leading-normal">
                    You work directly with the founder and developer. No middlemen, no miscommunication, and prompt status updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Clean & Reliable Code</h4>
                  <p className="text-sm text-slate-400 leading-normal">
                    Solutions engineered with modern standards for security, speed, and responsiveness across desktops, tablets, and phones.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
