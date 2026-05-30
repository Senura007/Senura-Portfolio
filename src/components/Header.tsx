import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-bg/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#about" className="flex items-center gap-2 group">
            <span className="font-mono text-xl font-bold tracking-wider text-white">
              SENURA<span className="text-cyber-blue">.</span>
              <span className="text-cyber-teal">D</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue-light transition-all duration-300 group-hover:border-cyber-teal/30 group-hover:bg-cyber-teal/5 group-hover:text-cyber-teal-light">
              Cloud & Dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-white relative py-1 ${
                  activeSection === item.href.slice(1)
                    ? 'text-white'
                    : 'text-cyber-text-secondary'
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyber-blue to-cyber-teal rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Socials / CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/senura-dineth-5bb158257/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-cyber-text-secondary hover:text-cyber-blue transition-colors rounded-lg hover:bg-white/5"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 text-xs font-mono font-medium px-4 py-2 rounded-lg border border-white/10 hover:border-cyber-blue/40 bg-white/5 hover:bg-cyber-blue/5 text-white transition-all duration-300 shadow-sm"
            >
              <Mail className="w-4 h-4 text-cyber-blue" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/senura-dineth-5bb158257/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-cyber-text-secondary hover:text-cyber-blue transition-colors rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-cyber-text-secondary hover:text-white transition-colors rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[57px] bg-cyber-bg/95 border-b border-white/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                activeSection === item.href.slice(1)
                  ? 'bg-cyber-blue/10 text-white border-l-2 border-cyber-blue'
                  : 'text-cyber-text-secondary hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/5 flex gap-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 text-sm font-mono font-medium px-4 py-3 rounded-lg border border-cyber-blue/30 bg-cyber-blue/5 hover:bg-cyber-blue/10 text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-cyber-blue" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
