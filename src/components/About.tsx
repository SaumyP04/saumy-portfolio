import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Internships' },
  { value: '10+', label: 'Languages' },
  { value: '2027', label: 'Graduation' },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center snap-start bg-gradient-dark grid-pattern py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          3rd year Software Engineering student at McMaster University with a minor in Finance.
          Passionate about building scalable software solutions, from full-stack web applications
          to algorithmic trading strategies. Currently studying my third year.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="card-hover bg-gray-900/50 backdrop-blur-sm px-8 py-6 rounded-xl"
            >
              <p className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
