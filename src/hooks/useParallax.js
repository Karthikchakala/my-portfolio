"use client";

import { useSpring, useTransform } from "framer-motion";
import { useSmoothScroll } from "../components/SmoothScroll";

/**
 * useParallax — returns a spring-smoothed motion value for scroll-linked transforms.
 * The spring lag mimics GSAP ScrollTrigger scrub:1 (MinimalGoods core effect).
 *
 * @param {number[]} inputRange  - scroll pixels e.g. [0, 1000]
 * @param {number[]} outputRange - transform px e.g. [-50, 50]
 */
export function useParallax(inputRange, outputRange) {
    const scrollY = useSmoothScroll();

    // stiffness:60, damping:15 ≈ GSAP scrub:1 trailing lag
    const smoothY = useSpring(scrollY, {
        stiffness: 60,
        damping: 15,
        restDelta: 0.001,
    });

    return useTransform(smoothY, inputRange, outputRange);
}

/**
 * useSectionParallax — spring-smoothed section scroll progress for per-section effects.
 *
 * @param {import("framer-motion").MotionValue} scrollYProgress - from useScroll({ target })
 * @param {number[]} outputRange - e.g. [-60, 60]
 */
export function useSectionParallax(scrollYProgress, outputRange) {
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 15,
        restDelta: 0.001,
    });

    return useTransform(smoothProgress, [0, 1], outputRange);
}
