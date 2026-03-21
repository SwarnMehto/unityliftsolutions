import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          setMessage("Message sent successfully.");
          form.current.reset();
        },
        () => {
          setLoading(false);
          setMessage("Failed to send message.");
        }
      );
  };

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
            Contact Us
          </p>
          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
            Let’s Discuss Your Lift Requirement
          </h2>
          <p className="mt-5 max-w-xl leading-8 text-slate-300">
            Share your project details and our team will contact you with the best lift solution.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
            required
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Write your requirement..."
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:scale-[1.01]"
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>

          {message && <p className="text-sm text-slate-300">{message}</p>}
        </form>
      </div>
    </section>
  );
}