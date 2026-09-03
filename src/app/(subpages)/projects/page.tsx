import Footer from "@/components/Footer";

type Project = {
  title: string;
  type: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Reen",
    type: "Personal",
    description:
      "An AI-powered hormonal health platform for women. Combines cycle tracking, symptom logging, wearable integrations, and AI-generated doctor advocacy reports. Built with SwiftUI, FastAPI, Cloud Run, and Cloud SQL.",
    link: "https://reen-health.com",
  },
  {
    title: "The Filo",
    type: "Personal",
    description:
      "A luxury custom embroidery brand where 100% of proceeds go to charity. Each piece is made to order, combining craftsmanship with purpose, and every purchase shows exactly which charity it supports.",
    link: "https://www.the-filo.com",
  },
  {
    title: "Paloma",
    type: "Personal",
    description:
      "An AI-powered event planning studio. Analyzes your Pinterest inspiration to create a complete vision and execution plan for your event, from styling and decor to logistics and vendor recommendations.",
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
      "A production system built for an animal health technology company to identify individual horses from uploaded images at scale. Uses a fine-tuned SigLIP2 model trained on hundreds of thousands of images to generate visual embeddings, with a multi-step agent pipeline for search, reranking, and metadata matching across 14M+ images and 4.5M horses, raising top-1 accuracy from 72% to 87% (96% top-5). Built with FastAPI, BigQuery vector search, Cloud Run, and Vertex AI. Turned a manual visual verification task into an instant automated check.",
  },
  {
    title: "Veterinary Dictation Engine",
    type: "Data Piper",
    description:
      "An AI microservice built for a veterinary software company that converts dictation audio into structured clinical JSON. Handles SOAP notes, lab results, and treatment plans. Cuts per-visit charting time by replacing after-visit typing with automatic structured documentation.",
  },
  {
    title: "AI List Curation Agent",
    type: "Data Piper",
    description:
      "A multi-agent system built for a major media company that automates editorial list curation. Uses Gemini, ADK, Vector Search, and BigQuery graph analytics to research candidates, score against editorial criteria, and generate narrative justifications. Deployed as microservices on Cloud Run. Adopted by the editorial team into their annual list selection workflow, replacing manual candidate research.",
  },
  {
    title: "Multi-Tenant AI Platform",
    type: "Data Piper",
    description:
      "A shared agentic AI platform built for an international pay-as-you-go solar energy provider serving off-grid households. A Go control plane on Cloud Run orchestrates Gemini Enterprise, with retrieval and grounding on Vertex AI Search and AlloyDB AI, keeping identity, policy, and systems of record outside the model. Designed to unify self-service, field sales, and agent-assist support on one platform, reducing support cost and customer churn.",
  },
  {
    title: "RFP Response Assistant",
    type: "Data Piper",
    description:
      "A multi-agent assistant built for a medical media company that drafts responses to requests for proposals. Built on Gemini Enterprise with agents for requirement extraction, content retrieval from past proposals, and draft generation. Targets faster proposal turnaround and greater RFP response capacity for the sales team.",
  },
  {
    title: "Agentic Development Pipeline",
    type: "Data Piper",
    description:
      "An internal multi-agent code-generation pipeline with self-correcting build and test loops, schema-validated review agents, and a regression evaluation suite gating every change. Built with Vertex AI and Python. Packaged as a reusable delivery accelerator that raises engineering throughput across client engagements.",
  },
  {
    title: "Document Processing Platform",
    type: "Data Piper",
    description:
      "A SaaS document processing platform built on GCP with a two-pass AI pipeline: Document AI and Gemini classify each incoming document, then extract user-configured fields into structured JSON with semantic search over the results. Multi-tenant architecture with row-level security and Marketplace billing. Replaces manual document data entry for business customers.",
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
