import { motion } from 'framer-motion';

const roles = [
  {
    layout: 'right',
    date: 'Jan 2025 – Dec 2025',
    role: 'Software Engineering Intern',
    company: 'Maestro Digital Mine',
    location: 'Sudbury, Ontario',
    bullets: [
      'Built React.js and Material UI interfaces for Duetto Analytics, a real-time industrial monitoring platform deployed across 150+ mining sites.',
      'Developed backend services and RESTful APIs with Node.js, Express.js, and Spring Boot for device management and MQTT telemetry processing at 99.9% uptime.',
      'Assisted migration of the MQTT service layer to batched Spring Boot services with BullMQ for async processing, improving scalability.',
      'Managed 10M+ PostgreSQL and InfluxDB records, streamlined client deployment with Docker, and improved reliability with 100+ unit tests.',
    ],
    dotColor: '#ddb7ff',
    dotGlow: '0 0 24px rgba(221,183,255,0.5)',
    accent: '#ddb7ff',
  },
  {
    layout: 'left',
    date: 'May 2024 – Aug 2024',
    role: 'Software Developer Intern',
    company: 'Valley Integration Inc.',
    location: 'Mississauga, Ontario',
    bullets: [
      'Reduced report generation time by 50% by building Python automation workflows integrating Zoho APIs to generate PDF summaries and structured Excel updates.',
      'Created a control panel part estimation tool using SQL, Microsoft Access, and VBA to automate pricing and generate reports — improving accuracy by 30%.',
      'Assisted in SCADA/PLC system development for water management, supporting system testing and documentation.',
    ],
    dotColor: '#89ceff',
    dotGlow: '0 0 24px rgba(137,206,255,0.5)',
    accent: '#89ceff',
  },
];

const Card = ({ r }: { r: typeof roles[0] }) => (
  <div className="glass-card" style={{ padding: '2rem', borderRadius: '2rem' }}>
    <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '1.15rem', color: '#eadfed', marginBottom: '0.4rem' }}>
      {r.role}
    </h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.4rem 0.6rem', marginBottom: '1.5rem' }}>
      <span style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: '0.875rem', fontWeight: 600, color: r.accent }}>
        {r.company}
      </span>
      <span style={{ color: '#4d4354', fontSize: '0.75rem' }}>·</span>
      <span style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: '0.8rem', color: '#cfc2d6' }}>
        {r.location}
      </span>
      <span style={{ color: '#4d4354', fontSize: '0.75rem' }}>·</span>
      <span style={{ fontFamily: "'Geist',monospace", fontSize: '0.78rem', color: r.accent + 'aa' }}>
        {r.date}
      </span>
    </div>
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {r.bullets.map((b, i) => (
        <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <span style={{ color: r.accent, flexShrink: 0, marginTop: '0.55rem', display: 'block', width: '4px', height: '4px', borderRadius: '50%', background: r.accent }} />
          <p style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: '0.925rem', lineHeight: 1.65, color: '#cfc2d6' }}>
            {b}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const Dot = ({ r }: { r: typeof roles[0] }) => (
  <div className="exp-dot-el" style={{ background: r.dotColor, boxShadow: r.dotGlow, borderColor: '#0a0a0f' }} />
);

const Experience = () => (
  <section
    id="experience"
    style={{
      paddingTop: '7rem',
      paddingBottom: '7rem',
      background: 'rgba(17,12,21,0.45)',
      borderTop: '1px solid rgba(77,67,84,0.12)',
      borderBottom: '1px solid rgba(77,67,84,0.12)',
    }}
  >
    <div className="section-wrap">
      {/* Header */}
      <motion.div
        style={{ textAlign: 'center', marginBottom: '5rem' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(2rem,4vw,2.5rem)', letterSpacing: '-0.02em', color: '#eadfed' }}>
          Professional Experience
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="exp-container">
        <div className="exp-vline" />

        {roles.map((r, i) => (
          <motion.div
            key={i}
            className={`exp-item exp-item-${r.layout}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {r.layout === 'right' ? (
              <>
                <div className="exp-date-slot exp-date-left">
                  <span style={{ fontFamily: "'Geist',monospace", fontSize: '0.875rem', color: r.accent + 'cc' }}>{r.date}</span>
                </div>
                <Dot r={r} />
                <div className="exp-card-slot">
                  <Card r={r} />
                </div>
              </>
            ) : (
              <>
                <Dot r={r} />
                <div className="exp-card-slot exp-card-left">
                  <Card r={r} />
                </div>
                <div className="exp-date-slot exp-date-right">
                  <span style={{ fontFamily: "'Geist',monospace", fontSize: '0.875rem', color: r.accent + 'cc' }}>{r.date}</span>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>

    <style>{`
      .exp-container {
        position: relative;
        max-width: 56rem;
        margin: 0 auto;
      }
      .exp-vline { display: none; }
      .exp-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 4rem;
      }
      .exp-item:last-child { margin-bottom: 0; }
      .exp-date-slot { display: none; }
      .exp-dot-el {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 4px solid #0a0a0f;
        flex-shrink: 0;
        transition: transform 0.3s ease;
      }
      .exp-item:hover .exp-dot-el { transform: scale(1.5); }
      .exp-card-slot { width: 100%; }

      @media (min-width: 768px) {
        .exp-vline {
          display: block;
          position: absolute;
          top: 0; bottom: 0;
          left: 50%;
          width: 1px;
          transform: translateX(-50%);
          background: linear-gradient(to bottom, rgba(183,109,255,0.5), rgba(137,206,255,0.2), transparent);
          pointer-events: none;
        }
        .exp-item {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0 4rem;
          align-items: start;
          margin-bottom: 6rem;
        }
        .exp-date-slot { display: block; }
        .exp-dot-el {
          grid-column: 2;
          grid-row: 1;
          margin-top: 1.75rem;
        }
        .exp-item-right .exp-date-left {
          grid-column: 1;
          grid-row: 1;
          text-align: right;
          padding-top: 1.75rem;
        }
        .exp-item-right .exp-card-slot {
          grid-column: 3;
          grid-row: 1;
        }
        .exp-item-left .exp-card-left {
          grid-column: 1;
          grid-row: 1;
        }
        .exp-item-left .exp-date-right {
          grid-column: 3;
          grid-row: 1;
          padding-top: 1.75rem;
        }
      }
    `}</style>
  </section>
);

export default Experience;
