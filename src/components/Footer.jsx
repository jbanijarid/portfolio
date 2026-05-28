import { FC } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer= () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] font-serif  text-[#e8e0d0] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="font-seriftext-sm">&copy; {currentYear} JBJ</p>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-[#c9a84c] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#c9a84c] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#c9a84c] transition-colors">Skills</a>
          <a href="#contact" className="hover:text-[#c9a84c] transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a href="mailto:jad@example.com" target="_blank" rel="noreferrer" className="hover:text-[#c9a84c] transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/jadbani" target="_blank" rel="noreferrer" className="hover:text-[#c9a84c] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/jadbani" target="_blank" rel="noreferrer" className="hover:text-[#c9a84c] transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
