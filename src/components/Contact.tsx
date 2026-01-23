import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="h-screen flex flex-col items-center justify-center snap-start bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center px-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8">Let's work together on your next project</p>
        <a
          href="mailto:hello@example.com"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Contact Me
        </a>
        <div className="flex justify-center gap-6 mt-8">
          <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
