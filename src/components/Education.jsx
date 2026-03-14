import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section className="section container" id="education">
      <h2 className="section-title">Education & Extracurriculars</h2>

      <div className="edu-extra-grid">
        <div className="edu-card">
          <h3><GraduationCap /> Education</h3>

          <div className="edu-item mb-6 border-b border-white/5 pb-6 last:border-0 last:pb-0 last:mb-0">
            <h4 className="text-lg font-bold mb-1">B.Tech - Computer Science and Engineering</h4>
            <p className="text-[var(--color-accent)] font-medium text-sm mb-3">Lovely Professional University, Phagwara</p>
            <div className="flex gap-3 flex-wrap">
              <span className="cgpa-pill" style={{ marginTop: 0 }}>Since Aug 2023</span>
              <span className="cgpa-pill" style={{ marginTop: 0 }}>CGPA: 8.24</span>
            </div>
          </div>

          <div className="edu-item mb-6 border-b border-white/5 pb-6 last:border-0 last:pb-0 last:mb-0">
            <h4 className="text-lg font-bold mb-1">Intermediate</h4>
            <p className="text-[var(--color-accent)] font-medium text-sm mb-3">Lecole Chempaka, Trivandrum</p>
            <div className="flex gap-3 flex-wrap">
              <span className="cgpa-pill" style={{ marginTop: 0 }}>March 2023</span>
              <span className="cgpa-pill" style={{ marginTop: 0 }}>Percentage: 90%</span>
            </div>
          </div>

          <div className="edu-item mb-6 border-b border-white/5 pb-6 last:border-0 last:pb-0 last:mb-0">
            <h4 className="text-lg font-bold mb-1">Matriculation</h4>
            <p className="text-[var(--color-accent)] font-medium text-sm mb-3">Lecole Chempaka, Trivandrum</p>
            <div className="flex gap-3 flex-wrap">
              <span className="cgpa-pill" style={{ marginTop: 0 }}>March 2021</span>
              <span className="cgpa-pill" style={{ marginTop: 0 }}>Percentage: 95.6%</span>
            </div>
          </div>
        </div>

        <div className="edu-card">
          <h3><Award /> Extracurriculars</h3>
          <div className="edu-item mb-5 border-b border-white/5 pb-5 last:border-0 last:pb-0 last:mb-0">
            <h4 className="text-lg font-bold mb-1">Founding President</h4>
            <p className="text-[var(--color-accent)] font-medium text-sm mb-2">Gamers’ Guild – E-Sports Organization</p>
            <p className="text-[0.95rem] opacity-90 leading-relaxed text-[var(--text-primary)]">Spearheaded the establishment of the university’s E-Sports community, tournaments, and managing official teams.</p>
          </div>

          <div className="edu-item mb-5 border-b border-white/5 pb-5 last:border-0 last:pb-0 last:mb-0">
            <h4 className="text-lg font-bold mb-1">Technical Director</h4>
            <p className="text-[var(--color-accent)] font-medium text-sm mb-2">House of Prayer Media Ops</p>
            <p className="text-[0.95rem] opacity-90 leading-relaxed text-[var(--text-primary)]">Directed audio-visual media ops and live broadcasting setups for three years, ensuring seamless execution.</p>
          </div>

          <div className="edu-item mb-5 border-b border-white/5 pb-5 last:border-0 last:pb-0 last:mb-0">
            <h4 className="text-lg font-bold mb-1">STEM Instructor & Event Coordinator</h4>
            <p className="text-[var(--color-accent)] font-medium text-sm mb-2">Ability Aids</p>
            <p className="text-[0.95rem] opacity-90 leading-relaxed text-[var(--text-primary)]">Orchestrated "Elder Woman’s Well-being Initiative" driving 75% increase in engagement while providing mentorship.</p>
          </div>


          <div className="edu-item mb-5 border-b border-white/5 pb-5 last:border-0 last:pb-0 last:mb-0">
            <h4 className="text-lg font-bold mb-1">Featured Speaker: XR Innovations</h4>
            <p className="text-[var(--color-accent)] font-medium text-sm mb-2">AIEEE & ADSRS • Oct 2023</p>
            <p className="text-[0.95rem] opacity-90 leading-relaxed text-[var(--text-primary)]">Delivered a technical presentation on AR, VR, and MR to industry professionals and academic peers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
