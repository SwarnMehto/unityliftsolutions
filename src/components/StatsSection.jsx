import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: 150, suffix: "+", label: "Successful Installations" },
  { number: 24, suffix: "/7", label: "Service Support" },
  { number: 10, suffix: "+", label: "Cities Covered" },
  { number: 100, suffix: "%", label: "Client Commitment" },
];

// ✅ SLOW & SMOOTH COUNTER
function useCountUp(end, duration = 2500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;

      if (elapsed >= duration) {
        setCount(end);
        clearInterval(timer);
      } else {
        const progress = elapsed / duration;
        const value = Math.floor(progress * end);
        setCount(value);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function StatsSection() {
  return (
    <section className="bg-[#f1f5f9] py-16 md:py-20">
      <div className="mx-auto max-w-[1250px] px-4 lg:px-6">

        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
            Unity Lift Solutions Performance
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Trusted by clients across multiple cities
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const count = useCountUp(item.number);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-4xl font-extrabold text-[#1d4ed8] md:text-5xl">
                  {count}
                  {item.suffix}
                </h3>

                <p className="mt-3 text-sm font-medium text-slate-600 md:text-base">
                  {item.label}
                </p>

                <div className="mx-auto mt-4 h-[3px] w-10 bg-blue-500 transition-all duration-300 group-hover:w-16"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}