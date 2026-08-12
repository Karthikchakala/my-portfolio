"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring lag — cursor glow trails behind slightly
  const x = useSpring(rawX, { stiffness: 80, damping: 18 });
  const y = useSpring(rawY, { stiffness: 80, damping: 18 });

  useEffect(() => {
    const update = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, [rawX, rawY]);

  return (
    <>
      {/* Large soft ambient glow that follows cursor */}
      <motion.div
        className="pointer-events-none fixed z-30"
        style={{
          left: 0,
          top: 0,
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Small precise dot */}
      <motion.div
        className="pointer-events-none fixed z-40"
        style={{
          left: 0,
          top: 0,
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.6)",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
