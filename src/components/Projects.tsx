import { motion } from "framer-motion";

const projects = [
  { title: "Digitalisation du The Race", description: "Digitalisation du jeu de société The Race", link: "#" },
  { title: "Gestionnaire de SCRUM/Kanban", description: "Application pour gérer les tâches avec les méthodologies SCRUM et Kanban ", link: "#" },
  { title: "Projet open source AMC", description: "Ajouter une nouvelle fonctionnalité au projet open source AMC", link: "#" }
];

const Projects = () => { 
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
        <h2 className="text-3xl font-semibold font-semibold text-center mb-10">Mes projets</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{opacity: 1, y:0}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer text-center"
                    >
                    <h3 className="text-xl font-serif mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Voir le projet</button>
                </motion.div>
            ))} 
        </div>
    </section>
  )
}

export default Projects;
