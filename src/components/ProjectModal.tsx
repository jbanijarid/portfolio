import { motion } from "framer-motion";
import { Project as ProjectType } from "./type";

interface ProjectProps {
    project: ProjectType | null;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectProps) => {

    if (!project) {
        return null;
    }

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div className=""
            onClick={handleBackdropClick}>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleBackdropClick}
            >
                <motion.div
                    className="bg-gray-800 text-white p-6 md:p-8 rounded-lg max-w-2xl w-full shadow-2xl relative overflow-y-auto max-h-[90vh]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                >
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 italic">{project.description}</p>
                    <p className="text-gray-400 leading-relaxed">{project.details}</p>

                    <div className="mb-6">
                        <h4 className="text-lg font-medium mb-2">Tâces principales : </h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {project.tasks.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-medium mb-2">Technologies utilisées : </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-indigo-600 bg-opacity-20 text-indigo-400 border border-indigo-500 px-3 py-1 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
                        onClick={onClose}>
                        Fermer
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ProjectModal;