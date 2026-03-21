import {
  FaShieldAlt,
  FaTools,
  FaClock,
  FaHeadset,
  FaCogs,
  FaBuilding,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt />,
    title: "Safety Standards",
    text: "Every lift solution is planned with safety and durability in mind.",
  },
  {
    icon: <FaTools />,
    title: "Expert Installation",
    text: "Professional technicians ensure clean and accurate installation.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    text: "We complete projects quickly without compromising quality.",
  },
  {
    icon: <FaHeadset />,
    title: "After Sales Support",
    text: "Fast AMC and maintenance service whenever you need help.",
  },
  {
    icon: <FaCogs />,
    title: "Modern Technology",
    text: "Advanced components for smooth and reliable lift performance.",
  },
  {
    icon: <FaBuilding />,
    title: "All Building Types",
    text: "Solutions for homes, hospitals, offices and industrial spaces.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl">
            Why Choose Unity Lift Solutions
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            We combine engineering quality, smart design and dependable support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/15 text-2xl text-amber-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}