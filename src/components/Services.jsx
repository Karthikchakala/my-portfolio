"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Database } from "lucide-react";

const services = [
    {
        title: "Frontend Development",
        icon: Layout,
        description:
            "Building responsive, accessible, and high-performance user interfaces using React, Next.js, and Tailwind CSS.",
    },
    {
        title: "Backend Architecture",
        icon: Server,
        description:
            "Designing scalable backend systems with Node.js and Express, focusing on clean architecture, RBAC, and secure REST APIs.",
    },
    {
        title: "Full Stack Development",
        icon: Code,
        description:
            "Developing end-to-end web applications with seamless frontend–backend integration and production-ready workflows.",
    },
    {
        title: "Database Design & Optimization",
        icon: Database,
        description:
            "Designing relational and NoSQL databases using PostgreSQL, MongoDB, and MySQL with optimized queries and constraints.",
    },
    {
        title: "Authentication & Security",
        icon: Server,
        description:
            "Implementing JWT-based authentication, role-based access control, and secure authorization for multi-user systems.",
    },
    {
        title: "Payments & Real-Time Systems",
        icon: Layout,
        description:
            "Integrating Razorpay payments and building real-time features using Socket.IO for live updates and interactions.",
    },
];


export default function Services() {
    return (
        <section id="services" className="py-20 bg-[#050505] relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-20 right-0 w-full select-none pointer-events-none z-0">
                <h1 className="text-[15vw] font-bold text-white/[0.03] text-right tracking-wider leading-none pr-10">
                    SPECIALIST
                </h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-orange-500 text-sm font-medium tracking-wider mb-4 shadow-lg">
                        Specialist
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Specialist Focus <br /> Areas
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed">
                        I focus on building scalable, secure, and production-ready web systems.
                        My work spans backend architecture, frontend development, database design,
                        authentication, real-time features, and secure payment integrations.
                    </p>

                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-gray-900 border border-white/10 p-8 rounded-3xl hover:border-orange-500/50 transition-all group"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-orange-500/20 transition-colors">
                                <service.icon size={32} className="text-white group-hover:text-orange-500 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
