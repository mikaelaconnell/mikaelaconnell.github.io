import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mikaelaconnell.dev"),
  title: "Mikaela Connell | Forward Deployed AI Engineer",
  description:
    "Forward deployed AI engineer building agentic systems on Google Cloud. Founder of Reen. Portfolio of Mikaela Connell.",
  openGraph: {
    title: "Mikaela Connell | Forward Deployed AI Engineer",
    description:
      "Forward deployed AI engineer building agentic systems on Google Cloud. Founder of Reen.",
    url: "https://mikaelaconnell.dev",
    siteName: "Mikaela Connell",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} h-full antialiased`}>
      <body className="h-full font-serif">{children}</body>
    </html>
  );
}
