import React from 'react';
import { Terminal, Mail, User, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How We Work', href: '#how-we-work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1px] shadow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </div>

            {/* Exact Required Tagline */}
            <p className="text-slate-300 text-sm max-w-md leading-relaxed font-normal">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>

            {/* Founder & Email details */}
            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span>Founder: <strong className="text-white font-semibold">{COMPANY_INFO.founder}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">{COMPANY_INFO.email}</a></span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Focus */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-300">
              Solutions
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Websites & Web Apps</li>
              <li>Mobile Applications</li>
              <li>Custom Business Software</li>
              <li>Operational Dashboards</li>
              <li>Workflow Automation Systems</li>
            </ul>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="text-slate-400 text-center sm:text-right">
            Crafted for reliable business and startup software delivery.
          </div>
        </div>

      </div>
    </footer>
  );
};
