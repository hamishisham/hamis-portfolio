import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <footer id="contact" className="w-full py-20 bg-[#0d1117] text-white text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-white border-b border-gray-700 pb-4 mb-10 w-fit mx-auto"
      >
        Let's Connect
      </motion.h2>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-xl mb-8 flex-wrap">
        <a
          href="https://github.com/hamishisham"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition"
        >
          <FaGithub className="inline mr-2" /> GitHub
        </a>
        <a
          href="mailto:hamismzaher98@gmail.com"
          className="text-gray-300 hover:text-white transition"
        >
          <FaEnvelope className="inline mr-2" /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/hamis-hisham/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition"
        >
          <FaLinkedin className="inline mr-2" /> LinkedIn
        </a>
        <span className="text-gray-300">
          <FaPhone className="inline mr-2" /> +20 155 523 4782
        </span>
      </div>

      <p className="text-gray-500 text-sm mt-10">
        © 2025 Hamis Hisham. All rights reserved.
      </p>
    </footer>
  );
}
