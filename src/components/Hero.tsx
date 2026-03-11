import { motion } from 'framer-motion';

// TODO: Add your profile picture to the public folder and update the path below
const PROFILE_IMAGE = '/profile.jpg'; // Change this to your image path

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center snap-start bg-gradient-hero grid-pattern relative">
      {/* Animated background orbs */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <img
            src={PROFILE_IMAGE}
            alt="Saumy Patel"
            className="profile-picture"
          />
        </motion.div>

        <p className="text-purple-400 mb-2 text-lg tracking-wider uppercase">Hello, I'm</p>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 glow-text">Saumy Patel</h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10">Software Engineering @ McMaster University</p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
