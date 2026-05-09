"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    SiJavascript, SiPython, SiCplusplus, SiPostgresql,
    SiReact, SiNextdotjs, SiTailwindcss, SiRedux,
    SiHtml5, SiNodedotjs, SiExpress, SiJsonwebtokens,
    SiMongodb, SiMysql, SiSqlite, SiSupabase,
    SiDocker, SiGit, SiPostman, SiFirebase,
    SiLinux, SiLeetcode, SiTypescript, SiFramer,
    SiVite, SiSocketdotio
} from "react-icons/si";

const skillCategories = ["All", "Frontend", "Backend", "Database", "Tools", "Languages"];

const allSkills = [
    // Languages
    { name: "JavaScript", category: "Languages", icon: SiJavascript },
    { name: "TypeScript", category: "Languages", icon: SiTypescript },
    { name: "Python", category: "Languages", icon: SiPython },
    { name: "C++", category: "Languages", icon: SiCplusplus },
    
    // Frontend
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "Next.js", category: "Frontend", icon: SiNextdotjs },
    { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss },
    { name: "Redux", category: "Frontend", icon: SiRedux },
    { name: "Framer Motion", category: "Frontend", icon: SiFramer },
    
    // Backend
    { name: "Node.js", category: "Backend", icon: SiNodedotjs },
    { name: "Express", category: "Backend", icon: SiExpress },
    { name: "Socket.io", category: "Backend", icon: SiSocketdotio },
    { name: "JWT", category: "Backend", icon: SiJsonwebtokens },
    
    // Database
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
    { name: "MongoDB", category: "Database", icon: SiMongodb },
    { name: "MySQL", category: "Database", icon: SiMysql },
    { name: "SQLite", category: "Database", icon: SiSqlite },
    { name: "Supabase", category: "Database", icon: SiSupabase },
    
    // Tools
    { name: "Docker", category: "Tools", icon: SiDocker },
    { name: "Git", category: "Tools", icon: SiGit },
    { name: "Postman", category: "Tools", icon: SiPostman },
    { name: "Firebase", category: "Tools", icon: SiFirebase },
    { name: "Linux", category: "Tools", icon: SiLinux },
    { name: "LeetCode", category: "Tools", icon: SiLeetcode },
];

export default function Skills() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredSkills = activeFilter === "All" 
        ? allSkills 
        : allSkills.filter(skill => skill.category === activeFilter);

    return (
        <section id="skills" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Architectural Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {/* Background Cinematic Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
                <h1 className="text-[20vw] font-bold text-white/[0.01] text-center tracking-tighter leading-none uppercase">
                    Mastery
                </h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-orange-500 text-sm font-medium tracking-wider mb-6 shadow-lg">
                        Technical Arsenal
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-600">Capabilities.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        A focused collection of tools and technologies architected for building <br />
                        <span className="text-white/80 font-medium tracking-tight">scalable systems and high-performance applications.</span>
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-20">
                    {skillCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-500 border relative overflow-hidden group ${
                                activeFilter === cat 
                                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                                    : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20 hover:text-white"
                            }`}
                        >
                            <span className="relative z-10">{cat}</span>
                            {activeFilter === cat && (
                                <motion.div 
                                    layoutId="activeFilterGlow"
                                    className="absolute inset-0 bg-white/10 blur-xl"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Skills Grid (Circular Chips) */}
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        layout
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: (index % 6) * 0.05 
                                    }}
                                    viewport={{ once: true }}
                                    className="group relative"
                                >
                                    {/* Ambient Spotlight behind circle */}
                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-full blur-xl transition-all duration-500" />
                                    
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.05 }}
                                        className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#0a0a0a] border border-white/[0.05] group-hover:border-white/20 flex flex-col items-center justify-center gap-2 transition-all duration-500 shadow-2xl relative z-10 overflow-hidden"
                                    >
                                        {/* Animated Inner Border Glow */}
                                        <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-full transition-all duration-500" />
                                        
                                        <skill.icon 
                                            size={28} 
                                            className="text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-500" 
                                        />
                                        <span className="text-[10px] md:text-[11px] font-bold text-gray-500 group-hover:text-white uppercase tracking-wider text-center px-2">
                                            {skill.name}
                                        </span>

                                        {/* Glassmorphism Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


