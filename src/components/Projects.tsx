import React, { useState } from 'react';
import { 
  Layout, 
  ShoppingBag, 
  Smartphone, 
  Layers, 
  Users, 
  BarChart3, 
  Zap, 
  Terminal, 
  ArrowRight, 
  Info,
  Check
} from 'lucide-react';
import { SOLUTIONS, SolutionItem } from '../data/content';

interface ProjectsProps {
  onSelectSolution: (solutionTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectSolution }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'web', label: 'Web & E-Commerce' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'enterprise', label: 'Operations & CRM' },
    { id: 'automation', label: 'Automation & Custom' },
  ];

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-indigo-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-sky-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-teal-400" />;
      default:
        return <Terminal className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredSolutions = SOLUTIONS.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'web') return item.id === 'business-websites' || item.id === 'ecommerce-websites';
    if (filter === 'mobile') return item.id === 'mobile-applications';
    if (filter === 'enterprise') return item.id === 'management-systems' || item.id === 'customer-management-applications' || item.id === 'business-dashboards';
    if (filter === 'automation') return item.id === 'automation-systems' || item.id === 'custom-software';
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Capabilities & Examples
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Development Solutions
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Explore the types of digital solutions and custom software applications we can design, build, and deploy for your business.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Clear Transparency Notice Required */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-center gap-3 text-xs sm:text-sm text-blue-200">
          <Info className="w-5 h-5 text-blue-400 shrink-0" />
          <div>
            <strong className="font-semibold text-white">Types of solutions we can build:</strong>{' '}
            The cards below represent our software engineering capabilities and the categories of projects we build to your custom requirements.
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of 8 Solution Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSolutions.map((item: SolutionItem) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-slate-900/70 border border-slate-800/80 p-6 hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-950/30"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSolutionIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-mono font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                    {item.category}
                  </span>
                </div>

                {/* Solution Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Sample Features */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/80 mb-4">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Features we can build:
                  </div>
                  {item.sampleFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Check className="w-3 h-3 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="pt-4 border-t border-slate-800/60 mt-2">
                <div className="text-[11px] text-slate-400 mb-3 truncate">
                  <span className="text-slate-400">Ideal for:</span>{' '}
                  <span className="text-slate-300 font-medium">{item.idealFor}</span>
                </div>

                <button
                  onClick={() => onSelectSolution(item.title)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold tracking-wide transition-all border border-slate-700/70 hover:border-blue-500 cursor-pointer flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>Build This Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
