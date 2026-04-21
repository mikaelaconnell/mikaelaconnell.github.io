export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 pt-6 text-xs tracking-wide text-muted">
      <p>
        For inquiries please contact{" "}
        <a
          href="mailto:mikaela@mikaelaconnell.com"
          className="hover:text-foreground"
        >
          mikaela@mikaelaconnell.com
        </a>
      </p>
      <p className="mt-2">
        Views expressed are my own and do not represent those of my employer.
      </p>
      <p className="mt-2">&copy; {new Date().getFullYear()} Mikaela Connell.</p>
    </footer>
  );
}
