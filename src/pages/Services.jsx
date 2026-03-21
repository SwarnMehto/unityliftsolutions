import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="bg-slate-950 px-4 pb-16 pt-36 text-center text-white">
        <h1 className="text-4xl font-extrabold md:text-6xl">Our Services</h1>
        <p className="mx-auto mt-4 max-w-3xl text-slate-300">
          Installation, AMC, modernization, breakdown support and technical maintenance.
        </p>
      </section>
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </>
  );
}