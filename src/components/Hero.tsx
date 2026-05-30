import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, ChevronDown, Cpu, Sparkles, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid"
    >
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 tech-radial-glow pointer-events-none" />
      <div className="absolute inset-0 tech-radial-glow-teal pointer-events-none" />

      {/* Floating abstract decorative cyber lines */}
      <div className="absolute top-1/4 left-10 w-40 h-40 border border-cyber-blue/10 rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-60 h-60 border border-cyber-teal/5 rounded-full pointer-events-none animate-pulse-slow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyber-blue/20 bg-cyber-blue/5 text-cyber-blue-light font-mono text-xs mb-8"
        >
          <Terminal className="w-3.5 h-3.5 animate-pulse text-cyber-blue" />
          <span>Enterprise Cloud Automation × Pro-Code Full-Stack</span>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-44 h-44 mx-auto mb-8 group"
        >
          {/* Glowing background ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-teal blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow pointer-events-none" />
          
          {/* Inner border and Image wrapper */}
          <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-r from-cyber-blue to-cyber-teal">
            <img
              src="/profile.png"
              alt="Senura Dineth"
              className="w-full h-full rounded-full object-cover bg-cyber-bg border border-white/10 shadow-inner"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          <span className="block text-white">Senura Dineth</span>
          <span className="block mt-2 bg-gradient-to-r from-cyber-blue-light via-white to-cyber-teal-light bg-clip-text text-transparent text-glow-blue">
            Software Engineer
          </span>
        </motion.h1>

        {/* Subheadline & Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-light text-cyber-text-secondary leading-relaxed">
            Architecting enterprise-grade automation and scalable full-stack applications.
          </h2>
          <p className="text-base sm:text-lg text-cyber-text-muted leading-relaxed max-w-2xl mx-auto">
            Specializing in bridging{' '}
            <span className="text-white font-semibold underline decoration-cyber-blue/40 decoration-2 underline-offset-4">
              Microsoft Power Platform & Azure
            </span>{' '}
            with modern pro-code engineering ({' '}
            <span className="text-white font-semibold">React</span>,{' '}
            <span className="text-white font-semibold">Python</span>,{' '}
            <span className="text-white font-semibold">Laravel</span>{' '}
            ) to transform complex business processes into high-value software.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-mono font-medium text-sm px-8 py-4 rounded-xl bg-gradient-to-r from-cyber-blue to-cyber-blue-dark hover:from-cyber-blue-light hover:to-cyber-blue text-white shadow-lg shadow-cyber-blue/20 hover:shadow-cyber-blue/35 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/senura-dineth-5bb158257/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-mono font-medium text-sm px-8 py-4 rounded-xl border border-white/10 hover:border-cyber-blue/40 bg-white/5 hover:bg-cyber-blue/5 text-white transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
          >
            <Linkedin className="w-4 h-4 text-cyber-blue" />
            <span>Connect on LinkedIn</span>
          </a>
        </motion.div>

        {/* Floating tech cards (Visual decor showing duality) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-4 rounded-xl glass-card flex items-center gap-3 text-left border border-white/5"
          >
            <div className="p-2 rounded-lg bg-cyber-blue/10 text-cyber-blue">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyber-text-secondary">Low-Code / Cloud</div>
              <div className="text-sm font-semibold text-white">Power Platform & Azure</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-4 rounded-xl glass-card flex items-center gap-3 text-left border border-white/5"
          >
            <div className="p-2 rounded-lg bg-cyber-teal/10 text-cyber-teal">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyber-text-secondary">Pro-Code Full-Stack</div>
              <div className="text-sm font-semibold text-white">React, Python, Laravel</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="hidden md:flex p-4 rounded-xl glass-card items-center gap-3 text-left border border-white/5 col-span-1"
          >
            <div className="p-2 rounded-lg bg-white/10 text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyber-text-secondary">Methodologies</div>
              <div className="text-sm font-semibold text-white">Agile & Sprint Planner</div>
            </div>
          </motion.div>
        </div>

        {/* Down Arrow */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-16 hidden sm:flex justify-center"
        >
          <a href="#skills" className="p-2 rounded-full bg-white/5 text-cyber-text-muted hover:text-white transition-colors">
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
