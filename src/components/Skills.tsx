import { motion } from 'framer-motion';

const skills = [
  { name: 'Python',      icon: 'psychology',     color: '#ddb7ff' },
  { name: 'TypeScript',  icon: 'data_object',    color: '#adc6ff' },
  { name: 'JavaScript',  icon: 'code',           color: '#89ceff' },
  { name: 'Go',          icon: 'terminal',       color: '#ddb7ff' },
  { name: 'Java',        icon: 'coffee',         color: '#adc6ff' },
  { name: 'SQL',         icon: 'table_chart',    color: '#89ceff' },
  { name: 'React',       icon: 'hub',            color: '#ddb7ff' },
  { name: 'Node.js',     icon: 'dns',            color: '#adc6ff' },
  { name: 'FastAPI',     icon: 'speed',          color: '#89ceff' },
  { name: 'Spring Boot', icon: 'bolt',           color: '#ddb7ff' },
  { name: 'Express.js',  icon: 'api',            color: '#adc6ff' },
  { name: 'Docker',      icon: 'deployed_code',  color: '#89ceff' },
  { name: 'PostgreSQL',  icon: 'database',       color: '#ddb7ff' },
  { name: 'Git',         icon: 'fork_right',     color: '#adc6ff' },
  { name: 'InfluxDB',    icon: 'show_chart',     color: '#89ceff' },
  { name: 'Linux',       icon: 'computer',       color: '#ddb7ff' },
  { name: 'SQLite',      icon: 'storage',        color: '#adc6ff' },
  { name: 'Apify',       icon: 'travel_explore', color: '#89ceff' },
];

const Skills = () => (
  <section id="skills" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
    <div className="section-wrap">
      <motion.div
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="skills-header"
      >
        <div>
          <p style={{ fontFamily: "'Geist', monospace", fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ddb7ff', marginBottom: '0.5rem' }}>
            Expertise
          </p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.5rem)', letterSpacing: '-0.02em', color: '#eadfed' }}>
            Technical Arsenal
          </h2>
        </div>
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '1.05rem', lineHeight: 1.65, color: '#cfc2d6', maxWidth: '24rem' }}>
          Full-stack, backend systems, and data tooling — languages, frameworks, and infrastructure I work with regularly.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="glass-card skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <div
              className="skill-icon-wrap"
              style={{ background: skill.color + '18' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = skill.color;
                const ic = el.querySelector('span') as HTMLElement;
                if (ic) ic.style.color = '#0a0a0f';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = skill.color + '18';
                const ic = el.querySelector('span') as HTMLElement;
                if (ic) ic.style.color = skill.color;
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 26, color: skill.color, transition: 'color 0.3s' }}>
                {skill.icon}
              </span>
            </div>
            <span style={{ fontFamily: "'Geist', monospace", fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#eadfed' }}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>

    <style>{`
      .skills-header { flex-direction: column; }
      @media (min-width: 768px) {
        .skills-header { flex-direction: row; justify-content: space-between; align-items: flex-end; }
      }
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
      }
      @media (min-width: 640px) {
        .skills-grid { grid-template-columns: repeat(4, 1fr); }
      }
      @media (min-width: 768px) {
        .skills-grid { grid-template-columns: repeat(5, 1fr); }
      }
      @media (min-width: 1024px) {
        .skills-grid { grid-template-columns: repeat(6, 1fr); }
      }
      .skill-card {
        padding: 1.75rem 1rem;
        border-radius: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.875rem;
        cursor: default;
        text-align: center;
      }
      .skill-icon-wrap {
        width: 3rem;
        height: 3rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
      }
    `}</style>
  </section>
);

export default Skills;
