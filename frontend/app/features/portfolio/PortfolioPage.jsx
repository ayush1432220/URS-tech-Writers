"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = ["All", "Research Papers", "Blogs & Articles", "Books", "Social Media", "Thesis"];

const projects = [
  {
    id: 1,
    category: "Research Papers",
    title: "Climate Change & Economic Policy",
    client: "Oxford Research Institute",
    tag: "Academic",
    desc: "A 12,000-word interdisciplinary research paper examining the macroeconomic consequences of climate policy, published in a peer-reviewed journal.",
    stats: ["12,000 words", "Peer Reviewed", "Impact Factor 3.2"],
    color: "#fff0f6",
    accent: "rgb(236,72,153)",
  },
  {
    id: 2,
    category: "Blogs & Articles",
    title: "The Future of Remote Work",
    client: "TechTrend Media",
    tag: "SEO Blog",
    desc: "A high-ranking SEO article series that drove 340% organic traffic growth for a B2B SaaS brand in under 6 months.",
    stats: ["340% Traffic Growth", "18 Articles", "#1 on Google"],
    color: "#fff8f0",
    accent: "rgb(255,140,0)",
  },
  {
    id: 3,
    category: "Books",
    title: "The Mindful Entrepreneur",
    client: "Confidential Client",
    tag: "Ghostwritten",
    desc: "A 60,000-word business memoir ghostwritten for a serial entrepreneur, capturing authentic voice and hard-won business lessons.",
    stats: ["60,000 words", "Amazon Bestseller", "4.8★ Rating"],
    color: "#f0fff4",
    accent: "rgb(0,180,100)",
  },
  {
    id: 4,
    category: "Social Media",
    title: "Brand Voice for D2C Skincare",
    client: "GlowLab India",
    tag: "Social Content",
    desc: "90-day social media content calendar with Instagram captions, reel scripts, and LinkedIn posts that grew followers by 220%.",
    stats: ["220% Follower Growth", "90-Day Calendar", "3 Platforms"],
    color: "#f5f0ff",
    accent: "rgb(120,80,220)",
  },
  {
    id: 5,
    category: "Thesis",
    title: "AI Ethics in Healthcare Systems",
    client: "IIT Delhi Graduate",
    tag: "PhD Thesis",
    desc: "Full thesis writing support from proposal to final submission — literature review, methodology, findings, and discussion chapters.",
    stats: ["85,000 words", "Distinction Grade", "6 Months"],
    color: "#fff0f6",
    accent: "rgb(236,72,153)",
  },
  {
    id: 6,
    category: "Blogs & Articles",
    title: "FinTech Explained: A 40-Part Series",
    client: "MoneyMind Blog",
    tag: "Long-form Content",
    desc: "A comprehensive educational series breaking down complex financial technology concepts for everyday readers — consistently rated 5★.",
    stats: ["40 Articles", "2M+ Reads", "5★ Client Rating"],
    color: "#f0f8ff",
    accent: "rgb(0,100,255)",
  },
];

const stats = [
  { number: "1200+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "150+", label: "Expert Writers" },
  { number: "40+", label: "Industries Served" },
];

// ─── ANIMATED NUMBER ──────────────────────────────────────────────────────────

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * num) + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

// ─── ANIMATED CARD ────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const setStatic = () => {
      card.style.background = `linear-gradient(#fff,#fff) padding-box, conic-gradient(from 0deg,#f0f0f0,#f0f0f0) border-box`;
      card.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)";
    };

    const animate = () => {
      if (!isHovering.current) return;
      angleRef.current = (angleRef.current + 1.5) % 360;
      const deg = angleRef.current;
      card.style.background = `linear-gradient(#fff,#fff) padding-box, conic-gradient(from ${deg}deg,#fff 0deg,#fff 60deg,rgb(236,72,153) 120deg,#fff 180deg,#fff 360deg) border-box`;
      card.style.boxShadow = "0 24px 60px rgba(236,72,153,0.16)";
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => { isHovering.current = true; rafRef.current = requestAnimationFrame(animate); };
    const onLeave = () => { isHovering.current = false; cancelAnimationFrame(rafRef.current); setStatic(); };

    setStatic();
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => { cancelAnimationFrame(rafRef.current); card.removeEventListener("mouseenter", onEnter); card.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div
        ref={cardRef}
        className="relative h-full flex flex-col overflow-hidden"
        style={{ border: "2.5px solid transparent", borderRadius: 24, padding: "32px 28px", transition: "box-shadow 0.4s ease" }}
      >
        {/* Color accent top bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: project.accent, borderRadius: "24px 24px 0 0",
          transform: "scaleX(0)", transformOrigin: "left",
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }} className="group-hover:[transform:scaleX(1)]!" />

        {/* Category chip */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", padding: "5px 12px", borderRadius: 100,
            background: project.color, color: project.accent,
          }}>{project.tag}</span>
          <FaExternalLinkAlt style={{ color: "#ddd", fontSize: 13, transition: "color 0.3s" }} className="group-hover:!text-pink-500" />
        </div>

        {/* Client */}
        <p style={{ fontSize: "0.78rem", color: "#aaa", marginBottom: 8, letterSpacing: "0.04em" }}>{project.client}</p>

        {/* Title */}
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827", lineHeight: 1.3, marginBottom: 14, letterSpacing: "-0.02em" }}>
          {project.title}
        </h3>

        {/* Desc */}
        <p style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.7, marginBottom: 24, flex: 1 }}>
          {project.desc}
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.stats.map((s, i) => (
            <span key={i} style={{
              fontSize: "0.75rem", fontWeight: 600, color: "#374151",
              background: "#f7f8fc", padding: "4px 10px", borderRadius: 8,
              border: "1px solid #e5e7eb",
            }}>{s}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <main style={{ background: "#f7f8fc", overflow: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{ background: "#eef1f7", paddingTop: 80, paddingBottom: 0, paddingInline: 24, position: "relative", overflow: "hidden" }}>

        {/* Decorative blobs */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: -40, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: 40 }}>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 28, height: 2, background: "rgb(236,72,153)" }} />
              <p style={{ color: "rgb(236,72,153)", letterSpacing: "4px", textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 700 }}>
                Our Portfolio
              </p>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 700, color: "#111827", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Words That Work.<br />
              <span style={{ color: "rgb(236,72,153)" }}>Results That Speak.</span>
            </h1>

            <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.75, maxWidth: 440, marginBottom: 32 }}>
              From peer-reviewed research to viral social content — explore the work that has helped 1200+ clients build authority, drive traffic, and achieve their goals.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(236,72,153,0.35)" }}
                style={{ padding: "13px 28px", borderRadius: 12, background: "rgb(236,72,153)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
              >
                Start Your Project <FaArrowRight style={{ fontSize: 11 }} />
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                style={{ padding: "13px 28px", borderRadius: 12, background: "transparent", color: "#111827", fontWeight: 600, fontSize: "0.9rem", border: "2px solid #e5e7eb", cursor: "pointer" }}
              >
                View Services
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <img src="/images/portfolio.png" alt="portfolio" style={{ width: 460, objectFit: "contain" }}
              onError={e => { e.target.style.display = "none"; }} />
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: "#fce7f3", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ textAlign: "center" }}
            >
              <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "rgb(219,39,119)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                <AnimatedNumber value={s.number} />
              </div>
              <div style={{ fontSize: "0.85rem", color: "#9d174d", marginTop: 8, letterSpacing: "0.04em" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <p style={{ color: "rgb(236,72,153)", letterSpacing: "4px", textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 700, marginBottom: 14 }}>
              Featured Work
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 16 }}>
              Projects We're Proud Of
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Each project is a story of trust, craft, and measurable results. Here's a glimpse of what we've built together with our clients.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "8px 20px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600,
                  border: "none", cursor: "pointer", transition: "all 0.25s ease",
                  background: activeFilter === cat ? "rgb(236,72,153)" : "#fff",
                  color: activeFilter === cat ? "#fff" : "#6b7280",
                  boxShadow: activeFilter === cat ? "0 4px 16px rgba(236,72,153,0.3)" : "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "stretch" }}>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP ── */}
      <section style={{ background: "#eef1f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 52 }}
          >
            <p style={{ color: "rgb(236,72,153)", letterSpacing: "4px", textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 700, marginBottom: 14 }}>Testimonials</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#111827", letterSpacing: "-0.03em" }}>
              What Our Clients Say
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { quote: "UrsWriter transformed our content strategy. Organic traffic is up 340% in just 6 months.", name: "Rohit Mehta", role: "Founder, TechTrend Media" },
              { quote: "The research paper they wrote for me was accepted on the first submission. Exceptional quality.", name: "Dr. Priya Sharma", role: "PhD Scholar, IIT Delhi" },
              { quote: "Professional, fast, and incredibly talented ghostwriters. My book is now an Amazon bestseller.", name: "Anjali Kapoor", role: "Entrepreneur & Author" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", position: "relative" }}
              >
                <div style={{ fontSize: "3rem", color: "rgb(236,72,153)", lineHeight: 1, marginBottom: 16, fontFamily: "Georgia, serif", opacity: 0.3 }}>"</div>
                <p style={{ fontSize: "0.92rem", color: "#374151", lineHeight: 1.75, marginBottom: 24 }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, rgb(236,72,153), #ff6b9d)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1rem" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#111827" }}>{t.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "#9ca3af" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              background: "#fdf2f8",
              borderRadius: 28,
              padding: "64px 60px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: 40,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* bg accent */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div>
              <p style={{ color: "rgb(236,72,153)", letterSpacing: "4px", textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 700, marginBottom: 14 }}>Ready to Start?</p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 12 }}>
                Let's craft your next<br />success story together.
              </h2>
              <p style={{ color: "#6b7280", fontSize: "0.92rem", lineHeight: 1.7 }}>
                Join 1200+ clients who trust UrsWriter to deliver content that converts.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 12px 30px rgba(236,72,153,0.4)" }}
                style={{ padding: "15px 32px", borderRadius: 12, background: "rgb(236,72,153)", color: "#fff", fontWeight: 700, fontSize: "0.95rem", border: "2px solid rgb(236,72,153)", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}
              >
                Get Started Today <FaArrowRight style={{ fontSize: 11 }} />
              </motion.button>
              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#9d174d" }}>Free consultation included</p>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}