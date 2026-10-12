import { useState } from "react";
import { CheckIcon } from "./Icons";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>({
    name: "", email: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status === "error") setStatus("idle");
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Enter a valid email address";
    if (!data.subject.trim()) errs.subject = "Subject is required";
    if (!data.message.trim()) errs.message = "Message is required";
    else if (data.message.trim().length < 10)
      errs.message = "Message should be at least 10 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Simulate async submission (no backend connected)
    setTimeout(() => {
      setStatus("success");
      setData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="bg-[var(--cream)] rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-[var(--terracotta)]/10 flex items-center justify-center mx-auto mb-4">
          <CheckIcon className="w-7 h-7 text-[var(--terracotta)]" />
        </div>
        <h3 className="heading-serif text-xl mb-2">Message Sent</h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <p className="text-xs text-[var(--text-muted)] mb-4">
          (Frontend demo — connect a backend to store and deliver submissions.)
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="input-label" htmlFor="cf-name">Name *</label>
          <input
            id="cf-name"
            type="text"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className="input-field"
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="input-label" htmlFor="cf-email">Email *</label>
          <input
            id="cf-email"
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className="input-field"
            placeholder="your@email.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="input-label" htmlFor="cf-subject">Subject *</label>
        <input
          id="cf-subject"
          type="text"
          value={data.subject}
          onChange={(e) => update("subject", e.target.value)}
          className="input-field"
          placeholder="How can we help?"
          aria-invalid={!!errors.subject}
        />
        {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
      </div>
      <div>
        <label className="input-label" htmlFor="cf-message">Message *</label>
        <textarea
          id="cf-message"
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          className="input-field min-h-[120px] resize-y"
          placeholder="Tell us more..."
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
