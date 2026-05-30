import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, Cloud, Code2, ShieldCheck, DollarSign } from 'lucide-react';

interface Project {
  name: string;
  desc: string;
  tags: string[];
  focus: 'pro' | 'enterprise';
  metric?: string;
  icon: React.ReactNode;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  focus: string;
  details: string[];
  projects: Project[];
}

interface ExperienceProps {
  activeFilter: 'all' | 'pro' | 'enterprise';
  setActiveFilter: (filter: 'all' | 'pro' | 'enterprise') => void;
}

export const Experience: React.FC<ExperienceProps> = ({ activeFilter, setActiveFilter }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default expand the first item

  const experiences: ExperienceItem[] = [
    {
      role: 'Team Lead & Associate Software Engineer',
      company: 'H One (PVT) Ltd',
      period: '2026 - Present',
      focus: 'all',
      details: [
        'Facilitate Agile Scrum sprint planning sessions and coordinate code delivery schedules across client projects.',
        'Act as the primary point of contact for technical client requirement gathering and architectural scope design.',
        'Lead code reviews, establishing development checklists, and mentoring junior engineers in clean code principles.'
      ],
      projects: [
        {
          name: 'Agile Pipeline Automation',
          desc: 'Implemented CI/CD pipelines and automated code quality auditing protocols across both Low-Code solutions and Pro-Code apps.',
          tags: ['Agile', 'DevOps', 'ALM', 'Azure DevOps'],
          focus: 'pro',
          icon: <Code2 className="w-4 h-4" />
        }
      ]
    },
    {
      role: 'Associate Software Engineer',
      company: 'H One (PVT) Ltd',
      period: '2025 JUNE - PRESENT',
      focus: 'all',
      details: [
        'Co-developed key enterprise cloud services and automated administrative workflows using the Microsoft Power Platform & Azure environment.',
        'Resolved escalated Level-2 support tickets to preserve tenant database and application health, maintaining strict system reliability.',
        'Conducted Microsoft Power Platform enablement workshops to upscale and train client business users in automated work pipelines.'
      ],
      projects: [
        {
          name: 'Fishing Management Solution (Overseas Project)',
          desc: 'Co-developed a Power Apps solution for ship registration, voyage management, and species tracking with offline support.',
          tags: ['Power Apps', 'Offline Sync', 'Dataverse', 'Overseas'],
          focus: 'enterprise',
          metric: 'Offline Tracking Enabled',
          icon: <Cloud className="w-4 h-4" />
        },
        {
          name: 'Bank Account Initiation & Approval Solution',
          desc: 'Developed a Power Apps workflow system for account initiation, approvals, reporting, and audit logs.',
          tags: ['Power Apps', 'Approvals', 'SQL Database', 'Audit Logs'],
          focus: 'enterprise',
          metric: 'Audit-Proof Secured',
          icon: <Cloud className="w-4 h-4" />
        },
        {
          name: 'Employee Time Tracking Solution',
          desc: 'Co-developed a timesheet system that replaced a third-party platform, reducing licensing costs.',
          tags: ['Power Apps', 'SharePoint', 'Power Automate', 'Cost Optimization'],
          focus: 'enterprise',
          metric: '100% License Cost Cut',
          icon: <Cloud className="w-4 h-4" />
        },
        {
          name: 'L2 Support',
          desc: 'Resolved escalated support tickets and maintained high system reliability across deployed business solutions.',
          tags: ['L2 Support', 'Troubleshooting', 'System Reliability'],
          focus: 'enterprise',
          icon: <ShieldCheck className="w-4 h-4" />
        },
        {
          name: 'App in a Day & Trainings',
          desc: 'Conducted Microsoft Power Platform workshops and training sessions for business users.',
          tags: ['Power Platform', 'Training', 'Workshops'],
          focus: 'enterprise',
          icon: <Cloud className="w-4 h-4" />
        }
      ]
    },
    {
      role: 'Intern - Software Engineering',
      company: 'H One (PVT) Ltd',
      period: '2024 JUNE - 2025 MAY',
      focus: 'all',
      details: [
        'Developed internal administrative Power Apps to streamline business workflows, medical claims, and HR offboarding workflows.',
        'Explored SPFx, Power Pages, Azure Sentinel, and Azure Logic Apps to conduct research and development on security and automation solutions.',
        'Established structural foundations for enterprise governance by deploying and customizing the Power Platform Center of Excellence (CoE) Kit.'
      ],
      projects: [
        {
          name: 'Medical Claims Submission App',
          desc: 'Developed a Power Apps solution for medical claim submission and tracking with automated notifications.',
          tags: ['Power Apps', 'Power Automate', 'Notifications'],
          focus: 'enterprise',
          icon: <Cloud className="w-4 h-4" />
        },
        {
          name: 'Power Platform CoE Kit',
          desc: 'Developed a Power Apps workflow system for account initiation, approvals, reporting, and audit logs.',
          tags: ['CoE Kit', 'Power Apps', 'Governance', 'Audit Logs'],
          focus: 'enterprise',
          icon: <Cloud className="w-4 h-4" />
        },
        {
          name: 'Document Tracker App',
          desc: 'Built an automated solution to track Excel file changes in SharePoint using Power Automate.',
          tags: ['Power Automate', 'SharePoint', 'Automation'],
          focus: 'enterprise',
          icon: <Cloud className="w-4 h-4" />
        },
        {
          name: 'Employee Offboarding App',
          desc: 'Developed a Power Apps solution to streamline employee offboarding and approval workflows.',
          tags: ['Power Apps', 'Approvals', 'HR Workflows'],
          focus: 'enterprise',
          icon: <Cloud className="w-4 h-4" />
        },
        {
          name: 'CV Shortlisting & Interview Scheduler',
          desc: 'Created a recruitment management tool integrated with Microsoft Teams for scheduling and notifications.',
          tags: ['Teams Integration', 'Recruitment', 'Scheduling'],
          focus: 'pro',
          icon: <Code2 className="w-4 h-4" />
        },
        {
          name: 'R&D Initiatives',
          desc: 'Explored SPFx, Power Pages, Azure Sentinel, and Azure Logic Apps for security and automation solutions.',
          tags: ['SPFx', 'Power Pages', 'Azure Sentinel', 'Logic Apps'],
          focus: 'pro',
          icon: <Code2 className="w-4 h-4" />
        },
        {
          name: 'SharePoint Document Management System',
          desc: 'Designed a document management solution with role-based access control and automated notifications.',
          tags: ['SharePoint', 'RBAC', 'Document Management'],
          focus: 'enterprise',
          icon: <Cloud className="w-4 h-4" />
        }
      ]
    }
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 bg-cyber-bg relative border-t border-white/5">
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyber-teal/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyber-blue uppercase mb-3">Professional Milestones</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">Experience Timeline & Progression</p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue to-cyber-teal mx-auto mt-4 rounded-full" />
        </div>

        {/* Local/Master Filter Synced Widget */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-cyber-card border border-white/5">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-cyber-text-secondary hover:text-white'
              }`}
            >
              All Items
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
              Pro-Code Projects
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
              Enterprise/Cloud
            </button>
          </div>
        </div>

        {/* Timeline Track */}
        <div className="relative border-l border-white/10 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            
            // Filter projects based on activeFilter
            const filteredProjects = exp.projects.filter(
              (p) => activeFilter === 'all' || p.focus === activeFilter
            );

            return (
              <div key={exp.role} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-500 bg-cyber-bg z-10 ${
                    isExpanded
                      ? 'border-cyber-blue scale-125 shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                      : 'border-white/20 group-hover:border-white/50'
                  }`}
                />

                {/* Main Card */}
                <div className="rounded-2xl glass-card transition-all duration-300 border border-white/5 hover:border-white/10 overflow-hidden shadow-md">
                  {/* Collapsed view header click area */}
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 hover:bg-white/[0.01] transition-colors"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded border border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue-light">
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono text-cyber-text-secondary">{exp.company}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">{exp.role}</h3>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-cyber-text-muted hover:text-white transition-transform duration-300 shrink-0 ${
                        isExpanded ? 'rotate-90 text-white' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-8 sm:px-8 border-t border-white/5 pt-6 space-y-6 bg-white/[0.01]">
                          {/* Role Details */}
                          <div className="space-y-3">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-cyber-text-secondary">Core Scope</h4>
                            <ul className="space-y-2.5">
                              {exp.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-sm text-cyber-text-secondary">
                                  <CheckCircle2 className="w-4 h-4 text-cyber-blue mt-0.5 shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Specific Projects Spotlight */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-cyber-text-secondary">
                              Key Projects & Applications
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {filteredProjects.map((project) => {
                                const isProjectActive =
                                  activeFilter === 'all' || project.focus === activeFilter;

                                return (
                                  <div
                                    key={project.name}
                                    className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                                      isProjectActive
                                        ? project.focus === 'pro'
                                          ? 'bg-cyber-teal/5 border-cyber-teal/20 shadow-[0_0_15px_rgba(20,184,166,0.02)]'
                                          : 'bg-cyber-blue/5 border-cyber-blue/20 shadow-[0_0_15px_rgba(59,130,246,0.02)]'
                                        : 'bg-white/[0.01] border-white/5 opacity-40 grayscale blur-[0.2px]'
                                    }`}
                                  >
                                    <div>
                                      <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                          <div
                                            className={`p-1.5 rounded-lg ${
                                              project.focus === 'pro'
                                                ? 'bg-cyber-teal/15 text-cyber-teal'
                                                : 'bg-cyber-blue/15 text-cyber-blue'
                                            }`}
                                          >
                                            {project.icon}
                                          </div>
                                          <h5 className="text-sm font-bold text-white tracking-wide">{project.name}</h5>
                                        </div>
                                        {project.metric && (
                                          <span className="flex items-center gap-0.5 font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/10">
                                            {project.metric.includes('Cost') && <DollarSign className="w-2.5 h-2.5 text-cyber-teal" />}
                                            {project.metric.includes('Secured') && <ShieldCheck className="w-2.5 h-2.5 text-cyber-blue" />}
                                            {project.metric}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-cyber-text-secondary leading-relaxed mb-4">
                                        {project.desc}
                                      </p>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                      {project.tags.map((t) => (
                                        <span
                                          key={t}
                                          className="text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-white/5 text-cyber-text-secondary border border-white/5"
                                        >
                                          {t}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
