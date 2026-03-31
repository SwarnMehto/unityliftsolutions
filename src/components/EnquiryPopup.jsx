import { useEffect, useRef, useState } from "react";
import {
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";

export default function EnquiryPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const timerRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const popupClosed = sessionStorage.getItem("enquiryPopupClosed");

    if (popupClosed === "true") return;

    const handleScroll = () => {
      if (hasTriggeredRef.current) return;

      hasTriggeredRef.current = true;

      timerRef.current = setTimeout(() => {
        const alreadyClosed = sessionStorage.getItem("enquiryPopupClosed");
        if (alreadyClosed !== "true") {
          setShowPopup(true);
        }
      }, 5000);

      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry Form Data:", formData);
    alert("Thank you! Your enquiry has been submitted.");

    sessionStorage.setItem("enquiryPopupClosed", "true");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    setShowPopup(false);
  };

  const handleClose = () => {
    sessionStorage.setItem("enquiryPopupClosed", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-red-500 hover:text-white"
        >
          <FaTimes />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-[#091a44] via-[#142c8e] to-[#1c4ed8] p-8 text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Enquiry Now
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Let’s Discuss Your Lift Project
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/85 md:text-base">
              Get in touch with Unity Lift Solutions for installation,
              maintenance, modernization and support services.
            </p>

            <div className="mt-8 space-y-4 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  <FaPhoneAlt />
                </span>
                <a href="tel:+918700116436" className="hover:underline">
                  +91 8700116436
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  <FaEnvelope />
                </span>
                <a
                  href="mailto:visionxmediasolution@gmail.com"
                  className="break-all hover:underline"
                >
                  visionxmediasolution@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              Send Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 outline-none transition focus:border-[#142c8e]"
                />
              </div>

              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 outline-none transition focus:border-[#142c8e]"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 outline-none transition focus:border-[#142c8e]"
                />
              </div>

              <div className="relative">
                <FaCommentDots className="absolute left-4 top-4 text-slate-400" />
                <textarea
                  name="message"
                  placeholder="Your Requirement"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full rounded-xl border border-slate-200 pl-11 pr-4 pt-3 outline-none transition focus:border-[#142c8e]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#142c8e] to-[#1d4ed8] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}