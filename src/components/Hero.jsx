import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fff9f5] pb-16 pt-28 text-slate-900 sm:pb-20 sm:pt-32 md:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-50" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-50px] top-[90px] h-[180px] w-[180px] rounded-full bg-rose-200/30 blur-3xl sm:h-[240px] sm:w-[240px]"
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[10%] h-[190px] w-[190px] rounded-full bg-orange-200/30 blur-3xl sm:h-[260px] sm:w-[260px]"
        />
        <motion.div
          animate={{ x: [0, 16, 0], y: [0, 16, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[8%] right-[12%] h-[180px] w-[180px] rounded-full bg-sky-200/30 blur-3xl sm:h-[240px] sm:w-[240px]"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[130px] overflow-hidden sm:h-[160px]">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-[8%] top-[34px] h-10 w-10 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 shadow-[0_10px_24px_rgba(244,63,94,0.22)] sm:h-12 sm:w-12"
        />
        <motion.div
          initial={{ opacity: 0, y: -130 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.9, ease: "easeOut" }}
          className="absolute left-[20%] top-[18px] h-10 w-16 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 shadow-[0_10px_24px_rgba(99,102,241,0.18)] sm:h-12 sm:w-24"
        />
        <motion.div
          initial={{ opacity: 0, y: -160 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 1, ease: "easeOut" }}
          className="absolute right-[12%] top-[28px] h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 shadow-[0_10px_24px_rgba(251,146,60,0.22)] sm:h-12 sm:w-12"
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-[220px] z-[1] hidden w-[110px] sm:block">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-4 top-0 h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 shadow-lg"
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-14 top-12 h-10 w-10 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 shadow-lg"
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-2 top-24 h-3 w-20 rounded-full bg-gradient-to-r from-orange-300 to-amber-200 shadow-md"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div
              custom={0.05}
              variants={fadeUp}
              className="mb-5 flex flex-wrap gap-3"
            >
              <span className="rounded-full border border-rose-200 bg-white/85 px-4 py-2 text-sm font-semibold text-rose-600 shadow-sm backdrop-blur">
                Premium Lift Care
              </span>
              <span className="rounded-full border border-orange-200 bg-white/85 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm backdrop-blur">
                Smart Vertical Mobility
              </span>
            </motion.div>

            <motion.h1
              custom={0.12}
              variants={fadeUp}
              className="text-[2.4rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-[3.2rem] md:text-6xl"
            >
              Elevate Every
              <span className="bg-gradient-to-r from-rose-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                {" "}Space{" "}
              </span>
              With Modern
              <br />
              <span className="bg-gradient-to-r from-violet-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Lift Solutions
              </span>
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:max-w-2xl md:text-lg"
            >
              Unity Lift Solutions provides premium lift installation,
              modernization, repair and maintenance for homes, hospitals,
              offices and commercial buildings with a focus on safety,
              elegant design and dependable long-term performance.
            </motion.p>

            <motion.div
              custom={0.28}
              variants={fadeUp}
              className="mt-7 flex flex-wrap gap-3 text-sm"
            >
              <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-slate-700 shadow-sm">
                <FaCheckCircle className="text-rose-500" />
                High Safety Standards
              </span>
              <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-slate-700 shadow-sm">
                <FaCheckCircle className="text-orange-500" />
                Fast Installation
              </span>
              <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-slate-700 shadow-sm">
                <FaCheckCircle className="text-violet-500" />
                24/7 Support
              </span>
            </motion.div>

            <motion.div
              custom={0.36}
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"
              >
                Get Free Quote
                <FaArrowRight />
              </Link>

              <a
                href="tel:+918700116436"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2.5rem] bg-gradient-to-br from-rose-300/25 via-orange-200/20 to-violet-300/25 blur-xl" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/70 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl"
            >
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={heroImg}
                  alt="Unity Lift Solutions"
                  className="h-[320px] w-full object-cover sm:h-[420px] md:h-[560px]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-white/70" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[-8px] top-[20%] rounded-3xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 text-white">
                  <FaShieldAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Trusted Performance</p>
                  <h4 className="text-lg font-extrabold text-slate-900">
                    Smooth & Safe
                  </h4>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[-8px] top-[10%] rounded-3xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-400 text-white">
                  <FaBolt />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Service Network</p>
                  <h4 className="text-xl font-extrabold text-slate-900">
                    10+ Cities
                  </h4>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], x: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-5 bottom-[18%] h-16 w-16 rounded-[1.5rem] bg-gradient-to-br from-rose-400/70 to-orange-300/70 shadow-lg"
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-[24%] h-14 w-14 rounded-full bg-gradient-to-br from-violet-400/70 to-sky-300/70 shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}