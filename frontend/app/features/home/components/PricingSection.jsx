"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Lite Package",
    tag: "Starter",
    price: "$49",
    subtitle: "Perfect for small businesses",
    features: [
      "5 SEO Articles",
      "300 Words per Article",
      "3 Days Delivery",
      "SEO Optimized",
      "10 Keywords Included",
      "Free Consultation",
    ],
  },
  {
    name: "Pro Package",
    tag: "Popular",
    price: "$99",
    subtitle: "Best for growing brands",
    features: [
      "10 SEO Articles",
      "500 Words per Article",
      "3 Days Delivery",
      "Advanced SEO",
      "15 Keywords Included",
      "Priority Support",
    ],
  },
  {
    name: "Ultimate Package",
    tag: "Premium",
    price: "$299",
    subtitle: "For enterprise content needs",
    features: [
      "30 SEO Articles",
      "600 Words per Article",
      "3 Days Delivery",
      "Premium SEO Strategy",
      "25 Keywords Included",
      "Dedicated Manager",
    ],
  },
];

function AnimatedPricingCard({ plan, index }) {
  const cardRef = useRef(null);
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const setStaticBorder = () => {
      card.style.background = `
        linear-gradient(#fff, #fff) padding-box,
        conic-gradient(from 0deg, #f3f4f6, #f3f4f6) border-box
      `;
      card.style.boxShadow = "0 18px 50px rgba(0,0,0,0.06)";
    };

    const animate = () => {
      if (!isHovering.current) return;
      angleRef.current = (angleRef.current + 1.5) % 360;
      const deg = angleRef.current;
      card.style.background = `
        linear-gradient(#fff, #fff) padding-box,
        conic-gradient(
          from ${deg}deg,
          #fff 0deg,
          #fff 60deg,
          rgb(255, 0, 123) 120deg,
          #fff 180deg,
          #fff 360deg
        ) border-box
      `;
      card.style.boxShadow = "0 30px 80px rgba(236,72,153,0.22)";
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      isHovering.current = true;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onLeave = () => {
      isHovering.current = false;
      cancelAnimationFrame(rafRef.current);
      setStaticBorder();
    };

    setStaticBorder();
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -14, scale: 1.02 }}
      className="group h-full"
    >
      <div
        ref={cardRef}
        className="relative h-full rounded-[28px] p-9 flex flex-col overflow-hidden transition-all duration-500 ease-out"
        style={{
          border: "3px solid transparent",
          borderRadius: 28,
        }}
      >
        {/* TAG */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
            {plan.tag}
          </span>

          <h3 className="text-2xl font-semibold mt-6 text-gray-900">
            {plan.name}
          </h3>

          <p className="mt-2 text-gray-500">
            {plan.subtitle}
          </p>
        </div>

        {/* PRICE */}
        <div className="mb-8">
          <h2 className="text-6xl font-semibold text-pink-500">
            {plan.price}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            one-time package
          </p>
        </div>

        {/* FEATURES */}
        <ul className="space-y-4 mb-10">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-600">
              <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-xs group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <FaCheck />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <button className="mt-auto w-full py-4 rounded-2xl font-medium bg-pink-500 text-white hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-1 transition-all duration-300">
          Purchase Plan
        </button>

        {/* FOOT TEXT */}
        <p className="text-center text-xs mt-5 leading-relaxed text-gray-400">
          Includes research, writing, editing,
          and SEO-friendly formatting.
        </p>

        {/* PAYMENT IMAGE */}
        <img
          src="/images/payment-icon.png"
          alt="payment"
          className="h-10 object-contain mx-auto mt-6 opacity-90"
        />
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] py-28 px-6">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-pink-500 tracking-[4px] text-sm mb-4 uppercase">
              Pricing Plan
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight max-w-2xl">
              Flexible Pricing to Match Your Content Writing Needs
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              Choose a package that fits your goals. Every plan includes
              SEO-focused writing, research, editing, and conversion-driven content.
            </p>

            <button className="mt-8 bg-pink-500 text-white px-8 py-4 rounded-xl hover:bg-pink-600 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-pink-200">
              Discover more
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/images/pricing_img.png"
              alt="pricing"
              className="w-[560px] object-contain"
            />
          </motion.div>

        </div>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <AnimatedPricingCard key={i} plan={plan} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}