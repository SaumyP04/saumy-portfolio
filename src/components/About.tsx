import { motion } from 'framer-motion';

const courses = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Concurrent Systems',
  'Software Testing',
  'OOP',
  'Databases',
];

const About = () => (
  <section id="about" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
    <div className="section-wrap">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', alignItems: 'center' }} className="lg-row">

        {/* ── Left: text ── */}
        <motion.div
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontFamily: "'Geist', monospace", fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ddb7ff' }}>
              Origin Story
            </span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.5rem)', lineHeight: 1.15, letterSpacing: '-0.02em', color: '#eadfed' }}>
              Engineering the Future.
            </h2>
          </div>

          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '1.05rem', lineHeight: 1.8, color: '#cfc2d6' }}>
            I'm a third-year Software Engineering student at McMaster University pursuing
            a Minor in Finance, with experience building real-time industrial systems,
            backend services, automation workflows, and AI-powered applications across
            multiple software engineering internships.
          </p>

          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '1.05rem', lineHeight: 1.8, color: '#cfc2d6' }}>
            I'm passionate about solving complex problems through scalable software and
            enjoy designing systems that are reliable, efficient, and impactful. I'm
            interested in software engineering that combines backend systems, modern
            technologies, and real-world problem solving.
          </p>

          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '1.05rem', lineHeight: 1.8, color: '#cfc2d6' }}>
            Currently seeking opportunities to continue growing as a software engineer
            while working on technically challenging and impactful projects.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', paddingTop: '1rem' }}>
            {[
              { n: '2',      label: 'Internships Completed' },
              { n: '2026',   label: 'Seeking Co-op' },
            ].map((s) => (
              <div
                key={s.label}
                style={{ borderLeft: '2px solid rgba(221,183,255,0.3)', paddingLeft: '1rem', paddingTop: '0.25rem', paddingBottom: '0.25rem' }}
              >
                <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: '#eadfed' }}>
                  {s.n}
                </p>
                <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '0.875rem', color: '#cfc2d6', marginTop: '0.25rem' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: education card ── */}
        <motion.div
          style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'flex-end' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="glass-card"
            style={{ width: '100%', maxWidth: '28rem', borderRadius: '2.5rem', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* University header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', background: 'rgba(221,183,255,0.12)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#ddb7ff' }}>school</span>
                </div>
                <span style={{ fontFamily: "'Geist', monospace", fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ddb7ff' }}>
                  Education
                </span>
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#eadfed', marginBottom: '0.4rem' }}>
                McMaster University
              </h3>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '0.925rem', color: '#cfc2d6', lineHeight: 1.55 }}>
                B.Eng. Software Engineering<br />
                Minor in Finance
              </p>
              <p style={{ fontFamily: "'Geist', monospace", fontSize: '0.8rem', color: '#988d9f', marginTop: '0.5rem' }}>
                Sep 2022 – Dec 2027 · Hamilton, ON
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

            {/* Relevant coursework */}
            <div>
              <p style={{ fontFamily: "'Geist', monospace", fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#adc6ff', marginBottom: '1rem' }}>
                Relevant Coursework
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {courses.map((c) => (
                  <span key={c} style={{
                    fontFamily: "'Geist', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.06em',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    background: 'rgba(173,198,255,0.07)',
                    border: '1px solid rgba(173,198,255,0.18)',
                    color: '#adc6ff',
                  }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Status pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 1rem', background: 'rgba(221,183,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(221,183,255,0.12)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.6)', flexShrink: 0 }} />
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '0.875rem', color: '#eadfed' }}>
                Open to opportunities
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>

    <style>{`
      @media (min-width: 1024px) {
        .lg-row { flex-direction: row !important; gap: 7.5rem !important; }
      }
    `}</style>
  </section>
);

export default About;
