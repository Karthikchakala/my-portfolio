"use client";

import { motion } from "framer-motion";

const education = [
    {
        level: "Schooling",
        degree: "Secondary Education",
        institution: "Chaitanya Children’s Academy, B. Kothakota",
        period: "Completed",
        score: "Percentage: 96.8%",
    },
    {
        level: "Intermediate",
        degree: "MPC Stream",
        institution: "Amaravathi Junior College, Vijayawada",
        period: "Completed",
        score: "JEE Percentile: 97.4%",
    },
    {
        level: "College",
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Indian Institute of Information Technology, Kurnool",
        period: "2023–2027",
        score: "CGPA: 8.4 / 10",
    },
];

export default function Education() {
    return (
        <section id="education" className="py-20 bg-[#050505] relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-20 right-0 w-full select-none pointer-events-none z-0">
                <h1 className="text-[15vw] font-bold text-white/[0.03] text-right tracking-wider leading-none pr-10">
                    EDUCATION
                </h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-orange-500 text-sm font-medium tracking-wider mb-4 shadow-lg">
                        Academic Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
                        My Education
                    </h2>
                </motion.div>

                {/* Desktop Curved Timeline */}
                <div className="hidden md:block relative h-[400px] w-full max-w-6xl mx-auto">
                    {/* SVG Curve */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                        <path
                            d="M 50 250 C 200 250, 250 100, 400 100 C 550 100, 600 200, 750 200 C 900 200, 950 50, 1100 50"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Nodes */}
                    {education.map((edu, index) => {
                        // Custom positions for the nodes based on the curve
                        const positions = [
                            { left: "5%", top: "60%" },
                            { left: "30%", top: "20%" },
                            { left: "60%", top: "45%" },
                        ];
                        const pos = positions[index] || { left: "50%", top: "50%" };

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 w-72"
                                style={{ left: pos.left, top: pos.top }}
                            >
                                <div className="flex flex-col items-center text-center group">
                                    <div className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-lg uppercase tracking-wide">
                                        {edu.level}
                                    </div>
                                    <div className="w-4 h-4 bg-black border-2 border-orange-500 rounded-full mb-2 relative z-10 group-hover:scale-150 transition-transform duration-300" />
                                    <h3 className="text-lg font-bold text-white leading-tight">{edu.degree}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
                                    <p className="text-orange-400 text-xs font-medium mt-1">{edu.score}</p>
                                    <p className="text-gray-600 text-xs mt-1">{edu.period}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Vertical Timeline */}
                <div className="md:hidden space-y-10 relative border-l border-white/10 ml-4 pl-8">
                    {education.map((edu, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-[39px] top-0 w-4 h-4 bg-black border-2 border-orange-500 rounded-full" />
                            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-orange-400 mb-2 uppercase tracking-wide">
                                {edu.level}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                            <p className="text-gray-400 text-sm mb-1">{edu.institution}</p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-white font-medium text-sm">{edu.score}</span>
                                <span className="text-gray-600 text-xs">{edu.period}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
