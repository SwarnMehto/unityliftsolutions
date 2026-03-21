import { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello Unity Lift Solutions,%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ARequirement: ${formData.message}`;

    window.open(`https://wa.me/918700116436?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:p-8">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-500">
            Contact Us
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Request a Free Consultation
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Share your requirement and our team will get in touch with the right
            lift or service solution.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Your Name
            </label>
            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-rose-400 focus-within:bg-white focus-within:shadow-sm">
              <FaUser className="mr-3 text-slate-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full bg-transparent py-3.5 text-slate-800 outline-none placeholder:text-slate-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Phone Number
            </label>
            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-rose-400 focus-within:bg-white focus-within:shadow-sm">
              <FaPhoneAlt className="mr-3 text-slate-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full bg-transparent py-3.5 text-slate-800 outline-none placeholder:text-slate-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>
            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-rose-400 focus-within:bg-white focus-within:shadow-sm">
              <FaEnvelope className="mr-3 text-slate-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full bg-transparent py-3.5 text-slate-800 outline-none placeholder:text-slate-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Your Requirement
            </label>
            <div className="flex rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-rose-400 focus-within:bg-white focus-within:shadow-sm">
              <FaCommentDots className="mr-3 mt-4 text-slate-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your requirement here..."
                className="w-full resize-none bg-transparent py-3.5 text-slate-800 outline-none placeholder:text-slate-400"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl md:w-auto"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}