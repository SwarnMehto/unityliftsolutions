import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rohit Sharma",
    text: "Excellent service and very professional team. Installation was smooth and quality was impressive.",
  },
  {
    name: "Aman Verma",
    text: "Their support and maintenance response is very good. Highly recommended for lift projects.",
  },
  {
    name: "Deepak Arora",
    text: "They delivered a premium solution exactly according to our building requirement.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl">
            What Clients Say
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Our work is trusted for quality, service and long-term reliability.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="leading-7 text-slate-600">{item.text}</p>
              <h4 className="mt-5 text-lg font-bold text-slate-900">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}