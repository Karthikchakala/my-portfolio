"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { useLenis } from "./SmoothScroll";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Project", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        const handleScroll = ({ scroll }) => {
            setScrolled(scroll > 50);
        };

        lenis.on('scroll', handleScroll);
        return () => lenis.off('scroll', handleScroll);
    }, [lenis]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#050505]/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-xl hover:bg-white hover:text-black transition-all">
                    CK
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <motion.a
                        href="/Resume_Chakala_karthik.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-full font-medium text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all relative overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Resume <Download size={18} />
                        </span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                    </motion.a>

                    <Link href="#contact" className="group bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-all">
                        Let&apos;s talk
                        <div className="bg-black text-white rounded-full p-1 group-hover:rotate-45 transition-transform">
                            <ArrowUpRight size={14} />
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10 p-6 md:hidden"
                >
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white text-lg font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="/Resume_Chakala_karthik.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white text-lg font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
