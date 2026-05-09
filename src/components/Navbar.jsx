"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLenis } from "./SmoothScroll";
import { useActiveSection } from "../hooks/useActiveSection";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const lenis = useLenis();
    const { scrollY } = useScroll();

    // Scroll-based animations for the dock
    const dockScale = useTransform(scrollY, [0, 100], [1, 0.95]);
    const dockY = useTransform(scrollY, [0, 100], [24, 16]);
    const dockBlur = useTransform(scrollY, [0, 100], [8, 20]);
    const dockOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);

    const springConfig = { stiffness: 300, damping: 30 };
    const springScale = useSpring(dockScale, springConfig);
    const springY = useSpring(dockY, springConfig);
    
    // Track active section for nav highlights
    const sectionIds = navLinks.map(link => link.href.replace('#', ''));
    const activeSection = useActiveSection(sectionIds);
    const activeIndex = navLinks.findIndex(link => link.href.replace('#', '') === activeSection);

    return (
        <div className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center p-6">
            <motion.nav
                initial={{ y: -100, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                style={{ 
                    y: springY, 
                    scale: springScale,
                    opacity: dockOpacity
                }}
                className="pointer-events-auto relative flex items-center gap-2 px-3 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group"
            >
                {/* Ambient Glow Diffusion */}
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500 pointer-events-none" />
                
                {/* CK Logo */}
                <Link 
                    href="/" 
                    className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm tracking-tighter hover:bg-white/10 hover:border-white/20 transition-all duration-300 mr-2 shadow-inner group/logo"
                >
                    <span className="relative z-10 group-hover/logo:scale-110 transition-transform">CK</span>
                    <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover/logo:opacity-100 blur-md transition-opacity" />
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center relative gap-1">
                    {/* Active/Hover Pill Indicator */}
                    <AnimatePresence>
                        {(hoveredIndex !== null || activeIndex !== -1) && (
                            <motion.div
                                layoutId="nav-pill"
                                initial={false}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                className="absolute bg-white/10 rounded-full h-9 z-0"
                                style={{
                                    left: hoveredIndex !== null ? 0 : 0, // Placeholder, calculated by refs if needed but we'll use a simpler layoutId approach
                                    width: "100%" // layoutId handles the heavy lifting
                                }}
                            />
                        )}
                    </AnimatePresence>

                    {navLinks.map((link, idx) => {
                        const isActive = activeSection === link.href.replace('#', '');
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 z-10 rounded-full ${
                                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Divider (Desktop Only) */}
                <div className="hidden md:block w-px h-4 bg-white/10 mx-2" />

                {/* Let's Talk CTA */}
                <div className="hidden md:block">
                    <Link 
                        href="#contact" 
                        className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">Let&apos;s Talk</span>
                        <ArrowUpRight size={14} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        
                        {/* Button Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-4 p-4 rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-2 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-3 rounded-2xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="mt-2 px-4 py-4 rounded-2xl bg-white text-black font-bold text-center flex items-center justify-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Let&apos;s Talk <ArrowUpRight size={18} />
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
