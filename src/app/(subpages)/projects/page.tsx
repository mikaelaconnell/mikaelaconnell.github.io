import Footer from "@/components/Footer";

const projects = [
  {
    title: "Reen",
    type: "Personal",
    description:
      "An AI-powered hormonal health platform for women. Combines cycle tracking, symptom logging, wearable integrations, and AI-generated doctor advocacy reports. Built with SwiftUI, FastAPI, Cloud Run, and Cloud SQL.",
  },
  {
    title: "The Filo",
    type: "Personal",
    description:
      "A luxury custom embroidery brand where 100% of proceeds go to charity. Each piece is made to order, combining craftsmanship with purpose.",
  },
  {
    title: "Life Max",
    type: "Personal",
    description:
      "An AI-powered vision board iOS app that delivers daily motivational texts. Built on GCP with Cloud Run for automated messaging.",
  },
  {
    title: "Smart Fridge AI",
    type: "Personal",
    description:
      "A gut health grocery agent that builds personalized shopping lists and adds items to your Amazon Whole Foods cart. Built with Playwright, React, and Node.",
  },
  {
    title: "Veterinary Dictation Engine",
    type: "Data Piper",
    description:
      "An AI microservice that converts veterinary dictation audio into structured clinical JSON. Handles SOAP notes, lab results, and treatment plans.",
  },
  {
    title: "Environmental Intellect",
    type: "Data Piper",
    description:
      "An AI-powered industrial inspection system using computer vision and segmentation models to analyze engineering drawings and facility imagery on GCP.",
  },
  {
    title: "DocStream AI",
    type: "Data Piper",
    description:
      "A SaaS document processing platform built on GCP. Multi-tenant architecture with Marketplace billing for enterprise document extraction and analysis.",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-8">Projects</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title}>
            <div className="flex items-baseline gap-3">
              <p className="text-sm tracking-wide">{project.title}</p>
              <span className="text-xs tracking-widest text-muted">
                {project.type}
              </span>
            </div>
            <p className="text-sm tracking-wide text-muted mt-2 leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
