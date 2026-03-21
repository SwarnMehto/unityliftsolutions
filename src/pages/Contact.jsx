import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="bg-slate-950 px-4 pb-16 pt-36 text-center text-white">
        <h1 className="text-4xl font-extrabold md:text-6xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-3xl text-slate-300">
          Get in touch for lift installation, service or project discussion.
        </p>
      </section>
      <ContactForm />
      <Footer />
    </>
  );
}