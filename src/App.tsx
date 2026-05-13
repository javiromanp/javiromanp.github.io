import { Download, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { content } from "./data/content";
import { useLanguage } from "./hooks/useLanguage";
import { useTheme } from "./hooks/useTheme";
import { EducationGrid, ExperienceCard, ProjectCard, PublicationList, TechnologyGrid } from "./components/Cards";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";

const externalProps = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};

function App() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const data = content[language];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Javier Román Pásaro",
    jobTitle: "AI / Python Engineer",
    url: "https://javiromanp.github.io/",
    sameAs: [
      "https://www.linkedin.com/in/javierromanpasaro/",
      "https://github.com/javiromanp",
      "https://scholar.google.es/citations?user=rrW9qxcAAAAJ&hl=es",
    ],
    knowsAbout: ["Python", "FastAPI", "NLP", "Speech Recognition", "Whisper", "Transformers", "Machine Learning"],
  };

  return (
    <>
      <Navbar data={data} onToggleLanguage={toggleLanguage} onToggleTheme={toggleTheme} languageLabel={data.meta.langLabel} theme={theme} />

      <main id="main">
        <Hero data={data} />

        <Section id="about" {...data.sections.about}>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5 text-base leading-8 text-lab-muted"
            >
              {data.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>
            <div className="grid gap-3">
              {data.about.traits.map((trait, index) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="rounded-lg border border-lab-line bg-lab-surface/72 p-4"
                >
                  <span className="text-xs font-semibold text-lab-accent3">0{index + 1}</span>
                  <p className="mt-2 font-semibold text-lab-text">{trait}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projects" {...data.sections.projects}>
          <div className="grid gap-5 md:grid-cols-2">
            {data.projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Section>

        <Section id="experience" {...data.sections.experience}>
          <div className="grid gap-12">
            {data.experience.map((item) => (
              <ExperienceCard key={`${item.role}-${item.organization}`} item={item} />
            ))}
          </div>
        </Section>

        <Section id="technologies" {...data.sections.technologies}>
          <TechnologyGrid groups={data.technologies} />
        </Section>

        <Section id="research" {...data.sections.research}>
          <PublicationList publications={data.publications} />
        </Section>

        <Section id="education" {...data.sections.education}>
          <EducationGrid education={data.education} languages={data.languages} certifications={data.certifications} labels={data.labels} />
        </Section>

        <Section id="cv" {...data.sections.cv} compact>
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-display text-3xl font-bold text-lab-text">{data.cv.title}</h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-lab-muted">{data.cv.body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[data.cv.english, data.cv.spanish].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-md border border-lab-line bg-lab-surface/80 px-5 py-3 text-sm font-bold text-lab-text transition hover:border-lab-accent/60 hover:text-lab-accent"
                  download
                >
                  <Download size={17} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" {...data.sections.contact} compact>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h3 className="font-display text-4xl font-bold leading-tight text-lab-text">{data.contact.title}</h3>
              <p className="mt-4 text-base leading-7 text-lab-muted">{data.contact.body}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {data.contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...externalProps(link.href)}
                  className="inline-flex items-center gap-2 rounded-md border border-lab-line bg-lab-surface/78 px-4 py-3 text-sm font-semibold text-lab-text transition hover:border-lab-accent/60 hover:text-lab-accent"
                >
                  {link.href.startsWith("mailto") ? <Mail size={17} /> : <Send size={17} />}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-lab-line px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-lab-subtle">
          <p>{data.footer}</p>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

export default App;
