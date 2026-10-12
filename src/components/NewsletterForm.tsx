import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("idle");
          }}
          placeholder="your@email.com"
          className="input-field flex-1"
          aria-label="Email address"
        />
        <button type="submit" className="btn-primary shrink-0">
          Subscribe
        </button>
      </form>
      {status === "success" && (
        <p className="mt-3 text-sm text-[var(--terracotta)]">
          Thank you! Please check your email to confirm. (Delivery requires backend integration.)
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-500">
          Please enter a valid email address.
        </p>
      )}
      <p className="mt-3 text-xs text-[var(--text-muted)]">
        By subscribing, you agree to receive updates from Café Horizon. Unsubscribe anytime.
      </p>
    </div>
  );
}
