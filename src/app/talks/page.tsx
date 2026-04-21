import Footer from "@/components/Footer";

const talks = [
  {
    title: "Building Agentic AI on Google Cloud",
    image: "/images/talk-1.jpg",
    href: "#",
  },
  {
    title: "Women in AI & Entrepreneurship",
    image: "/images/talk-2.jpg",
    href: "#",
  },
];

export default function TalksPage() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-8">Talks & interviews</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {talks.map((talk) => (
          <a
            key={talk.title}
            href={talk.href}
            className="group block"
          >
            <div className="aspect-[4/2.5] overflow-hidden bg-gray-100 mb-3">
              <div className="h-full w-full bg-gray-200 group-hover:scale-105 transition-transform duration-300" />
            </div>
            <p className="text-sm tracking-wide group-hover:text-gray-600 transition-colors">
              {talk.title}
            </p>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
}
