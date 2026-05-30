import React from 'react';
import { GraduationCap, Award, Cpu, ShieldCheck, Cloud } from 'lucide-react';

export const Credentials: React.FC = () => {
  const education = [
    {
      degree: 'BEng (Hons) in Software Engineering',
      institution: 'Informatics Institute of Technology (IIT) / University of Westminster, UK',
      period: '2022 - 2027',
      desc: 'Focusing on advanced software engineering principles, system design patterns, distributed architectures, and full-stack web application development.'
    },
    {
      degree: 'Foundation Certificate in Higher Education',
      institution: 'Informatics Institute of Technology (IIT)',
      period: '2021 - 2022',
      desc: 'Completed foundational computing pathways, programming logic, algorithmic basics, and essential mathematical modules.'
    },
    {
      degree: 'GCE Ordinary Level',
      institution: 'Mahinda Rajapaksha College',
      period: '2021',
      desc: 'Completed secondary education with highly distinguished academic performance across major subjects.'
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Certified: Power Platform Fundamentals (PL-900)',
      issuer: 'Microsoft',
      desc: 'Validates skills in Power Apps, Power Automate, and custom Dataverse system architecture.',
      icon: <Cpu className="w-5 h-5 text-cyber-blue" />,
      color: 'hover:border-cyber-blue/30',
      period: '2025'
    },
    {
      name: 'Cisco Certified: Cybersecurity Essentials',
      issuer: 'Cisco',
      desc: 'Covers core cybersecurity threat analysis, vulnerability audits, and secure encryption policies.',
      icon: <ShieldCheck className="w-5 h-5 text-cyber-teal" />,
      color: 'hover:border-cyber-teal/30',
      period: '2024'
    },
    {
      name: 'Introduction to Digital Marketing',
      issuer: 'Sri Lanka Institute of Marketing (SLIM)',
      desc: 'Studied modern marketing systems, digital consumer behaviors, branding concepts, and online audience strategies.',
      icon: <Award className="w-5 h-5 text-purple-400" />,
      color: 'hover:border-purple-600/30',
      period: '2023'
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      desc: 'Validates expertise in secure cloud compute environments, serverless endpoints, and active directories.',
      icon: <Cloud className="w-5 h-5 text-white" />,
      color: 'hover:border-white/20'
    }
  ];

  return (
    <section id="credentials" className="py-24 bg-cyber-bg relative border-t border-white/5 tech-grid">
      <div className="absolute inset-0 tech-radial-glow pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading styled exactly like 5th image */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white inline-block relative pb-3 tracking-wide">
            Credentials
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-blue to-cyber-teal rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-6 h-6 text-cyber-blue" />
              <h3 className="text-xl font-bold text-white tracking-wide">Academic Education</h3>
            </div>

            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-2xl glass-card border border-white/5 hover:border-cyber-blue/30 transition-all duration-300 space-y-4 shadow-md hover:shadow-lg"
              >
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue-light">
                    {edu.period}
                  </span>
                  <h4 className="text-lg font-bold text-white pt-2 leading-tight">{edu.degree}</h4>
                  <div className="text-xs font-mono text-cyber-text-secondary">{edu.institution}</div>
                </div>
                <p className="text-xs text-cyber-text-secondary leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-6 h-6 text-cyber-teal" />
              <h3 className="text-xl font-bold text-white tracking-wide">Professional Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className={`p-4 rounded-xl border border-white/5 bg-white/[0.01] flex gap-4 transition-all duration-300 hover:bg-white/[0.02] hover:shadow-sm ${cert.color}`}
                >
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 shrink-0 mt-0.5 shadow-sm">
                    {cert.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white leading-snug">{cert.name}</h4>
                    <div className="text-[10px] font-mono text-cyber-text-muted">
                      Issuer: {cert.issuer} {cert.period && `• ${cert.period}`}
                    </div>
                    <p className="text-xs text-cyber-text-secondary leading-relaxed pt-1">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
