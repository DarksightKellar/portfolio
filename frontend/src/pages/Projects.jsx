import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchProjects } from '../api';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProjects()
            .then(setProjects)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="min-h-screen pt-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
                    <p className="text-lg text-slate-400 mb-12">
                        A collection of my recent work and side projects.
                    </p>
                </motion.div>

                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
                    </div>
                )}

                {error && (
                    <div className="text-center py-20">
                        <p className="text-red-400">Failed to load projects: {error}</p>
                    </div>
                )}

                {!loading && !error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
