"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-between px-10 pb-2 pt-2 md:flex-row lg:pt-8">
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-xl"
      >
        <p className="mb-4 text-pink-500 tracking-widest">WELCOME TO URSWRITER</p>
        <h1 className="text-5xl leading-tight text-gray-900 md:text-6xl">
          Crafting copy that connects with your audience.
        </h1>
        <p className="mt-6 text-gray-600">
          At UrsWriter, we deliver high-impact content that drives traffic,
          builds authority, and grows your business. Whether you need blog
          posts, web content, or SEO-driven articles, we have your back.
        </p>
        <button className="mt-8 rounded-lg bg-pink-600 px-12 py-5 text-white transition hover:bg-blue-400">
          Get Started
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-10 md:mt-0"
      >
        <Image
          src="/images/hero.png"
          alt="hero"
          width={800}
          height={800}
          priority
        />
      </motion.div>
    </section>
  );
}
