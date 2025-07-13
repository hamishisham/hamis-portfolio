// components/Experience.jsx
import { motion } from "framer-motion";
import { FaBuilding, FaBriefcase, FaLaptopCode } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "Web Masters",
      role: "React Web Developer",
      platform: "EduPress – E-learning Platform",
      date: "July 2025 · Remote",
      description: [
        "Built Admin Dashboard for managing lessons, exams, and students.",
        "Created user-friendly and efficient interfaces.",
      ],
    },
    {
      company: "Digital Egypt PioneersInitiative - DEPI",
      role: "React Web Developer",
      platform: "Tradesphere – E-commerce Platform",
      date: "October 2024 · Hybrid",
      description: [
        "Developed auth, profile, orders, and admin management features.",
        "Focused on usability and performance.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-20 bg-[#0d1117] text-white px-4 lg:px-32"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#161b22] rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaBriefcase className="text-green-400 text-xl" />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
              <FaBuilding />
              <span>{exp.company}</span>
            </div>
            <p className="text-xs text-gray-500 mb-2">{exp.date}</p>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <FaLaptopCode className="text-cyan-400" />
              <span className="italic">{exp.platform}</span>
            </div>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              {exp.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
