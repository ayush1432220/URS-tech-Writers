import Image from "next/image"; // ✅ FIXED: added import
import { Lightbulb, Diamond, Globe } from "lucide-react";

export default function WhatSetsUsApart() {
  return (
    <section className="bg-[#eef0f6] py-20">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center px-6 lg:px-10">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-pink-500 uppercase tracking-[0.3em] text-sm">
            What sets us apart?
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Helping businesses succeed is what we do.
          </h1>

          <p className="mt-6 text-gray-600 leading-7 max-w-xl">
            Our team is composed of experienced writers, SEO experts, and content
            strategists who are dedicated to helping your business succeed.
          </p>

          <div className="mt-10 space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-pink-500">
                <Lightbulb size={26} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Smart & Creative Solutions
                </h3>
                <p className="text-gray-600 mt-1">
                  Customized content for your audience and goals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-pink-500">
                <Diamond size={26} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  High-Quality Content
                </h3>
                <p className="text-gray-600 mt-1">
                  100% original and brand-aligned content.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-pink-500">
                <Globe size={26} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  SEO Optimized Content
                </h3>
                <p className="text-gray-600 mt-1">
                  Rank higher and drive organic traffic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center">

          {/* Background circle */}
          <div className="absolute w-[380px] h-[380px] bg-blue-500 rounded-full right-10 top-16"></div>

          {/* Floating elements */}
          <div className="absolute top-10 left-10 text-4xl">🪙</div>
          <div className="absolute top-20 right-16 text-4xl">💵</div>
          <div className="absolute bottom-20 left-16 text-3xl">💰</div>

          {/* Dots */}
          <div className="absolute right-10 bottom-16 grid grid-cols-6 gap-1">
            {[...Array(24)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
            ))}
          </div>

          {/* ✅ MAIN IMAGE */}
          <Image
            src="/images/img4.png"
            alt="business"
            width={400}
            height={500}
            className="relative z-10 object-contain grayscale"
          />

        </div>
      </div>
    </section>
  );
}