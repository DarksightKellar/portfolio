import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, use mailto link
        const mailtoLink = `mailto:your-email@example.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
        window.location.href = mailtoLink;
        setStatus('success');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen pt-24 px-6">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
                    <p className="text-lg text-slate-400 mb-12">
                        Have a question or want to work together? Feel free to reach out.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                            placeholder="Your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Send Message
                    </button>

                    {status === 'success' && (
                        <p className="text-green-400 text-center">Opening your email client...</p>
                    )}
                </motion.form>
            </div>
        </div>
    );
}
