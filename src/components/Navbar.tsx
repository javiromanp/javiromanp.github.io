import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import type { PortfolioContent } from "../data/content";
import type { Theme } from "../hooks/useTheme";

type NavbarProps = {
  data: PortfolioContent;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
  languageLabel: string;
  theme: Theme;
};

export const Navbar = ({ data, onToggleLanguage, onToggleTheme, languageLabel, theme }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-lab-line/70 bg-lab-surface/82 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-lab-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-lab-surface"
      >
        {data.meta.skip}
      </a>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-3" aria-label="Javier Román Pásaro home">
          <span className="grid h-10 w-10 place-items-center rounded-md border border-lab-line bg-lab-elevated font-semibold text-lab-accent">
            JR
          </span>
          <span className="hidden text-sm font-semibold text-lab-text sm:block">Javier Román Pásaro</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {data.nav.map((item) => (
            <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-lab-muted transition hover:bg-lab-elevated hover:text-lab-text">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="rounded-md border border-lab-line bg-lab-elevated px-3 py-2 text-xs font-semibold text-lab-accent transition hover:border-lab-accent/60"
            aria-label={data.meta.alternateLabel}
          >
            {languageLabel}
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid h-10 w-10 place-items-center rounded-md border border-lab-line bg-lab-elevated text-lab-muted transition hover:border-lab-accent/60 hover:text-lab-text"
            aria-label={data.meta.theme}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-md border border-lab-line bg-lab-elevated text-lab-muted transition hover:text-lab-text lg:hidden"
            aria-label={data.meta.menu}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-lab-line bg-lab-surface/98 px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {data.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-lab-muted hover:bg-lab-elevated hover:text-lab-text"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};
