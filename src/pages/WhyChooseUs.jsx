import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaShieldAlt, FaTools, FaUsers, FaCogs, FaHeadset, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Reliable Safety Standards",
    desc: "We focus on safety-first solutions with quality service practices for dependable lift performance.",
  },
  {
    icon: <FaTools />,
    title: "Expert Maintenance Support",
    desc: "Our maintenance and AMC support helps reduce breakdowns and ensures long-term performance.",
  },
  {
    icon: <FaUsers />,
    title: "Customer-Focused Approach",
    desc: "We understand every client requirement carefully and suggest practical and efficient lift solutions.",
  },
  {
    icon: <FaCogs />,
    title: "Modernization Expertise",
    desc: "We help upgrade older lift systems with improved performance, design, and operational reliability.",
  },
  {
    icon: <FaHeadset />,
    title: "Responsive Assistance",
    desc: "Our team stays available for support, service discussions, and quick communication when needed.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality You Can Trust",
    desc: "We aim to deliver professional lift solutions with attention to quality, detail, and client satisfaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-950 px-4 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Our Strength
          </p>
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Why Choose Us
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            We combine service quality, technical understanding, and dependable
            support to deliver lift solutions that businesses and property owners
            can trust.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl text-cyan-700">
                {item.icon}
              </div>
              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 leading-8 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Built for Performance. Backed by Service.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
            Whether you need lift installation, annual maintenance, repair
            support, or modernization, Unity Lift Solutions is committed to
            providing practical, professional, and dependable service for every
            project.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}