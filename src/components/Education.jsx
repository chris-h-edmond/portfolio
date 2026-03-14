import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section className="section container" id="education">
      <h2 className="section-title">Education & Extracurriculars</h2>
      
      <div className="edu-extra-grid">
        <div className="edu-card">
          <h3><GraduationCap /> Education</h3>
          <div className="edu-item">
            <h4>B.Tech in Computer Science and Engineering</h4>
            <p>Specializing in AI & ML</p>
            <span className="cgpa-pill">CGPA: 8.3</span>
          </div>
        </div>

        <div className="edu-card">
          <h3><Award /> Extracurriculars</h3>
          <div className="edu-item">
            <h4>Mentorships</h4>
            <p>Guiding junior developers in React and Java development.</p>
          </div>
          <div className="edu-item">
            <h4>Technical Blogging</h4>
            <p>Writing comprehensive articles on modern AI and web tech stacks.</p>
          </div>
          <div className="edu-item">
            <h4>Speaking Engagements</h4>
            <p>Extended Reality (XR) talks and technical demonstrations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
