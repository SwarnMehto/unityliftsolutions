import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHome,
  FaHospital,
  FaBoxes,
  FaArrowRight,
  FaCheckCircle,
  FaCogs,
  FaShieldAlt,
  FaTools,
  FaBolt,
  FaSlidersH,
  FaMicrochip,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import passengerLift from "../assets/images/passenger-lift.png";
import homeLift from "../assets/images/home-lift.png";
import hospitalLift from "../assets/images/hospital-lift.png";
import goodsLift from "../assets/images/goods-lift.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

const products = [
  {
    icon: <FaBuilding />,
    title: "Passenger Lifts",
    image: passengerLift,
    description:
      "Smooth, safe and stylish passenger lifts designed for residential apartments, offices, malls and commercial spaces.",
    features: [
      "Smooth & quiet operation",
      "Modern cabin design",
      "Energy-efficient system",
      "Advanced safety features",
    ],
  },
  {
    icon: <FaHome />,
    title: "Home Lifts",
    image: homeLift,
    description:
      "Compact and elegant home lift solutions that enhance comfort, accessibility and convenience for modern houses and villas.",
    features: [
      "Space-saving design",
      "Easy accessibility",
      "Elegant finish options",
      "Low maintenance",
    ],
  },
  {
    icon: <FaHospital />,
    title: "Hospital Lifts",
    image: hospitalLift,
    description:
      "Reliable hospital lifts engineered for patient safety, stretcher movement and smooth transportation in healthcare facilities.",
    features: [
      "Stretcher-friendly size",
      "Smooth movement",
      "Hygienic finishes",
      "High safety standards",
    ],
  },
  {
    icon: <FaBoxes />,
    title: "Goods Lifts",
    image: goodsLift,
    description:
      "Heavy-duty goods lifts built for factories, warehouses, commercial units and industrial properties for efficient material handling.",
    features: [
      "High load capacity",
      "Durable structure",
      "Reliable performance",
      "Industrial-grade build",
    ],
  },
];

const controlPanels = [
  {
    image: project1,
    title: "Lift Control Panel",
  },
  {
    image: project2,
    title: "Automatic Control Panel",
  },
  {
    image: project3,
    title: "Smart Control System",
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

export default function Products() {
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
              Premium Lift Product Range
            </span>

            <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
              Our <span className="text-rose-400">Products</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Explore our premium range of passenger lifts, home lifts, hospital
              lifts, goods lifts and advanced lift control panel solutions
              designed for safety, performance and long-term reliability.
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
                title: "Safe & Reliable",
                text: "Every product is built for dependable performance and user safety.",
              },
              {
                icon: <FaCogs />,
                title: "Modern Engineering",
                text: "Designed with quality components and smart lift technology.",
              },
              {
                icon: <FaTools />,
                title: "Service Support",
                text: "Installation, maintenance and modernization support under one roof.",
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

      {/* Product Cards */}
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
              Product Categories
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Lift Solutions For Every Requirement
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              We offer complete lift solutions for residential, commercial,
              hospital and industrial requirements.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-2xl text-white shadow-lg transition duration-300 group-hover:from-rose-500 group-hover:to-amber-400">
                    {product.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {product.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {product.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 text-rose-500">
                          <FaCheckCircle />
                        </div>
                        <p className="text-slate-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Control Panel Section */}
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
                Control Panel Solutions
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                Advanced Lift <span className="text-rose-500">Control Panels</span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Unity Lift Solutions also specializes in high-quality lift
                control panels engineered for smooth operation, precision
                control, safety and long-term durability. Our control panel
                systems are designed to deliver stable performance for
                residential, commercial, hospital and industrial lift
                applications.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: <FaBolt />,
                    title: "Efficient Performance",
                    text: "Smart electrical design for reliable and efficient lift movement.",
                  },
                  {
                    icon: <FaSlidersH />,
                    title: "Precision Control",
                    text: "Responsive and accurate system control for smooth operations.",
                  },
                  {
                    icon: <FaMicrochip />,
                    title: "Modern Components",
                    text: "Built using quality components for long-lasting performance.",
                  },
                ].map((item, i) => (
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
              <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-2xl">
                <img
                  src={project1}
                  alt="Lift Control Panel"
                  className="h-[420px] w-full rounded-[24px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Control Panel Gallery */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">
              Panel Gallery
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Our Lift Control Panel Collection
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Explore our range of lift control panel systems built with strong
              engineering, quality finishing and reliable performance.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {controlPanels.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            Quality Products. Reliable Performance.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-4xl leading-8 text-slate-300"
          >
            From passenger lifts to advanced control panel systems, Unity Lift
            Solutions delivers dependable products tailored to your project
            requirements with safety, quality and long-term performance in
            focus.
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
              Get a Free Consultation <FaArrowRight className="text-sm" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}