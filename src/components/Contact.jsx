"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: "",
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    description: "",
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };
    return (
        <section id="contact" className="py-20 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-orange-500 text-sm font-medium tracking-wider mb-4 shadow-lg">
                            Send Me a Message
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Just say <br /> hello
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                            Have an opportunity, project, or idea in mind?
                            Drop a message and I’ll get back to you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-white">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Email</h3>
                                    <a href="mailto:karthikc11105@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                        karthikc11105@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-white">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Phone</h3>
                                    <a href="tel:+918328134131" className="text-gray-400 hover:text-white transition-colors">
                                        +91 8328134131
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-transparent"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name..."
                                        className="w-full bg-transparent border border-white/20 rounded-full px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your email..."
                                        className="w-full bg-transparent border border-white/20 rounded-full px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-600"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Description <span className="text-red-500">*</span></label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="Description..."
                                    className="w-full bg-transparent border border-white/20 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none placeholder:text-gray-600"
                                />
                            </div>

                            {status === 'success' && (
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-sm">
                                    Message sent successfully! I&apos;ll get back to you soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                                    Failed to send message. Please try again later.
                                </div>
                            )}

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="bg-white text-black font-medium w-12 h-12 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <ArrowRight size={20} />
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
