"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Smartphone, Terminal, Cpu, Globe, Layers, Box, Lock, Send } from "lucide-react";

const skills = [
    // Programming
    { name: "C++", icon: Code2, size: "w-24 h-24" },
    { name: "Python", icon: Code2, size: "w-22 h-22" },
    { name: "JavaScript", icon: Code2, size: "w-26 h-26" },

    // Frontend
    { name: "React", icon: Layout, size: "w-28 h-28" },
    { name: "Next.js", icon: Globe, size: "w-24 h-24" },
    { name: "Redux", icon: Layers, size: "w-20 h-20" },
    { name: "Tailwind CSS", icon: Smartphone, size: "w-22 h-22" },

    // Backend & Systems
    { name: "Node.js", icon: Server, size: "w-24 h-24" },
    { name: "Express", icon: Server, size: "w-20 h-20" },
    { name: "REST APIs", icon: Globe, size: "w-22 h-22" },
    { name: "Authentication", icon: Lock, size: "w-20 h-20" },
    { name: "Docker", icon: Box, size: "w-22 h-22" },

    // Databases
    { name: "PostgreSQL", icon: Database, size: "w-24 h-24" },
    { name: "MongoDB", icon: Database, size: "w-20 h-20" },
    { name: "MySQL", icon: Database, size: "w-22 h-22" },
    { name: "SQLite", icon: Database, size: "w-20 h-20" },
    { name: "Supabase", icon: Database, size: "w-22 h-22" },

    // Tools
    { name: "Git", icon: Terminal, size: "w-18 h-18" },
    { name: "Postman", icon: Send, size: "w-20 h-20" },
    // Docker is already listed in Backend & Systems

    // Problem Solving
    { name: "DSA", icon: Cpu, size: "w-24 h-24" },
];

export default function Skills() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        setPositions(
            skills.map(() => ({
                top: `${Math.random() * 70}%`,
                left: `${Math.random() * 70}%`,
            }))
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section id="skills" className="py-20 bg-[#050505] relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none z-0">
                <h1 className="text-[15vw] font-bold text-white/[0.03] text-center tracking-wider leading-none">
                    SKILLS
                </h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-orange-500 text-sm font-medium tracking-wider mb-4 shadow-lg">
                            Skills Possessed
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Skills that I have <br /> Mastered
                        </h2>
                        <p className="text-gray-400 leading-relaxed max-w-md mb-8">
                            I have 10+ years experience with Software Engineering using Python, PHP, MySQL/PostgreSQL, Javascript, jQuery, VueJS, HTML/HTML5, CSS, SCSS, and many more.
                        </p>
                    </motion.div>

                    <div className="relative h-[500px] w-full flex items-center justify-center">
                        {/* Wave Layout Nodes */}
                        {skills.map((skill, index) => {
                            // Calculate position on a sine wave
                            const totalSkills = skills.length;
                            const xPercentage = (index / (totalSkills - 1)) * 100; // 0% to 100%
                            const x = `calc(${xPercentage}% - 20px)`; // Adjust for width

                            // Sine wave calculation
                            // Amplitude: 100px, Frequency: 2 full waves across width
                            const yOffset = Math.sin((index / totalSkills) * Math.PI * 4) * 100;
                            const y = `calc(50% + ${yOffset}px)`;

                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.05, ease: "backOut" }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="absolute z-10"
                                    style={{
                                        left: x,
                                        top: y,
                                        transform: "translate(-50%, -50%)"
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -15, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut",
                                            delay: index * 0.2, // Staggered float
                                        }}
                                        className="w-20 h-20 bg-gray-900 border border-white/20 rounded-full flex items-center justify-center hover:border-orange-500 hover:scale-110 transition-all cursor-pointer shadow-lg shadow-orange-500/5"
                                    >
                                        <div className="flex flex-col items-center gap-1">
                                            <skill.icon className="text-gray-300" size={20} />
                                            <span className="text-[10px] text-gray-400 font-medium">{skill.name}</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
