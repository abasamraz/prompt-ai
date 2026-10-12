import { Link } from "react-router-dom";
import { CupIcon } from "../components/Icons";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-20 bg-[var(--cream)]">
      <div className="container-canvas text-center">
        <CupIcon className="w-12 h-12 text-[var(--terracotta)] mx-auto mb-6" />
        <h1 className="heading-serif text-5xl md:text-6xl mb-3">404</h1>
        <p className="text-[var(--text-muted)] text-lg mb-6">
          This page seems to have gone for a coffee break.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
