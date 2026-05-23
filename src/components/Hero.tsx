import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Software Engineering Student',
  'Full Stack Developer',
  'AI & Quant Enthusiast',
  'Building Scalable Systems',
];

const codeLines = [
  { indent: 0, content: [{ text: 'const ', c: '#89ceff' }, { text: 'engineer', c: '#ddb7ff' }, { text: ' = {', c: '#eadfed' }] },
  { indent: 1, content: [{ text: 'name', c: '#adc6ff' }, { text: ': ', c: '#eadfed' }, { text: '"Saumy Patel"', c: '#a3e635' }] },
  { indent: 1, content: [{ text: 'school', c: '#adc6ff' }, { text: ': ', c: '#eadfed' }, { text: '"McMaster University"', c: '#a3e635' }] },
  { indent: 1, content: [{ text: 'degree', c: '#adc6ff' }, { text: ': ', c: '#eadfed' }, { text: '"B.Eng Software Engineering"', c: '#a3e635' }] },
  { indent: 1, content: [{ text: 'minor', c: '#adc6ff' }, { text: ': ', c: '#eadfed' }, { text: '"Finance"', c: '#a3e635' }] },
  { indent: 1, content: [{ text: 'focus', c: '#adc6ff' }, { text: ': [', c: '#eadfed' }, { text: '"AI"', c: '#a3e635' }, { text: ', ', c: '#eadfed' }, { text: '"FullStack"', c: '#a3e635' }, { text: ', ', c: '#eadfed' }, { text: '"Quant"', c: '#a3e635' }, { text: ']', c: '#eadfed' }] },
  { indent: 1, content: [{ text: 'status', c: '#adc6ff' }, { text: ': ', c: '#eadfed' }, { text: '"open to opportunities"', c: '#a3e635' }] },
  { indent: 0, content: [{ text: '};', c: '#eadfed' }] },
  { indent: 0, content: [] },
  { indent: 0, content: [{ text: '// ready to ship', c: '#4d4354' }] },
  { indent: 0, content: [{ text: 'engineer', c: '#ddb7ff' }, { text: '.', c: '#eadfed' }, { text: 'deploy', c: '#89ceff' }, { text: '();', c: '#eadfed' }] },
];

const Hero = () => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = roles[roleIdx];
      if (deleting) {
        charIdx--;
      } else {
        charIdx++;
      }
      if (typingRef.current) {
        typingRef.current.textContent = current.substring(0, charIdx);
      }

      let speed = deleting ? 45 : 90;
      if (!deleting && charIdx === current.length) {
        speed = 2200;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 500;
      }
      timer = setTimeout(tick, speed);
    };

    const init = setTimeout(tick, 1200);
    return () => { clearTimeout(init); clearTimeout(timer); };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 grid-bg overflow-hidden px-6"
    >
      {/* Orbs */}
      <div
        className="gradient-orb orb-float"
        style={{ width: 500, height: 500, background: 'rgba(183,109,255,0.18)', top: '15%', left: '-8%' }}
      />
      <div
        className="gradient-orb orb-float-delay"
        style={{ width: 400, height: 400, background: 'rgba(137,206,255,0.10)', bottom: '15%', right: '-5%' }}
      />

      <div className="section-wrap relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column */}
        <div className="lg:col-span-7 space-y-8">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sora text-5xl sm:text-6xl lg:text-[76px] font-bold leading-[1.05] tracking-tight text-on-surface"
          >
            Hello, I'm <br />
            <span className="gradient-text">Saumy Patel</span>{' '}
            <span className="animate-wave">👋</span>
          </motion.h1>

          {/* Typing */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-10 flex items-center"
          >
            <span
              ref={typingRef}
              className="font-geist text-xl typing-cursor"
              style={{ color: '#89ceff' }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-grotesk text-lg text-on-muted max-w-xl leading-relaxed"
          >
            Software Engineering student at McMaster University with a Minor in Finance
            — building full-stack applications, LLM-powered agents, and backend systems
            that scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', paddingTop: '0.5rem' }}
          >
            <a
              href="#projects"
              className="font-geist font-bold uppercase transition-all"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 36px',
                borderRadius: '9999px',
                minHeight: '52px',
                background: '#ddb7ff',
                color: '#490080',
                fontSize: '0.9rem',
                lineHeight: 1,
                letterSpacing: '0.08em',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(183,109,255,0.45)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              View Projects
              <span className="material-symbols-outlined" style={{ fontSize: 18, lineHeight: 1, display: 'inline-flex' }}>arrow_downward</span>
            </a>
          </motion.div>
        </div>

        {/* Right column — terminal */}
        <motion.div
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          <div className="relative group">
            {/* Glow behind terminal */}
            <div
              className="absolute inset-0 transition-all duration-700"
              style={{
                background: 'rgba(183,109,255,0.18)',
                filter: 'blur(80px)',
              }}
            />
            <div className="terminal-window relative">
              {/* Title bar */}
              <div className="terminal-titlebar">
                <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
                <div className="terminal-dot" style={{ background: '#28c840' }} />
                <span className="ml-4 font-geist text-xs text-on-muted tracking-wider">portfolio.ts</span>
              </div>

              {/* Code body */}
              <div className="p-6 space-y-1 font-geist text-[13px] leading-[1.7]">
                {codeLines.map((line, i) => (
                  <div key={i} style={{ paddingLeft: line.indent * 20 }}>
                    {line.content.length === 0 ? (
                      <span>&nbsp;</span>
                    ) : (
                      line.content.map((seg, j) => (
                        <span key={j} style={{ color: seg.c }}>{seg.text}</span>
                      ))
                    )}
                  </div>
                ))}

                {/* Blinking cursor line */}
                <div className="flex items-center gap-1 pt-1">
                  <span style={{ color: '#4d4354' }}>{'>'}</span>
                  <span
                    className="inline-block w-2 h-4 ml-1"
                    style={{
                      background: '#ddb7ff',
                      animation: 'blink 1s step-end infinite',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 scroll-bounce">
        <span className="font-geist text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="material-symbols-outlined">south</span>
      </div>
    </section>
  );
};

export default Hero;
