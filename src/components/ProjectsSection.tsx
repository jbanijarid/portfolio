import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project as ProjectType } from "./type";

const projects : ProjectType[] = [
  {
    title: "AI-TravelPlanner | Full-Stack Developer",
    description:
      "Adding a new feature to the AMC open-source project",
    details:
      "Designed and developed a full-stack AI-driven travel planner that generates personalized itineraries based on user preferences and constraints. ",
    tasks: [
      "AI & Backend: Integrated Mistral AI using Spring AI to generate structured data.",
      "Frontend: Built a modern interface with React and TypeScript.",
      "Project under active development"
    ],
    stack: ["Java", "React", "Mistral AI"],
    link: "#",
  },
  {
    title: "Developer Portfolio Website",
    description:
      "Personal portfolio website to showcase projects and skills",
    details:
      "Designed and developed a personal portfolio website to showcase my projects, skills, and experience as a developer. The website features a clean and modern design, responsive layout, and interactive elements to engage visitors.",
    tasks: [
      "Designed and implemented the website using React and TailwindCSS",
      "Created reusable components",
      "Deployed the website on Vercel for global access"
    ],
    stack: ["React", "TailwindCSS", "Vercel"],
    link: "#",
  },
  {
    title: "Digital Version of The Race Board Game",
    description: "Digital transformation of the board game *The Race*",
    details:
      "This project consists of building a digital version of the board game \"The Race\","
       + " allowing users to play online with an interactive interface."
       + " \"The Race\" is a multiplayer car racing game where movements are determined by dice rolls,"
       + " and player interactions are managed through the use of cards.",
    tasks: [
      "Full-stack development using Java Spring, TypeScript, React, and TailwindCSS",
      "Designed and implemented REST APIs",
      "Integrated JWT authentication for secure API access",
      "Managed PostgreSQL (relational) and MongoDB (NoSQL) databases",
      "Deployed the application on AlwaysData servers",
      "Worked in an Agile environment with two-week sprints"
    ],
    stack: ["Java Spring", "React", "MongoDB", "PostgreSQL", "SCRUM", "Docker"],
    link: "#",
  },
  {
    title: "SCRUM / Kanban Task Manager",
    description:
      "Web application for managing tasks using SCRUM and Kanban methodologies",
    details:
      "This project focuses on developing a web application that helps teams manage tasks efficiently using SCRUM and Kanban workflows.",
    tasks: [
      "Building customizable dashboards",
      "Implementing real-time collaboration features",
    ],
    stack: ["React", "Node.js", "MongoDB", "Docker"],
    link: "#",
  },
  {
    title: "Open Source Contribution to AMC",
    description:
      "Adding a new feature to the AMC open-source project",
    details:
      "Added a new feature to the open-source AMC (Auto Multiple Choice) software to automate the process of"
      + "matching exam papers with students.",
    tasks: [
      "Defined and analyzed client requirements and translated them into user stories",
      " Performed image processing using Python and Google VisionAI API to extract handwritten",
      " student numbers",
      " Modified AMC’s Perl-based UI to integrate and execute the OCR script",
      " Worked under Agile methodology using JIRA"
    ],
    stack: ["Perl", "Python"],
    link: "#",
  },
];


const ProjectsSection = () => {

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  return ( 
    <section className="bg-[#0a0a0a] py-32 px-8 md:px-16 lg:px-24 relative overflow-hidden"
      id="projects">
      <div className="max-w-6xl mx-auto">


        <h2 className="font-serif font-light  text-5xl md:text-6xl text-[#e8e0d0] mb-4">
          Projects & <br /> 
          <span className="italic">Features</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div className=" group bg-[#0d0d0d] rounded rounded-xl border border-[#1e1a16] hover:border-[#c9a84c]/20 p-8 relative card-glow transition-all duration-500">
              <span className="font-serif text-[#c9a84c]/20 text-4xl block mb-6">{index + 1}</span>
              <h3 className="font-serif text-xl text-[#e8e0d0] mb-2">
                {project.title}
              </h3>

              <p className="text-[#717060] font-serif mb-4">
                {project.description}
              </p>

              <p className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, i) => (
                  <span key={i} className="text-[10px] font-serif px-2 py-0.5 bg-[#161616] border border-[#2a2520] text-[#7a7060]"> {tech} </span>
                ))}
              </p>

              <button className="px-8 py-3 border border-[#c9a84c]/40 text-xs font-serif uppercase tracking-[0.25em] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300"
                onClick={() => setSelectedProject(project)}>
                details
              </button>
            </div>
          ))}

          <ProjectCard
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </div>
      
      </div>
    </section>
  )
}

export default ProjectsSection;