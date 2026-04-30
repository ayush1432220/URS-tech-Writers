"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-16 py-12 md:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative"
      >
        <Image
          src="/images/about.jpg"
          alt="about"
          width={500}
          height={400}
          className="rounded-2xl"
        />

        <div className="absolute -left-6 -top-6 grid grid-cols-4 gap-2">
          {[...Array(40)].map((_, index) => (
            <span key={index} className="h-2 w-2 rounded-full bg-pink-500" />
          ))}
        </div>

        <div className="absolute -bottom-20 right-[-30px] flex h-48 w-48 flex-col items-center justify-center rounded-full bg-gray-100 shadow-lg">
          <h2 className="text-5xl font-semibold text-pink-500">12+</h2>
          <p className="text-center text-base text-gray-600">
            Years of Experience
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-xl"
      >
        <p className="mb-4 text-pink-500 tracking-widest">WHO WE ARE</p>

        <h2 className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
          Writing content like you&apos;ve never had before.
        </h2>

        <p className="mt-6 leading-relaxed text-gray-600">
          At UrsWriter, we are a team of passionate wordsmiths, SEO strategists,
          and creative thinkers dedicated to helping brands communicate better.
          We believe great content is not just about good grammar. It is about
          purpose, clarity, and connection.
        </p>

        <p className="mt-4 leading-relaxed text-gray-600">
          With years of experience across diverse industries, we blend
          storytelling with strategy to deliver content that informs, engages,
          and converts. Whether you are a startup building your voice or a
          growing business scaling your presence, we are here to write your
          success story one word at a time.
        </p>

        <button className="mt-8 rounded-lg bg-pink-500 px-8 py-3 text-white transition-all duration-300 hover:bg-pink-600">
          Discover more
        </button>
      </motion.div>
    </section>
  );
}
