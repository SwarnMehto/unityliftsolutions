const stats = [
  { number: "150+", label: "Successful Installations" },
  { number: "24/7", label: "Service Support" },
  { number: "10+", label: "Cities Covered" },
  { number: "100%", label: "Client Commitment" },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-slate-950 to-slate-800 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6 xl:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white/5 p-8 text-center backdrop-blur"
          >
            <h3 className="text-4xl font-extrabold text-amber-400">
              {item.number}
            </h3>
            <p className="mt-2 text-slate-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}