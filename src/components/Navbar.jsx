// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d1117]/95 backdrop-blur-sm px-6 py-4 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#home">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a>

        <button
          onClick={toggleMenu}
          className="text-white lg:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden lg:flex gap-6 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-4 px-2">
          <ul className="flex flex-col gap-4 text-gray-300 bg-[#0d1117]/95 rounded-md p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block hover:text-white transition"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
