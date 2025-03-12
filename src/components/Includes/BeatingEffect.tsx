"use client";
import { motion } from "framer-motion";

export default function BeatingEffect({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        y: [0, -5, 0],
      }}
      transition={{
        scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}
