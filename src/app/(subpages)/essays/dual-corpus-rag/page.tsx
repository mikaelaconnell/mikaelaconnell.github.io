import Footer from "@/components/Footer";

export default function DualCorpusRagEssay() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-2">
        Dual-Corpus RAG for Women&apos;s Hormonal Health: Component-Level
        Ablation Studies and Statistical Evaluation
      </h2>
      <p className="text-xs tracking-widest text-muted mb-1">May 2026</p>
      <p className="text-xs tracking-wide text-muted mb-6">
        CSCI E-222 Foundations of Large Language Models, Harvard Extension
        School
      </p>

      <div className="text-sm leading-relaxed tracking-wide max-w-2xl mb-8 space-y-4">
        <p>
          This project built and evaluated a dual-corpus RAG system for
          women&apos;s hormonal health question answering. The system paired
          PubMedQA clinical evidence with MedQuAD patient-facing explanations,
          compared three retrieval modes, ran three ablation studies, and used
          bootstrap confidence intervals across 17 experimental conditions.
        </p>
        <p className="text-xs tracking-wide text-muted italic">
          For an annotated code walkthrough, see the{" "}
          <a href="/research" className="underline hover:text-foreground">
            Research
          </a>{" "}
          page.
        </p>
      </div>

      <object
        data="/dual-corpus-rag-report.pdf"
        type="application/pdf"
        className="w-full border border-gray-200 rounded"
        style={{ height: "85vh", maxHeight: "1200px" }}
      >
        <p className="text-sm text-muted p-4">
          PDF cannot be displayed in this browser.{" "}
          <a
            href="/dual-corpus-rag-report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            Download the full report
          </a>
        </p>
      </object>

      <Footer />
    </div>
  );
}
