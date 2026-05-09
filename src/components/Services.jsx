"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Database } from "lucide-react";

const services = [
    {
        title: "Backend Architecture",
        icon: Server,
        tags: ["Node.js", "Express", "Redis", "Docker"],
        description:
            "Designing scalable backend systems focusing on microservices, distributed architecture, and secure RESTful APIs.",
    },
    {
        title: "API Engineering",
        icon: Database,
        tags: ["TypeScript", "JWT", "Swagger", "RBAC"],
        description:
            "Building production-ready role-based APIs with comprehensive security layers and optimized performance.",
    },
    {
        title: "Real-Time Systems",
        icon: Code,
        tags: ["Socket.IO", "WebRTC", "Ably"],
        description:
            "Implementing low-latency real-time features, live notifications, and collaborative environment protocols.",
    },
    {
        title: "Full-Stack Engineering",
        icon: Layout,
        tags: ["Next.js", "React", "Tailwind"],
        description:
            "Developing end-to-end web applications with seamless frontend–backend integration and performant UX.",
    },
    {
        title: "Database Design",
        icon: Database,
        tags: ["PostgreSQL", "MongoDB", "Prisma"],
        description:
            "Optimizing relational and NoSQL data structures for high-concurrency environments and data integrity.",
    },
    {
        title: "Security & Payments",
        icon: Server,
        tags: ["Razorpay", "OAuth", "Crypto"],
        description:
            "Integrating secure payment gateways and building advanced authentication and authorization systems.",
    },
];


export default function Services() {
    return (
        <section id="services" className="py-20 bg-[#050505] relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-20 right-0 w-full select-none pointer-events-none z-0">
                <h1 className="text-[15vw] font-bold text-white/[0.02] text-right tracking-wider leading-none pr-10">
                    ENGINEER
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
                        Technical Specializations
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Capabilities</span>
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed font-light">
                        My expertise lies in building high-concurrency backend systems, real-time architectures, and scalable full-stack products with a focus on engineering quality and performance.
                    </p>

                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Subtle Shine Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:animate-shine" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
                                    <service.icon size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light mb-6">
                                    {service.description}
                                </p>
                                
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-medium px-2 py-1 bg-white/5 text-gray-400 rounded-md border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
