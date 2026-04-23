import Footer from "@/components/Footer";

export default function DiagnosisGapEssay() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-2">
        The Diagnosis Gap: Why Women&apos;s Health Needs Better Data Before
        Better Algorithms
      </h2>
      <p className="text-xs tracking-widest text-muted mb-10">Apr 2026</p>

      <article className="space-y-6 text-sm leading-relaxed tracking-wide max-w-2xl">
        <p>
          I have been spending a lot of time in medical journals lately. As
          someone building in the women&apos;s health space, I wanted to
          understand where the research actually stands, what AI can do today
          for conditions like PCOS and endometriosis, and more importantly,
          where it falls short. What I found was both encouraging and
          frustrating in equal measure, and I want to share some of what I have
          learned.
        </p>

        <p>
          The starting point is a number that has barely moved in decades.
          According to a systematic literature review published in{" "}
          <em>BJOG</em>, the average time to diagnose endometriosis ranges from
          5.4 to 11.4 years, with patients seeing five or more doctors before
          receiving a diagnosis (De Corte et al., 2024). The World Health
          Organization reports a similar range of 4 to 12 years (WHO, 2023).
          PCOS follows a parallel pattern. These are not rare conditions.
          Endometriosis affects 5 to 10 percent of people who menstruate, and
          PCOS affects 6 to 13 percent. In that diagnostic window, women watch
          their fertility, mood, and quality of life erode while they wait for
          someone to listen.
        </p>

        <p>
          Recent research suggests AI could help close this gap. A study in{" "}
          <em>Frontiers in Endocrinology</em> used machine learning models
          trained on electronic health records, including menstrual cycle
          length, BMI, and hormonal markers, to predict PCOS diagnosis,
          achieving an AUC of 85 percent (Barrera et al., 2024). A study in{" "}
          <em>Scientific Reports</em> found that combining clinical and
          ultrasound features enabled highly accurate, non-invasive PCOS
          detection, with follicle count, weight changes, AMH levels, and
          menstrual irregularity emerging as the most predictive features
          (Ahmed et al., 2025). On the endometriosis side, a machine learning
          model trained on self-reported symptom questionnaires achieved a
          sensitivity of 93 percent and specificity of 95 percent,
          demonstrating that the signal is there in the patterns of symptoms
          women experience daily (Sivajohan et al., 2023). A Bayesian network
          study further showed that specific pain locations and pain types can
          forecast an endometriosis diagnosis (Jeu et al., 2024).
        </p>

        <p>
          The research is promising. But here is the part that keeps me up at
          night as an engineer.
        </p>

        <p>
          Machine learning models are only as good as the data they are trained
          on. And women&apos;s health data is thin. The male body has
          historically been treated as the default in clinical research (AAMC,
          2024). As recently as 2019, women accounted for roughly 40 percent of
          participants in clinical trials for cancer, cardiovascular disease,
          and psychiatric disorders, despite representing 51 percent of the
          population (Labiotech, 2025). Only 7 percent of biopharma R&D is
          invested in conditions that exclusively affect women (DIA Global
          Forum, 2025). Conditions biologically unique to us, like
          endometriosis, PCOS, and menopause, lack the robust, representative
          datasets that modern AI requires to generalize. A review in{" "}
          <em>Women&apos;s Health</em> put it plainly: existing AI models for
          endometriosis are largely proof-of-concept, limited by small sample
          sizes and narrow populations (Dungate et al., 2024).
        </p>

        <p>
          When you train a model on a narrow population, it performs well in
          controlled settings and fails quietly in the real world. It misses
          the woman whose symptoms present differently. It misdiagnoses.
          Research has shown that neural networks trained on large medical
          imaging datasets underdetect disease in female patients (Cirillo et
          al., 2024). In early 2025, the UK Minister of State for Women&apos;s
          Health warned that without representative data, AI could entrench
          disparities rather than reduce them (World Economic Forum, 2025). The
          tools we build to help women could end up failing them in new,
          harder-to-detect ways.
        </p>

        <p>
          So what do we actually need?
        </p>

        <p>
          This is something I think about not just as a builder, but as a
          student. In my graduate work at Harvard, I study the foundations of
          what makes machine learning models actually work, and so much of it
          comes back to data. We learn early that a model&apos;s ability to
          generalize depends entirely on whether the training distribution
          reflects the population it will serve. When it does not, you get
          distribution shift, and the model fails silently on the patients it
          has never seen. We learn that evaluation metrics like accuracy or AUC
          can be deeply misleading when the test set is not representative,
          painting a picture of performance that falls apart in deployment. And
          we spend significant time on bias mitigation and data preprocessing,
          because the truth is that no amount of architectural sophistication
          can compensate for a dataset that does not represent the people it is
          meant to help. These are not abstract lessons. They describe exactly
          what is happening in women&apos;s health AI today.
        </p>

        <p>
          We need better data before we need better algorithms. We need
          longitudinal symptom tracking at scale. Not just clinical trial data,
          but the lived, daily experience of women tracking their cycles,
          logging their symptoms, noting what feels off. A review in{" "}
          <em>Frontiers in Digital Health</em> noted that wearable devices
          could provide granular, objective data for endometriosis, yet to
          date, almost no studies have utilized wearable technology to track
          endometriosis symptom trajectories (Gater et al., 2023). We need
          diverse cohorts that reflect the full spectrum of how these
          conditions present across age, race, and body type. We need to treat
          patient-generated data not as noise, but as signal.
        </p>

        <p>
          This is part of why I am building what I am building. Reen is not
          just an app. It is an attempt to create the dataset that should
          already exist. Every symptom logged, every cycle tracked, every
          pattern surfaced is a small contribution to a body of evidence that
          has been neglected for too long.
        </p>

        <p>
          The AI is promising. The research is encouraging. But we are not
          there yet, and we will not get there by training models on incomplete
          pictures of women&apos;s health. The six-to-ten-year diagnosis gap is
          not just a medical failure. It is a data failure. And closing it will
          require engineers, researchers, and builders who understand that the
          most important thing we can do right now is not build a smarter
          model. It is build a more complete picture of what women&apos;s
          health actually looks like.
        </p>

        <h3 className="text-sm tracking-widest uppercase text-muted mt-12 mb-6">
          References
        </h3>

        <ul className="space-y-3 text-xs leading-relaxed text-muted">
          <li>
            AAMC. (2024). Why we know so little about women&apos;s health.
            Association of American Medical Colleges.{" "}
            <a
              href="https://www.aamc.org/news/why-we-know-so-little-about-women-s-health"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://www.aamc.org/news/why-we-know-so-little-about-women-s-health
            </a>
          </li>
          <li>
            Ahmed, S., et al. (2025). A machine learning approach for
            non-invasive PCOS diagnosis from ultrasound and clinical features.{" "}
            <em>Scientific Reports</em>.{" "}
            <a
              href="https://www.nature.com/articles/s41598-025-10453-9"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://www.nature.com/articles/s41598-025-10453-9
            </a>
          </li>
          <li>
            Barrera, F. J., et al. (2024). Predicting polycystic ovary syndrome
            with machine learning algorithms from electronic health records.{" "}
            <em>Frontiers in Endocrinology</em>, 15, 1298628.{" "}
            <a
              href="https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2024.1298628/full"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2024.1298628/full
            </a>
          </li>
          <li>
            Cirillo, D., et al. (2024). Big data and AI for gender equality in
            health: Bias is a big challenge. <em>Frontiers in Big Data</em>.{" "}
            <a
              href="https://www.frontiersin.org/journals/big-data/articles/10.3389/fdata.2024.1436019/full"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://www.frontiersin.org/journals/big-data/articles/10.3389/fdata.2024.1436019/full
            </a>
          </li>
          <li>
            De Corte, T., et al. (2024). Time to diagnose endometriosis:
            Current status, challenges and regional characteristics.{" "}
            <em>BJOG: An International Journal of Obstetrics & Gynaecology</em>.{" "}
            <a
              href="https://obgyn.onlinelibrary.wiley.com/doi/full/10.1111/1471-0528.17973"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://obgyn.onlinelibrary.wiley.com/doi/full/10.1111/1471-0528.17973
            </a>
          </li>
          <li>
            DIA Global Forum. (2025). Policy changes needed to transform
            women&apos;s health research and outcomes.{" "}
            <a
              href="https://globalforum.diaglobal.org/issue/august-2025/policy-changes-needed-to-transform-womens-health-research-and-outcomes/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://globalforum.diaglobal.org/issue/august-2025/policy-changes-needed-to-transform-womens-health-research-and-outcomes/
            </a>
          </li>
          <li>
            Dungate, B., Tucker, D. R., Goodwin, E., & Yong, P. J. (2024).
            Assessing the utility of artificial intelligence in endometriosis:
            Promises and pitfalls. <em>Women&apos;s Health</em>, 20.{" "}
            <a
              href="https://journals.sagepub.com/doi/10.1177/17455057241248121"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://journals.sagepub.com/doi/10.1177/17455057241248121
            </a>
          </li>
          <li>
            Gater, A., et al. (2023). Symptom tracking in endometriosis using
            digital technologies: Knowns, unknowns, and future prospects.{" "}
            <em>Frontiers in Digital Health</em>.{" "}
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10518625/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://pmc.ncbi.nlm.nih.gov/articles/PMC10518625/
            </a>
          </li>
          <li>
            Jeu, A., et al. (2024). An artificial intelligence approach for
            investigating multifactorial pain-related features of
            endometriosis. <em>PLOS One</em>.{" "}
            <a
              href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0297998"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0297998
            </a>
          </li>
          <li>
            Labiotech. (2025). The gender gap in clinical trials: Why women are
            still underrepresented.{" "}
            <a
              href="https://www.labiotech.eu/in-depth/women-clinical-trial/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://www.labiotech.eu/in-depth/women-clinical-trial/
            </a>
          </li>
          <li>
            Sivajohan, B., et al. (2023). Self-report symptom-based
            endometriosis prediction using machine learning.{" "}
            <em>Scientific Reports</em>.{" "}
            <a
              href="https://www.nature.com/articles/s41598-023-32761-8"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://www.nature.com/articles/s41598-023-32761-8
            </a>
          </li>
          <li>
            WHO. (2023). Endometriosis. World Health Organization.{" "}
            <a
              href="https://www.who.int/news-room/fact-sheets/detail/endometriosis"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://www.who.int/news-room/fact-sheets/detail/endometriosis
            </a>
          </li>
          <li>
            World Economic Forum. (2025). From margins to momentum: How AI
            could transform women&apos;s health.{" "}
            <a
              href="https://www.weforum.org/stories/2025/09/from-margins-to-momentum-how-ai-could-transform-womens-health/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://www.weforum.org/stories/2025/09/from-margins-to-momentum-how-ai-could-transform-womens-health/
            </a>
          </li>
        </ul>
      </article>

      <Footer />
    </div>
  );
}
