"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useMotionValue } from "framer-motion";

const LenisContext = createContext(null);
const ScrollContext = createContext(null);

export const useLenis = () => useContext(LenisContext);
export const useSmoothScroll = () => useContext(ScrollContext);

export default function SmoothScroll({ children }) {
    const scrollY = useMotionValue(0);
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            // lerp = linear interpolation strength (0.0–1.0)
            // Lower = more lag = feels heavier & smoother (like MinimalGoods)
            lerp: 0.07,
            smoothWheel: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.8,
            infinite: false,
            orientation: "vertical",
            gestureOrientation: "vertical",
            normalizeWheel: false,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenisRef.current = lenis;

        if (typeof window !== "undefined") {
            window.lenis = lenis;
        }

        // Push scroll position into a MotionValue so springs can follow it
        lenis.on("scroll", ({ scroll }) => {
            scrollY.set(scroll);
        });

        let animationFrameId;
        function raf(time) {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        }

        animationFrameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrameId);
            lenis.destroy();
            lenisRef.current = null;
            if (typeof window !== "undefined") {
                delete window.lenis;
            }
        };
    }, [scrollY]);

    return (
        <LenisContext.Provider value={lenisRef.current}>
            <ScrollContext.Provider value={scrollY}>
                {children}
            </ScrollContext.Provider>
        </LenisContext.Provider>
    );
}
