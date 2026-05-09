"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Cpu, Layers, Zap, ShieldCheck } from "lucide-react";
import ProjectCarousel from "./ProjectCarousel";

const projects = [
    {
        title: "Hospify",
        type: "Hospital Management System",
        category: "Backend",
        technologies: ["TypeScript", "Next.js", "Node.js", "Express", "Supabase", "Socket.io", "Razorpay", "Cloudinary"],
        description: "Architected a high-concurrency healthcare platform with event-driven synchronization and RBAC-secured clinical workflows.",
        details: {
            problem: "Inefficient medical data orchestration and scheduling bottlenecks in distributed clinical environments.",
            architecture: "Event-driven architecture utilizing Node.js handlers for real-time scheduling and secure payment orchestration.",
            features: ["RBAC-secured APIs", "WebRTC Telemedicine", "Razorpay Webhooks", "Real-time Notifications"],
            outcome: "Production-ready system capable of handling 1000+ concurrent healthcare sessions with sub-second latency."
        },
        images: ["/images/projects/hms.png"],
        github: "https://github.com/Karthikchakala/HospitalManagement",
        demo: "#"
    },
    {
        title: "Flight Fare Engine",
        type: "ML Prediction System",
        category: "AI",
        technologies: ["Python", "Machine Learning", "Scikit-learn", "Extra Trees Regressor", "Flask", "Pandas"],
        description: "Developed a high-precision fare forecasting engine utilizing ensemble learning on 300K+ historical flight records.",
        details: {
            problem: "Highly volatile airline pricing algorithms causing forecasting inaccuracies for budget-sensitive users.",
            architecture: "Random Forest & Extra Trees ensemble model optimized via feature engineering and deployed through Flask APIs.",
            features: ["98.47% R2 Accuracy", "Real-time Feature Scaling", "Predictive Analytics", "Data Pipeline Optimization"],
            outcome: "Delivered state-of-the-art fare accuracy, significantly outperforming baseline regression models."
        },
        images: ["/images/projects/flight.png"],
        github: "https://github.com/Karthikchakala/Flight-Fare-Prediction",
        demo: "#"
    },
    {
        title: "Real-time LMS",
        type: "Collaborative Learning Platform",
        category: "Real-Time",
        technologies: ["Node.js", "Express", "Socket.IO", "JWT", "Redis", "PostgreSQL"],
        description: "Built a low-latency collaborative platform featuring state-synchronized leaderboards and secure educational workflows.",
        details: {
            problem: "Static learning environments suffering from low user engagement and lack of real-time state synchronization.",
            architecture: "WebSocket-driven state management engine with Redis-backed caching for real-time ranking and feedback loops.",
            features: ["Live State Sync", "JWT-based Session Management", "Redis Leaderboards", "Secure Payment Gateway"],
            outcome: "Scaled to support thousands of concurrent learners with instant data propagation across client instances."
        },
        images: ["/images/projects/learning.png"],
        github: "https://github.com/Karthikchakala/course-mgmt-sys",
        demo: "#"
    },
    {
        title: "Farm to Table",
        type: "Hyperlocal E-Commerce",
        category: "Full-Stack",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "Supabase", "Vite"],
        description: "Engineered a location-aware agri-commerce engine connecting local agricultural systems directly to consumers.",
        details: {
            problem: "Inefficient supply chains reducing farmer profit margins and increasing consumer logistics costs.",
            architecture: "Location-aware matching engine with integrated inventory and order management.",
            features: ["Proximity Matching", "Live Inventory Sync", "PostgreSQL Analytics", "Supabase Auth Hooks"],
            outcome: "Eliminated middle-tier inefficiencies, improving local agricultural ROI by optimized routing."
        },
        images: ["/images/projects/farm.png"],
        github: "https://github.com/Karthikchakala/FarmToHome",
        demo: "#"
    },
    {
        title: "Tailor Flow",
        type: "Microservices Platform",
        category: "Backend",
        technologies: ["Node.js", "Next.js", "Supabase", "Docker", "Microservices", "Nginx"],
        description: "Architecting a modular garment manufacturing system using a decentralized microservices pattern for global scale.",
        details: {
            problem: "Distributed state conflicts and synchronization lags in large-scale custom manufacturing workflows.",
            architecture: "Decoupled microservices architecture with dedicated instances for Order Orchestration and Customer State.",
            features: ["Service Isolation", "Asynchronous Processing", "Nginx Load Balancing", "Dockerized Deployment"],
            outcome: "Engineered for 50k+ custom manufacturing cycles with high availability and horizontal scalability."
        },
        images: ["/images/projects/learning.png"],
        github: "https://github.com/Karthikchakala/tailoring-app",
        demo: "#",
        inProgress: true
    },
    {
        title: "Deep Steganography",
        type: "CNN Security System",
        category: "AI",
        technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Deep Learning", "NumPy"],
        description: "Implemented an advanced CNN-based cryptographic system for high-capacity covert data transmission in digital media.",
        details: {
            problem: "High visibility of secret data in standard steganographic methods; need for deep perceptual hiding.",
            architecture: "Encoder-Decoder CNN with specialized perceptual loss functions to minimize visual artifacts while maintaining PSNR.",
            features: ["Video-in-Video Embedding", "Deep Residual Learning", "Noise Robust Extraction", "Multi-modal Support"],
            outcome: "Achieved near-perfect extraction accuracy (99%+) with zero human-perceivable visual degradation."
        },
        images: ["/images/projects/hms.png"],
        github: "https://github.com/Karthikchakala/Image-Steganography",
        demo: "#"
    }
];

function ProjectCard({ project, index }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative rounded-[2.5rem] bg-[#0a0a0a] border border-white/[0.03] hover:border-white/[0.1] transition-all duration-700 flex flex-col h-full shadow-2xl overflow-hidden"
        >
            {/* Gradient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-white/[0.03] to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />
            
            {/* Top: Image */}
            <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                <div className="scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out h-full">
                    <ProjectCarousel images={project.images} title={project.title} />
                </div>
                
                {/* Badge Overlay */}
                <div className="absolute top-8 left-8 z-20 flex gap-2">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-white/90 font-bold uppercase tracking-widest shadow-xl">
                        {project.category}
                    </span>
                </div>

                {/* CTAs Overlay */}
                <div className="absolute top-8 right-8 z-20 flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-xl group/link">
                        <Github size={18} />
                    </a>
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-xl group/link">
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Middle: Content */}
            <div className="p-10 flex flex-col flex-grow relative z-10">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-500">
                            {project.title}
                        </h3>
                        {project.inProgress && (
                            <span className="px-2 py-0.5 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                                In Progress
                            </span>
                        )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                            <span 
                                key={i} 
                                className="text-[10px] font-semibold px-2.5 py-1 bg-white/[0.03] text-gray-400 border border-white/[0.05] rounded-md hover:border-white/20 hover:text-white hover:bg-white/5 transition-all cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom: Engineering Case Study */}
                <div className="mt-auto pt-8 border-t border-white/[0.05] space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Cpu size={12} className="text-blue-500/70" />
                                <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Technical Problem</h4>
                            </div>
                            <p className="text-[11px] text-gray-500 leading-relaxed font-light">{project.details.problem}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Layers size={12} className="text-purple-500/70" />
                                <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Architecture</h4>
                            </div>
                            <p className="text-[11px] text-gray-500 leading-relaxed font-light">{project.details.architecture}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Zap size={12} className="text-orange-500/70" />
                                <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Key Features</h4>
                            </div>
                            <ul className="text-[10px] text-gray-600 space-y-1.5 font-medium uppercase tracking-tight">
                                {project.details.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-white/20 rounded-full" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheck size={12} className="text-green-500/70" />
                                <h4 className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">Engineering Outcome</h4>
                            </div>
                            <p className="text-[11px] text-blue-400/80 font-semibold leading-relaxed tracking-tight">{project.details.outcome}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Backend", "Full-Stack", "AI", "Real-Time"];

    const filteredProjects = filter === "All" 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-orange-500 text-sm font-medium tracking-wider mb-6 shadow-lg">
                        Production Cases
                    </span>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                                Selected <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-600">Engineering.</span>
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-3 bg-white/[0.02] p-2 rounded-full border border-white/[0.05] backdrop-blur-xl">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-500 ${
                                        filter === cat 
                                            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                                            : "text-gray-500 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
