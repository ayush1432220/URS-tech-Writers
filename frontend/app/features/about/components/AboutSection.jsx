import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ABOUT_POINTS = [
  {
    title: "Copywriter & SEO expert",
    description:
      "Crafting persuasive, keyword-optimized content that drives traffic and converts browsers into buyers.",
  },
  {
    title: "Creative & Content Writer",
    description:
      "Transforming ideas into compelling stories and engaging content that captivates your audience.",
  },
  {
    title: "Advertisement & Promotions",
    description:
      "Designing impactful ad copy and promotional content that boosts visibility, clicks, and conversions.",
  },
];

export const metadata = {
  title: "About Us",
};

export default function AboutSection() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(248,250,252,0.9)_55%,_rgba(244,247,255,0.95))]" />
        <div className="absolute left-[-140px] top-24 h-72 w-72 rounded-full bg-pink-100/30 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

        {/* 🔥 FIX APPLIED HERE */}
        <div className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-start gap-14 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
          
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
              About Us
            </p>

            <h1 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.15] text-slate-950 md:text-5xl">
              UrsWriter: Your Trusted Content Writing Partner
            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              At <span className="font-semibold text-slate-900">UrsWriter</span>, we
              are passionate about creating high-quality, engaging, and
              SEO-friendly content that drives results.
            </p>

            <div className="mt-2 space-y-2">
              {ABOUT_POINTS.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-pink-500 bg-white text-pink-500 shadow-[0_10px_24px_rgba(236,72,153,0.14)]">
                    <Check size={20} strokeWidth={2.4} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950">
                      {item.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-base leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/#services"
              className="mt-10 inline-flex rounded-md bg-pink-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
            >
              Discover more
            </Link>
          </div>

          {/* Optional: also ensure image container aligns top */}
          <div className="relative flex items-start justify-center">
            
            <div className="relative w-full max-w-[620px]">
              <div className="absolute inset-x-12 bottom-8 top-16 rounded-[48%] bg-slate-100" />
              
              {/* 🔥 OPTIONAL EXTRA PUSH UP (if needed) */}
              <Image
                src="/images/img2.png"
                alt="UrsWriter content specialist"
                width={620}
                height={720}
                priority
                className="relative z-10 mx-auto w-full max-w-[560px] object-contain grayscale"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}