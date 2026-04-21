import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaStrava } from "react-icons/fa";

const navLinks = [
  { href: "/the-filo", label: "The Filo" },
  { href: "/reen", label: "Reen" },
  { href: "/essays", label: "Essays" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

const socialLinks = [
  {
    href: "https://github.com/mikaelaconnell",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/mikaelaconnell",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://www.strava.com/athletes/113990339",
    icon: FaStrava,
    label: "Strava",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col px-12 py-12 lg:px-16 lg:py-14">
      {/* Top section */}
      <div className="flex flex-1 flex-col lg:flex-row gap-12 lg:gap-0">
        {/* Left column — name, bio, social icons */}
        <div className="lg:w-52 shrink-0 flex flex-col">
          <h1 className="text-lg tracking-wide leading-snug mb-8">
            Mikaela Connell
          </h1>
          <div className="space-y-6 text-sm leading-relaxed tracking-wide max-w-[200px]">
            <p>
              I am a machine learning engineer. I work on AI, cloud infrastructure, and
              products. I also build companies, starting with my own.
            </p>
            <p>
              I studied at Harvard Extension, concentrating in AI and machine
              learning. I am a New Yorker, an entrepreneur, and a builder.
            </p>
          </div>
          <div className="flex gap-3 mt-8">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Right area — nav links spread across the top */}
        <div className="flex-1">
          <nav className="flex justify-between">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm tracking-wide hover:text-muted transition-colors whitespace-pre-line"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom footer */}
      <footer className="flex items-end justify-between mt-12">
        <div className="text-xs tracking-wide text-muted space-y-1">
          <p>
            For inquiries please contact{" "}
            <a
              href="mailto:mikaelaconnell14@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              mikaelaconnell14@gmail.com
            </a>
          </p>
          <p className="mt-3 text-foreground">Mikaela Connell</p>
        </div>
        <p className="text-xs tracking-wide text-muted">
          &copy; {new Date().getFullYear()} Mikaela Connell.
        </p>
      </footer>
    </div>
  );
}
