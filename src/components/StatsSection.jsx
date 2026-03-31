import { motion } from "framer-motion";

const stats = [
  {
    number: "150+",
    label: "Successful Installations",
  },
  {
    number: "24/7",
    label: "Service Support",
  },
  {
    number: "10+",
    label: "Cities Covered",
  },
  {
    number: "100%",
    label: "Client Commitment",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-[#020b2d] via-[#0b1b49] to-[#22324d] py-14 md:py-16">
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-[28px] border border-white/5 bg-white/8 px-6 py-8 text-center shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-4xl font-extrabold text-[#ffc61a] md:text-5xl">
              {item.number}
            </h3>
            <p className="mt-3 text-base font-medium text-white/90 md:text-lg">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}