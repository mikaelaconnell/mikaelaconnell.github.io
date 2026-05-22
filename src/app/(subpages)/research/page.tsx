import Footer from "@/components/Footer";

function CodeBlock({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6">
      {title && (
        <p className="text-xs tracking-widest text-muted uppercase mb-2">
          {title}
        </p>
      )}
      <pre className="bg-gray-50 border border-gray-200 rounded px-4 py-3 text-xs leading-relaxed overflow-x-auto font-mono">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function ResearchPage() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-2">Research</h2>
      <p className="text-xs tracking-wide text-muted mb-10">
        Code walkthroughs from graduate research at Harvard Extension School
      </p>

      <article className="space-y-6 text-sm leading-relaxed tracking-wide max-w-2xl">
        {/* ── Project header ── */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <h3 className="text-lg tracking-wide mb-2">
            Dual-Corpus RAG for Women&apos;s Hormonal Health
          </h3>
          <p className="text-xs tracking-widest text-muted mb-4">
            CSCI E-222 Foundations of Large Language Models | Spring 2026
          </p>
          <p>
            A retrieval-augmented generation system that pairs clinical evidence
            (PubMedQA) with patient-facing explanations (MedQuAD) to answer
            women&apos;s hormonal health questions. Built on Google Colab with a
            T4 GPU. Evaluated across 17 experimental conditions with bootstrap
            confidence intervals.
          </p>
          <p className="mt-3 text-xs text-muted">
            Full writeup:{" "}
            <a
              href="/essays/dual-corpus-rag"
              className="underline hover:text-foreground"
            >
              Essay
            </a>
          </p>
        </div>

        {/* ── Section 1: Data Pipeline ── */}
        <h3 className="text-base tracking-wide mt-10 mb-4">
          1. Building the Evaluation Set
        </h3>

        <p>
          The evaluation set was filtered from PubMedQA&apos;s 1,000
          expert-labeled questions using iterative keyword refinement. The first
          pass (v1) used broad women&apos;s health terms but caught false
          positives like cervical-spine papers. Three iterations narrowed the
          set to 111 questions with 50 yes, 49 no, and 12 maybe labels.
        </p>

        <CodeBlock title="Keyword filtering with false-positive iteration">
{`womens_health_v1 = [
    "pcos", "polycystic ovary", "endometriosis",
    "menstruation", "menopause", "fertility",
    "ovarian", "uterine", "cervical",  # too broad
    "estrogen", "progesterone", "pregnancy",
    "breast cancer", "mammography", ...
]

# v1: 118 matches, but "cervical" caught spine papers
# v2: dropped bare "cervical", added "cervical cancer",
#     "cervical screening" → 106 matches
# v3: added "abortion", "vaginal", "trimester"
#     → 111 matches (final eval set)

filtered_v3 = filter_questions(pubmedqa_labeled, womens_health_v3)
# Label distribution: {yes: 50, no: 49, maybe: 12}`}
        </CodeBlock>

        <p>
          The imbalanced &quot;maybe&quot; class (only 12 of 111) motivated
          using macro-F1 instead of accuracy, since accuracy would mask failures
          on the minority class.
        </p>

        {/* ── Section 2: Embedding + Retrieval ── */}
        <h3 className="text-base tracking-wide mt-10 mb-4">
          2. Embedding and Retrieval
        </h3>

        <p>
          Both corpora were embedded using a domain-specific bi-encoder
          (TimKond/S-PubMedBert-MedQuAD), a Sentence-BERT variant fine-tuned on
          medical Q&A pairs. Embeddings are L2-normalized so FAISS inner-product
          search is equivalent to cosine similarity.
        </p>

        <CodeBlock title="Corpus embedding and FAISS index construction">
{`encoder = SentenceTransformer(
    "TimKond/S-PubMedBert-MedQuAD", device="cuda"
)

# Clinical corpus: 61,249 PubMed abstracts
clinical_embeddings = encoder.encode(
    [d['text'] for d in clinical_corpus],
    batch_size=32,
    normalize_embeddings=True,  # L2-norm → cosine sim
)
# shape: (61249, 768), 188 MB, ~21 min on T4

# Patient corpus: 16,407 MedQuAD Q&A pairs
patient_embeddings = encoder.encode(
    [d['text'] for d in patient_corpus],
    batch_size=64,
    normalize_embeddings=True,
)
# shape: (16407, 768), ~18 sec on T4

# Build FAISS indexes (exact search, no approximation)
clinical_index = faiss.IndexFlatIP(768)
clinical_index.add(clinical_embeddings)

patient_index = faiss.IndexFlatIP(768)
patient_index.add(patient_embeddings)`}
        </CodeBlock>

        <p>
          Three retrieval modes query these indexes: clinical-only (top-5 from
          PubMed), patient-only (top-5 from MedQuAD), and dual (top-5 from
          each, concatenated). A test query for &quot;What are common symptoms
          of PCOS?&quot; returned a 0.940 cosine similarity from the clinical
          index and 0.951 from the patient index, confirming the domain-specific
          encoder was working well.
        </p>

        {/* ── Section 3: Generation ── */}
        <h3 className="text-base tracking-wide mt-10 mb-4">
          3. RAG Prompt and Generation
        </h3>

        <p>
          BioMistral-7B was loaded in 4-bit NF4 quantization via bitsandbytes
          to fit the T4&apos;s 15 GB. Each retrieved document was truncated to
          500 characters to keep the assembled prompt under BioMistral&apos;s
          4,096-token context window, even in dual mode with 10 documents.
        </p>

        <CodeBlock title="RAG prompt template (Mistral [INST] format)">
{`def build_rag_prompt(question, retrieved_docs):
    blocks = []
    for i, d in enumerate(retrieved_docs, 1):
        if d['source'] == 'clinical':
            blocks.append(
                f"[Clinical source {i}]\\n"
                f"{d['text'][:500]}"
            )
        else:
            blocks.append(
                f"[Patient source {i}]\\n"
                f"Q: {d['question']}\\n"
                f"A: {d['answer'][:500]}"
            )
    context = "\\n\\n".join(blocks)

    return (
        f"[INST] You are a medical assistant. "
        f"Based on the following context, answer "
        f"the question with 'yes', 'no', or 'maybe', "
        f"followed by a brief explanation.\\n\\n"
        f"Context:\\n{context}\\n\\n"
        f"Question: {question}\\n\\n"
        f"Answer with yes/no/maybe and explain: [/INST]"
    )`}
        </CodeBlock>

        {/* ── Section 4: Ablation ── */}
        <h3 className="text-base tracking-wide mt-10 mb-4">
          4. The Over-Hedge Collapse
        </h3>

        <p>
          The most surprising result came from swapping BioMistral for Claude
          Haiku 4.5. Macro-F1 collapsed from 0.344 to 0.066 across all
          retrieval modes. Claude returned &quot;maybe&quot; on 109 to 110 of
          111 questions. Manual review showed Claude was actually using the
          retrieved context correctly, identifying that it was topically
          related but did not directly answer the specific question, then
          hedging per the prompt instruction.
        </p>

        <p>
          This revealed that a &quot;stronger&quot; model can produce worse
          benchmark scores when it follows hedge instructions that the weaker
          model ignores. The fix was prompt redesign.
        </p>

        <CodeBlock title="Prompt V3: anti-hedge rewrite">
{`def build_rag_prompt_claude_v3(question, retrieved_docs):
    # ... same context assembly ...
    return (
        "You are a medical assistant answering "
        "yes/no questions about medical evidence. "
        "Based on the retrieved context, give the "
        "most likely answer.\\n\\n"
        "IMPORTANT: The retrieved evidence will rarely "
        "match the question's exact wording or scope. "
        "Your task is to synthesize related findings "
        "into a directional answer. "
        "Default to 'yes' or 'no' based on what the "
        "evidence most plausibly suggests, even when "
        "the evidence is indirect or partial. "
        "Use 'maybe' ONLY when the retrieved sources "
        "are completely unrelated to the question's "
        "topic or contain genuinely contradictory "
        "findings. Excessive hedging is unhelpful.\\n\\n"
        f"Context:\\n{context}\\n\\n"
        f"Question: {question}\\n\\n"
        "Answer with yes, no, or maybe "
        "(followed by a brief explanation):"
    )

# Result: V1 → V3 improved macro-F1 from 0.066 to 0.187
# (non-overlapping 95% CIs), but still predicted
# "maybe" 85/111 times`}
        </CodeBlock>

        {/* ── Section 5: Evaluation ── */}
        <h3 className="text-base tracking-wide mt-10 mb-4">
          5. LLM-as-Judge Evaluation
        </h3>

        <p>
          Two evaluation layers used Claude Haiku 4.5 as a judge on a
          stratified 30-question sample (12 yes / 12 no / 6 maybe). Layer 1
          scored retrieval relevance on a 0 to 2 scale. Layer 3 scored
          groundedness on a 1 to 5 scale to detect hallucination.
        </p>

        <CodeBlock title="Groundedness judge prompt">
{`JUDGE_PROMPT = """Rate how well-grounded the
answer is on a 1-5 scale:
- 5: All factual claims directly supported
- 4: Most claims supported; minor unsupported details
- 3: Mix of supported and unsupported; no contradictions
- 2: Major claims unsupported or partial contradictions
- 1: Answer contradicts context or entirely unsupported

Respond with ONLY a JSON object:
{"score": <1-5>, "reasoning": "<one sentence>"}"""

# Results (baseline BioMistral):
#   Clinical: mean 1.40, median 1.0
#   Patient:  mean 1.20, median 1.0
#   Dual:     mean 1.33, median 1.0
# Low groundedness across all modes confirmed
# BioMistral was largely ignoring retrieved context`}
        </CodeBlock>

        {/* ── Section 6: Bootstrap ── */}
        <h3 className="text-base tracking-wide mt-10 mb-4">
          6. Bootstrap Confidence Intervals
        </h3>

        <p>
          With only 111 evaluation questions, point-estimate differences could
          be unreliable. Each condition was resampled 1,000 times with
          replacement and macro-F1 recomputed on each bootstrap sample.
        </p>

        <CodeBlock title="Bootstrap resampling">
{`def bootstrap_macro_f1(results, n_bootstrap=1000):
    y_true = np.array([r['true_label'] for r in results])
    y_pred = np.array([r['predicted']  for r in results])
    n = len(y_true)
    rng = np.random.RandomState(42)
    dist = []
    for _ in range(n_bootstrap):
        idx = rng.choice(n, size=n, replace=True)
        dist.append(f1_score(
            y_true[idx], y_pred[idx],
            labels=['yes','no','maybe'],
            average='macro', zero_division=0
        ))
    return (
        f1_score(y_true, y_pred, ...),
        np.percentile(dist, 2.5),
        np.percentile(dist, 97.5),
    )

# Key result: RAG Clinical BioMistral
#   0.344 [0.279, 0.403]
# vs No-RAG BioMistral
#   0.222 [0.184, 0.262]
# Non-overlapping CIs → retrieval helps BioMistral`}
        </CodeBlock>

        {/* ── Section 7: Resumable Loop ── */}
        <h3 className="text-base tracking-wide mt-10 mb-4">
          7. Engineering: Resumable Experiment Loop
        </h3>

        <p>
          Running 17 experimental conditions (2,000+ generations) on a free
          Colab T4 required handling frequent disconnects. Every experiment used
          a shared loop that checkpoints to JSON every 20 iterations and skips
          completed work on restart.
        </p>

        <CodeBlock title="Checkpoint-based generation loop">
{`def run_generation_loop(gen_fn, output_path,
                        eval_set, modes, save_every=20):
    # Resume from existing checkpoint
    if output_path.exists():
        results = json.load(open(output_path))
        done = {(r['question_idx'], r['mode'])
                for r in results}
    else:
        results, done = [], set()

    for mode in modes:
        for i, ex in enumerate(eval_set):
            if (i, mode) in done:
                continue  # skip completed work
            response = gen_fn(ex['question'], mode)
            results.append({...})
            if len(results) % save_every == 0:
                json.dump(results, open(output_path, 'w'))

    json.dump(results, open(output_path, 'w'))
    return results

# Total runtime: ~3 hours on T4
# 9 JSON files, 2,388 total records`}
        </CodeBlock>

        {/* ── Takeaways ── */}
        <h3 className="text-base tracking-wide mt-10 mb-4">Takeaways</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Corpus alignment matters more than corpus size. Adding patient-facing
            documents to clinical evidence hurt accuracy by introducing
            affirmative answer bias.
          </li>
          <li>
            A stronger generator does not automatically mean better benchmark
            scores. Claude&apos;s caution was clinically appropriate but
            destroyed macro-F1 on PubMedQA.
          </li>
          <li>
            Prompt design is a meaningful experimental variable with measurable
            effects (0.066 to 0.187, non-overlapping CIs).
          </li>
          <li>
            Bootstrap CIs on small evaluation sets prevent over-interpreting
            noise as signal. Several differences that looked meaningful at
            point-estimate level disappeared when confidence intervals were
            computed.
          </li>
          <li>
            For patient-facing medical QA, the right architecture is likely a
            two-stage system: clinical evidence for answer determination,
            followed by a separate readability layer.
          </li>
        </ul>
      </article>

      <Footer />
    </div>
  );
}
