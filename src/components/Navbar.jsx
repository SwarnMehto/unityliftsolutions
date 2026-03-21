import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 hover:text-rose-500 ${
      isActive ? "text-rose-500" : "text-slate-800"
    }`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/logo.png"
              alt="Unity Lift Solutions Logo"
              className="h-16 w-auto object-contain md:h-20"
            />
            <p className="mt-1 text-[11px] font-semibold tracking-wide text-slate-500 md:text-xs">
              Safe • Smart • Reliable
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/why-choose-us" className={navLinkClass}>
            Why Choose Us
          </NavLink>
          <NavLink to="/faqs" className={navLinkClass}>
            FAQs
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:+918700116436"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 px-5 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-slate-800 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink to="/products" className={navLinkClass} onClick={() => setOpen(false)}>
              Products
            </NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={() => setOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/why-choose-us" className={navLinkClass} onClick={() => setOpen(false)}>
              Why Choose Us
            </NavLink>
            <NavLink to="/faqs" className={navLinkClass} onClick={() => setOpen(false)}>
              FAQs
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>
              Contact
            </NavLink>

            <a
              href="tel:+918700116436"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 px-5 py-3 font-semibold text-white shadow-md"
              onClick={() => setOpen(false)}
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}