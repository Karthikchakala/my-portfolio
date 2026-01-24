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
                        About Me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight max-w-2xl">
                        I will help you to develop your <br />
                        business website
                    </h2>

                    <div className="max-w-2xl text-gray-400 leading-relaxed space-y-6">
                        <p>
                            I am a Computer Science undergraduate and Full-Stack Developer with hands-on experience leading end-to-end development of scalable, secure web systems. I focus on backend architecture, REST API design, real-time systems, and strong algorithmic problem-solving.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
