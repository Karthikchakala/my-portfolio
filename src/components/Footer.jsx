"use client";

import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-black">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <p className="text-gray-600 text-sm">
                        © 2026 Designed and Developed by{" "}
                        <span className="text-white font-medium hover:text-orange-500 transition-colors">
                            Karthik Chakala
                        </span>
                    </p>
                </div>
                
                <div className="flex items-center gap-8">
                    <div className="flex gap-4">
                        <a href="https://github.com/Karthikchakala" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/chakala-karthik-5a9695378/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                            <Linkedin size={18} />
                        </a>
                    </div>

                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex flex-col items-center gap-2"
                    >
                        <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/5 transition-all">
                            <ArrowUpRight size={18} className="-rotate-45 group-hover:-translate-y-1 transition-transform" />
                        </div>
                        <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Top</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
