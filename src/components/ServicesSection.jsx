import ProductCard from "./ProductCard";
import passengerLift from "../assets/images/passenger-lift.png";
import homeLift from "../assets/images/home-lift.png";
import hospitalLift from "../assets/images/hospital-lift.png";
import goodsLift from "../assets/images/goods-lift.png";

const products = [
  {
    image: passengerLift,
    title: "Passenger Lift",
    description:
      "Smooth and reliable passenger lifts for apartments, offices and commercial buildings.",
  },
  {
    image: homeLift,
    title: "Home Lift",
    description:
      "Elegant and compact lift solutions designed specially for residential use.",
  },
  {
    image: hospitalLift,
    title: "Hospital Lift",
    description:
      "Efficient stretcher and bed lifts for hospitals and healthcare spaces.",
  },
  {
    image: goodsLift,
    title: "Goods Lift",
    description:
      "Heavy-duty goods lift systems for industrial and warehouse requirements.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl">
            Our Lift Products
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Premium lift solutions for residential, commercial, medical and industrial buildings.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}