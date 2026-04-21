import Footer from "@/components/Footer";

export default function TheFiloPage() {
  return (
    <div>
      <h2 className="text-xl tracking-wide mb-8">The Filo</h2>
      <div className="space-y-4 text-sm leading-relaxed tracking-wide">
        <p>
          The Filo is a luxury custom embroidery brand where 100% of proceeds
          go to charity. Each piece is made to order, combining craftsmanship
          with purpose.
        </p>
        <p>
          <a
            href="https://the-filo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600 transition-colors"
          >
            Visit The Filo →
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
