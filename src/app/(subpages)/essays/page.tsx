import Link from "next/link";
import Footer from "@/components/Footer";

const essays = [
  {
    date: "Apr 2026",
    title:
      "The Diagnosis Gap: Why Women's Health Needs Better Data Before Better Algorithms",
    href: "/essays/diagnosis-gap",
  },
];

export default function EssaysPage() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-8">Essays</h2>
      <ul className="space-y-3">
        {essays.map((essay) => (
          <li key={essay.title} className="flex items-baseline gap-4">
            <span className="text-xs tracking-widest text-muted whitespace-nowrap">
              {essay.date}
            </span>
            <Link
              href={essay.href}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors"
            >
              {essay.title}
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
