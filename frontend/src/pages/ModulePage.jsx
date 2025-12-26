import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

// Module metadata - could come from API in future
const modules = {
    portfolio: {
        title: 'Portfolio',
        description: 'Personal portfolio showcasing my work',
        status: 'coming-soon',
        github: 'https://github.com/darksightkellar/portfolio',
    },
    todo: {
        title: 'Todo App',
        description: 'A simple todo application with in-memory storage',
        status: 'ready',
        path: '/modules/todo/index.html',
    },
};

export default function ModulePage() {
    const { moduleId } = useParams();
    const module = modules[moduleId];

    if (!module) {
        return (
            <div className="min-h-screen pt-20 px-4 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Module Not Found</h1>
                    <BackButton />
                </div>
            </div>
        );
    }

    // For ready modules, show full-page iframe
    if (module.status === 'ready') {
        return (
            <div className="min-h-screen pt-16">
                <div className="fixed top-20 left-4 z-10">
                    <BackButton />
                </div>
                <iframe
                    src={module.path}
                    className="w-full h-[calc(100vh-4rem)] border-0"
                    title={module.title}
                />
            </div>
        );
    }

    // For coming-soon modules, show placeholder
    return (
        <div className="min-h-screen pt-16">
            <div className="fixed top-20 left-4 z-10">
                <BackButton />
            </div>

            <div className="max-w-4xl mx-auto pt-8 px-4 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl font-bold text-white mb-2">{module.title}</h1>
                    <p className="text-slate-400">{module.description}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 text-center"
                >
                    <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
                    <p className="text-slate-400 mb-6">
                        This module is currently under development.
                    </p>
                    {module.github && (
                        <a
                            href={module.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                        >
                            View on GitHub →
                        </a>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
