"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/the-filo", label: "The Filo" },
  { href: "/reen", label: "Reen" },
  { href: "/essays", label: "Essays" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:w-44 shrink-0">
      <Link href="/" className="block mb-8">
        <h1 className="text-lg tracking-wide hover:text-gray-600 transition-colors">
          Mikaela Connell
        </h1>
      </Link>
      <nav className="flex flex-row flex-wrap gap-x-6 gap-y-2 lg:flex-col lg:gap-y-3">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm tracking-wide transition-colors ${
              pathname === href
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
