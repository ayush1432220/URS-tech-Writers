"use client";

import { motion } from "framer-motion";
import {
  FaBroadcastTower,
  FaEnvelopeOpenText,
  FaRegCommentDots,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaRegCommentDots />,
    title: "Free Consultations",
    desc: "Get a free consultation today and let us discuss how our content solutions can help grow your business.",
    btn: "Chat Now",
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "Ticket Support",
    desc: "Need assistance? Submit a ticket and our support team will get back to you promptly.",
    btn: "Send Ticket",
  },
  {
    icon: <FaBroadcastTower />,
    title: "Insight",
    desc: "Gain valuable insights with data-driven content strategies that help you understand your audience and stay ahead of the competition.",
    btn: "Read Article",
  },
];

export default function HelpSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative bg-[#2c1a63] pb-40 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:80px_80px] opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white"
        >
          <p className="mb-3 text-sm tracking-widest text-pink-400">
            NEED MORE HELP?
          </p>
          <h2 className="text-4xl font-semibold">Let us know how we can help.</h2>
          <p className="mt-6 leading-relaxed text-gray-300">
            Have a project in mind or need help figuring out the right content
            strategy? We are here to listen, understand your goals, and provide
            solutions that deliver real results.
          </p>
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl -translate-y-12 px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {cards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="-mt-16 rounded-2xl bg-white p-10 text-center shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <div className="mx-auto mb-4 text-4xl text-pink-500">
                {item.icon}
              </div>

              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>

              <p className="mb-5 text-gray-600">{item.desc}</p>

              <button className="rounded-md bg-pink-500 px-6 py-2 text-white transition hover:bg-pink-600">
                {item.btn}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
