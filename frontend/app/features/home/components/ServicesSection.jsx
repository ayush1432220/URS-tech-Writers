"use client";

import {
  FaBook,
  FaBullhorn,
  FaLaptopCode,
  FaPenNib,
  FaSearch,
  FaTags,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Blog & Article Writing",
    desc: "Boost your organic traffic with SEO-friendly blog posts and informative articles that rank on Google and resonate with readers.",
    icon: <FaPenNib />,
  },
  {
    title: "SEO Content Writing",
    desc: "Get found online with keyword-optimized content that balances creativity with technical SEO to improve rankings and user experience.",
    icon: <FaSearch />,
  },
  {
    title: "Website Content Writing",
    desc: "Make the right first impression with compelling homepage content, service pages, and landing page copy tailored to your audience.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Social Media Content",
    desc: "Increase engagement and brand visibility with consistent, creative, and platform-optimized content.",
    icon: <FaBullhorn />,
  },
  {
    title: "Product Descriptions",
    desc: "Turn browsers into buyers with detailed, benefit-driven product descriptions optimized for search and conversions.",
    icon: <FaTags />,
  },
  {
    title: "Ebooks & Whitepapers",
    desc: "Establish thought leadership and generate leads with long-form content crafted by experts.",
    icon: <FaBook />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl overflow-x-hidden px-10 py-20"
    >
      <div className="mb-14 text-center">
        <p className="mb-2 text-pink-500 tracking-widest">WHAT WE OFFER</p>
        <h2 className="text-4xl font-semibold text-gray-900">
          Professional Content Writing Services
          <br />
          That Drive Results
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-2xl"
          >
            <div className="absolute inset-0">
              <div className="h-full w-full origin-center scale-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-100 group-hover:opacity-100" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-5 text-4xl text-pink-500 transition-all duration-500 group-hover:scale-75 group-hover:opacity-0">
                {item.icon}
              </div>

              <h3 className="mt-1 text-lg font-bold text-gray-900 transition-all duration-300 group-hover:text-2xl group-hover:text-white">
                {item.title}
              </h3>

              <p className="mt-4 max-w-xs text-gray-600 transition duration-300 group-hover:text-white">
                {item.desc}
              </p>

              <button className="mt-5 translate-y-4 rounded-md border border-white px-6 py-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
