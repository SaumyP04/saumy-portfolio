import { motion } from 'framer-motion';

const skills = ['---'];

const Skills = () => {
  return (
    <section id="skills" className="h-screen flex flex-col items-center justify-center snap-start bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-xl px-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-900 text-purple-400 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
