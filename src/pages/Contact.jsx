import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaClock,
  FaHeadset,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    value: "+91 8700116436",
    subtext: "Talk to our team for lift installation and service support.",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    value: "visionxmediasolution@gmail.com",
    subtext: "Send your project details and we will get back to you soon.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Delhi NCR, India",
    subtext: "Serving residential, commercial and industrial projects.",
  },
];

const supportPoints = [
  {
    icon: <FaTools />,
    title: "Installation Support",
    text: "Get expert guidance for new lift installation and project planning.",
  },
  {
    icon: <FaHeadset />,
    title: "Service Assistance",
    text: "Reach out for AMC, breakdown support and lift maintenance solutions.",
  },
  {
    icon: <FaClock />,
    title: "Quick Response",
    text: "We aim to respond quickly and provide the right solution for your requirement.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-36 text-center text-white">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 24, 0], x: [0, -24, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-10 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
          />
        </div>

        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-10 top-28 hidden h-16 w-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md md:block"
        />
        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-16 top-40 hidden h-20 w-20 rounded-full border border-amber-300/20 bg-amber-300/10 backdrop-blur-md md:block"
        />
        <motion.div
          animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-20 hidden h-14 w-14 rotate-12 rounded-xl border border-rose-400/20 bg-rose-400/10 backdrop-blur-md lg:block"
        />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto max-w-4xl"
          >
            <span className="inline-block rounded-full border border-rose-400/20 bg-white/5 px-4 py-2 text-sm font-medium text-rose-300 backdrop-blur-md">
              Let’s Discuss Your Lift Project
            </span>

            <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
              Contact <span className="text-rose-400">Us</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Get in touch with Unity Lift Solutions for lift installation,
              AMC, modernization, breakdown support and control panel project
              discussions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            {[
              {
                icon: <FaPhoneAlt />,
                title: "Direct Support",
                text: "Connect with our team for service, technical help and project consultation.",
              },
              {
                icon: <FaTools />,
                title: "Project Assistance",
                text: "Get guidance for lift installation, modernization and panel solutions.",
              },
              {
                icon: <FaClock />,
                title: "Quick Response",
                text: "We aim to provide timely communication and dependable support.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-amber-400 text-xl text-white shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-rose-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-amber-100 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">
              Contact Details
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              We’re Ready To Help
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Reach out to us for lift projects, service inquiries and technical
              support. Our team is here to help you with the right solution.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-2xl"
              >
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-2xl text-white shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 break-words text-lg font-semibold text-rose-500">
                  {item.value}
                </p>
                <p className="mt-3 leading-7 text-slate-600">{item.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support + Form Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Why Contact Us
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Let’s Build A <span className="text-rose-500">Reliable Solution</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you need a new lift installation, routine maintenance,
              modernization or support for lift control panels, Unity Lift
              Solutions is ready to assist with practical and dependable
              solutions.
            </p>

            <div className="mt-8 space-y-4">
              {supportPoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-amber-400 text-white shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900">
                What You Can Contact Us For
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Passenger, home, hospital and goods lift inquiries",
                  "Lift installation and commissioning support",
                  "AMC and preventive maintenance requirements",
                  "Lift modernization and upgrade discussions",
                  "Lift control panel project requirements",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 text-rose-500">
                      <FaCheckCircle />
                    </div>
                    <p className="leading-7 text-slate-600">{point}</p>
                  </div>
                ))}
              </div>

              <a
                href="tel:+918700116436"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-rose-500"
              >
                Call Now <FaArrowRight className="text-sm" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-2xl md:p-8"
          >
            <div className="mb-8">
              <span className="inline-block rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">
                Send Us A Message
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Request a Free Consultation
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Share your requirement with us and our team will get in touch
                with the right lift or service solution.
              </p>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(244,63,94,0.15),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.12),_transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Let’s Start Your Next Lift Project
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-4xl leading-8 text-slate-300"
          >
            Connect with Unity Lift Solutions today for installation,
            maintenance, modernization and lift control panel requirements. We
            are ready to support your project with quality and reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="tel:+918700116436"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Call Now <FaPhoneAlt className="text-sm" />
            </a>

            <a
              href="mailto:visionxmediasolution@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/10"
            >
              Email Us <FaEnvelope className="text-sm" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}