export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 pt-6 text-xs tracking-wide text-muted">
      <p>
        For inquiries please contact{" "}
        <a
          href="mailto:mikaelaconnell14@gmail.com"
          className="hover:text-foreground"
        >
          mikaelaconnell14@gmail.com
        </a>
      </p>
<p className="mt-2">&copy; {new Date().getFullYear()} Mikaela Connell.</p>
    </footer>
  );
}
