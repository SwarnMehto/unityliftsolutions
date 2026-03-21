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
  FaIndustry,
  FaCog,
  FaPhoneAlt,
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
    badge: "Premium Mobility",
    description:
      "Elegant and reliable passenger lifts designed for apartments, offices, malls and modern commercial buildings.",
    features: [
      "Smooth & silent operation",
      "Modern cabin aesthetics",
      "Energy-efficient performance",
      "Advanced passenger safety",
    ],
  },
  {
    icon: <FaHome />,
    title: "Home Lifts",
    image: homeLift,
    badge: "Luxury Comfort",
    description:
      "Compact and stylish home lift solutions that add convenience, comfort and accessibility to villas and homes.",
    features: [
      "Space-saving design",
      "Premium finish options",
      "Easy accessibility",
      "Low maintenance system",
    ],
  },
  {
    icon: <FaHospital />,
    title: "Hospital Lifts",
    image: hospitalLift,
    badge: "Medical Grade",
    description:
      "Specially engineered hospital lifts built for smooth stretcher movement, safety and dependable healthcare usage.",
    features: [
      "Stretcher-friendly layout",
      "Stable movement control",
      "Hygienic interior support",
      "High safety standards",
    ],
  },
  {
    icon: <FaBoxes />,
    title: "Goods Lifts",
    image: goodsLift,
    badge: "Heavy Duty",
    description:
      "Durable goods lifts for factories, warehouses and industrial properties where strong lifting performance matters most.",
    features: [
      "High load capacity",
      "Rugged industrial build",
      "Reliable performance",
      "Efficient material movement",
    ],
  },
];

const controlPanels = [
  {
    image: project1,
    title: "Lift Control Panel",
    text: "Smart control architecture for reliable lift management and operational safety.",
  },
  {
    image: project2,
    title: "Automatic Control Panel",
    text: "Precision-designed panel system for smooth functionality and efficient control.",
  },
  {
    image: project3,
    title: "Advanced Control System",
    text: "Modern lift panel solution built for long-term performance and responsive operation.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.75,
      ease: "easeOut",
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.75,
      ease: "easeOut",
    },
  }),
};

export default function Products() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-24 pt-36 text-white">
        {/* background grid */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* glows */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-12 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-10 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
        />

        {/* floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-10 top-28 hidden h-20 w-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md md:block"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-16 top-36 hidden h-16 w-16 rounded-full border border-amber-300/20 bg-amber-300/10 backdrop-blur-md md:block"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-24 hidden h-14 w-14 rotate-12 rounded-2xl border border-rose-400/20 bg-rose-400/10 backdrop-blur-md lg:block"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-white/5 px-4 py-2 text-sm font-semibold text-rose-300 backdrop-blur-md">
              <FaCogs />
              Smart Lift Products & Control Panels
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl xl:text-7xl">
              Premium <span className="text-rose-400">Lift Products</span>
              <br />
              Built For Modern Spaces
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Explore Unity Lift Solutions’ premium range of passenger lifts,
              home lifts, hospital lifts, goods lifts and advanced control panel
              systems engineered for safety, elegance and dependable
              performance.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 px-7 py-3 font-semibold text-white shadow-[0_15px_45px_rgba(244,63,94,0.35)] transition duration-300 hover:scale-105"
              >
                Get Free Consultation <FaArrowRight className="text-sm" />
              </a>

              <a
                href="tel:+918700116436"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/10"
              >
                Call Now <FaPhoneAlt className="text-sm" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Premium Quality", "Built for performance"],
                ["Modern Design", "Stylish product range"],
                ["Trusted Support", "Service you can rely on"],
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                >
                  <h3 className="font-bold text-white">{item[0]}</h3>
                  <p className="mt-1 text-sm text-slate-300">{item[1]}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* hero image stack */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] bg-gradient-to-br from-rose-500/20 to-amber-400/20 blur-xl" />

            <div className="relative grid gap-4 md:grid-cols-2">
              <motion.div
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl md:translate-y-10"
              >
                <img
                  src={passengerLift}
                  alt="Passenger Lift"
                  className="h-72 w-full rounded-[22px] object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl"
              >
                <img
                  src={project1}
                  alt="Control Panel"
                  className="h-72 w-full rounded-[22px] object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl"
              >
                <img
                  src={homeLift}
                  alt="Home Lift"
                  className="h-52 w-full rounded-[22px] object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl md:-translate-y-10"
              >
                <img
                  src={project2}
                  alt="Automatic Control Panel"
                  className="h-52 w-full rounded-[22px] object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="relative z-10 -mt-10 px-4">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)] md:grid-cols-4">
          {[
            {
              icon: <FaShieldAlt />,
              title: "Safety Focused",
              text: "Designed with dependable safety standards.",
            },
            {
              icon: <FaCogs />,
              title: "Smart Engineering",
              text: "Modern lift technology with stable performance.",
            },
            {
              icon: <FaIndustry />,
              title: "Multiple Applications",
              text: "Residential, commercial, hospital and industrial.",
            },
            {
              icon: <FaTools />,
              title: "Service Support",
              text: "Installation, maintenance and modernization.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-[24px] bg-slate-50 p-5"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-amber-400 text-xl text-white shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-rose-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-amber-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
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
            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
              Lift Solutions For Every Requirement
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Our product range is created for beautiful design, reliable
              movement and long-term performance across different types of
              buildings and operations.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg backdrop-blur-md">
                      {product.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-amber-400 text-2xl text-white shadow-xl">
                      {product.icon}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                    {product.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {product.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3"
                      >
                        <div className="mt-1 text-rose-500">
                          <FaCheckCircle />
                        </div>
                        <p className="text-sm text-slate-700">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-rose-500"
                  >
                    Enquire Now <FaArrowRight className="text-sm" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROL PANEL SHOWCASE */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-72 w-72 rounded-full bg-rose-500/15 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <span className="inline-block rounded-full border border-amber-300/20 bg-white/5 px-4 py-2 text-sm font-semibold text-amber-300 backdrop-blur-md">
              Lift Control Panel Solutions
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              Smart <span className="text-rose-400">Control Panels</span>
              <br />
              For Smooth Lift Operation
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Unity Lift Solutions also provides advanced control panel systems
              engineered for precision control, stable operation and reliable
              performance across residential, hospital, commercial and
              industrial lift applications.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: <FaBolt />,
                  title: "Efficient Electrical Performance",
                  text: "Stable design for reliable lift movement and reduced operational issues.",
                },
                {
                  icon: <FaSlidersH />,
                  title: "Precision Control System",
                  text: "Responsive functionality with accurate system handling and control.",
                },
                {
                  icon: <FaMicrochip />,
                  title: "Modern Components",
                  text: "Built with quality components for durability and long-term performance.",
                },
                {
                  icon: <FaCog />,
                  title: "Application Flexibility",
                  text: "Suitable for multiple building and lift usage requirements.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-amber-400 text-white shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 leading-7 text-slate-300">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[36px] bg-gradient-to-br from-rose-500/20 to-amber-400/20 blur-xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <img
                src={project1}
                alt="Lift Control Panel"
                className="h-[520px] w-full rounded-[28px] object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-[24px] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white">
                  Advanced Lift Panel System
                </h3>
                <p className="mt-2 leading-7 text-slate-300">
                  Built for smart control, smooth lift response and dependable
                  long-term operation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PANEL GALLERY */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">
              Panel Gallery
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
              Premium Control Panel Collection
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Explore our control panel range designed with strong engineering,
              practical performance and refined finishing.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {controlPanels.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-200">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-4 md:px-6">
          {[
            ["4+", "Product Categories"],
            ["3+", "Control Panel Solutions"],
            ["100%", "Safety Focused Approach"],
            ["24/7", "Support Mindset"],
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm"
            >
              <h3 className="text-4xl font-extrabold text-rose-500">
                {item[0]}
              </h3>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                {item[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(244,63,94,0.15),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.12),_transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold md:text-5xl"
          >
            Quality Products. Elegant Design.
            <br />
            Reliable Performance.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-4xl leading-8 text-slate-300"
          >
            From passenger lifts to advanced lift control panel systems, Unity
            Lift Solutions delivers smart product solutions tailored for modern
            projects with strong focus on safety, style and long-term
            reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 px-8 py-4 font-semibold text-white shadow-[0_15px_45px_rgba(244,63,94,0.35)] transition duration-300 hover:scale-105"
            >
              Request a Quote <FaArrowRight className="text-sm" />
            </a>

            <a
              href="tel:+918700116436"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/10"
            >
              Talk To Our Team <FaPhoneAlt className="text-sm" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}