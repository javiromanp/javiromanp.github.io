import { ArrowDown, Database, Download, MonitorSmartphone, ServerCog, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import type { PortfolioContent } from "../data/content";

type HeroProps = {
  data: PortfolioContent;
};

const focusIcons = [MonitorSmartphone, ServerCog, Database, Workflow];

export const Hero = ({ data }: HeroProps) => (
  <section id="top" className="relative min-h-screen overflow-hidden px-5 pt-28 sm:px-8">
    <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
        <p className="inline-flex items-center gap-2 rounded-full border border-lab-line bg-lab-surface/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-lab-accent">
          <Workflow size={15} />
          {data.hero.badge}
        </p>
        <h1
          className="mt-7 max-w-5xl font-display text-5xl font-bold leading-[0.94] text-lab-text sm:text-7xl lg:text-8xl"
          aria-label={data.hero.title}
        >
          {data.hero.nameLines.map((line) => (
            <span key={line} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-lab-text/90 sm:text-3xl">{data.hero.subtitle}</p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-lab-muted">{data.hero.summary}</p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-lab-text px-5 py-3 text-sm font-bold text-lab-surface transition hover:bg-lab-accent focus:outline-none focus:ring-2 focus:ring-lab-accent focus:ring-offset-2 focus:ring-offset-lab-canvas"
          >
            {data.hero.primaryCta}
            <ArrowDown size={17} />
          </a>
          <a
            href="#cv"
            className="inline-flex items-center gap-2 rounded-md border border-lab-line bg-lab-surface/70 px-5 py-3 text-sm font-bold text-lab-text transition hover:border-lab-accent/60 hover:text-lab-accent"
          >
            {data.hero.secondaryCta}
            <Download size={17} />
          </a>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
        className="relative"
        aria-label={data.hero.panel.title}
      >
        <div className="relative overflow-hidden rounded-lg border border-lab-line bg-lab-surface/80 p-6 backdrop-blur">
          <div className="border-b border-lab-line pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lab-accent">{data.hero.panel.eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-lab-text">{data.hero.panel.title}</h2>
          </div>

          <div className="mt-6 grid gap-3">
            {data.hero.panel.items.map((item, index) => {
              const Icon = focusIcons[index] ?? Workflow;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + index * 0.08 }}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-md border border-lab-line bg-lab-elevated/82 p-4"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-lab-line bg-lab-surface text-lab-accent" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block font-semibold text-lab-text">{item.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-lab-muted">{item.body}</span>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.aside>
    </div>

    <div className="mx-auto grid max-w-7xl gap-3 pb-10 sm:grid-cols-3">
      {data.hero.metrics.map((metric) => (
        <div key={metric.label} className="border-t border-lab-line pt-4">
          <p className="font-display text-3xl font-bold text-lab-accent3">{metric.value}</p>
          <p className="mt-1 text-sm text-lab-muted">{metric.label}</p>
        </div>
      ))}
    </div>
  </section>
);
