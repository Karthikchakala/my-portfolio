"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-[#050505]">
            {/* Background Text & Premium Orbs */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none z-0">
                <h1 className="text-[12vw] font-bold text-white/[0.01] text-center tracking-[0.2em] leading-none mix-blend-overlay uppercase">
                    Developer
                </h1>
            </div>
            
            {/* Subtle animated background orbs */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0"
            />
            <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none z-0"
            />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-orange-500 font-medium tracking-wider mb-6 text-sm bg-white/10 border border-white/10 px-4 py-1.5 rounded-full w-fit shadow-lg backdrop-blur-md">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                        <span>Open to SDE Internships</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-[5.5rem] font-bold leading-[1.05] mb-8 text-white tracking-tight">
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">Karthik Chakala.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-light">
                        A Computer Science undergraduate at IIIT Kurnool passionate about building 
                        <span className="text-white/80 font-medium tracking-tight"> scalable full-stack applications</span> and high-performance digital products.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 md:gap-6 mb-12">
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                        >
                            Let&apos;s talk
                            <div className="bg-black text-white rounded-full p-1 group-hover:rotate-45 transition-transform">
                                <ArrowUpRight size={16} />
                            </div>
                        </a>
                        <a
                            href="/Resume_Chakala_karthik.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-transparent text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 border border-white/20 hover:bg-white/10 hover:border-white/50 transition-all transform hover:scale-105"
                        >
                            Resume
                            <Download size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                    className="relative flex justify-center items-center group"
                >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <motion.div 
                        initial={{ y: 0 }}
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ 
                            duration: 6, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                        className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] transition-all duration-700 ease-in-out group"
                    >
                        {/* Interactive Spotlight behind image */}
                        <div className="absolute inset-0 bg-white/5 rounded-[2.5rem] blur-[80px] opacity-40 group-hover:opacity-100 group-hover:bg-white/10 transition-all duration-700 pointer-events-none" />
                        
                        {/* Image Container with premium border and shadow */}
                        <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/5 group-hover:border-white/20 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-700">
                            <Image
                                src="/images/profile_square_cinematic.png"
                                alt="Karthik Chakala"
                                fill
                                className="object-cover"
                                priority
                            />
                            
                            {/* Glassmorphism Edge Glow */}
                            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            
                            {/* Film Grain Overlay */}
                            <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
                        </div>

                        {/* Ambient Cinematic Glow expansion on hover */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl pointer-events-none" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
