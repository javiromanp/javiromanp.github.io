import { ArrowUpRight, Calendar, ExternalLink, GraduationCap, Languages, ScrollText } from "lucide-react";
import { motion } from "framer-motion";
import type { EducationItem, Experience, LinkItem, Project, Publication, TechnologyGroup } from "../data/content";

const Anchor = ({ link }: { link: LinkItem }) => (
  <a
    href={link.href}
    target={link.external ? "_blank" : undefined}
    rel={link.external ? "noreferrer" : undefined}
    className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-lab-accent transition hover:text-lab-accent2"
  >
    {link.label}
    {link.external ? <ExternalLink size={14} /> : <ArrowUpRight size={14} />}
  </a>
);

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ delay: index * 0.06, duration: 0.45 }}
    className="group relative overflow-hidden rounded-lg border border-lab-line bg-lab-surface/78 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-lab-accent/45"
  >
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lab-accent3">{project.eyebrow}</p>
        <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-lab-text">{project.title}</h3>
      </div>
      <span className="h-px w-12 bg-lab-line transition group-hover:bg-lab-accent" aria-hidden="true" />
    </div>
    <p className="mt-4 text-sm leading-6 text-lab-muted">{project.description}</p>
    <p className="mt-5 border-l border-lab-accent/45 pl-4 text-sm leading-6 text-lab-text/82">{project.impact}</p>
    <div className="mt-5 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span key={tag} className="rounded-md border border-lab-line bg-lab-elevated px-2.5 py-1 text-xs font-medium text-lab-muted">
          {tag}
        </span>
      ))}
    </div>
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      <span className="rounded-full border border-lab-line bg-lab-elevated px-3 py-1 text-xs font-semibold text-lab-accent">{project.status}</span>
      <div className="flex flex-wrap gap-3">
        {project.links.map((link) => (
          <Anchor key={link.label} link={link} />
        ))}
      </div>
    </div>
  </motion.article>
);

export const ExperienceCard = ({ item }: { item: Experience }) => (
  <article className="relative border-l border-lab-line pl-6">
    <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-lab-accent" aria-hidden="true" />
    <div className="flex flex-wrap items-center gap-3">
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-lab-accent3">
        <Calendar size={14} />
        {item.period}
      </p>
      <span className="text-sm text-lab-subtle">{item.location}</span>
    </div>
    <h3 className="mt-3 font-display text-3xl font-bold text-lab-text">{item.role}</h3>
    <p className="mt-1 font-semibold text-lab-accent">{item.organization}</p>
    <p className="mt-4 max-w-3xl text-base leading-7 text-lab-muted">{item.summary}</p>
    <ul className="mt-5 grid gap-3 text-sm leading-6 text-lab-muted md:grid-cols-2">
      {item.bullets.map((bullet) => (
        <li key={bullet} className="rounded-md border border-lab-line bg-lab-surface/70 p-3">
          {bullet}
        </li>
      ))}
    </ul>
    <div className="mt-5 flex flex-wrap gap-2">
      {item.stack.map((tech) => (
        <span key={tech} className="rounded-md border border-lab-line bg-lab-elevated px-2.5 py-1 text-xs font-semibold text-lab-accent">
          {tech}
        </span>
      ))}
    </div>
  </article>
);

export const TechnologyGrid = ({ groups }: { groups: TechnologyGroup[] }) => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {groups.map((group) => (
      <article key={group.title} className="rounded-lg border border-lab-line bg-lab-surface/74 p-5">
        <h3 className="font-display text-xl font-bold text-lab-text">{group.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span key={item} className="rounded-md border border-lab-line bg-lab-elevated px-2.5 py-1.5 text-xs font-medium text-lab-muted">
              {item}
            </span>
          ))}
        </div>
      </article>
    ))}
  </div>
);

export const PublicationList = ({ publications }: { publications: Publication[] }) => (
  <div className="grid gap-4">
    {publications.map((publication) => (
      <article key={publication.title} className="rounded-lg border border-lab-line bg-lab-surface/74 p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lab-accent3">{publication.year}</p>
            <h3 className="mt-2 font-display text-2xl font-bold leading-snug text-lab-text">{publication.title}</h3>
            <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-lab-accent">
              <ScrollText size={15} />
              {publication.venue}
            </p>
          </div>
          {publication.link ? <Anchor link={publication.link} /> : null}
        </div>
        <p className="mt-4 text-sm leading-6 text-lab-muted">{publication.summary}</p>
      </article>
    ))}
  </div>
);

export const EducationGrid = ({
  education,
  languages,
  certifications,
  labels,
}: {
  education: EducationItem[];
  languages: { name: string; level: string }[];
  certifications: string[];
  labels: { languages: string; certifications: string };
}) => (
  <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
    <div className="grid gap-4">
      {education.map((item) => (
        <article key={item.degree} className="rounded-lg border border-lab-line bg-lab-surface/74 p-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-lab-accent3">
            <GraduationCap size={15} />
            {item.period}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold text-lab-text">{item.degree}</h3>
          <p className="mt-2 text-lab-muted">{item.institution}</p>
        </article>
      ))}
    </div>
    <div className="grid gap-4">
      <article className="rounded-lg border border-lab-line bg-lab-surface/74 p-5">
        <h3 className="inline-flex items-center gap-2 font-display text-xl font-bold text-lab-text">
          <Languages size={18} className="text-lab-accent" />
          {labels.languages}
        </h3>
        <div className="mt-4 grid gap-3">
          {languages.map((language) => (
            <p key={language.name} className="flex items-center justify-between gap-4 border-b border-lab-line pb-2 text-sm last:border-b-0">
              <span className="font-semibold text-lab-text">{language.name}</span>
              <span className="text-right text-lab-muted">{language.level}</span>
            </p>
          ))}
        </div>
      </article>
      <article className="rounded-lg border border-lab-line bg-lab-surface/74 p-5">
        <h3 className="font-display text-xl font-bold text-lab-text">{labels.certifications}</h3>
        <div className="mt-4 grid gap-2.5">
          {certifications.map((item) => (
            <span key={item} className="rounded-md border border-lab-line bg-lab-elevated px-3 py-2 text-sm leading-5 text-lab-muted">
              {item}
            </span>
          ))}
        </div>
      </article>
    </div>
  </div>
);
