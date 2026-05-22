import Footer from "@/components/Footer";

export default function GraLoRAReviewEssay() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-2">
        A Critical Review of GraLoRA: Granular Low-Rank Adaptation for
        Parameter-Efficient Fine-Tuning
      </h2>
      <p className="text-xs tracking-widest text-muted mb-1">May 2026</p>
      <p className="text-xs tracking-wide text-muted mb-6">
        CSCI E-222 Foundations of Large Language Models, Harvard Extension
        School
      </p>

      <div className="text-sm leading-relaxed tracking-wide max-w-2xl mb-8">
        <p>
          A critical review of Jung et al.&apos;s GraLoRA, which addresses
          LoRA&apos;s rank ceiling by partitioning weight matrices into
          block-wise low-rank adapters. The review covers the outlier-channel
          diagnosis, the block-diagonal method, results across five evaluation
          domains, and limitations of the experimental evidence.
        </p>
      </div>

      <object
        data="/gralora-review.pdf"
        type="application/pdf"
        className="w-full border border-gray-200 rounded"
        style={{ height: "85vh", maxHeight: "1200px" }}
      >
        <p className="text-sm text-muted p-4">
          PDF cannot be displayed in this browser.{" "}
          <a
            href="/gralora-review.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            Download the review
          </a>
        </p>
      </object>

      <Footer />
    </div>
  );
}
