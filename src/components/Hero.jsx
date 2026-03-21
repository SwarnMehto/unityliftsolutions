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

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf7] pb-20 pt-32 text-slate-900 md:pt-36">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-80px] top-[90px] h-[260px] w-[260px] rounded-full bg-rose-300/25 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 24, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[10%] h-[300px] w-[300px] rounded-full bg-orange-200/35 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 22, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[15%] h-[220px] w-[220px] rounded-full bg-violet-200/35 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[14%] left-[8%] h-[180px] w-[180px] rounded-full bg-sky-200/30 blur-3xl"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:46px_46px] opacity-60" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[180px] overflow-hidden md:h-[220px]">
        <motion.div
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-[6%] top-[34px] h-12 w-12 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 shadow-[0_12px_30px_rgba(244,63,94,0.28)] md:h-16 md:w-16"
        />
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
          className="absolute left-[20%] top-[16px] h-14 w-20 rounded-[24px] bg-gradient-to-r from-violet-500 to-sky-400 shadow-[0_12px_30px_rgba(99,102,241,0.25)] md:h-16 md:w-28"
        />
        <motion.div
          initial={{ y: -180, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="absolute right-[12%] top-[28px] h-12 w-12 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-[0_12px_30px_rgba(251,146,60,0.28)] md:h-16 md:w-16"
        />
        <motion.div
          initial={{ y: -210, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.42, duration: 1.05, ease: "easeOut" }}
          className="absolute right-[28%] top-[8px] h-10 w-24 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 shadow-[0_12px_30px_rgba(236,72,153,0.22)] md:h-12 md:w-32"
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-[190px] z-[1] hidden w-[120px] sm:block md:top-[210px] md:w-[160px]">
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-4 top-0 h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg md:h-16 md:w-16"
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-14 top-10 h-10 w-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-400 shadow-lg md:left-20 md:top-14 md:h-14 md:w-14"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-2 top-24 h-3 w-20 rounded-full bg-gradient-to-r from-orange-300 to-amber-200 shadow-md md:top-32 md:w-28"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 flex flex-wrap gap-3">
            <motion.span
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.55 }}
              className="rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-semibold text-rose-600 shadow-sm backdrop-blur"
            >
              Premium Lift Care
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm backdrop-blur"
            >
              Smart Vertical Mobility
            </motion.span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl"
          >
            Next Generation
            <span className="bg-gradient-to-r from-rose-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              {" "}Lift Solutions{" "}
            </span>
            For Stylish
            <br />
            Homes, Hospitals &
            <span className="bg-gradient-to-r from-violet-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Commercial Spaces
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
          >
            Unity Lift Solutions provides premium installation, modernization,
            repair and maintenance services with a focus on safety, elegant
            design, smooth performance and fast after-sales support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-4 text-sm"
          >
            <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-slate-700 shadow-sm backdrop-blur">
              <FaCheckCircle className="text-rose-500" />
              High Safety Standards
            </span>
            <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-slate-700 shadow-sm backdrop-blur">
              <FaCheckCircle className="text-orange-500" />
              Fast Installation
            </span>
            <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-slate-700 shadow-sm backdrop-blur">
              <FaCheckCircle className="text-violet-500" />
              24/7 Support
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
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

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.7 }}
            className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2"
          >
            <div className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur-xl">
              <p className="text-sm text-slate-500">Installations Completed</p>
              <h3 className="mt-1 text-3xl font-extrabold text-rose-500">150+</h3>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur-xl">
              <p className="text-sm text-slate-500">Service Availability</p>
              <h3 className="mt-1 text-3xl font-extrabold text-violet-500">24/7</h3>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-[330px] sm:w-[430px] md:w-[560px]">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2.5rem] bg-gradient-to-br from-rose-300/30 via-orange-200/20 to-violet-300/30 blur-xl" />

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-[120px] z-10 h-16 w-16 rounded-[22px] bg-gradient-to-br from-rose-400/70 to-orange-300/70 shadow-lg blur-[1px] md:h-24 md:w-24"
            />

            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-[190px] z-10 h-14 w-14 rounded-full bg-gradient-to-br from-violet-400/80 to-sky-300/80 shadow-lg md:h-20 md:w-20"
            />

            <motion.div
              animate={{ y: [0, 14, 0], x: [0, 8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 bottom-[70px] z-10 h-5 w-20 rounded-full bg-gradient-to-r from-rose-300 to-orange-200 shadow-md md:h-6 md:w-28"
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 p-3 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl"
            >
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={heroImg}
                  alt="Unity Lift Solutions"
                  className="h-[430px] w-full object-cover md:h-[580px]"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-white/60" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-10 rounded-3xl border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 text-white">
                  <FaShieldAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Trusted Performance</p>
                  <h4 className="text-xl font-extrabold text-slate-900">Smooth & Safe</h4>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[-8px] top-10 rounded-3xl border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-400 text-white">
                  <FaBolt />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Service Network</p>
                  <h4 className="text-2xl font-extrabold text-slate-900">10+ Cities</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}