import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="font-serif text-[#e8e0d0] text-2xl">JBJ</h1>

        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="cursor-pointer hover:text-indigo-400 transition-colors duration-300 font-serif text-[#e8e0d0]"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </div>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center space-y-8 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((item) => (
          <li key={item.name} className="list-none">
            <a
              href={item.href}
              className="text-2xl font-serif text-[#e8e0d0] cursor-pointer hover:text-indigo-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)} 
            >
              {item.name}
            </a>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;