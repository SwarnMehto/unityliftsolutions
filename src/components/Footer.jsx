import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-xl font-bold">Unity Lift Solutions</h3>
          <p className="mt-3 leading-7 text-slate-300">
            Premium lift installation, AMC, modernization and maintenance services.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold">Quick Contact</h4>
          <div className="space-y-3 text-slate-300">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +91 8700116436
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> visionxmediasolution@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Delhi NCR, India
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold">Links</h4>
          <div className="flex flex-col gap-2 text-slate-300">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        © 2026 Unity Lift Solutions. All rights reserved.
      </div>
    </footer>
  );
}