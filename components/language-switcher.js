import Link from "next/link";
import { languages, localizePath } from "@/lib/i18n";

export default function LanguageSwitcher({ currentPath, currentLang }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-ocean/30 bg-cloud/40 p-1 text-sm">
      {languages.map((lang) => {
        const active = lang.code === currentLang;
        return (
          <Link
            key={lang.code}
            href={localizePath(currentPath, lang.code)}
            className={`rounded-full px-3 py-1 transition ${
              active
                ? "bg-ocean text-sand"
                : "text-ocean hover:bg-ocean/10"
            }`}
            aria-label={`Switch language to ${lang.label}`}
          >
            {lang.label}
          </Link>
        );
      })}
    </div>
  );
}
