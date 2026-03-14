import React from 'react';

const PROJECTS_DATA = [
  {
    title: 'FITLIFE – Personal AI Trainer',
    date: 'July 2025',
    points: [
      'Developed and deployed an AI-driven fitness platform delivering personalized workout and nutrition plans in real time.',
      'Improved user adherence by dynamically adjusting plans based on user inputs and progress tracking.'
    ],
    image: '/fitlife_thumbnail.png',
    fallbackImg: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Gemini API'],
    githubUrl: 'https://github.com/PiyushRw/Fitlife'
  },
  {
    title: 'Resource Allocation Graph Simulator',
    date: 'March 2025',
    points: [
      'Implemented an interactive simulator to visualize deadlocks and safe/unsafe states in operating systems concepts.',
      'Enhanced learning effectiveness by enabling step-by-step graph updates and real-time state validation.'
    ],
    image: '/resource_graph_simulator.png',
    fallbackImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Tkinter'],
    githubUrl: 'https://github.com/chris-h-edmond/Resource-Allocation-Graph-Simulator'
  }
];

const Projects = () => {
  return (
    <section className="section container" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {PROJECTS_DATA.map((project, index) => (
          <article className="project-card flex flex-col" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img aspect-video object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = project.fallbackImg;
              }}
            />
            <div className="project-info flex flex-col flex-1 p-8">
              <div className="flex flex-col mb-6 gap-4">
                <h3 className="project-title m-0 text-2xl font-bold leading-tight">{project.title}</h3>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cgpa-pill flex items-center justify-center text-[var(--bg-dark)] hover:text-[var(--color-accent)] transition-colors duration-200 no-underline" style={{marginTop: 0, padding: '0.3rem 0.8rem'}}>
                      <span className="text-sm font-semibold">GitHub Repo</span>
                    </a>
                  )}
                  <span className="cgpa-pill whitespace-nowrap text-sm font-semibold flex items-center justify-center" style={{marginTop: 0, padding: '0.3rem 0.8rem'}}>{project.date}</span>
                </div>
              </div>
              <ul className="project-desc list-outside text-left pl-[20px] mb-8 flex-1 text-[1rem] opacity-90 text-[var(--text-primary)] space-y-3" style={{ listStyleType: 'disc' }}>
                {project.points.map((pt, i) => (
                  <li key={i} className="leading-relaxed pl-1">{pt}</li>
                ))}
              </ul>
              <div className="flex justify-between items-end mt-auto gap-4">
                <div className="project-tags flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
