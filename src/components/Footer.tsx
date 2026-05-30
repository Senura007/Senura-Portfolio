import React from 'react';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="py-16 bg-[#030508] border-t border-slate-900 text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12">
          
          {/* Left: Brand Logo & Bio */}
          <div className="space-y-4 max-w-md">
            <span className="font-mono text-2xl font-bold tracking-wider text-white">
              Senura<span className="text-cyber-blue">.</span>
            </span>
            <p className="text-sm text-cyber-text-secondary leading-relaxed">
              Building scalable, user-friendly, and business-driven digital solutions.
            </p>
          </div>

          {/* Right: Social Action Row */}
          <div className="flex items-center gap-4 md:pt-2">
            <a
              href="https://www.linkedin.com/in/senura-dineth-5bb158257/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-800 hover:border-cyber-blue bg-white/5 hover:bg-cyber-blue/10 text-cyber-text-secondary hover:text-white transition-all duration-300 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-800 hover:border-cyber-teal bg-white/5 hover:bg-cyber-teal/10 text-cyber-text-secondary hover:text-white transition-all duration-300 shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:senuradineth22@gmail.com"
              className="p-3 rounded-full border border-slate-800 hover:border-cyber-blue bg-white/5 hover:bg-cyber-blue/10 text-cyber-text-secondary hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-cyber-text-muted">
          <div>
            &copy; {new Date().getFullYear()} Senura Dineth. All rights reserved.
          </div>
          
          <a
            href="#about"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-cyber-text-muted hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </footer>
  );
};
