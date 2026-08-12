"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-8 border-t border-white/10 bg-black"
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:items-start gap-4"
                >
                    <p className="text-gray-600 text-sm">
                        © 2026 Designed and Developed by{" "}
                        <span className="text-white font-medium hover:text-orange-500 transition-colors">
                            Karthik Chakala
                        </span>
                    </p>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-8"
                >
                    <div className="flex gap-4">
                        <motion.a 
                            whileHover={{ y: -4, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            href="https://github.com/Karthikchakala" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                        >
                            <Github size={18} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ y: -4, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            href="https://www.linkedin.com/in/chakala-karthik-5a9695378/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                        >
                            <Linkedin size={18} />
                        </motion.a>
                    </div>

                    <motion.button 
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex flex-col items-center gap-2"
                    >
                        <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/5 transition-all">
                            <ArrowUpRight size={18} className="-rotate-45 group-hover:-translate-y-1 transition-transform" />
                        </div>
                        <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Top</span>
                    </motion.button>
                </motion.div>
            </div>
        </motion.footer>
    );
}
