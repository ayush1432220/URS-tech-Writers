"use client";

import Image from "next/image";
import { FaLightbulb, FaLayerGroup } from "react-icons/fa";

export default function OurValuesSection() {
  return (
    <section className="bg-[#f1f3f9] py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          {/* Pink dots */}
          <div className="absolute -top-6 -left-6 grid grid-cols-5 gap-1">
            {[...Array(25)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
            ))}
          </div>

          <Image
            src="/images/team.jpg" // 👉 add your image here
            alt="Team working"
            width={550}
            height={650}
            className="rounded-2xl object-cover grayscale"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-pink-500 uppercase tracking-[0.3em] text-sm">
            Our Values
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Effective copywriting for online and offline marketing.
          </h2>

          {/* BULLET POINTS */}
          <ul className="mt-6 space-y-4 text-gray-600 leading-7">
            <li>
              <span className="font-semibold text-gray-900">Creativity:</span>{" "}
              We believe in the power of creativity to craft content that not only
              informs but also engages and entertains.
            </li>

            <li>
              <span className="font-semibold text-gray-900">Collaboration:</span>{" "}
              We work closely with you to understand your vision and objectives,
              ensuring the content we create aligns perfectly with your goals.
            </li>

            <li>
              <span className="font-semibold text-gray-900">Integrity:</span>{" "}
              We are committed to delivering content that is not only accurate but
              also aligned with your brand values and message.
            </li>
          </ul>

          {/* CARDS */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">

            {/* VISION CARD */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-pink-500 text-3xl mb-4">
                <FaLightbulb />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                Our Vision
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-6">
                At UrsWriter, our vision is to become a leading global content
                writing agency known for delivering impactful, SEO-driven, and
                brand-focused content. We aim to empower businesses to communicate
                effectively and grow through the power of words.
              </p>
            </div>

            {/* MISSION CARD */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-pink-500 text-3xl mb-4">
                <FaLayerGroup />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-6">
                Our mission is simple: To provide businesses with expertly written
                content that speaks to their audience and ranks high on search
                engines. We deliver tailored solutions for startups, e-commerce,
                and enterprises.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}