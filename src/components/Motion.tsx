import { type ReactNode } from 'react'
import {
  motion,
  type Variants,
  type HTMLMotionProps,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useInView,
} from 'motion/react'

/* ── Re-export core primitives for use across the app ───── */
export { motion, useScroll, useSpring, useTransform, useMotionValue, useInView }

/* ── Spring presets ─────────────────────────────────────── */
export const springSnappy = { type: 'spring', stiffness: 400, damping: 30 } as const
export const springGentle = { type: 'spring', stiffness: 200, damping: 28 } as const
export const springBouncy = { type: 'spring', stiffness: 300, damping: 20 } as const

/* ── Easing & duration presets ──────────────────────────── */
const smoothEase = [0.22, 1, 0.36, 1] as const

/* ── Variant presets ────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48, filter: 'blur(4px)' },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { ...springGentle, delay: i * 0.1 },
  }),
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 64, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { ...springGentle },
  },
}

const slideRight: Variants = {
  hidden: { opacity: 0, x: -64, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { ...springGentle },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { ...springSnappy },
  },
}

const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(16px)', y: 12 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 1.1, ease: smoothEase },
  },
}

/* ── Reusable wrapper components ────────────────────────── */

interface AnimateProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
  index?: number
}

export function FadeUp({ children, className, index = 0, ...rest }: AnimateProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      custom={index}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className, ...rest }: AnimateProps) {
  return (
    <motion.div
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function BlurIn({ children, className, ...rest }: AnimateProps) {
  return (
    <motion.div
      className={className}
      variants={blurIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function SlideLeft({ children, className, ...rest }: AnimateProps) {
  return (
    <motion.div
      className={className}
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function SlideRight({ children, className, ...rest }: AnimateProps) {
  return (
    <motion.div
      className={className}
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function StaggerParent({ children, className, ...rest }: AnimateProps) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.06 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, className, ...rest }: AnimateProps) {
  return (
    <motion.div
      className={className}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, index = 0, ...rest }: AnimateProps) {
  return (
    <motion.div className={className} variants={fadeUp} custom={index} {...rest}>
      {children}
    </motion.div>
  )
}

export function AnimatedSection({
  children,
  className,
  id,
  ...rest
}: AnimateProps & { id?: string }) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.06 }}
      {...rest}
    >
      {children}
    </motion.section>
  )
}

export function AnimatedNav({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.header
      className={className}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...springGentle }}
    >
      {children}
    </motion.header>
  )
}
