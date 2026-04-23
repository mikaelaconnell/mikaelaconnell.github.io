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
      "A luxury custom embroidery brand where 100% of proceeds go to charity. Each piece is made to order, combining craftsmanship with purpose. Also features an AI-powered event planning service that connects to Pinterest to create a vision and execution plan for your event.",
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
    title: "Animal Recognition System",
    type: "Data Piper",
    description:
      "A production system built for a veterinary software company to identify individual horses from uploaded images at scale. Uses a fine-tuned SigLIP2 model trained on hundreds of thousands of images to generate visual embeddings, with a multi-step agent pipeline for search, reranking, and metadata matching across 14M+ images and 4.5M horses. Built with FastAPI, BigQuery vector search, Cloud Run, and Vertex AI.",
  },
  {
    title: "Veterinary Dictation Engine",
    type: "Data Piper",
    description:
      "An AI microservice built for a veterinary software company that converts dictation audio into structured clinical JSON. Handles SOAP notes, lab results, and treatment plans.",
  },
  {
    title: "Industrial Inspection System",
    type: "Data Piper",
    description:
      "An AI-powered inspection system built for an oil refinery company, using computer vision and segmentation models to analyze engineering drawings and facility imagery on GCP.",
  },
  {
    title: "Document Processing Platform",
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
