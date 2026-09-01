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
      "A luxury custom embroidery brand where 100% of proceeds go to charity. Each piece is made to order, combining craftsmanship with purpose, and every purchase shows exactly which charity it supports.",
  },
  {
    title: "Paloma",
    type: "Personal",
    description:
      "An AI-powered event planning studio. Analyzes your Pinterest inspiration to create a complete vision and execution plan for your event, from styling and decor to logistics and vendor recommendations. Coming soon.",
    link: "https://palomastudioevents.com",
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
      "A production system built for a veterinary software company to identify individual horses from uploaded images at scale. Uses a fine-tuned SigLIP2 model trained on hundreds of thousands of images to generate visual embeddings, with a multi-step agent pipeline for search, reranking, and metadata matching across 14M+ images and 4.5M horses, reaching 87% top-1 and 96% top-5 accuracy. Built with FastAPI, BigQuery vector search, Cloud Run, and Vertex AI.",
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
    title: "AI List Curation Agent",
    type: "Data Piper",
    description:
      "A multi-agent system built for a major media company that automates editorial list curation. Uses Gemini, ADK, Vector Search, and BigQuery graph analytics to research candidates, score against editorial criteria, and generate narrative justifications. Deployed as microservices on Cloud Run.",
  },
  {
    title: "Multi-Tenant AI Platform",
    type: "Data Piper",
    description:
      "A shared agentic AI platform built for an international pay-as-you-go solar energy provider serving off-grid households. A Go control plane on Cloud Run orchestrates Gemini Enterprise, with retrieval and grounding on Vertex AI Search and AlloyDB AI, keeping identity, policy, and systems of record outside the model.",
  },
  {
    title: "RFP Response Assistant",
    type: "Data Piper",
    description:
      "A multi-agent assistant built for a medical media company that drafts responses to requests for proposals. Built on Gemini Enterprise with agents for requirement extraction, content retrieval from past proposals, and draft generation.",
  },
  {
    title: "Agentic Development Pipeline",
    type: "Data Piper",
    description:
      "An internal multi-agent code-generation pipeline with self-correcting build and test loops, schema-validated review agents, and a regression evaluation suite gating every change. Built with Vertex AI and Python.",
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
            {project.link && (
              <p className="text-sm tracking-wide mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600 transition-colors"
                >
                  Visit →
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
