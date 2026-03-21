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
    <section className="relative overflow-hidden bg-[#fffaf7] pb-16 pt-28 text-slate-900 sm:pb-20 sm:pt-32 md:pt-36">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 28, 0], y: [0, -18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-60px] top-[80px] h-[180px] w-[180px] rounded-full bg-rose-300/20 blur-3xl sm:h-[240px] sm:w-[240px] md:h-[260px] md:w-[260px]"
        />
        <motion.div
          animate={{ x: [0, -24, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[4%] top-[8%] h-[180px] w-[180px] rounded-full bg-orange-200/25 blur-3xl sm:h-[240px] sm:w-[240px] md:h-[300px] md:w-[300px]"
        />
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, 20, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] h-[160px] w-[160px] rounded-full bg-violet-200/25 blur-3xl sm:h-[200px] sm:w-[200px] md:h-[220px] md:w-[220px]"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-60" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[140px] overflow-hidden sm:h-[170px] md:h-[220px]">
        <motion.div
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-[4%] top-[34px] h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 shadow-[0_10px_24px_rgba(14,165,233,0.28)] sm:h-12 sm:w-12 md:h-16 md:w-16"
        />
        <motion.div
          initial={{ y: -160, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
          className="absolute left-[14%] top-[78px] h-10 w-10 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 shadow-[0_10px_24px_rgba(236,72,153,0.28)] sm:h-12 sm:w-12 md:h-14 md:w-14"
        />
        <motion.div
          initial={{ y: -180, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.28, duration: 1, ease: "easeOut" }}
          className="absolute right-[10%] top-[22px] h-9 w-16 rounded-full bg-gradient-to-r from-rose-400 to-orange-300 shadow-[0_10px_24px_rgba(251,113,133,0.22)] sm:h-10 sm:w-20 md:h-12 md:w-32"
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-[190px] z-[1] block w-[90px] sm:w-[120px] md:top-[210px] md:w-[160px]">
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-2 top-0 h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 shadow-lg sm:h-12 sm:w-12 md:h-16 md:w-16"
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-10 top-10 h-9 w-9 rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 shadow-lg sm:h-10 sm:w-10 md:left-20 md:top-14 md:h-14 md:w-14"
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-24 h-2.5 w-14 rounded-full bg-gradient-to-r from-orange-300 to-amber-200 shadow-md sm:w-20 md:top-32 md:h-3 md:w-28"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-[1.08fr_0.92fr] items-start gap-4 sm:gap-6 md:grid-cols-2 md:items-center md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <div className="mb-4 flex flex-wrap gap-2 sm:mb-6 sm:gap-3">
              <motion.span
                initial={{ opacity: 0, y: -24, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.55 }}
                className="rounded-full border border-rose-200 bg-white/85 px-3 py-2 text-[11px] font-semibold text-rose-600 shadow-sm backdrop-blur sm:px-4 sm:text-sm"
              >
                Premium Lift Care
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: -24, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.55 }}
                className="rounded-full border border-orange-200 bg-white/85 px-3 py-2 text-[11px] font-semibold text-orange-600 shadow-sm backdrop-blur sm:px-4 sm:text-sm"
              >
                Smart Vertical Mobility
              </motion.span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="max-w-xl text-[32px] font-extrabold leading-[1.12] tracking-[-0.03em] text-slate-900 sm:text-[44px] md:max-w-3xl md:text-6xl"
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
              className="mt-5 max-w-xl text-[13px] leading-7 text-slate-600 sm:mt-7 sm:text-base sm:leading-8 md:max-w-2xl md:text-lg"
            >
              Unity Lift Solutions provides premium installation,
              modernization, repair and maintenance services with a focus on
              safety, elegant design, smooth performance and fast after-sales
              support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.7 }}
              className="mt-6 flex flex-wrap gap-2 text-[11px] sm:mt-8 sm:gap-4 sm:text-sm"
            >
              <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-slate-700 shadow-sm backdrop-blur sm:px-4">
                <FaCheckCircle className="text-rose-500" />
                High Safety Standards
              </span>
              <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-slate-700 shadow-sm backdrop-blur sm:px-4">
                <FaCheckCircle className="text-orange-500" />
                Fast Installation
              </span>
              <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-slate-700 shadow-sm backdrop-blur sm:px-4">
                <FaCheckCircle className="text-violet-500" />
                24/7 Support
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-7 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 sm:px-6"
              >
                Get Free Quote
                <FaArrowRight />
              </Link>

              <a
                href="tel:+918700116436"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:px-6"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.7 }}
              className="mt-7 grid max-w-xl grid-cols-2 gap-3 sm:mt-10 sm:gap-4"
            >
              <div className="rounded-3xl border border-white/60 bg-white/75 p-4 shadow-lg backdrop-blur-xl sm:p-5">
                <p className="text-[11px] text-slate-500 sm:text-sm">
                  Installations Completed
                </p>
                <h3 className="mt-1 text-2xl font-extrabold text-rose-500 sm:text-3xl">
                  150+
                </h3>
              </div>

              <div className="rounded-3xl border border-white/60 bg-white/75 p-4 shadow-lg backdrop-blur-xl sm:p-5">
                <p className="text-[11px] text-slate-500 sm:text-sm">
                  Service Availability
                </p>
                <h3 className="mt-1 text-2xl font-extrabold text-violet-500 sm:text-3xl">
                  24/7
                </h3>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85 }}
            className="relative flex justify-end self-start md:self-center"
          >
            <div className="relative w-[170px] sm:w-[260px] md:w-[560px]">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.8rem] bg-gradient-to-br from-rose-300/30 via-orange-200/20 to-violet-300/30 blur-lg sm:translate-x-5 sm:translate-y-5 sm:rounded-[2.2rem] md:translate-x-6 md:translate-y-6 md:rounded-[2.5rem] md:blur-xl" />

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-3 top-[70px] z-10 h-10 w-10 rounded-2xl bg-gradient-to-br from-rose-400/75 to-orange-300/75 shadow-lg sm:-left-5 sm:top-[100px] sm:h-14 sm:w-14 md:-left-6 md:top-[120px] md:h-24 md:w-24"
              />

              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 top-[120px] z-10 h-9 w-9 rounded-full bg-gradient-to-br from-violet-400/80 to-sky-300/80 shadow-lg sm:-right-3 sm:top-[150px] sm:h-12 sm:w-12 md:-right-4 md:top-[190px] md:h-20 md:w-20"
              />

              <motion.div
                animate={{ y: [0, 14, 0], x: [0, 8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-1 bottom-[42px] z-10 h-3.5 w-12 rounded-full bg-gradient-to-r from-rose-300 to-orange-200 shadow-md sm:bottom-[58px] sm:h-5 sm:w-20 md:-left-2 md:bottom-[70px] md:h-6 md:w-28"
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/70 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:rounded-[2.2rem] sm:p-2.5 md:rounded-[2.5rem] md:p-3 md:shadow-[0_20px_80px_rgba(15,23,42,0.12)]"
              >
                <div className="overflow-hidden rounded-[1.4rem] sm:rounded-[1.8rem] md:rounded-[2rem]">
                  <img
                    src={heroImg}
                    alt="Unity Lift Solutions"
                    className="h-[265px] w-full object-cover sm:h-[360px] md:h-[580px]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-white/60 sm:rounded-[2.2rem] md:rounded-[2.5rem]" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-7 rounded-2xl border border-white/70 bg-white/90 p-2.5 shadow-xl backdrop-blur-xl sm:-left-5 sm:bottom-8 sm:rounded-3xl sm:p-3 md:-left-4 md:bottom-10 md:p-4"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 text-xs text-white sm:h-10 sm:w-10 md:h-11 md:w-11 md:rounded-2xl">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-500 sm:text-[10px] md:text-xs">
                      Trusted Performance
                    </p>
                    <h4 className="text-sm font-extrabold text-slate-900 sm:text-base md:text-xl">
                      Smooth & Safe
                    </h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 top-5 rounded-2xl border border-white/70 bg-white/90 p-2.5 shadow-xl backdrop-blur-xl sm:right-0 sm:top-7 sm:rounded-3xl sm:p-3 md:right-[-8px] md:top-10 md:p-4"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-sky-400 text-xs text-white sm:h-10 sm:w-10 md:h-11 md:w-11 md:rounded-2xl">
                    <FaBolt />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-500 sm:text-[10px] md:text-xs">
                      Service Network
                    </p>
                    <h4 className="text-sm font-extrabold text-slate-900 sm:text-base md:text-2xl">
                      10+ Cities
                    </h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}