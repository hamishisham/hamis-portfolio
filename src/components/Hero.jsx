// components/Hero.jsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-[#0d1117] text-white px-4 lg:px-32"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hamis Hisham Zaher
      </motion.h1>

      <motion.h2
        className="text-lg md:text-2xl text-gray-400 mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Frontend React Developer
      </motion.h2>

      {/* Personal Tagline */}
      <motion.p
        className="mt-6 max-w-2xl text-center text-gray-400 text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I <span className="text-green-400 font-semibold">craft experiences</span>, not just websites — turning ideas into{" "}
        <span className="text-blue-400 font-semibold">pixel-perfect</span> and{" "}
        <span className="text-purple-400 font-semibold">responsive</span> interfaces.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-8 flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <a href="#projects">
          <Button
            variant="default"
            className="px-8 py-3 text-base font-semibold bg-green-600 hover:bg-green-500 transition"
          >
            View Projects
          </Button>
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-8 py-3 text-base font-semibold bg-gray-800 hover:bg-gray-700 text-white rounded-md transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
