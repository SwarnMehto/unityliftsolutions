import { motion } from "framer-motion";
import {
  FaTools,
  FaCogs,
  FaShieldAlt,
  FaWrench,
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaBolt,
  FaSyncAlt,
  FaClipboardCheck,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const services = [
  {
    icon: <FaTools />,
    title: "Lift Installation",
    description:
      "Professional lift installation services for residential, commercial, hospital and industrial properties with proper setup and quality execution.",
    points: [
      "Complete project planning",
      "Professional installation process",
      "Safe and accurate fitting",
      "Reliable performance testing",
    ],
  },
  {
    icon: <FaCogs />,
    title: "AMC Services",
    description:
      "Our Annual Maintenance Contract services help keep your lift systems running smoothly with regular inspections and preventive maintenance.",
    points: [
      "Scheduled maintenance visits",
      "Preventive servicing",
      "Reduced breakdown risk",
      "Longer equipment life",
    ],
  },
  {
    icon: <FaSyncAlt />,
    title: "Lift Modernization",
    description:
      "Upgrade old lift systems with modern components, improved control systems and enhanced safety features for better performance.",
    points: [
      "Old system upgrades",
      "Improved efficiency",
      "Enhanced safety standards",
      "Better user experience",
    ],
  },
  {
    icon: <FaWrench />,
    title: "Breakdown Support",
    description:
      "Quick technical support and troubleshooting services to reduce downtime and restore lift operations as soon as possible.",
    points: [
      "Fast issue diagnosis",
      "Responsive support",
      "Repair assistance",
      "Reliable service response",
    ],
  },
];

const whyPoints = [
  {
    icon: <FaShieldAlt />,
    title: "Safety Focused",
    text: "We follow a safety-first approach in every installation, repair and maintenance service.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Response",
    text: "Our team works to provide timely support and dependable service assistance.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Quality Workmanship",
    text: "We use proper planning, quality execution and attention to detail in every project.",
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

export default function Services() {
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
              Professional Lift Service Solutions
            </span>

            <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
              Our <span className="text-rose-400">Services</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Installation, AMC, modernization, breakdown support and technical
              maintenance services designed to keep your lift systems safe,
              efficient and reliable.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            {[
              {
                icon: <FaShieldAlt />,
                title: "Trusted Safety",
                text: "Every service is delivered with strong focus on operational safety and quality.",
              },
              {
                icon: <FaCogs />,
                title: "Technical Expertise",
                text: "Smart service solutions for installation, maintenance and modernization.",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Support You Can Count On",
                text: "Reliable service assistance for regular maintenance and urgent issues.",
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

      {/* Services Grid */}
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
              What We Offer
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Complete Lift Service Support
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              From new lift installation to modernization and preventive
              maintenance, we provide dependable service support for different
              project needs.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-2xl text-white shadow-lg transition duration-300 group-hover:from-rose-500 group-hover:to-amber-400">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 space-y-3">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 text-rose-500">
                        <FaCheckCircle />
                      </div>
                      <p className="text-slate-600">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="relative overflow-hidden bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                Why Choose Us
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                Reliable Service With <span className="text-rose-500">Expert Support</span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Unity Lift Solutions is committed to delivering dependable lift
                services with a focus on safety, performance and long-term
                customer satisfaction. We work with care, technical knowledge
                and practical solutions tailored to each project.
              </p>

              <div className="mt-8 space-y-4">
                {whyPoints.map((item, i) => (
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[30px] bg-gradient-to-br from-rose-500 to-amber-400 opacity-10 blur-sm" />
              <div className="relative rounded-[30px] border border-slate-200 bg-white p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900">
                  Service Highlights
                </h3>

                <div className="mt-6 space-y-5">
                  {[
                    "Installation and setup for different lift types",
                    "Annual maintenance contracts for smooth operation",
                    "Modernization support for old lift systems",
                    "Breakdown and repair assistance",
                    "Focused approach on safety and quality service",
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.12 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 text-rose-500">
                        <FaCheckCircle />
                      </div>
                      <p className="leading-7 text-slate-600">{point}</p>
                    </motion.div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-rose-500"
                >
                  Contact Us <FaArrowRight className="text-sm" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center"
          >
            <span className="inline-block rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">
              Get In Touch
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Request Service Support
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
              Need installation, AMC, modernization or urgent technical support?
              Reach out to Unity Lift Solutions and our team will assist you
              with the right service solution.
            </p>
          </motion.div>

          <ContactForm />
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
            Professional Service. Long-Term Reliability.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-4xl leading-8 text-slate-300"
          >
            Whether it is installation, maintenance, modernization or urgent
            support, Unity Lift Solutions is ready to deliver dependable lift
            services with quality, safety and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Book a Service <FaArrowRight className="text-sm" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}