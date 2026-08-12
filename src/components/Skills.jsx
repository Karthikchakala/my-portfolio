"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cpu, Network, Layers, ShieldCheck, Workflow, GitBranch, Webhook, TrendingUp, Zap, Database } from "lucide-react";
import { useParallax } from "../hooks/useParallax";
import { FaJava } from "react-icons/fa6";
import { 
    SiJavascript, SiPython, SiCplusplus, SiC, SiPostgresql,
    SiReact, SiNextdotjs, SiTailwindcss, SiRedux,
    SiNodedotjs, SiExpress, SiJsonwebtokens,
    SiMongodb, SiMysql, SiSqlite, SiSupabase,
    SiDocker, SiGit, SiPostman, SiFirebase,
    SiLinux, SiLeetcode, SiTypescript, SiFramer,
    SiVite, SiSocketdotio
} from "react-icons/si";

const skillCategories = ["All", "System Design", "Frontend", "Backend", "Database", "Tools", "Languages"];

const allSkills = [
    { name: "HLD",              category: "System Design", icon: Network },
    { name: "LLD",              category: "System Design", icon: Layers },
    { name: "OOPS",             category: "System Design", icon: Cpu },
    { name: "SOLID Principles", category: "System Design", icon: ShieldCheck },
    { name: "Design Patterns",  category: "System Design", icon: Workflow },
    { name: "UML",              category: "System Design", icon: GitBranch },
    { name: "API Design",       category: "System Design", icon: Webhook },
    { name: "Scalability",      category: "System Design", icon: TrendingUp },
    { name: "Caching",          category: "System Design", icon: Zap },
    { name: "Database Design",  category: "System Design", icon: Database },

    { name: "JavaScript",  category: "Languages", icon: SiJavascript },
    { name: "TypeScript",  category: "Languages", icon: SiTypescript },
    { name: "Python",      category: "Languages", icon: SiPython },
    { name: "C++",         category: "Languages", icon: SiCplusplus },
    { name: "C",           category: "Languages", icon: SiC },
    { name: "Java",        category: "Languages", icon: FaJava },

    { name: "React",          category: "Frontend", icon: SiReact },
    { name: "Next.js",        category: "Frontend", icon: SiNextdotjs },
    { name: "Tailwind CSS",   category: "Frontend", icon: SiTailwindcss },
    { name: "Redux",          category: "Frontend", icon: SiRedux },
    { name: "Framer Motion",  category: "Frontend", icon: SiFramer },

    { name: "Node.js",   category: "Backend", icon: SiNodedotjs },
    { name: "Express",   category: "Backend", icon: SiExpress },
    { name: "Socket.io", category: "Backend", icon: SiSocketdotio },
    { name: "JWT",       category: "Backend", icon: SiJsonwebtokens },

    { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
    { name: "MongoDB",    category: "Database", icon: SiMongodb },
    { name: "MySQL",      category: "Database", icon: SiMysql },
    { name: "SQLite",     category: "Database", icon: SiSqlite },
    { name: "Supabase",   category: "Database", icon: SiSupabase },

    { name: "Docker",   category: "Tools", icon: SiDocker },
    { name: "Git",      category: "Tools", icon: SiGit },
    { name: "Postman",  category: "Tools", icon: SiPostman },
    { name: "Firebase", category: "Tools", icon: SiFirebase },
    { name: "Linux",    category: "Tools", icon: SiLinux },
    { name: "LeetCode", category: "Tools", icon: SiLeetcode },
];

// Curated icons that float in the background
const floatingIcons = [
    { Icon: SiReact,       top: "8%",  left: "5%",  size: 40, duration: 7,  delay: 0    },
    { Icon: SiNodedotjs,   top: "15%", left: "88%", size: 34, duration: 9,  delay: 1.2  },
    { Icon: SiJavascript,  top: "28%", left: "92%", size: 30, duration: 6,  delay: 0.4  },
    { Icon: SiPython,      top: "72%", left: "6%",  size: 36, duration: 8,  delay: 2.1  },
    { Icon: SiDocker,      top: "80%", left: "85%", size: 38, duration: 10, delay: 0.8  },
    { Icon: SiMongodb,     top: "55%", left: "3%",  size: 32, duration: 7,  delay: 1.6  },
    { Icon: SiPostgresql,  top: "90%", left: "45%", size: 30, duration: 9,  delay: 3.0  },
    { Icon: SiTypescript,  top: "6%",  left: "55%", size: 28, duration: 8,  delay: 0.5  },
    { Icon: SiNextdotjs,   top: "42%", left: "95%", size: 32, duration: 11, delay: 1.9  },
    { Icon: SiGit,         top: "35%", left: "2%",  size: 34, duration: 6,  delay: 2.5  },
    { Icon: FaJava,        top: "60%", left: "91%", size: 32, duration: 8,  delay: 0.3  },
    { Icon: SiTailwindcss, top: "20%", left: "18%", size: 26, duration: 9,  delay: 4.0  },
    { Icon: SiRedux,       top: "78%", left: "60%", size: 28, duration: 7,  delay: 1.1  },
    { Icon: SiFirebase,    top: "12%", left: "75%", size: 30, duration: 10, delay: 2.8  },
    { Icon: SiLinux,       top: "50%", left: "88%", size: 26, duration: 6,  delay: 3.5  },
    { Icon: SiSocketdotio, top: "85%", left: "22%", size: 32, duration: 8,  delay: 0.7  },
];

export default function Skills() {
    const shouldReduceMotion = useReducedMotion();
    const [activeFilter, setActiveFilter] = useState("All");
    const watermarkY = useParallax([1800, 3600], shouldReduceMotion ? [0, 0] : [-40, 80]);

    const filteredSkills = activeFilter === "All"
        ? allSkills
        : allSkills.filter(skill => skill.category === activeFilter);

    return (
        <section id="skills" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Dot grid background */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            />

            {/* ── Floating background icons ── */}
            {!shouldReduceMotion && floatingIcons.map(({ Icon, top, left, size, duration, delay }, i) => (
                <motion.div
                    key={i}
                    className="absolute pointer-events-none select-none z-0"
                    style={{ top, left }}
                    animate={{
                        y:       [0, -24, 0, 20, 0],
                        x:       [0, 12, -10, 6, 0],
                        rotate:  [0, 9, -7, 5, 0],
                        opacity: [0.05, 0.13, 0.07, 0.13, 0.05],
                    }}
                    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Icon size={size} className="text-white" style={{ filter: "blur(0.4px)" }} />
                </motion.div>
            ))}

            {/* Parallax watermark */}
            <motion.div
                style={{ y: shouldReduceMotion ? 0 : watermarkY }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0"
            >
                <h1 className="text-[20vw] font-bold text-white/[0.035] text-center tracking-tighter leading-none uppercase">
                    SKILLS
                </h1>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Heading */}
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

                {/* Filter tabs */}
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

                {/* Skills grid */}
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
                                        delay: (index % 6) * 0.05,
                                    }}
                                    viewport={{ once: true }}
                                    className="group relative"
                                >
                                    {/* Continuous Floating Motion Container */}
                                    <motion.div
                                        animate={shouldReduceMotion ? {} : {
                                            y: [0, -(4 + (index % 3) * 3), 0, (3 + (index % 4) * 2), 0],
                                            x: [0, (index % 2 === 0 ? 3 : -3), 0, (index % 2 === 0 ? -2 : 2), 0],
                                            rotate: [0, (index % 2 === 0 ? 1.5 : -1.5), 0, (index % 2 === 0 ? -1.5 : 1.5), 0],
                                        }}
                                        transition={shouldReduceMotion ? {} : {
                                            duration: 4.5 + (index % 5) * 0.7,
                                            delay: (index % 6) * 0.35,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        {/* Ambient Spotlight behind circle */}
                                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-full blur-xl transition-all duration-500" />
                                        
                                        {/* Circular Skill Container */}
                                        <motion.div
                                            whileHover={{ y: -8, scale: 1.06 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#0a0a0a] border border-white/[0.05] group-hover:border-white/20 flex flex-col items-center justify-center gap-2 transition-colors duration-500 shadow-2xl relative z-10 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-full transition-all duration-500" />
                                            <skill.icon
                                                size={28}
                                                className="text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-500"
                                            />
                                            <span className="text-[10px] md:text-[11px] font-bold text-gray-500 group-hover:text-white uppercase tracking-wider text-center px-2">
                                                {skill.name}
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </motion.div>
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