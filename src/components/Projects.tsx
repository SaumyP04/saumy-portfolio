import { motion } from 'framer-motion';

// TODO: Add your project images to the public folder and update the paths below
const projects = [
  {
    id: 1,
    title: 'Maze Runner',
    desc: 'Java application using BFS algorithm to find the quickest exit path in mazes, reducing average maze-solving time by 60%.',
    tech: ['Java', 'Maven', 'Git'],
    image: '/projects/maze-runner.png', // Add your image
  },
  {
    id: 2,
    title: 'Figma Plugin UI to HTML/CSS',
    desc: 'Figma plug-in that converts user-created UI designs into functional HTML/CSS code, reducing front-end development time by 40%.',
    tech: ['TypeScript', 'JavaScript', 'HTML/CSS'],
    image: '/projects/figma-plugin.png', // Add your image
  },
  {
    id: 3,
    title: 'Portfolio Tracking Tool',
    desc: 'Live portfolio tracking tool built with Python and Streamlit for DeGroote Finance and Investments Council.',
    tech: ['Python', 'Streamlit', 'QuantConnect'],
    image: '/projects/portfolio-tracker.png', // Add your image
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center snap-start bg-gradient-darker grid-pattern py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-12"
      >
        My <span className="text-purple-400">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="card-hover bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden group"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="project-image w-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
