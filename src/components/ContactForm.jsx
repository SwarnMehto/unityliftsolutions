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
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Your Name
          </label>
          <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 focus-within:border-rose-400 focus-within:bg-white focus-within:shadow-sm">
            <FaUser className="mr-3 text-slate-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full bg-transparent py-4 text-slate-800 outline-none placeholder:text-slate-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Phone Number
          </label>
          <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 focus-within:border-rose-400 focus-within:bg-white focus-within:shadow-sm">
            <FaPhoneAlt className="mr-3 text-slate-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full bg-transparent py-4 text-slate-800 outline-none placeholder:text-slate-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Email Address
          </label>
          <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 focus-within:border-rose-400 focus-within:bg-white focus-within:shadow-sm">
            <FaEnvelope className="mr-3 text-slate-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full bg-transparent py-4 text-slate-800 outline-none placeholder:text-slate-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Your Requirement
          </label>
          <div className="flex rounded-2xl border border-slate-200 bg-slate-50 px-4 focus-within:border-rose-400 focus-within:bg-white focus-within:shadow-sm">
            <FaCommentDots className="mr-3 mt-5 text-slate-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your requirement here..."
              className="w-full resize-none bg-transparent py-4 text-slate-800 outline-none placeholder:text-slate-400"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-rose-500 to-amber-400 px-6 py-4 text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  );
}