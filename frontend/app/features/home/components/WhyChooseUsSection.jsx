"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGem, FaGlobe, FaLightbulb } from "react-icons/fa";

export default function WhyChooseUsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-2 bg-[#e9edf5] px-18 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm tracking-widest text-pink-500">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-semibold leading-snug text-gray-900">
            Your One-Stop Content Writing Agency
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-gray-600">
            At UrsWriter, we offer a full suite of high-quality content writing
            services designed to boost your online visibility, engage your
            audience, and increase conversions. Whether you are a business
            owner, marketer, or agency, we have the words that work for you.
          </p>

          <div className="mt-10 space-y-8">
            <div className="group flex items-start gap-5">
              <div className="text-2xl text-pink-500 transition group-hover:scale-110">
                <FaLightbulb />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Smart & Creative Solutions
                </h4>
                <p className="mt-1 text-gray-600">
                  Delivering content solutions that blend strategy with
                  storytelling to elevate your brand and drive results.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-5">
              <div className="text-2xl text-pink-500 transition group-hover:scale-110">
                <FaGem />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  High-Quality Content
                </h4>
                <p className="mt-1 text-gray-600">
                  We create high-quality, impactful content that is original,
                  engaging, and tailored to your brand voice and goals.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-5">
              <div className="text-2xl text-pink-500 transition group-hover:scale-110">
                <FaGlobe />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  SEO Optimized Content
                </h4>
                <p className="mt-1 text-gray-600">
                  Our SEO-optimized content is crafted to rank higher on search
                  engines, attract organic traffic, and convert visitors into
                  customers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <Image
            src="/images/img4.png"
            alt="Team collaboration"
            width={500}
            height={500}
            className="h-auto w-[500px] object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
