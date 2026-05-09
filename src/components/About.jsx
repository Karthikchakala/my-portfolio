"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#050505] relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full select-none pointer-events-none z-0">
                <h1 className="text-[20vw] font-bold text-white/[0.02] text-right tracking-tighter leading-none pr-10">
                    About
                </h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-4xl"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-orange-500 text-sm font-medium tracking-wider mb-4 shadow-lg">
                        Engineering Philosophy
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight max-w-2xl">
                        Building Scalable <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Digital Infrastructure</span>
                    </h2>

                    <div className="max-w-3xl text-gray-400 leading-relaxed text-lg font-light">
                        <p>
                            I specialize in architecting high-performance backend systems and real-time applications. My approach focuses on scalability, security, and clean engineering fundamentals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 mt-20">
                        {/* Capability Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Backend Systems", desc: "Architecting robust server-side logic and microservices." },
                                { title: "API Engineering", desc: "Designing scalable, secure, and documented RESTful APIs." },
                                { title: "Real-Time Data", desc: "Leveraging WebSockets for low-latency live interactions." },
                                { title: "System Design", desc: "Optimizing database schemas and high-availability patterns." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors group"
                                >
                                    <h4 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Timeline */}
                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
                            <div className="space-y-10 pl-8">
                                {[
                                    { year: "2023", title: "CS Foundations", desc: "Started Computer Science journey at IIIT Kurnool." },
                                    { year: "2024", title: "Full-Stack Systems", desc: "Engineered 30+ role-based APIs and complex dashboards." },
                                    { year: "2025", title: "Scalable Real-Time", desc: "Focusing on low-latency systems and AI integrations." },
                                    { year: "2026", title: "SDE Internship", desc: "Seeking opportunities to build production-grade systems." },
                                ].map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-black border-2 border-white rounded-full z-10"></div>
                                        <div className="text-sm font-bold text-white mb-1">{step.year} &mdash; {step.title}</div>
                                        <p className="text-gray-500 text-sm">{step.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
