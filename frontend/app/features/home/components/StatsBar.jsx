"use client";
import { motion } from "framer-motion";

export function StatsBar() {
 const stats = [
    { num: "14K+", label: "Article Published" },
    { num: "5K+", label: "Happy Client" },
    { num: "4.7", label: "Customer Rating" },
    { num: "12+", label: "Years Experience" },
  ];
  return (
    <div className="bg-[#2d1457] py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-white">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="py-4 border-r last:border-none border-white/20"
          >
            <h3 className="text-4xl font-bold text-pink-500">
              {item.num}
            </h3>
            <p className="mt-2 text-sm text-white/80">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}