import Footer from "@/components/Footer";

const work = [
  {
    role: "AI/ML Engineer",
    company: "Data Piper",
    period: "Present",
    description:
      "Google Cloud consulting — architecting AI systems for enterprise clients. Current projects include an animal recognition system, a veterinary dictation engine, an industrial inspection platform, and document processing SaaS. Work spans computer vision, NLP, agentic pipelines, and cloud infrastructure.",
  },
  {
    role: "Founder",
    company: "Reen",
    period: "Present",
    description:
      "Building a femtech platform for hormonal health tracking, iOS-first.",
  },
  {
    role: "Founder",
    company: "The Filo",
    period: "Present",
    description:
      "Luxury custom embroidery brand with 100% of proceeds going to charity.",
  },
];

const education = [
  {
    school: "Harvard Extension School",
    degree: "M.S. in Data Science",
  },
  {
    school: "Claremont McKenna College",
    degree: "B.A. in Economics",
  },
];

export default function ExperiencePage() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-8">Experience</h2>

      <section className="mb-12">
        <h3 className="text-sm tracking-widest uppercase text-muted mb-6">
          Work
        </h3>
        <div className="space-y-8">
          {work.map((item) => (
            <div key={item.role + item.company}>
              <p className="text-sm tracking-wide">
                {item.role},{" "}
                <span className="italic">{item.company}</span>
              </p>
              <p className="text-xs tracking-wide text-muted mt-1">
                {item.period}
              </p>
              <p className="text-sm tracking-wide text-muted mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm tracking-widest uppercase text-muted mb-6">
          Education
        </h3>
        <div className="space-y-4">
          {education.map((item) => (
            <div key={item.school}>
              <p className="text-sm tracking-wide">{item.school}</p>
              <p className="text-xs tracking-wide text-muted mt-1">
                {item.degree}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
