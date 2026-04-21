import Footer from "@/components/Footer";

export default function ReenPage() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-8">Reen</h2>
      <div className="space-y-4 text-sm leading-relaxed tracking-wide">
        <p>
          Reen is an AI-powered hormonal health platform built for women, by
          women. It combines self-reported symptoms, cycle data, wearable
          biometrics, and lab results to deliver personalized insights — giving
          women the clarity and evidence they need to advocate for themselves.
        </p>
        <p>
          The iOS app features cycle tracking with phase visualization, daily
          symptom logging, medication tracking, AI-generated doctor advocacy
          reports, a knowledge library, and integrations with Apple Health,
          Oura Ring, and Whoop.
        </p>
        <p>
          Built with SwiftUI, FastAPI on GCP Cloud Run, Cloud SQL Postgres,
          and Claude API for AI-powered report generation and insights.
        </p>
        <p>Submitted to the App Store — launching Spring 2026.</p>
        <p>
          <a
            href="https://reen-health.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600 transition-colors"
          >
            Visit Reen →
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
