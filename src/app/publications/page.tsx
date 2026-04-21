import Footer from "@/components/Footer";

const publications = [
  {
    date: "Spring 2026",
    title: "Dual-Corpus RAG for Women's Hormonal Health QA",
    description:
      "Research exploring retrieval-augmented generation across PubMedQA and MedQuAD corpora for accurate hormonal health question answering.",
    href: "#",
  },
  {
    date: "Winter 2026",
    title: "Agentic Document Processing on GCP",
    description:
      "Technical deep dive into building intelligent document processing pipelines using Vertex AI and Cloud Run.",
    href: "#",
  },
  {
    date: "Fall 2025",
    title: "Computer Vision for Industrial Inspection",
    description:
      "Exploring AI-driven visual inspection systems using segmentation models for industrial applications.",
    href: "#",
  },
];

export default function PublicationsPage() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-8">Publications</h2>
      <div className="relative">
        <div className="absolute left-[5px] top-2 bottom-0 w-px bg-gray-200" />
        <div className="space-y-10">
          {publications.map((pub) => (
            <div key={pub.title} className="relative pl-8">
              <div className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 border-gray-300 bg-white" />
              <p className="text-xs tracking-widest text-muted uppercase mb-1">
                {pub.date}
              </p>
              {pub.href !== "#" ? (
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-wide hover:text-gray-600 transition-colors underline"
                >
                  {pub.title}
                </a>
              ) : (
                <p className="text-sm tracking-wide">{pub.title}</p>
              )}
              <p className="text-sm tracking-wide text-muted mt-1 leading-relaxed">
                {pub.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
