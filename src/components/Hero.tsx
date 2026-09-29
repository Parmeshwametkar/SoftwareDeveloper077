import React, { useState } from 'react';
import { ArrowRight, Code2, Sparkles, CheckCircle2, Layers, Cpu, Smartphone, Globe, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onStartProject: (projectType?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'flow' | 'spec'>('flow');

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-sky-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-blue-900/30">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span>Accepting New Client Projects & Ideas</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Have a Project Idea?{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                We Build It.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              {COMPANY_INFO.name} turns your ideas and business requirements into reliable digital solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={() => onStartProject()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Small text required */}
            <div className="pt-2 pb-1 border-t border-slate-800/80 w-full max-w-xl">
              <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-wide">
                Websites • Mobile Apps • Custom Software • Business Solutions
              </p>
            </div>

            {/* Trust and direct communication indicator */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct Founder Consultation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Custom Developed To Your Specs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent Milestones</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Solution Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gradient border */}
              <div className="relative rounded-2xl bg-gradient-to-b from-blue-500/20 via-slate-800/60 to-slate-900/90 p-[1px] shadow-2xl shadow-blue-950/60">
                <div className="rounded-2xl bg-slate-950/90 backdrop-blur-xl p-6 sm:p-7">
                  
                  {/* Card Header with tabs */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <span className="text-xs font-mono text-slate-400 ml-2">SoftwareDeveloper077</span>
                    </div>

                    <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-800">
                      <button
                        onClick={() => setActiveTab('flow')}
                        className={`text-xs px-2.5 py-1 rounded-md transition-all font-medium ${
                          activeTab === 'flow'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Project Flow
                      </button>
                      <button
                        onClick={() => setActiveTab('spec')}
                        className={`text-xs px-2.5 py-1 rounded-md transition-all font-medium ${
                          activeTab === 'spec'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Architecture
                      </button>
                    </div>
                  </div>

                  {activeTab === 'flow' ? (
                    <div className="space-y-4">
                      {/* Step 1 */}
                      <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-blue-500/40 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 font-mono text-xs font-bold">
                          01
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Your Project Requirement</div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            You share your idea: e.g., web portal, mobile app, or internal business tool.
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-blue-500/40 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-400 font-mono text-xs font-bold">
                          02
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Requirement Analysis & Plan</div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            We clarify workflows, select technical stack, and map timelines.
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-blue-500/40 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0 text-sky-400 font-mono text-xs font-bold">
                          03
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Engineering & Delivery</div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Built, tested thoroughly, and deployed to your exact requirements.
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-800/40">
                        <div className="flex items-center justify-between text-xs text-blue-200 mb-1">
                          <span className="font-medium">Direct Founder Connection</span>
                          <span className="font-mono text-blue-400 font-semibold">{COMPANY_INFO.founder}</span>
                        </div>
                        <p className="text-xs text-slate-400">
                          Clear, transparent communication without agency layers.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 space-y-1">
                        <div className="text-slate-500">// Project Blueprint Spec</div>
                        <div className="text-blue-400 font-semibold">type ProjectRequirement = &#123;</div>
                        <div className="pl-4 text-emerald-400">clientIdea: <span className="text-slate-300">"Your Custom Concept"</span>;</div>
                        <div className="pl-4 text-emerald-400">targetPlatform: <span className="text-slate-300">"Web" | "Mobile" | "Software"</span>;</div>
                        <div className="pl-4 text-emerald-400">deliveryApproach: <span className="text-slate-300">"Tailored Engineering"</span>;</div>
                        <div className="pl-4 text-emerald-400">testing: <span className="text-slate-300">"Bug-free verification"</span>;</div>
                        <div className="text-blue-400 font-semibold">&#125;;</div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                          <div className="text-[10px] text-slate-400 uppercase font-sans">Code Quality</div>
                          <div className="font-semibold text-white mt-0.5 font-sans">Clean & Modular</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                          <div className="text-[10px] text-slate-400 uppercase font-sans">Device Support</div>
                          <div className="font-semibold text-white mt-0.5 font-sans">100% Responsive</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card Footer Callout */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Ready to discuss your build?</span>
                    <button
                      onClick={() => onStartProject()}
                      className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 group"
                    >
                      <span>Share specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
