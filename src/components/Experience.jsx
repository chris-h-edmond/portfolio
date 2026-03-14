import React from 'react';
import { Briefcase, Code } from 'lucide-react';
import FallingBeams from './FallingBeams';

const Experience = () => {
  return (
    <section className="section relative overflow-hidden" id="experience">
      <FallingBeams />
      <div className="container relative z-10">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">

        <div className="timeline-item">
          <div className="timeline-icon">
            <Briefcase />
          </div>
          <div className="timeline-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <h3>Customer Engineer Intern</h3>
                <p style={{ fontWeight: 600, color: 'var(--color-accent)' }}>Evlogia Labs Pvt Ltd</p>
              </div>
              <span className="cgpa-pill" style={{ marginTop: 0 }}>Since Oct 2025</span>
            </div>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '0.5rem' }}>Authored comprehensive SOWs and technical requirements that aligned client business objectives with scalable software solutions.</li>
              <li>Streamlined deployment lifecycles by bridging stakeholder communication and documenting technical feedback to drive product reliability.</li>
            </ul>
            <div className="project-tags" style={{ marginTop: 'auto' }}>
              {['GA4', 'Google Analytics', 'Git', 'GitHub', 'Gen-AI', 'Google Workspace'].map(tech => (
                <span className="tag" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <Code />
          </div>
          <div className="timeline-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <h3>Software Engineer Intern</h3>
                <p style={{ fontWeight: 600, color: 'var(--color-accent)' }}>ECS Fin Inc</p>
              </div>
              <span className="cgpa-pill" style={{ marginTop: 0 }}>June 2025 – Aug 2025</span>
            </div>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '0.5rem' }}>Developed and enhanced numerous RESTful APIs for the core IAM and Authentication services using Spring Boot.</li>
              <li>Improved API performance and usability by implementing advanced filtering, pagination, and Redis caching.</li>
            </ul>
            <div className="project-tags">
              {['Java', 'Maven', 'Spring MVC', 'Springboot', 'Git', 'GitLab', 'IAM'].map(tech => (
                <span className="tag" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <Briefcase />
          </div>
          <div className="timeline-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <h3>Content Writer</h3>
                <p style={{ fontWeight: 600, color: 'var(--color-accent)' }}>Pentaomnia Pvt</p>
              </div>
              <span className="cgpa-pill" style={{ marginTop: 0 }}>Dec 2023 – Aug 2024</span>
            </div>
            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-primary)', opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '0.5rem' }}>Spearheaded content lifecycles from conceptualization in Google Workspace to visual design in Canva, ensuring 100% alignment with brand identity.</li>
              <li>Boosted organic reach by implementing platform-specific growth tactics on Instagram and syncing with marketing teams for cohesive campaign execution.</li>
            </ul>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
