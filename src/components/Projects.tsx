import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ExternalLink, ShieldCheck, DollarSign, Cloud, Code2, Cpu, Users, Shield } from 'lucide-react';

interface ProjectItem {
  id: string;
  name: string;
  category: 'pro' | 'enterprise' | 'support';
  role: string;
  company: string;
  desc: string;
  highlights: string[];
  tags: string[];
  metric?: string;
  image?: string;
  icon?: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pro' | 'enterprise' | 'support'>('all');

  const projects: ProjectItem[] = [
    // Visual Spotlights (4 Featured Builds)
    {
      id: 'travel',
      name: 'Smart Travel Itinerary Provider',
      category: 'pro',
      role: 'Lead Developer (Academic Flagship)',
      company: 'R&D Initiative',
      desc: 'An advanced AI-powered travel planning ecosystem that generates tailored, multi-stop routes and offers a virtual explorer interface.',
      highlights: [
        'AI recommendations trained on Kaggle travel datasets matching passenger profiles',
        'Real-time rate orchestration utilising Booking.com REST integration APIs',
        'Virtual discover panels allowing interactive local exploration'
      ],
      tags: ['React', 'Laravel', 'Python', 'Kaggle ML', 'Booking API'],
      image: '/smart_travel_dark.png',
      metric: 'AI-Generated Routes'
    },
    {
      id: 'fishing',
      name: 'Fishing Management Solution (Overseas Project)',
      category: 'enterprise',
      role: 'Associate Software Engineer',
      company: 'H One (PVT) Ltd',
      desc: 'Co-developed a Power Apps solution for ship registration, voyage management, and species tracking with offline support.',
      highlights: [
        'Advanced offline-first local cache synchronization framework for distant maritime vessels',
        'Automatic species logging and registration synchronization when network signals resume',
        'Coordinated registration of over 200 vessel telemetry profiles under complex cross-border rules'
      ],
      tags: ['Power Apps', 'Offline Sync', 'Dataverse', 'Overseas Project'],
      image: '/fishing_management_dark.png',
      metric: 'Offline Fleet Synchronised'
    },
    {
      id: 'banking',
      name: 'Bank Account Initiation & Approval Solution',
      category: 'enterprise',
      role: 'Associate Software Engineer',
      company: 'H One (PVT) Ltd',
      desc: 'Developed a Power Apps workflow system for account initiation, approvals, reporting, and audit logs.',
      highlights: [
        'Designed bank compliance approvals and regulatory approval logging pipelines',
        'Automated secure notification routes reducing dispatcher processing delays',
        'Strict audit-trail records satisfying bank-grade security inspection criteria'
      ],
      tags: ['Power Apps', 'Approvals', 'SQL Database', 'Audit Logs'],
      image: '/banking_initiation_dark.png',
      metric: 'Bank-Grade Auditing'
    },
    {
      id: 'timesheet',
      name: 'Employee Time Tracking Solution',
      category: 'enterprise',
      role: 'Associate Software Engineer',
      company: 'H One (PVT) Ltd',
      desc: 'Co-developed a timesheet system that replaced a third-party platform, reducing licensing costs.',
      highlights: [
        'Removed monthly third-party software subscriptions for internal corporate agents',
        'Engineered responsive visual forms to register developer logs and task progress',
        'Successfully integrated user timesheet data into optimized SharePoint list structures'
      ],
      tags: ['Power Apps', 'SharePoint', 'Power Automate', 'Cost Optimization'],
      image: '/time_tracking_dark.png',
      metric: '100% License Cost Eliminated'
    },

    // Bento Grid Initiatives (Remaining 9 Projects)
    {
      id: 'support',
      name: 'L2 Support & Maintenance Operations',
      category: 'support',
      role: 'Associate Software Engineer',
      company: 'H One (PVT) Ltd',
      desc: 'Provided critical tier-2 infrastructure support, resolving database queries, workflow lockups, and cloud system outages.',
      highlights: [
        'Troubleshot and debugged SQL relational database query blocks under tight SLA timings',
        'Maintained enterprise application reliability and handled hotfixes for active deployments'
      ],
      tags: ['L2 Support', 'Troubleshooting', 'SQL Server', 'SLA Management'],
      icon: <Shield className="w-5 h-5 text-cyber-blue" />
    },
    {
      id: 'training',
      name: 'App in a Day & Corporate Workshops',
      category: 'support',
      role: 'Associate Software Engineer',
      company: 'H One (PVT) Ltd',
      desc: 'Conducted interactive Microsoft Power Platform workshops and enablement trainings for business user groups.',
      highlights: [
        'Organized hands-on cloud automation labs upscaling client division workforces',
        'Trained business stakeholders in structural canvas design and automation logic builders'
      ],
      tags: ['Power Platform', 'Training', 'Workshops', 'Enablement'],
      icon: <Users className="w-5 h-5 text-cyber-teal" />
    },
    {
      id: 'claims',
      name: 'Medical Claims Submission App',
      category: 'enterprise',
      role: 'Intern - Software Engineering',
      company: 'H One (PVT) Ltd',
      desc: 'Developed a Power Apps solution for medical claim submission and tracking with automated notifications.',
      highlights: [
        'Constructed custom canvas workflows to submit and track claims status',
        'Triggered real-time HTML notification alerts on invoice approvals or rejections'
      ],
      tags: ['Power Apps', 'Power Automate', 'HTML Emails'],
      image: '/medical_claims_dark.png',
      metric: '98% Claim Accuracy'
    },
    {
      id: 'coe',
      name: 'Power Platform CoE Kit',
      category: 'enterprise',
      role: 'Intern - Software Engineering',
      company: 'H One (PVT) Ltd',
      desc: 'Developed a Power Apps workflow system for account initiation, approvals, reporting, and audit logs.',
      highlights: [
        'Monitored client tenant pipelines to audit flow compliancies and orphan systems',
        'Generated Power BI analytics dashboards detailing developer adoption statistics'
      ],
      tags: ['CoE Governance', 'Power BI', 'Dataverse', 'Compliance'],
      image: '/coe_kit_dark.png',
      metric: 'Tenant Audit Secured'
    },
    {
      id: 'doc-tracker',
      name: 'Document Tracker App',
      category: 'enterprise',
      role: 'Intern - Software Engineering',
      company: 'H One (PVT) Ltd',
      desc: 'Built an automated solution to track Excel file changes in SharePoint using Power Automate.',
      highlights: [
        'Tracked real-time Excel cell modifications via secure background telemetry triggers',
        'Logged document revision trails to protect critical reporting spreadsheets'
      ],
      tags: ['Power Automate', 'SharePoint', 'Audit Logs'],
      image: '/doc_tracker_dark.png',
      metric: 'Real-time Audit Telemetry'
    },
    {
      id: 'offboarding',
      name: 'Employee Offboarding App',
      category: 'enterprise',
      role: 'Intern - Software Engineering',
      company: 'H One (PVT) Ltd',
      desc: 'Developed a Power Apps solution to streamline employee offboarding and approval workflows.',
      highlights: [
        'Structured administrative task schedules for cross-department clearance groups',
        'Implemented responsive role-based dashboards protecting employee release profiles'
      ],
      tags: ['Power Apps', 'Approvals', 'HR automation'],
      image: '/employee_offboarding_dark.png',
      metric: '50% Process Reduction'
    },
    {
      id: 'recruiter',
      name: 'CV Shortlisting & Interview Scheduler',
      category: 'pro',
      role: 'Intern - Software Engineering',
      company: 'H One (PVT) Ltd',
      desc: 'Created a recruitment management tool integrated with Microsoft Teams for scheduling and notifications.',
      highlights: [
        'Automated slot reservations utilizing Graph and Teams calendar scheduling pipelines',
        'Implemented pre-interview CV upload alerts triggering prompt notification responses'
      ],
      tags: ['MS Teams API', 'Microsoft Graph', 'Automation'],
      image: '/cv_scheduler_dark.png',
      metric: 'Teams Integration Approved'
    },
    {
      id: 'rnd',
      name: 'Logic Apps & SPFx Security R&D',
      category: 'pro',
      role: 'Intern - Software Engineering',
      company: 'H One (PVT) Ltd',
      desc: 'Conducted security research evaluating SharePoint Framework (SPFx) extensions and Azure Logic Apps workflow safeguards.',
      highlights: [
        'Prototyped customized secure widgets using TypeScript and SharePoint Framework SPFX',
        'Evaluated serverless automation workflows and Azure security posture configurations'
      ],
      tags: ['SPFx', 'Azure Logic Apps', 'Azure Sentinel', 'R&D'],
      icon: <Code2 className="w-5 h-5 text-white" />
    },
    {
      id: 'dms',
      name: 'SharePoint Document Management System',
      category: 'enterprise',
      role: 'Intern - Software Engineering',
      company: 'H One (PVT) Ltd',
      desc: 'Designed a document management solution with role-based access control and automated notifications.',
      highlights: [
        'Built strict role-based access control RBAC rules for corporate cloud folder structures',
        'Triggered instant background notification routing whenever files were updated or accessed'
      ],
      tags: ['SharePoint', 'RBAC', 'Document Management'],
      image: '/dms_dark.png',
      metric: 'Secure RBAC Locker'
    }
  ];

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  const visualProjects = filteredProjects.filter((p) => p.image);
  const gridProjects = filteredProjects.filter((p) => !p.image);

  return (
    <section id="projects" className="py-24 bg-cyber-bg relative border-t border-white/5 tech-grid">
      <div className="absolute inset-0 tech-radial-glow-teal pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest text-cyber-teal uppercase mb-3">Complete Project Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold !text-white tracking-tight">Selected Engineering Builds ({projects.length} Items)</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-teal to-cyber-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Widget */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-cyber-surface/65 border border-white/5 shadow-2xl backdrop-blur-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-cyber-blue text-white shadow-lg shadow-cyber-blue/15'
                  : 'text-cyber-text-secondary hover:text-white'
              }`}
            >
              All Builds
            </button>
            <button
              onClick={() => setFilter('pro')}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                filter === 'pro'
                  ? 'bg-cyber-blue/15 text-cyber-blue-light border border-cyber-blue/20'
                  : 'text-cyber-text-secondary hover:text-cyber-blue-light'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Pro-Code Builds
            </button>
            <button
              onClick={() => setFilter('enterprise')}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                filter === 'enterprise'
                  ? 'bg-cyber-teal/15 text-cyber-teal-light border border-cyber-teal/20'
                  : 'text-cyber-text-secondary hover:text-cyber-teal-light'
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              Enterprise Automations
            </button>
            <button
              onClick={() => setFilter('support')}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                filter === 'support'
                  ? 'bg-white/10 text-white border border-white/10'
                  : 'text-cyber-text-secondary hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              R&D & Support
            </button>
          </div>
        </div>

        {/* Featured Visual Spotlights (Top Row) */}
        {visualProjects.length > 0 && (
          <div className="space-y-12 max-w-6xl mx-auto mb-16">
            <h3 className="text-left font-mono text-[10px] uppercase tracking-widest text-cyber-text-muted mb-6">Featured Deployments</h3>
            <AnimatePresence mode="popLayout">
              {visualProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                >
                  {/* Text Details Pane */}
                  <div className="lg:col-span-6 p-6 sm:p-10 rounded-2xl glass-card border border-white/5 transition-all duration-300 hover:border-cyber-blue/30 flex flex-col justify-between shadow-sm">
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-cyber-text-secondary font-mono text-[9px] uppercase font-bold shadow-inner">
                          {project.category === 'pro' ? (
                            <Code2 className="w-3.5 h-3.5 text-cyber-blue" />
                          ) : (
                            <Cloud className="w-3.5 h-3.5 text-cyber-teal" />
                          )}
                          <span>{project.company}</span>
                        </div>
                        {project.metric && (
                          <span className="flex items-center gap-1 font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-white/5 text-white border border-white/10 shadow-sm">
                            {project.metric.includes('Cost') && <DollarSign className="w-2.5 h-2.5 text-cyber-teal" />}
                            {project.metric.includes('Auditing') && <ShieldCheck className="w-2.5 h-2.5 text-cyber-blue" />}
                            {project.metric}
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className="text-2xl font-extrabold text-white mb-1.5 tracking-wide">
                          {project.name}
                        </h4>
                        <div className="text-xs font-mono text-cyber-blue">{project.role}</div>
                      </div>

                      <p className="text-sm text-cyber-text-secondary leading-relaxed">
                        {project.desc}
                      </p>

                      <div className="space-y-3 text-left">
                        <h5 className="text-xs font-mono uppercase tracking-widest text-cyber-text-secondary">Project Scope</h5>
                        <ul className="space-y-2.5">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-cyber-text-secondary">
                              <Check className="w-4 h-4 text-cyber-blue mt-0.5 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-lg ${
                              project.category === 'pro'
                                ? 'bg-cyber-blue/5 text-cyber-blue border border-cyber-blue/20'
                                : 'bg-cyber-teal/5 text-cyber-teal border border-cyber-teal/20'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono text-cyber-text-muted">
                        <span>DELIVERABLE</span>
                        <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                          Architecture specs <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Mockup Pane */}
                  <div className="lg:col-span-6 rounded-2xl overflow-hidden glass-card border border-white/5 relative flex flex-col justify-center min-h-[300px] lg:min-h-full group shadow-sm">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/95 via-transparent to-cyber-bg/10 z-10 pointer-events-none" />
                    <img
                      src={project.image}
                      alt={`${project.name} interface mockup`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 backdrop-blur border border-white/10 text-white font-mono text-[9px]">
                      <Sparkles className="w-3 h-3 text-cyber-blue animate-pulse" />
                      <span>Visual Dashboard</span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1 text-left">
                      <div className="font-mono text-[10px] text-cyber-blue-light uppercase tracking-wider">Enterprise Tech Mockup</div>
                      <div className="text-sm font-semibold text-white">{project.name} telemetry & analytics system.</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Bento Grid Initiatives (Lower Grid) */}
        {gridProjects.length > 0 && (
          <div className="max-w-6xl mx-auto pt-8">
            <h3 className="text-left font-mono text-[10px] uppercase tracking-widest text-cyber-text-muted mb-8">Core Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {gridProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="p-6 rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between text-left"
                  >
                    <div className="space-y-5">
                      {/* Card Header */}
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white shrink-0 shadow-sm">
                          {project.icon || <Cpu className="w-5 h-5 text-cyber-teal" />}
                        </div>
                        <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded border border-white/10 bg-white/5 text-cyber-text-secondary">
                          {project.company}
                        </span>
                      </div>

                      {/* Title & Role */}
                      <div>
                        <h4 className="text-base font-bold text-white leading-snug tracking-wide line-clamp-1">
                          {project.name}
                        </h4>
                        <span className="text-[10px] font-mono text-cyber-blue">{project.role}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-cyber-text-secondary leading-relaxed line-clamp-3">
                        {project.desc}
                      </p>

                      {/* Specific Scope Details */}
                      <ul className="space-y-1.5 pt-1">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-cyber-text-secondary">
                            <Check className="w-3.5 h-3.5 text-cyber-teal shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags Footer */}
                    <div className="mt-6 pt-4 border-t border-white/5 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[8px] font-mono font-medium px-2 py-0.5 rounded bg-white/5 text-cyber-text-secondary border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
