import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700"
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Portfolio
                </Link>
                <div className="flex gap-8">
                    <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
                    <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
                    <Link to="/projects" className="text-slate-300 hover:text-white transition-colors">Projects</Link>
                    <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
                </div>
            </div>
        </motion.nav>
    );
}
