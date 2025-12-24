import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Hello, I'm Kel
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 mb-8">
                        Full-Stack Developer & Creative Technologist
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/projects"
                        className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                        View Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-slate-400 hover:text-white transition-colors"
                    >
                        Get in Touch
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16"
                >
                    <div className="flex justify-center gap-6 text-slate-500">
                        <span className="hover:text-cyan-400 transition-colors cursor-pointer">React</span>
                        <span>•</span>
                        <span className="hover:text-cyan-400 transition-colors cursor-pointer">Python</span>
                        <span>•</span>
                        <span className="hover:text-cyan-400 transition-colors cursor-pointer">Flask</span>
                        <span>•</span>
                        <span className="hover:text-cyan-400 transition-colors cursor-pointer">TypeScript</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
