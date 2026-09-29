import React from 'react';
import { Globe, Smartphone, Code2, Briefcase, Cpu, Sparkles, ArrowRight, Check } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-sky-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-teal-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      default:
        return <Code2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Custom Development Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What We Build
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Every business and idea is unique. We engineer digital solutions tailored directly to your operational workflows and project goals.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 p-7 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-950/40 hover:-translate-y-1"
            >
              <div>
                {/* Header with icon and badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 group-hover:border-blue-500/40 transition-all shadow-inner">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Main Required Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/70 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold tracking-wide transition-all border border-slate-700/70 hover:border-blue-500 cursor-pointer group-hover:shadow-md"
              >
                <span>Discuss {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Have a unique requirement not listed here?</h4>
            <p className="text-sm text-slate-400">
              We specialize in custom logic and tailored solutions. Tell us your exact specifications.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Development Projects')}
            className="shrink-0 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/30 cursor-pointer flex items-center gap-2"
          >
            <span>Request Custom Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
