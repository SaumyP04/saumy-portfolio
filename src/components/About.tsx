import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="h-screen flex items-center justify-center snap-start bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center px-8"
      >
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <p className="text-gray-300 mb-4">
          ----
        </p>
        <div className="flex justify-center gap-8 mt-8">
          <div>
            <p className="text-3xl font-bold text-purple-400">---</p>
            <p className="text-gray-400">---</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-400">---</p>
            <p className="text-gray-400">---</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-400">---</p>
            <p className="text-gray-400">----</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
