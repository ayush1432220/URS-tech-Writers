import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FOOTER_LINK_GROUPS, SOCIAL_LINKS } from "@/app/components/constants/navigation.js";
import { Button } from "@/app/components/common/Button.jsx";

const iconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
};

export default function Footer() {
  return (
    <section>
      <div className="bg-slate-100 pb-0 pt-16">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold text-slate-900">
              Helping you talk to the world.
            </h2>
            <p className="max-w-lg text-slate-600">
              We help you communicate your message clearly and effectively,
              reaching audiences across the globe with content that resonates.
            </p>
            <Button as="link" href="/#pricing">
              Consultation now
            </Button>
          </div>

          <div className="relative hidden justify-end md:flex">
            <Image
              src="/images/img2.png"
              alt="Consultation illustration"
              width={360}
              height={280}
            />
          </div>
        </div>
      </div>

      <footer className="bg-[#2c1a63] pb-10 pt-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Image
              src="/images/urs.png"
              alt="UrsWriter"
              width={208}
              height={52}
              className="mb-8 h-auto"
            />
            <p className="text-sm leading-relaxed text-slate-200">
              UrsWriter is a team of experienced content creators, strategists,
              and SEO specialists helping brands turn ideas into clear,
              conversion-focused content.
            </p>

            <div className="mt-6 flex gap-4 text-lg">
              {SOCIAL_LINKS.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="transition hover:text-pink-400"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-lg font-bold">{group.title}</h3>
              <ul className="space-y-3 text-sm text-slate-100">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link className="transition hover:text-pink-300" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 px-6 pt-6 text-sm text-slate-300 md:flex-row">
          <p>Copyright 2026 UrsWriter. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/">Terms of use</Link>
            <Link href="/">Privacy policy</Link>
            <Link href="/">Cookie policy</Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
