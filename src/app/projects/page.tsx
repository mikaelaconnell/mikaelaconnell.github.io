import Link from "next/link";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Reen — Hormonal Health Platform",
    href: "/projects/reen",
  },
  {
    title: "DocStream AI — Document Processing SaaS",
    href: "/projects/docstream",
  },
  {
    title: "Smart Fridge AI — Gut Health Grocery Agent",
    href: "/projects/smart-fridge",
  },
  {
    title: "Life Max — AI Vision Board App",
    href: "/projects/life-max",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-8">Projects</h2>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project.title}>
            <Link
              href={project.href}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
