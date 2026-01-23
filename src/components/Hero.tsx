import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center snap-start bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-purple-400 mb-2">Hello, I'm</p>
        <h1 className="text-5xl font-bold text-white mb-4">Saumy Patel</h1>
        <p className="text-xl text-gray-400 mb-8">Software Engineering Student</p>
        <a
          href="#projects"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
