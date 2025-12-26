import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    return (
        <Link to={project.link} className="block h-full">
            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-colors cursor-pointer"
            >
                <div className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
