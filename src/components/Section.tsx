import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  compact?: boolean;
};

export const Section = ({ id, eyebrow, title, intro, children, compact = false }: SectionProps) => (
  <section id={id} className={`relative mx-auto w-full max-w-7xl px-5 ${compact ? "py-16" : "py-24"} sm:px-8`}>
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-10 max-w-3xl"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lab-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-lab-text sm:text-5xl">{title}</h2>
      {intro ? <p className="mt-4 text-base leading-7 text-lab-muted sm:text-lg">{intro}</p> : null}
    </motion.div>
    {children}
  </section>
);
