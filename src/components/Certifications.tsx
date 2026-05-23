import { motion } from 'framer-motion';

const bullets = [
  'Contributed to a live portfolio tracking tool in Python using Streamlit, providing a centralized interface for monitoring investment holdings.',
  'Developed and backtested algorithmic trading strategies on the QuantConnect platform using historical market data.',
  'Implemented rule-based and statistical trading logic, applying quantitative finance concepts including risk-adjusted returns and factor analysis.',
];

const Certifications = () => (
  <section id="certs" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
    <div className="section-wrap">
      <motion.div
        style={{ textAlign: 'center', marginBottom: '4rem' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.5rem)', letterSpacing: '-0.02em', color: '#eadfed' }}>
          Extra-Curricular
        </h2>
      </motion.div>

      <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* ── DeGroote Finance featured card ── */}
        <motion.div
          className="glass-card"
          style={{ padding: '2.5rem', borderRadius: '2rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(221,183,255,0.1)', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#ddb7ff' }}>candlestick_chart</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem 0.75rem', marginBottom: '0.3rem' }}>
                <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.15rem', fontWeight: 600, color: '#eadfed' }}>
                  Quantitative Analyst
                </h4>
                <span style={{ fontFamily: "'Geist', monospace", fontSize: '10px', letterSpacing: '0.12em', color: '#ddb7ff99', background: 'rgba(221,183,255,0.08)', border: '1px solid rgba(221,183,255,0.18)', padding: '3px 10px', borderRadius: '999px' }}>
                  Oct 2025
                </span>
              </div>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '0.875rem', color: '#adc6ff', marginBottom: '1.5rem' }}>
                DeGroote Finance and Investments Council · McMaster University
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {bullets.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ display: 'block', width: '4px', height: '4px', borderRadius: '50%', background: '#ddb7ff', flexShrink: 0, marginTop: '0.6rem' }} />
                    <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: '0.925rem', lineHeight: 1.65, color: '#cfc2d6' }}>
                      {b}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── Placeholder row ── */}
        <motion.div
          className="glass-card"
          style={{ padding: '2rem', borderRadius: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', opacity: 0.4, border: '1px dashed rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.015)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#ddb7ff' }}>add_circle</span>
          <p style={{ fontFamily: "'Geist', monospace", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#cfc2d6' }}>
            More Coming Soon
          </p>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Certifications;
