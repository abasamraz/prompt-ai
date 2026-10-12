import { useState } from "react";
import { contactInfo } from "../data/cafe";
import { CheckIcon, PhoneIcon } from "./Icons";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM",
];

const occasions = ["Casual Visit", "Birthday", "Anniversary", "Business Meeting", "Brunch with Friends", "Other"];

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  notes: string;
}

const initial: FormData = {
  name: "", email: "", phone: "", date: "", time: "",
  guests: "2", occasion: "Casual Visit", notes: "",
};

export default function ReservationForm() {
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) errs.name = "Full name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Enter a valid email address";
    if (!data.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[\d\s+()-]{7,}$/.test(data.phone))
      errs.phone = "Enter a valid phone number";
    if (!data.date) errs.date = "Please select a date";
    else if (data.date < today) errs.date = "Date cannot be in the past";
    if (!data.time) errs.time = "Please select a time";
    const guests = parseInt(data.guests);
    if (!guests || guests < 1) errs.guests = "At least 1 guest";
    else if (guests > 20) errs.guests = "Maximum 20 guests per reservation";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate async submission (no backend connected)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setData(initial);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-[var(--cream)] rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--terracotta)]/10 flex items-center justify-center mx-auto mb-4">
          <CheckIcon className="w-8 h-8 text-[var(--terracotta)]" />
        </div>
        <h3 className="heading-serif text-2xl mb-2">Request Received</h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 max-w-md mx-auto">
          Thank you, {data.name.split(" ")[0]}! Your reservation request for{" "}
          <strong>{data.guests} {parseInt(data.guests) === 1 ? "guest" : "guests"}</strong> on{" "}
          <strong>{new Date(data.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</strong> at{" "}
          <strong>{data.time}</strong> has been noted.
        </p>
        <div className="bg-white rounded-xl p-4 max-w-md mx-auto mb-4 text-left text-sm space-y-1.5">
          <div className="flex justify-between"><span className="text-[var(--text-muted)]">Name</span><span className="font-medium">{data.name}</span></div>
          <div className="flex justify-between"><span className="text-[var(--text-muted)]">Email</span><span className="font-medium">{data.email}</span></div>
          <div className="flex justify-between"><span className="text-[var(--text-muted)]">Phone</span><span className="font-medium">{data.phone}</span></div>
          <div className="flex justify-between"><span className="text-[var(--text-muted)]">Occasion</span><span className="font-medium">{data.occasion}</span></div>
          {data.notes && <div className="flex justify-between"><span className="text-[var(--text-muted)]">Notes</span><span className="font-medium text-right max-w-[60%]">{data.notes}</span></div>}
        </div>
        <p className="text-xs text-[var(--text-muted)] mb-4 max-w-md mx-auto">
          This is a request, not a confirmed booking. Our team will contact you shortly to confirm.
          To enable real reservations, connect a booking backend.
        </p>
        <button onClick={handleReset} className="btn-outline">
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="input-label" htmlFor="res-name">Full Name *</label>
            <input
              id="res-name"
              type="text"
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              className="input-field"
              placeholder="Jane Doe"
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="input-label" htmlFor="res-email">Email *</label>
            <input
              id="res-email"
              type="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              className="input-field"
              placeholder="jane@email.com"
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="input-label" htmlFor="res-phone">Phone *</label>
            <input
              id="res-phone"
              type="tel"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="input-field"
              placeholder="+1 (555) 000-0000"
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="input-label" htmlFor="res-guests">Number of Guests *</label>
            <select
              id="res-guests"
              value={data.guests}
              onChange={(e) => update("guests", e.target.value)}
              className="input-field"
            >
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? "guest" : "guests"}
                </option>
              ))}
            </select>
            {errors.guests && <p className="text-xs text-red-500 mt-1">{errors.guests}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="input-label" htmlFor="res-date">Date *</label>
            <input
              id="res-date"
              type="date"
              min={today}
              value={data.date}
              onChange={(e) => update("date", e.target.value)}
              className="input-field"
              aria-invalid={!!errors.date}
            />
            {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
          </div>
          <div>
            <label className="input-label" htmlFor="res-time">Time *</label>
            <select
              id="res-time"
              value={data.time}
              onChange={(e) => update("time", e.target.value)}
              className="input-field"
            >
              <option value="">Select a time</option>
              {timeSlots.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.time && <p className="text-xs text-red-500 mt-1">{errors.time}</p>}
          </div>
        </div>

        <div>
          <label className="input-label" htmlFor="res-occasion">Occasion</label>
          <select
            id="res-occasion"
            value={data.occasion}
            onChange={(e) => update("occasion", e.target.value)}
            className="input-field"
          >
            {occasions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="input-label" htmlFor="res-notes">Additional Notes</label>
          <textarea
            id="res-notes"
            value={data.notes}
            onChange={(e) => update("notes", e.target.value)}
            className="input-field min-h-[80px] resize-y"
            placeholder="Any special requests or dietary needs?"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full sm:w-auto"
        >
          {loading ? "Sending Request..." : "Request Reservation"}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-[var(--line)] flex items-center gap-3 text-sm text-[var(--text-muted)]">
        <PhoneIcon className="w-4 h-4 shrink-0" />
        <span>
          Prefer to call?{" "}
          <a
            href={`tel:${contactInfo.phone}`}
            className="text-[var(--terracotta)] font-medium hover:underline"
          >
            {contactInfo.phone}
          </a>
        </span>
      </div>
    </div>
  );
}
