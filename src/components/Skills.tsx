import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Go', 'Java', 'SQL', 'C', 'JavaScript', 'C#', 'C++', 'TypeScript', 'HTML/CSS']
  },
  {
    title: 'Tools & Frameworks',
    skills: ['Node.js', 'React.js', 'Express.js', 'Docker', 'PostgreSQL', 'InfluxDB', 'Streamlit', 'NumPy', 'scikit-learn', 'Pandas']
  },
  {
    title: 'Technologies',
    skills: ['REST APIs', 'Git', 'Linux', 'Unix', 'Material UI']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center snap-start bg-gradient-darker grid-pattern py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-12"
      >
        My <span className="text-purple-400">Skills</span>
      </motion.h2>

      <div className="max-w-4xl px-8 w-full space-y-10">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIdx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.03 }}
                  viewport={{ once: true }}
                  className="skill-badge px-4 py-2 text-purple-300 rounded-lg cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
