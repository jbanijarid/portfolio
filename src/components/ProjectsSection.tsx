import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project as ProjectType } from "./type";

const projects : ProjectType[] = [
  {
    title: "Digital Version of The Race Board Game",
    description: "Digital transformation of the board game *The Race*",
    details:
      "This project consists of building a digital version of the board game *The Race*, allowing users to play online with an interactive interface.",
    tasks: [
      "Designing the user interface",
      "Developing the core game features",
    ],
    stack: ["React", "Node.js", "Socket.io"],
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
    stack: ["React", "Node.js", "Socket.io"],
    link: "#",
  },
  {
    title: "Open Source Contribution to AMC",
    description:
      "Adding a new feature to the AMC open-source project",
    details:
      "This project involved contributing to the AMC open-source project by designing and implementing a new feature requested by the community.",
    tasks: [
      "Analyzing community requirements",
      "Developing and testing the new feature",
    ],
    stack: ["React", "Node.js", "Socket.io"],
    link: "#",
  },
];


const ProjectsSection = () => {

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  return ( 
    <section className="bg-zinc-950 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div className="bg-zinc-900 rounded rounded-xl border border-zinc-800 p-6">
              <h3 className="font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-zinc-400 mb-3">
                {project.description}
              </p>

              <p className="text-zinc-500 mb-3">
                {project.stack.map((tech, i) => (
                  <span key={i}> {tech} </span>
                ))}
              </p>

              <button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
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