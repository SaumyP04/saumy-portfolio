import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Project One', desc: 'Portfolio' },
];

const Projects = () => {
  return (
    <section id="projects" className="h-screen flex flex-col items-center justify-center snap-start bg-gray-900">
      <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 px-8 max-w-5xl">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 cursor-pointer"
          >
            <div className="h-32 bg-gray-700 rounded mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
