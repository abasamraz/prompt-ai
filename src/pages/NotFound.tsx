import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory pt-20">
      <div className="text-center px-6">
        <span className="text-champagne text-7xl font-bold heading-serif">404</span>
        <h1 className="heading-serif text-2xl sm:text-3xl text-navy mt-4 mb-3">
          Page Not Found
        </h1>
        <p className="text-navy/50 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          <span>Back to Home</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
