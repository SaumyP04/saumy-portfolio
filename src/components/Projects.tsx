import { motion } from 'framer-motion';

const projects = [
  {
    col: 8,
    title: 'Intern Alert',
    desc: 'Full-stack job alert system that aggregates co-op and internship listings from multiple online sources. Two LLM-powered agents extract structured user preferences through conversation and semantically evaluate listings for relevance, delivering personalized matches via email.',
    tags: [
      { label: 'PYTHON', color: '#ddb7ff' },
      { label: 'FASTAPI', color: '#89ceff' },
      { label: 'REACT', color: '#adc6ff' },
      { label: 'LLM', color: '#ddb7ff' },
      { label: 'SQLITE', color: '#adc6ff' },
    ],
    link: 'https://github.com/SaumyP04',
    showArrow: true,
  },
  {
    col: 4,
    title: 'Figma → HTML/CSS',

    desc: 'Figma plugin that algorithmically interprets UI designs and converts them into clean, functional HTML and CSS, cutting front-end development time by 40%.',
    tags: [
      { label: 'TYPESCRIPT', color: '#adc6ff' },
      { label: 'FIGMA API', color: '#89ceff' },
    ],
    link: 'https://github.com/SaumyP04',
    showArrow: false,
  },
  {
    col: 12,
    title: 'Maze Runner',
    desc: 'Java application that uses Breadth-First Search (BFS) to find the shortest exit path through any maze, reducing average solving time by 60%. Built with OOP principles (SOLID, GRASP) and several design patterns to ensure modularity, maintainability, and easy future expansion.',
    tags: [
      { label: 'JAVA', color: '#ddb7ff' },
      { label: 'MAVEN', color: '#adc6ff' },
      { label: 'BFS', color: '#89ceff' },
    ],
    link: 'https://github.com/SaumyP04',
    showArrow: false,
  },
];

const Projects = () => (
  <section id="projects" style={{ paddingTop: '7rem', paddingBottom: '7rem', overflow: 'hidden' }}>
    <div className="section-wrap">
      {/* Header */}
      <motion.div
        style={{ display: 'flex', flexDirection: 'column', marginBottom: '4rem', gap: '1.5rem' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ maxWidth: '40rem' }}>
          <p style={{ fontFamily: "'Geist', monospace", fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#ddb7ff', marginBottom: '1rem' }}>
            Selected Works
          </p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em', lineHeight: 1.1, color: '#eadfed' }}>
            Crafting Scalable Digital Experiences
          </h2>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="proj-grid">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`proj-card proj-span-${p.col}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            {/* Tags */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              {p.tags.map((t) => (
                <span key={t.label} style={{
                  fontFamily: "'Geist', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: t.color + '1a',
                  border: `1px solid ${t.color}44`,
                  color: t.color,
                }}>
                  {t.label}
                </span>
              ))}
            </div>

            <h3 style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: '1.35rem',
              color: '#eadfed',
              marginBottom: '0.6rem',
              lineHeight: 1.2,
            }}>
              {p.title}
            </h3>
            <p style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: '0.925rem',
              lineHeight: 1.65,
              color: '#cfc2d6',
            }}>
              {p.desc}
            </p>

            {p.showArrow && (
              <div className="proj-arrow glass-card" style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#eadfed' }}>north_east</span>
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </div>

    <style>{`
      .proj-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.25rem;
        align-items: start;
      }
      .proj-card {
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: 1.75rem;
        padding: 2rem;
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.08);
        transition: border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
        cursor: pointer;
        text-decoration: none;
      }
      .proj-card:hover {
        border-color: rgba(183,109,255,0.35);
        background: rgba(255,255,255,0.05);
        box-shadow: 0 16px 32px -12px rgba(0,0,0,0.4), 0 0 16px rgba(183,109,255,0.08);
      }
      .proj-arrow { opacity: 0; transform: translateY(6px); transition: all 0.3s ease; }
      .proj-card:hover .proj-arrow { opacity: 1; transform: translateY(0); }
      @media (min-width: 768px) {
        .proj-grid { grid-template-columns: repeat(12, 1fr); }
        .proj-span-8  { grid-column: span 8; }
        .proj-span-4  { grid-column: span 4; }
        .proj-span-12 { grid-column: span 12; }
      }
    `}</style>
  </section>
);

export default Projects;
