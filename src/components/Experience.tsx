import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: 'Maestro Digital Mine',
    role: 'Software Engineering Intern',
    period: 'January 2025 - December 2025',
    location: 'Sudbury, Ontario',
    highlights: [
      'Built responsive interfaces using React.js and Material UI for Duetto Analytics platform, used across 150+ mining sites',
      'Designed backend services and RESTful APIs with Node.js and Express.js, supporting live data feeds with 99.9% uptime',
      'Managed 10M+ records with PostgreSQL and InfluxDB, automating ingestion workflows using Go',
      'Reduced developer environment setup time by 40% using Docker containerization'
    ]
  },
  {
    id: 2,
    company: 'Valley Integration Inc.',
    role: 'Software Developer Intern',
    period: 'May 2024 - August 2024',
    location: 'Mississauga, Ontario',
    highlights: [
      'Reduced report generation time by 50% with Python automation workflows integrating Zoho APIs',
      'Created control panel estimation tool using SQL, Microsoft Access, and VBA improving accuracy by 30%',
      'Assisted in SCADA/PLC system development for water management'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center snap-start bg-gradient-dark grid-pattern py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-12"
      >
        Work <span className="text-purple-400">Experience</span>
      </motion.h2>

      <div className="max-w-4xl px-8 space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="card-hover bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl relative overflow-hidden"
          >
            {/* Accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-700" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-purple-400 text-lg">{exp.company}</p>
              </div>
              <div className="text-gray-400 text-sm md:text-right mt-3 md:mt-0">
                <p className="font-medium">{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-3">
              {exp.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-sm flex items-start"
                >
                  <span className="text-purple-400 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
