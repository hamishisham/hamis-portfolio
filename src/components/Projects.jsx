import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Full-Stack & Team Projects
const fullstackProjects = [
  {
    title: "EduPress",
    description: "E-learning platform with admin dashboard, lessons, and exams.",
    liveDemo: "https://web-master-intern-workshop-2-e-lear.vercel.app/",
    repo: "https://github.com/Mohamed-Fouad-Nassar/web-master-intern-workshop-2-e-learning-platform",
    role: "Built the admin dashboard to manage lessons, students, and exams.",
    tag: "Full-Stack",
    image: "/src/assets/edupress.PNG",
  },
  {
    title: "Amazon Clone - Client",
    description: "Amazon-style e-commerce app with cart, wishlist, auth, and layout.",
    liveDemo: "https://react-e-commerce-clone.vercel.app/",
    repo: "https://github.com/hamishisham/react-e-commerce-clone",
    role: "Team Lead: Header & Footer Layout, Product Page, Cart, Wishlist, Redux slices.",
    image: "/src/assets/amazon.PNG",
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
    image: "/src/assets/pizza.PNG",
  },
  {
    title: "Interior Design Landing Page",
    description: "Landing page with clean layout and modern UI.",
    liveDemo: "https://interior-design-landing-page-mauve.vercel.app/",
    repo: "https://github.com/hamishisham/Interior-Design-Landing-Page",
    role: "Designed full layout using HTML & CSS with responsive styling.",
    image: "/src/assets/viva.PNG",
  },
  {
    title: "Movies App",
    description: "Basic movie browser UI with card display and search logic.",
    liveDemo: "https://hamishisham.github.io/Movies-App-master/",
    repo: "https://github.com/hamishisham/Movies-App-master",
    role: "Developed full UI using vanilla JS and CSS.",
    image: "/src/assets/movies.PNG",
  }
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="bg-[#161b22] border border-gray-700 text-white hover:shadow-xl transition relative overflow-hidden">
        {project.tag && (
          <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded bg-green-700 text-white uppercase tracking-wide z-10">
            {project.tag}
          </span>
        )}
        {/* Project Image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover border-b border-gray-700"
          />
        )}
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-gray-400">{project.description}</p>
          <p className="mb-4 text-sm text-gray-500 italic">{project.role}</p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 hover:bg-green-500 transition text-white text-sm"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition text-white text-sm"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 bg-[#0d1117] text-white px-4 lg:px-32">
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
        {uiProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
