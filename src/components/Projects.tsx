import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { Project as ProjectType } from "./type";

const projects: ProjectType[] = [
  {
    title: "Digitalisation du The Race",
    description: "Digitalisation du jeu de société The Race",
    details: "Ce projet consiste à créer une version numérique du jeu de société The Race, permettant aux utilisateurs de jouer en ligne.",
    tasks: [
      "Conception de l'interface utilisateur",
      "Développement des fonctionnalités de jeu",
    ],
    stack: [
      "React",
      "Node.js",
      "Socket.io"
    ],
    link: "#"
  },
  {
    title: "Gestionnaire de SCRUM/Kanban",
    description: "Application pour gérer les tâches avec les méthodologies SCRUM et Kanban ",
    details: "Ce projet vise à développer une application web permettant de gérer les tâches en utilisant les méthodologies SCRUM et Kanban.",
    tasks: [
      "Création de tableaux de bord personnalisables",
      "Implémentation de fonctionnalités de collaboration en temps réel",
    ],
    stack: [
      "React",
      "Node.js",
      "Socket.io"
    ],
    link: "#"
  },
  {
    title: "Projet open source AMC",
    description: "Ajouter une nouvelle fonctionnalité au projet open source AMC",
    details: "Ce projet consiste à contribuer au projet open source AMC en ajoutant une nouvelle fonctionnalité demandée par la communauté.",
    tasks: [
      "Analyse des besoins de la communauté",
      "Développement et tests de la nouvelle fonctionnalité",
    ],
    stack: [
      "React",
      "Node.js",
      "Socket.io"
    ],
    link: "#"
  }
];

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <h2 className="text-3xl font-semibold font-semibold text-center mb-10">Projets</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer text-center"
          >
            <h3 className="text-xl font-serif mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-6">{project.description}</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
              onClick={() => setSelectedProject(project)}>
              Voir le projet
            </button>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default Projects;
