import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/mikaelaconnell", label: "GitHub" },
  { href: "https://linkedin.com/in/mikaelaconnell", label: "LinkedIn" },
];

const sections = [
  { href: "/talks", label: "Talks & interviews" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/essays", label: "Essays" },
];

export default function Home() {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl tracking-wide mb-6">Mikaela Connell</h2>
        <div className="space-y-4 text-sm leading-relaxed tracking-wide">
          <p>
            I build at the intersection of AI, cloud infrastructure, and
            products people actually use. Currently an AI/ML Engineer at{" "}
            <span className="italic">Data Piper</span>, a Google Cloud
            consulting firm, where I architect intelligent systems for
            enterprise clients — from agentic document processing to computer
            vision pipelines.
          </p>
          <p>
            I&apos;m also the founder and CEO of{" "}
            <span className="italic">Reen</span>, a femtech platform
            reimagining hormonal health tracking for women.
          </p>
          <p>
            Harvard Extension. New Yorker turned everywhere. Passionate about
            building technology that tells better stories.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex gap-4">
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-muted hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {sections.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-wide text-muted hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
