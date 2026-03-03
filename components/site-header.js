import Link from "next/link";
import LanguageSwitcher from "@/components/language-switcher";
import { localizePath } from "@/lib/i18n";

export default function SiteHeader({ lang, copy, currentPath = "/" }) {
  const links = [
    { href: "/", label: copy.nav.home },
    { href: "/about", label: copy.nav.about },
    { href: "/projects", label: copy.nav.projects },
    { href: "/contact", label: copy.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-ocean/25 bg-sand/90 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6"
        aria-label="Main navigation"
      >
        <Link href={localizePath("/", lang)} className="font-heading text-xl text-night">
          Giotto <span className="text-coral">Millan</span>
        </Link>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-3 text-sm md:gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizePath(link.href, lang)}
                  className={`transition hover:text-coral ${
                    currentPath === link.href ? "text-coral" : "text-ocean"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher currentPath={currentPath} currentLang={lang} />
        </div>
      </nav>
    </header>
  );
}
