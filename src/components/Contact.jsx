"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Instagram, Send, Loader2 } from "lucide-react";

function FormInput({ label, name, type = "text", value, onChange, required, textarea = false }) {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value.length > 0;

    const inputClasses = `w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 pt-6 pb-2 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300 placeholder:opacity-0 group-hover:border-white/20 ${textarea ? 'h-32 resize-none' : 'h-16'}`;

    return (
        <div className="relative group mb-4">
            <motion.label
                initial={false}
                animate={{
                    y: (isFocused || hasValue) ? -12 : 0,
                    scale: (isFocused || hasValue) ? 0.8 : 1,
                    color: isFocused ? "#ffffff" : "#666666",
                    x: (isFocused || hasValue) ? -8 : 0
                }}
                className="absolute left-6 top-5 pointer-events-none origin-left font-medium"
            >
                {label} {required && <span className="text-white/30 text-xs">*</span>}
            </motion.label>
            {textarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    className={inputClasses}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    className={inputClasses}
                />
            )}
            {/* Inner Glow on Focus */}
            <AnimatePresence>
                {isFocused && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-2xl bg-white/[0.02] pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

import { AnimatePresence } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: "",
    });
    const [status, setStatus] = useState("idle");
    const containerRef = useRef(null);

    // Mouse Spotlight Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", description: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[200px] pointer-events-none opacity-30" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                                    Currently available for opportunities
                                </span>
                            </div>
                        </div>
                        
                        <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                            Let&apos;s build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Something Great.</span>
                        </h2>
                        
                        <p className="text-gray-400 text-lg font-light mb-16 max-w-md leading-relaxed">
                            I specialize in architecting scalable systems and modern product experiences. Reach out for collaborations or a quick technical chat.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { label: "Email", val: "karthikc11105@gmail.com", href: "mailto:karthikc11105@gmail.com", icon: Mail },
                                { label: "Phone", val: "+91 8328134131", href: "tel:+918328134131", icon: Phone },
                                { label: "Instagram", val: "@karthik_chakala", href: "https://instagram.com/karthik_chakala", icon: Instagram },
                                { label: "WhatsApp", val: "Message Me", href: "https://wa.me/918328134131", icon: () => (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                                )}
                            ].map((item, i) => (
                                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="group">
                                    <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">{item.label}</h4>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/5 rounded-lg text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all">
                                            <item.icon size={16} />
                                        </div>
                                        <span className="text-sm text-gray-500 group-hover:text-white transition-colors">{item.val}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Glassmorphism Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        onMouseMove={handleMouseMove}
                        className="group relative"
                    >
                        {/* Background Floating Glow */}
                        <div className="absolute -inset-8 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none" />
                        
                        <div className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 md:p-14 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] group-hover:border-white/10 transition-all duration-700">
                            
                            {/* Animated Spotlight Effect */}
                            <motion.div 
                                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: useTransform(
                                        [mouseX, mouseY],
                                        ([x, y]) => `radial-gradient(circle 300px at ${x}px ${y}px, rgba(255,255,255,0.03), transparent 80%)`
                                    )
                                }}
                            />

                            <div className="relative z-10">
                                <div className="mb-12">
                                    <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Start a conversation</h3>
                                    <p className="text-gray-500 text-sm font-light">Fill out the form below and I&apos;ll get back to you shortly.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <FormInput 
                                            label="Your Name" 
                                            name="name" 
                                            value={formData.name} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                        <FormInput 
                                            label="Email Address" 
                                            name="email" 
                                            type="email" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                    <FormInput 
                                        label="Project Description" 
                                        name="description" 
                                        value={formData.description} 
                                        onChange={handleChange} 
                                        required 
                                        textarea 
                                    />

                                    <div className="pt-6 flex items-center justify-between">
                                        <div className="flex-1">
                                            <AnimatePresence>
                                                {status === 'success' && (
                                                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-500 text-xs font-medium">Message sent successfully!</motion.p>
                                                )}
                                                {status === 'error' && (
                                                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-medium">Failed to send message. Try again.</motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="relative w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all group/btn disabled:opacity-50"
                                        >
                                            {status === 'loading' ? (
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                            ) : (
                                                <div className="relative flex items-center justify-center">
                                                    <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" />
                                                </div>
                                            )}
                                            
                                            {/* Circular Glass Glow */}
                                            <div className="absolute inset-0 rounded-full border border-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                                        </motion.button>
                                    </div>
                                </form>
                            </div>

                            {/* Corner Decorative Gradient */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

