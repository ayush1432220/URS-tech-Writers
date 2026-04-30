"use client";
import { motion } from "framer-motion";
import { Pencil, Layers, BarChart3 } from "lucide-react";
export default function Features() {
  return (
    <motion.section
    className="max-w-7xl mx-auto px-10 py-16 -mt-20 relative z-10"
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="bg-gradient-to-r from-[#5b2be0] to-[#4c2edb] text-white rounded-2xl p-6 shadow-xl grid md:grid-cols-3 gap-8">

        {/* item1 */}
        <div className="flex gap-4 pr-6 border-r border-white/20">
          <Pencil className="text-cyan-400 w-8 h-8" />
          <div>
            <h3 className="font-semibold text-lg">
              Copywriter & SEO expert
            </h3>
            <p className="text-sm text-gray-200 mt-2 leading-relaxed">
              Crafting persuasive, keyword-optimized content that drives traffic and converts browsers into buyers.
            </p>
          </div>
        </div>

        {/* item2 */}
        <div className="flex gap-4 pr-6 border-r border-white/20">
          <Layers className="text-cyan-400 w-8 h-8" />
          <div>
            <h3 className="font-semibold text-lg">
              Creative & Content Writer
            </h3>
            <p className="text-sm text-gray-200 mt-2 leading-relaxed">
              Transforming ideas into compelling stories and engaging content that captivates your audience.
            </p>
          </div>
        </div>

        {/* item3 */}
        <div className="flex gap-4 pl-6">
          <BarChart3 className="text-cyan-400 w-8 h-8" />
          <div>
            <h3 className="font-semibold text-xl">
              Advertisement & Promotions
            </h3>
            <p className="text-gray-200 mt-3 leading-relaxed text-[15px]">
              Designing impactful ad copy and promotional content that boosts visibility, clicks, and conversions.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}