import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCogs,
  FaTools,
  FaBuilding,
  FaHospital,
  FaIndustry,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-36 text-white">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 25, 0], x: [0, -25, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-10 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
          />
        </div>

        {/* Floating shapes */}
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
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-block rounded-full border border-rose-400/20 bg-white/5 px-4 py-2 text-sm font-medium text-rose-300 backdrop-blur-md">
              Trusted Lift & Control Panel Experts
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              About <span className="text-rose-400">Unity Lift Solutions</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Unity Lift Solutions is dedicated to delivering safe, smart and
              dependable vertical mobility systems. We specialize in lift
              installation, maintenance, modernization, and high-quality lift
              control panels designed for smooth performance, efficiency and
              long-term reliability.
            </p>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            {[
              {
                icon: <FaShieldAlt />,
                title: "Safety First",
                text: "Built with strong safety standards and dependable performance.",
              },
              {
                icon: <FaCogs />,
                title: "Advanced Control Panels",
                text: "Precision-engineered lift panels for smooth and efficient operation.",
              },
              {
                icon: <FaTools />,
                title: "Complete Service Support",
                text: "From installation to AMC and modernization, we handle it all.",
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

      {/* Who We Are */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-rose-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-amber-100 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <span className="inline-block rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">
              Who We Are
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Engineering Reliable Lift Systems With Quality, Safety and Trust
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              At Unity Lift Solutions, we are passionate about creating lift
              systems that combine performance, safety and durability. Our
              company serves residential buildings, hospitals, commercial
              spaces, institutions and industrial sites with customized lift
              solutions and durable control panel systems.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We believe every project deserves expert planning, quality
              components and responsive service support. That is why we focus on
              delivering efficient installation, dependable maintenance, lift
              modernization and advanced control panel solutions that keep your
              systems running smoothly.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[30px] bg-gradient-to-br from-rose-500 to-amber-400 opacity-10 blur-sm" />
            <div className="relative rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900">
                Why Clients Choose Us
              </h3>

              <div className="mt-6 space-y-5">
                {[
                  "Specialized in lift control panels and complete lift solutions",
                  "Professional installation, repair, AMC and modernization services",
                  "Focus on safety, smooth operation and long-lasting performance",
                  "Customized solutions for residential, commercial and industrial projects",
                  "Timely support with a commitment to quality workmanship",
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Industries We Serve
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Solutions Designed For Every Space
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              We provide lift and control panel solutions for a wide range of
              environments with a focus on smooth functionality, safety and user
              comfort.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaBuilding />,
                title: "Residential Buildings",
                text: "Reliable lift systems for apartments, homes and residential complexes.",
              },
              {
                icon: <FaHospital />,
                title: "Hospitals",
                text: "Safe and efficient vertical mobility solutions for healthcare environments.",
              },
              {
                icon: <FaBuilding />,
                title: "Commercial Spaces",
                text: "High-performance lifts for offices, malls, showrooms and business centers.",
              },
              {
                icon: <FaIndustry />,
                title: "Industrial Properties",
                text: "Durable and practical lift systems built for demanding industrial use.",
              },
              {
                icon: <FaCogs />,
                title: "Control Panels",
                text: "Quality lift control panels engineered for accuracy, safety and smooth control.",
              },
              {
                icon: <FaTools />,
                title: "Maintenance & AMC",
                text: "Preventive and responsive service support to ensure uninterrupted operation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-xl text-white shadow-lg transition duration-300 group-hover:from-rose-500 group-hover:to-amber-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-4xl leading-8 text-slate-300"
          >
            Our mission is to deliver lift and control panel solutions that are
            safe, efficient and future-ready. We aim to build long-term trust
            through quality products, expert service and a customer-first
            approach that adds value to every project.
          </motion.p>
        </div>
      </section>

      <Footer />
    </>
  );
}