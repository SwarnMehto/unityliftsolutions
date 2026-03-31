import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block rounded px-6 py-3 text-sm font-semibold transition duration-300 ${
      isActive
        ? "bg-[#142c8e] text-white"
        : "text-slate-700 hover:bg-[#142c8e] hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `transition duration-300 hover:text-[#142c8e] ${
      isActive ? "text-[#142c8e]" : "text-slate-800"
    }`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-4 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Unity Lift Solutions"
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-3 xl:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Our Products
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Product Categories
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href="tel:+918700116436"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 px-5 py-3 text-sm font-semibold text-white shadow-md"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-slate-800 xl:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 xl:hidden">
          <nav className="flex flex-col gap-4">
            <NavLink to="/" end className={mobileLinkClass} onClick={() => setOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/products" className={mobileLinkClass} onClick={() => setOpen(false)}>
              Our Products
            </NavLink>

            <NavLink to="/services" className={mobileLinkClass} onClick={() => setOpen(false)}>
              Product Categories
            </NavLink>

            <NavLink to="/about" className={mobileLinkClass} onClick={() => setOpen(false)}>
              About Us
            </NavLink>

            <NavLink to="/contact" className={mobileLinkClass} onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>

            <a
              href="tel:+918700116436"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 px-5 py-3 font-semibold text-white shadow-md"
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