import { Link } from 'react-router-dom';

export default function BackButton({ to = '/projects', label = 'Back' }) {
    return (
        <Link
            to={to}
            className="inline-flex items-center px-4 py-2 bg-slate-800/80 backdrop-blur-sm text-cyan-400 hover:text-cyan-300 rounded-lg border border-slate-700 transition-colors"
        >
            ← {label}
        </Link>
    );
}
