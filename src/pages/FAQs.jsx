import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqsList = [
  {
    question: "Which types of buildings do you work with?",
    answer:
      "We work with residential apartments, commercial complexes, office buildings, hospitals, showrooms, and other industrial spaces.",
  },
  {
    question: "How often should a lift be serviced?",
    answer:
      "Lift servicing frequency depends on usage and site conditions, but regular maintenance is strongly recommended for safety and long-term performance.",
  },
  {
    question: "Do you help with lift upgrades and part replacement?",
    answer:
      "Yes, we help with upgrades, replacement of worn-out parts, safety improvements, and performance enhancement solutions.",
  },
  {
    question: "Is site inspection available before installation?",
    answer:
      "Yes, site inspection and requirement analysis can be done before suggesting the right lift solution for your property.",
  },
  {
    question: "How do I contact your team quickly?",
    answer:
      "You can call, email, or fill out the form on our contact page to connect with our team quickly.",
  },
  {
    question: "Do you offer customized lift solutions?",
    answer:
      "Yes, we provide customized solutions based on building type, usage needs, design preferences, and project budget.",
  },
];

export default function FAQs() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Help Center
          </p>
          <h1 className="text-4xl font-extrabold md:text-6xl">FAQs</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Everything you may want to know about our services, process, support,
            and lift solutions.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {faqsList.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-900">
                {item.question}
              </h2>
              <p className="mt-3 leading-8 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}