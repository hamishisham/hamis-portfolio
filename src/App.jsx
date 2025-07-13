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
        <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
          <Hero />
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
