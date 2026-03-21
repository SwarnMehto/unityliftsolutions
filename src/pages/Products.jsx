import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

export default function Products() {
  return (
    <>
      <Navbar />
      <section className="bg-slate-950 px-4 pb-16 pt-36 text-center text-white">
        <h1 className="text-4xl font-extrabold md:text-6xl">Our Products</h1>
        <p className="mx-auto mt-4 max-w-3xl text-slate-300">
          Explore our premium range of passenger, home, hospital and goods lifts.
        </p>
      </section>
      <ServicesSection />
      <Footer />
    </>
  );
}