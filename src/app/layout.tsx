import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mikaela Connell",
  description:
    "AI/ML Engineer, Entrepreneur, and Builder. Portfolio of Mikaela Connell.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} h-full antialiased`}>
      <body className="min-h-full font-serif">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 md:px-12 lg:py-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
