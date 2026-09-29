import React from 'react';
import { ArrowRight, Lightbulb, MessagesSquare, Compass, Code, CheckCircle, PackageCheck } from 'lucide-react';
import { WORK_STEPS, WorkStep } from '../data/content';

interface HowWeWorkProps {
  onStartProject: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onStartProject }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 1:
        return <MessagesSquare className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case 3:
        return <Code className="w-5 h-5 text-sky-400" />;
      case 4:
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case 5:
        return <PackageCheck className="w-5 h-5 text-teal-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="how-we-work" className="py-20 md:py-28 bg-slate-900/40 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Structured & Transparent Execution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Build Your Project
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            From initial idea to deployed solution, we follow an organized, transparent development cycle to turn your vision into working software.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WORK_STEPS.map((item: WorkStep, index: number) => (
            <div
              key={item.step}
              className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 p-7 hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Step number badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-mono font-extrabold text-blue-400/90 group-hover:text-blue-300 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(index)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                  {item.title}
                </h3>

                {/* Main Required Description */}
                <p className="text-slate-200 text-sm font-medium mb-3 leading-relaxed">
                  &ldquo;{item.description}&rdquo;
                </p>

                {/* Detailed operational insight */}
                <p className="text-xs text-slate-400 leading-relaxed pt-3 border-t border-slate-800/80">
                  {item.details}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Phase 0{index + 1} of 06</span>
                <span className="text-blue-400/60 group-hover:text-blue-400 transition-colors">Step {item.step} →</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below steps */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Ready for Step 01? Share Your Project Idea</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
