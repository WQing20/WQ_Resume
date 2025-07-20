// src/animations.ts
import type { MotionProps, Variants } from "framer-motion";

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// This combines initial, whileInView, and viewport
export const fadeUpConfig: MotionProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export const fadeInConfig: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export const zoomInConfig: MotionProps = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: false, amount: 0.2 },
};

export const bounceConfig: MotionProps = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 1220 },
  viewport: { once: false, amount: 0.3 },
};

export const slideInLeftConfig: MotionProps = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export const slideInRightConfig: MotionProps = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export const slideInUpConfig: MotionProps = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};
