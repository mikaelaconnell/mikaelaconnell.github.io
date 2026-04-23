import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaStrava } from "react-icons/fa";

const navLinks = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/essays", label: "Essays" },
  { href: "/reen", label: "Reen" },
  { href: "/the-filo", label: "The Filo" },
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
          <div className="space-y-6 text-sm leading-relaxed tracking-wide max-w-[220px]">
            <p>
              I am a machine learning engineer building AI systems, cloud
              infrastructure, and products at Data Piper, a Google Cloud
              consulting firm. I am passionate about women&apos;s healthcare
              and founded Reen, an AI healthcare company.
            </p>
            <p>
              I am pursuing a Master&apos;s in Data Science at Harvard
              Extension School and hold a B.A. in Economics from Claremont
              McKenna College. I am a New Yorker, an entrepreneur, and a
              builder.
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

        {/* Right area — nav links spread evenly across the top */}
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
      <footer className="mt-auto pt-24">
        <hr className="border-t border-gray-300 mb-6" />
        <div className="flex items-end justify-between">
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
            <p className="mt-3 text-foreground text-sm font-medium">Mikaela Connell</p>
          </div>
          <p className="text-xs tracking-wide text-muted">
            &copy; {new Date().getFullYear()} Mikaela Connell.
          </p>
        </div>
      </footer>
    </div>
  );
}
