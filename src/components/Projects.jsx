"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

import ProjectCarousel from "./ProjectCarousel";

const projects = [
    {
        title: "Hospital Management System",
        category: "Node.js / Next.js / Supabase",
        description: "Architected a full-stack system with 30+ role-based APIs. Integrated Cloudinary for media, Razorpay for payments, and RBAC for secure admin operations.",
        images: ["/images/projects/hms.png"],
        color: "from-blue-600 to-cyan-500",
    },
    {
        title: "Flight Fare Prediction System",
        category: "Machine Learning / Python",
        description: "Achieved 98.47% R2 score using Extra Trees Regressor on 300K+ records. Engineered predictive features to optimize fare accuracy.",
        images: ["/images/projects/flight.png"],
        color: "from-orange-500 to-red-500",
    },
    {
        title: "Full-Stack Learning Platform",
        category: "Node.js / Express / Socket.IO",
        description: "Built a competitive learning platform with real-time leaderboards using Socket.IO. Implemented JWT authentication and secure payment gateways.",
        images: ["/images/projects/learning.png"],
        color: "from-purple-600 to-pink-500",
    },
    {
        title: "Farm on Table",
        category: "Under Progress",
        description: "Developing a farm-to-table e-commerce platform connecting local farmers directly with consumers. Focusing on supply chain optimization.",
        images: ["/images/projects/farm.png"],
        color: "from-green-600 to-emerald-500",
    },
    {
        title: "No Title",
        category: "Under Progress",
        description: "An upcoming project currently in the early stages of development. More details coming soon.",
        images: ["/images/projects/learning.png"], // Placeholder
        color: "from-gray-600 to-slate-500",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-[#050505] relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-20 left-0 w-full select-none pointer-events-none z-0">
                <h1 className="text-[15vw] font-bold text-white/[0.03] text-left tracking-wider leading-none pl-10">
                    PROJECT
                </h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex justify-between items-end mb-16"
                >
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-orange-500 text-sm font-medium tracking-wider mb-4 shadow-lg">
                            Project Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Selected <span className="text-gray-500">Works</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-lg">
                            A selection of academic and personal projects focused on building
                            scalable backend systems, secure APIs, real-time features, and
                            data-driven applications.
                        </p>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all">
                        See More Project <div className="bg-black text-white rounded-full p-1"><ArrowUpRight size={14} /></div>
                    </a>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative rounded-3xl overflow-hidden bg-gray-900 border border-white/10 hover:border-orange-500/50 transition-all duration-500"
                        >
                            {/* Image Carousel */}
                            <ProjectCarousel images={project.images} title={project.title} />

                            <div className="p-8 relative z-10 bg-[#0a0a0a] -mt-4 mx-4 mb-4 rounded-2xl border border-white/5 group-hover:border-white/10 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white text-white hover:text-black transition-all">
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all">
                        See More Project <div className="bg-black text-white rounded-full p-1"><ArrowUpRight size={14} /></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
