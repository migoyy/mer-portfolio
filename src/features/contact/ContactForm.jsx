import { useState } from "react";
import { HiPaperAirplane, HiCheckCircle } from "react-icons/hi2";
import Button from "@components/ui/Button";
import emailjs from "@emailjs/browser";
/**
 * Contact form — UI complete; wire it to your API in `handleSubmit`.
 *
 * To connect a real backend:
 *   1. Replace the simulated delay below with `fetch("/api/contact", ...)`.
 *   2. Or use a service like Resend, EmailJS, Formspree, Web3Forms, etc.
 */
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      // Optional: reset message after 4 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 4000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 " +
    "text-ink-50 placeholder:text-ink-400 outline-none " +
    "focus:border-brand-400/60 focus:bg-white/[0.05] " +
    "transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-mono text-ink-300 uppercase tracking-widest">
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className={`${inputClass} mt-1.5`}
          />
        </div>
        <div>
          <label className="text-xs font-mono text-ink-300 uppercase tracking-widest">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your_email@company.com"
            className={`${inputClass} mt-1.5`}
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-mono text-ink-300 uppercase tracking-widest">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project — goals, timeline, budget..."
          className={`${inputClass} mt-1.5 resize-none`}
        />
      </div>

      <div className="flex items-center gap-4 pt-2">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send message"}
          <HiPaperAirplane />
        </Button>

        {status === "success" && (
          <span className="inline-flex items-center gap-2 text-sm text-emerald-300">
            <HiCheckCircle className="text-lg" /> Thanks — I'll be in touch.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-rose-300">
            Something went wrong, please try again.
          </span>
        )}
      </div>
    </form>
  );
}
