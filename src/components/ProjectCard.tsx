import { motion } from "framer-motion";
import { Project as ProjectType } from "./type";

interface ProjectProps {
    project: ProjectType | null;
    onClose: () => void;
}

const ProjectCard = ({ project, onClose }: ProjectProps) => {

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
                    className="bg-[#0a0a0a] p-6 md:p-8 rounded-lg max-w-2xl w-full shadow-2xl relative overflow-y-auto max-h-[90vh]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                >
                    <h3 className="text-2xl text-[#c9a84c] font-serif mb-3">{project.title}</h3>
                    <p className="text-[#e8e0d0] mb-4 font-serif">{project.description}</p>
                    <p className="text-[#717060] font-serif mb-4">{project.details}</p>

                    <div className="mb-6">
                        <h4 className="text-lg text-[#e8e0d0] font-serif mb-2">Main Tasks : </h4>
                        <ul className="list-disc list-inside text-[#717060] font-serif">
                            {project.tasks.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg text-[#e8e0d0] font-serif mb-2">Stack : </h4>
                        <div className="flex flex-wrap items-center justify-center gap-3 ">
                            {project.stack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-[10px] px-2 py-0.5 font-serif bg-[#161616] border border-[#2a2520] text-[#7a7060]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button className="px-8 py-3 border border-[#c9a84c]/40 text-xs font-serif uppercase tracking-[0.25em] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300"
                        onClick={onClose}>
                        Close
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;