import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSending(true);
      try {
        const response = await fetch('https://formsubmit.co/ajax/senuradineth22@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`
          })
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert('Failed to transmit message. Please contact me directly at senuradineth22@gmail.com.');
        }
      } catch (error) {
        console.error('Mail submit error:', error);
        alert('Transmission error. Please check your connection or contact me directly.');
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-cyber-bg relative border-t border-white/5 tech-grid">
      <div className="absolute inset-0 tech-radial-glow pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Contact Information
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyber-blue to-cyber-teal rounded-full" />
              <p className="text-cyber-text-secondary text-sm leading-relaxed">
                I am currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyber-text-muted uppercase">Email</div>
                  <a
                    href="mailto:senuradineth22@gmail.com"
                    className="text-sm font-mono text-white hover:text-cyber-blue transition-colors font-medium"
                  >
                    senuradineth22@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-cyber-teal/10 border border-cyber-teal/20 text-cyber-teal shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyber-text-muted uppercase">Location</div>
                  <div className="text-sm font-semibold text-white tracking-wide">
                    Sri Lanka
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl glass-card border border-white/5 shadow-xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-5 text-left relative z-10">
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="text-xs font-mono text-cyber-text-secondary">
                    Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    disabled={isSending}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-cyber-blue/30 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none text-white font-mono text-sm transition-all duration-300 disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-email" className="text-xs font-mono text-cyber-text-secondary">
                    Email
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    disabled={isSending}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-cyber-blue/30 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none text-white font-mono text-sm transition-all duration-300 disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-xs font-mono text-cyber-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    disabled={isSending}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-cyber-blue/30 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none text-white font-mono text-sm transition-all duration-300 resize-none disabled:opacity-50"
                    placeholder="Describe your project details"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2 font-mono font-bold text-sm px-6 py-4 rounded-xl bg-cyber-blue hover:bg-cyber-blue/90 disabled:bg-cyber-blue/50 disabled:cursor-not-allowed text-white shadow-lg shadow-cyber-blue/15 hover:shadow-cyber-blue/30 transition-all duration-300 group"
                  >
                    {isSending ? (
                      <>
                        <span>Sending message...</span>
                        <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Success Notification overlay */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-cyber-surface/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center space-y-4"
                  >
                    <div className="p-3 rounded-full bg-cyber-teal/15 text-cyber-teal border border-cyber-teal/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                      <p className="text-xs text-cyber-text-secondary max-w-xs">
                        Thank you for reaching out. I will review your message and connect back shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
