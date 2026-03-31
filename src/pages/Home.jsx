import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
// import WhyChooseUs from "../components/WhyChooseUs";
import StatsSection from "../components/StatsSection";
import ProjectsSection from "../components/ProjectsSection";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import EnquiryPopup from "../components/EnquiryPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Testimonials />
      <ContactForm />
      <Footer />
      <EnquiryPopup />
    </>
  );
}