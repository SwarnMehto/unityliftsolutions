import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <img
            src="/logo.png"
            alt="Unity Lift Solutions"
            className="h-16 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm leading-7 text-slate-300">
            Unity Lift Solutions provides premium lift installation,
            modernization, repair and maintenance services for residential,
            commercial and industrial spaces.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <div className="flex flex-col gap-3 text-slate-300">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <Link to="/about" className="transition hover:text-white">
              About
            </Link>
            <Link to="/products" className="transition hover:text-white">
              Products
            </Link>
            <Link to="/services" className="transition hover:text-white">
              Services
            </Link>
            <Link to="/contact" className="transition hover:text-white">
              Contact
            </Link>
            <Link to="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="transition hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">Contact Info</h3>
          <div className="space-y-4 text-slate-300">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-400" />
              +91 8700116436
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-orange-400" />
              visionxmediasolution@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-400" />
              Delhi NCR, India
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-400 md:flex-row md:px-6">
          <p>© 2026 Unity Lift Solutions. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="transition hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}