import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code2, Layers } from 'lucide-react';

interface SkillsProps {
  activeFilter: 'all' | 'pro' | 'enterprise';
  setActiveFilter: (filter: 'all' | 'pro' | 'enterprise') => void;
}

export const Skills: React.FC<SkillsProps> = ({ activeFilter, setActiveFilter }) => {
  const skillCategories = [
    {
      id: 'enterprise',
      title: 'Enterprise & Cloud Automation',
      icon: <Cloud className="w-5 h-5 text-cyber-blue" />,
      skills: [
        { name: 'Microsoft Power Platform', level: 'Expert', focus: 'enterprise' },
        { name: 'Dataverse', level: 'Expert', focus: 'enterprise' },
        { name: 'SharePoint Framework (SPFX)', level: 'Advanced', focus: 'enterprise' },
        { name: 'Azure AD / Entra ID', level: 'Advanced', focus: 'enterprise' },
        { name: 'Solution & Database Design', level: 'Advanced', focus: 'enterprise' },
      ],
    },
    {
      id: 'procode',
      title: 'Pro-Code Full-Stack Development',
      icon: <Code2 className="w-5 h-5 text-cyber-teal" />,
      skills: [
        { name: 'React', level: 'Expert', focus: 'pro' },
        { name: 'Angular', level: 'Intermediate', focus: 'pro' },
        { name: 'Tailwind CSS', level: 'Expert', focus: 'pro' },
        { name: 'Python (Django / Data Science)', level: 'Advanced', focus: 'pro' },
        { name: 'Laravel (PHP)', level: 'Advanced', focus: 'pro' },
      ],
    },
    {
      id: 'methodologies',
      title: 'Methodologies & Delivery',
      icon: <Layers className="w-5 h-5 text-white" />,
      skills: [
        { name: 'Agile Framework / Scrum', level: 'Expert', focus: 'all' },
        { name: 'Sprint Management', level: 'Expert', focus: 'all' },
        { name: 'Application Lifecycle (ALM)', level: 'Advanced', focus: 'all' },
        { name: 'Code Reviewing & QA', level: 'Expert', focus: 'all' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-cyber-bg relative border-t border-white/5 tech-grid">
      <div className="absolute inset-0 tech-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-xs font-mono tracking-widest text-cyber-blue uppercase mb-3">Capabilities Matrix</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">Advanced Skills & Toolkits</p>
          </div>

          {/* Interactive Filters */}
          <div className="inline-flex p-1.5 rounded-xl bg-cyber-card border border-white/5 self-start">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-cyber-text-secondary hover:text-white'
              }`}
            >
              Show All
            </button>
            <button
              onClick={() => setActiveFilter('pro')}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                activeFilter === 'pro'
                  ? 'bg-cyber-teal/20 text-cyber-teal-light border border-cyber-teal/30'
                  : 'text-cyber-text-secondary hover:text-cyber-teal-light'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Pro-Code Focus
            </button>
            <button
              onClick={() => setActiveFilter('enterprise')}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                activeFilter === 'enterprise'
                  ? 'bg-cyber-blue/20 text-cyber-blue-light border border-cyber-blue/30'
                  : 'text-cyber-text-secondary hover:text-cyber-blue-light'
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              Enterprise & Cloud
            </button>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const isFaded =
              activeFilter !== 'all' &&
              category.id !== 'methodologies' &&
              ((activeFilter === 'pro' && category.id !== 'procode') ||
                (activeFilter === 'enterprise' && category.id !== 'enterprise'));

            return (
              <motion.div
                key={category.id}
                layout
                animate={{
                  opacity: isFaded ? 0.35 : 1,
                  scale: isFaded ? 0.98 : 1,
                  filter: isFaded ? 'grayscale(40%) blur(0.5px)' : 'grayscale(0%) blur(0px)',
                }}
                transition={{ duration: 0.4 }}
                className={`p-6 sm:p-8 rounded-2xl glass-card transition-all duration-300 flex flex-col justify-between ${
                  isFaded
                    ? 'border-white/5 opacity-40'
                    : category.id === 'procode'
                    ? 'hover:border-cyber-teal/30 hover:shadow-[0_0_20px_rgba(20,184,166,0.05)]'
                    : category.id === 'enterprise'
                    ? 'hover:border-cyber-blue/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.05)]'
                    : 'hover:border-white/15'
                }`}
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                    <div
                      className={`p-2.5 rounded-xl ${
                        category.id === 'procode'
                          ? 'bg-cyber-teal/10 text-cyber-teal'
                          : category.id === 'enterprise'
                          ? 'bg-cyber-blue/10 text-cyber-blue'
                          : 'bg-white/5 text-white'
                      }`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-wide">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {category.skills.map((skill) => {
                      const isSkillHighlighted =
                        activeFilter === 'all' ||
                        skill.focus === 'all' ||
                        skill.focus === activeFilter;

                      return (
                        <div
                          key={skill.name}
                          className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                            isSkillHighlighted
                              ? 'bg-white/[0.02] border border-white/5'
                              : 'opacity-50 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                skill.focus === 'pro'
                                  ? 'bg-cyber-teal'
                                  : skill.focus === 'enterprise'
                                  ? 'bg-cyber-blue'
                                  : 'bg-white/60'
                              }`}
                            />
                            <span className="text-sm font-medium text-white">{skill.name}</span>
                          </div>
                          <span
                            className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded border ${
                              skill.focus === 'pro'
                                ? 'border-cyber-teal/30 bg-cyber-teal/5 text-cyber-teal-light'
                                : skill.focus === 'enterprise'
                                ? 'border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue-light'
                                : 'border-white/20 bg-white/5 text-cyber-text-secondary'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyber-text-muted">
                  <span>CAPABILITY LEVEL</span>
                  <span>PRODUCTION READY</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
