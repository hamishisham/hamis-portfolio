import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Full-Stack & Team Projects
const fullstackProjects = [
  {
    title: "BookNest",
    description:
      "Hotel booking web app with admin dashboard for managing hotels, users, and bookings.",
    liveDemo: "https://hotel-booking-website-v1-b9nm.vercel.app/",
    repo: "https://github.com/hamishisham/hotel-booking-website-v1",
    role: "Sole Developer: Built full user interface, booking flow, and admin dashboard using React & MUI.",
    tag: "Full-Stack",
    image: "booknest.PNG",
  },
  {
    title: "EduPress",
    description: "E-learning platform with admin dashboard, lessons, and exams.",
    liveDemo: "https://web-master-intern-workshop-2-e-lear.vercel.app/",
    repo: "https://github.com/Mohamed-Fouad-Nassar/web-master-intern-workshop-2-e-learning-platform",
    role: "Built the admin dashboard to manage lessons, students, and exams.",
    tag: "Full-Stack",
    image: "edupress.PNG",
  },
  {
    title: "Amazon Clone - Client",
    description: "Amazon-style e-commerce app with cart, wishlist, auth, and layout.",
    liveDemo: "https://react-e-commerce-clone.vercel.app/",
    repo: "https://github.com/hamishisham/react-e-commerce-clone",
    role: "Team Lead: Header & Footer Layout, Product Page, Cart, Wishlist, Redux slices.",
    image: "amazon.PNG",
  },
];

// UI-Focused Projects
const uiProjects = [
  {
    title: "Pizza Restaurant Website",
    description: "Responsive menu, cart logic, and UI interactions.",
    liveDemo: "https://pizza-hut-website-theta.vercel.app/index.html",
    repo: "https://github.com/hamishisham/pizza-site",
    role: "Designed and implemented layout, cart logic, and categories using HTML, CSS, JS.",
    image: "pizza.PNG",
  },
  {
    title: "Interior Design Landing Page",
    description: "Landing page with clean layout and modern UI.",
    liveDemo: "https://interior-design-landing-page-mauve.vercel.app/",
    repo: "https://github.com/hamishisham/Interior-Design-Landing-Page",
    role: "Designed full layout using HTML & CSS with responsive styling.",
    image: "viva.PNG",
  },
  {
    title: "Movies App",
    description: "Basic movie browser UI with card display and search logic.",
    liveDemo: "https://hamishisham.github.io/Movies-App-master/",
    repo: "https://github.com/hamishisham/Movies-App-master",
    role: "Developed full UI using vanilla JS and CSS.",
    image: "movies.PNG",
  },
];

// Project Card Component
function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="bg-gradient-to-br from-[#1e1e2f] to-[#111218] border border-gray-800 rounded-xl text-white hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden">
        {project.image && (
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover border-b border-gray-700 transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        <CardHeader className="px-5 pt-4 pb-0">
          <CardTitle className="text-xl font-semibold flex justify-between items-center">
            {project.title}
            {project.tag && (
              <span className="text-xs bg-green-600 px-2 py-0.5 rounded-full text-white uppercase tracking-wide">
                {project.tag}
              </span>
            )}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-5 pb-5 pt-3">
          <p className="text-gray-300 text-sm mb-2">{project.description}</p>
          <p className="text-gray-500 text-xs italic mb-4">{project.role}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-white text-sm transition"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white text-sm transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Projects Section Component
export default function Projects() {
  const [showAllUI, setShowAllUI] = useState(false);
  const sectionRef = useRef(null);

  const visibleUIProjects = showAllUI ? uiProjects : uiProjects.slice(0, 2);

  const handleToggleUI = () => {
    if (showAllUI && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowAllUI(!showAllUI);
  };

  return (
    <section ref={sectionRef} id="projects" className="w-full py-20 bg-[#0d1117] text-white px-4 lg:px-32">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      {/* Full-Stack Projects */}
      <h3 className="text-2xl font-semibold mb-6 text-green-400">Full-Stack & Team Projects</h3>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {fullstackProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* UI Projects */}
      <h3 className="text-2xl font-semibold mb-6 text-blue-400">UI-Focused Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {visibleUIProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Show More / Less Button */}
      <div className="text-center mt-6 md:hidden">
        <button
          onClick={handleToggleUI}
          className="text-sm px-6 py-2 bg-green-600 hover:bg-green-500 transition rounded-md"
        >
          {showAllUI ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}
