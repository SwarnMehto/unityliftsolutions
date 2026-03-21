import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-slate-950 px-4 pb-16 pt-36 text-center text-white">
        <h1 className="text-4xl font-extrabold md:text-6xl">About Us</h1>
        <p className="mx-auto mt-4 max-w-3xl text-slate-300">
          Unity Lift Solutions provides complete lift installation, maintenance and modernization services.
        </p>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
          <p className="mt-5 leading-8 text-slate-600">
            We are committed to delivering safe, reliable and premium lift solutions
            for residential, hospital, commercial and industrial properties.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}