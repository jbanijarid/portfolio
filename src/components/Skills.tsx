import { motion } from "framer-motion";
import { FC } from "react";

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "Java", icon: "java.png" },
  { name: "Spring Boot", icon: "springboot.png" },
  { name: "TypeScript", icon: "typescript.png" },
  { name: "React", icon: "react.png" },
  { name: "Tailwind CSS", icon: "tailwindcss.png" },
  { name: "PostgreSQL", icon: "postgresql.png" },
  { name: "MongoDB", icon: "mongodb.png" },
  { name: "Git", icon: "git.png" },
];

const Skills: FC = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6" 
            id="skills">
      <div className="max-w-5xl mx-auto">

        <h2 className="font-serif font-light  text-5xl md:text-6xl text-[#e8e0d0] mb-4">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#0d0d0d] p-6 rounded-lg shadow-lg flex flex-col items-center 
                         hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-4"
              />
              <p className="text-[#e8e0d0] font-serif">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
