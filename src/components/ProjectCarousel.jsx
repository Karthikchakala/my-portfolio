"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCarousel({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-slide functionality
    useEffect(() => {
        if (isHovered || images.length <= 1) return;
        const timer = setInterval(() => {
            handlePaginate(1);
        }, 3000);
        return () => clearInterval(timer);
    }, [currentIndex, isHovered, images.length]);

    const handlePaginate = useCallback((direction) => {
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + direction;
            if (nextIndex < 0) nextIndex = images.length - 1;
            if (nextIndex >= images.length) nextIndex = 0;
            return nextIndex;
        });
    }, [images.length]);

    if (!images || images.length === 0) {
        return <div className="h-64 w-full bg-gray-800 flex items-center justify-center text-gray-500">No images available</div>;
    }

    // Handle single image case
    if (images.length === 1) {
        return (
            <div className="relative h-64 w-full overflow-hidden group bg-black flex items-center justify-center">
                <div className="relative w-[80%] h-full rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src={images[0]}
                        alt={`${title} screenshot`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>
            </div>
        );
    }

    // Handle 2 images case by duplicating to 4 for smooth looping
    const displayImages = images.length === 2 ? [...images, ...images] : images;

    // Calculate indices
    const prevIndex = (currentIndex - 1 + displayImages.length) % displayImages.length;
    const nextIndex = (currentIndex + 1) % displayImages.length;

    const visibleImages = [
        { index: prevIndex, position: "left" },
        { index: currentIndex, position: "center" },
        { index: nextIndex, position: "right" },
    ];

    const variants = {
        left: {
            x: "-85%",
            scale: 0.85,
            zIndex: 1,
            opacity: 0.6,
            filter: "blur(2px)",
        },
        center: {
            x: "0%",
            scale: 1,
            zIndex: 2,
            opacity: 1,
            filter: "blur(0px)",
        },
        right: {
            x: "85%",
            scale: 0.85,
            zIndex: 1,
            opacity: 0.6,
            filter: "blur(2px)",
        },
    };

    return (
        <div
            className="relative h-64 w-full overflow-hidden group bg-black flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Images Container */}
            <div className="relative w-[80%] h-full flex items-center justify-center">
                <AnimatePresence initial={false} mode="popLayout">
                    {visibleImages.map((item) => (
                        <motion.div
                            key={item.index}
                            initial={item.position === "center" ? "right" : "left"}
                            animate={item.position}
                            variants={variants}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute w-full h-full rounded-xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={displayImages[item.index]}
                                alt={`${title} screenshot`}
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={item.position === "center"}
                            />
                            {/* Overlay for non-center items */}
                            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${item.position === "center" ? "opacity-0" : "opacity-100"}`} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-30 hover:bg-black/70 backdrop-blur-sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePaginate(-1);
                        }}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-30 hover:bg-black/70 backdrop-blur-sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePaginate(1);
                        }}
                    >
                        <ChevronRight size={20} />
                    </button>
                </>
            )}

            {/* Dots */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all shadow-lg ${index === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
