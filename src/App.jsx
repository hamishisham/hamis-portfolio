import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/Hero"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />
      <main>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen bg-[#0d1117]">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >   <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
