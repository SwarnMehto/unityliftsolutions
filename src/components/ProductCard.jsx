export default function ProductCard({ image, title, description }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <img src={image} alt={title} className="h-60 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
        <a
          href="/contact"
          className="mt-4 inline-block font-semibold text-amber-500"
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
}