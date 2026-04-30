"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
const faqs = [
  {
    q: "What types of content do you write?",
    a: "We write blog posts, articles, website copy, product descriptions, email campaigns, ebooks, whitepapers, and social media content tailored to your brand and goals.",
  },
  {
    q: "How do I get started with UrsWriter?",
    a: "Getting started is easy. Reach out through the contact form or email hello@urswriter.com and we will schedule a free consultation.",
  },
  {
    q: "Do you offer SEO services?",
    a: "Yes. Our content follows SEO best practices, and we also provide deeper SEO writing support with keyword strategy and on-page optimization.",
  },
  {
    q: "How long will it take to receive my content?",
    a: "Turnaround times vary by scope. Blog posts and articles are typically delivered within 3 to 5 business days, while larger projects take longer.",
  },
  {
    q: "Can you revise the content if I am not satisfied?",
    a: "Absolutely. We offer revisions to make sure the content aligns with your goals and expectations.",
  },
  {
    q: "Is your content plagiarism-free?",
    a: "Yes. All content is original and reviewed carefully before delivery.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#f7f8fc] px-14 py-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-2"
      >
        <div>
          <p id="faq" className="mb-3 text-sm tracking-widest text-pink-500">
            FAQS - FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-5xl font-semibold leading-snug text-gray-900 md:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 max-w-md text-gray-600">
            Have questions? Check out our FAQs for quick answers to the most
            common topics.
          </p>

          <Image
            src="/images/FAQ.png"
            className="mt-10 h-auto w-[450px]"
            alt="FAQ"
            width={450}
            height={420}
          />
        </div>

        <div className="w-full max-w-[900px] space-y-3">
          {faqs.map((item, index) => (
            <div
              key={item.q}
              id={`faq-${index}`}
              className="overflow-hidden rounded-md shadow-sm"
            >
              <div
                onClick={() => {
                  setActive(active === index ? null : index);

                  setTimeout(() => {
                    const element = document.getElementById(`faq-${index}`);

                    if (element) {
                      const yOffset = -120;
                      const y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;

                      window.scrollTo({
                        top: y,
                        behavior: "smooth",
                      });
                    }
                  }, 100);
                }}
                className={`flex cursor-pointer items-center justify-between px-10 py-8 transition ${
                  active === index
                    ? "bg-gradient-to-r from-[#5f2eea] to-[#7b61ff] text-white"
                    : "bg-white"
                }`}
              >
                <p className="text-[15px] font-medium tracking-wide md:text-[16px]">
                  {index + 1}. {item.q}
                </p>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : "text-gray-500"
                  }`}
                />
              </div>

              <AnimatePresence>
                {active === index ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden bg-[#eef1f7]"
                  >
                    <div className="p-6 leading-relaxed text-gray-600">
                      {item.a}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
