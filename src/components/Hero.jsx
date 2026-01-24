"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, MousePointer2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-[#050505]">
            {/* Background Text */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none z-0">
                <h1 className="text-[15vw] font-bold text-white/[0.03] text-center tracking-wider leading-none">
                    HELLO
                </h1>
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="relative z-10"
                >
                    <div className="inline-flex items-center gap-2 text-green-500 font-medium tracking-wider mb-6 text-sm bg-green-500/10 px-3 py-1 rounded-full w-fit">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>Available for Opportunities</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6 text-white">
                        I&apos;m <br />
                        <span className="text-white">Karthik</span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light">
                        Full-Stack Developer building scalable, secure, production-grade web applications. <br />
                        Computer Science Undergraduate | Full-Stack Developer
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="#contact"
                            className="group bg-white text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-all transform hover:scale-105"
                        >
                            Let&apos;s talk
                            <div className="bg-black text-white rounded-full p-1 group-hover:rotate-45 transition-transform">
                                <ArrowUpRight size={16} />
                            </div>
                        </a>
                    </div>

                    <div className="mt-20 flex items-center gap-2 text-gray-500 text-sm rotate-90 origin-left translate-y-10 absolute left-0 bottom-0 hidden md:flex">
                        <MousePointer2 size={16} />
                        <span>Scroll down</span>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="relative flex justify-center items-center"
                >
                    <div className="relative w-[350px] h-[450px] md:w-[450px] md:h-[550px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                        {/* Image Container */}
                        <div className="absolute inset-0 overflow-hidden rounded-b-full shadow-2xl shadow-white/5">
                            <Image
                                src="/images/profile-new.png"
                                alt="Karthik Chakala"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            {/* Film Grain Overlay */}
                            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
                        </div>

                        {/* Gradient Overlay at bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
                    </div>

                    {/* Social Icons on the right */}
                    <div className="absolute -right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-gray-400">
                        <span className="rotate-90 origin-right translate-x-8 mb-8 text-xs tracking-widest uppercase">Follow me in</span>
                        <a href="https://github.com/Karthikchakala" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/chakala-karthik-5a9695378/" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://wa.me/918328134131" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="lucide lucide-whatsapp"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
