import profile from "@/data/profile.json";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ocean/20 bg-sand">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-ocean md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          <span className="font-heading text-night">Giotto Millan</span> - Data Scientist
        </p>
        <div className="flex items-center gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-coral"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
