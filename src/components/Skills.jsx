// components/Skills.jsx
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: "Advanced", percent: 95 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: "Advanced", percent: 90 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: "Advanced", percent: 90 },
  { name: "React", icon: <FaReact className="text-sky-400" />, level: "Advanced", percent: 90 },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: "Intermediate", percent: 75 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: "Advanced", percent: 90 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "Intermediate", percent: 70 },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" />, level: "Advanced", percent: 85 },
  { name: "GitHub", icon: <FaGithub className="text-white" />, level: "Advanced", percent: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 bg-[#0d1117] text-white px-4 lg:px-32">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#161b22] p-4 rounded-xl shadow-md hover:scale-105 transition-transform space-y-2"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{skill.icon}</span>
              <div>
                <h4 className="font-semibold text-lg">{skill.name}</h4>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-green-400 h-2 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
