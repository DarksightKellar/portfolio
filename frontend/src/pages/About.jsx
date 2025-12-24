import { motion } from 'framer-motion';

export default function About() {
    const skills = [
        { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
        { category: 'Backend', items: ['Python', 'Flask', 'Node.js', 'PostgreSQL'] },
        { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
    ];

    return (
        <div className="min-h-screen pt-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h1>

                    <div className="prose prose-invert max-w-none mb-12">
                        <p className="text-lg text-slate-400 leading-relaxed">
                            I'm a passionate developer who loves building elegant solutions to complex problems.
                            With a background in both frontend and backend development, I enjoy creating
                            full-stack applications that are both beautiful and functional.
                        </p>
                        <p className="text-lg text-slate-400 leading-relaxed mt-4">
                            When I'm not coding, you can find me exploring new technologies, contributing to
                            open-source projects, or working on personal creative projects.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                            >
                                <h3 className="text-lg font-medium text-cyan-400 mb-4">{skillGroup.category}</h3>
                                <ul className="space-y-2">
                                    {skillGroup.items.map((item) => (
                                        <li key={item} className="text-slate-400">{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
