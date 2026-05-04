"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaUser, FaSearch, FaTag } from "react-icons/fa";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const categories = ["All", "SEO Writing", "Content Strategy", "Research Tips", "Freelancing", "Social Media", "Academic Writing"];

const featured = {
  id: 0,
  category: "Content Strategy",
  title: "Why Great Content Writing Is the Highest ROI Marketing Investment in 2025",
  excerpt: "Paid ads stop the moment you stop paying. Great content compounds — it ranks, shares, converts, and builds authority for years. Here's the data behind why content writing is now the single highest-return investment for brands of every size.",
  author: "Priya Mehta",
  date: "April 28, 2025",
  readTime: "8 min read",
  tag: "Must Read",
  gradient: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
};

const posts = [
  {
    id: 1,
    category: "SEO Writing",
    title: "10 SEO Writing Secrets That Actually Move Rankings in 2025",
    excerpt: "Forget keyword stuffing. Modern SEO writing is about topical authority, semantic depth, and E-E-A-T signals. We break down the exact tactics our writers use to land on page one.",
    author: "Arjun Kapoor",
    date: "April 22, 2025",
    readTime: "6 min read",
    tag: "SEO",
    color: "#fff0f6",
    accent: "rgb(236,72,153)",
  },
  {
    id: 2,
    category: "Academic Writing",
    title: "How to Write a Research Paper That Actually Gets Published",
    excerpt: "A step-by-step breakdown of how to structure arguments, cite sources correctly, and present findings that journal editors can't ignore.",
    author: "Dr. Sneha Rao",
    date: "April 18, 2025",
    readTime: "10 min read",
    tag: "Academic",
    color: "#f0f7ff",
    accent: "rgb(59,130,246)",
  },
  {
    id: 3,
    category: "Freelancing",
    title: "How UrsWriter's Clients 3x Their Content Output Without Hiring In-House",
    excerpt: "Scaling content without scaling headcount sounds impossible — until you see how smart businesses are outsourcing their entire content operations.",
    author: "Neha Gupta",
    date: "April 14, 2025",
    readTime: "5 min read",
    tag: "Business",
    color: "#f0fff4",
    accent: "rgb(16,185,129)",
  },
  {
    id: 4,
    category: "Social Media",
    title: "The Anatomy of a Viral LinkedIn Post (And How to Write One)",
    excerpt: "We analyzed 500 viral LinkedIn posts and found 7 patterns every single one shared. Here's how to engineer shareability into your writing.",
    author: "Riya Sharma",
    date: "April 10, 2025",
    readTime: "7 min read",
    tag: "Social Media",
    color: "#fffbf0",
    accent: "rgb(245,158,11)",
  },
  {
    id: 5,
    category: "Research Tips",
    title: "The UrsWriter Research Framework: How We Fact-Check Every Article",
    excerpt: "Trust is built one accurate sentence at a time. Here's the internal research and fact-checking process our team follows for every single piece we write.",
    author: "Mohit Verma",
    date: "April 6, 2025",
    readTime: "6 min read",
    tag: "Process",
    color: "#f5f0ff",
    accent: "rgb(139,92,246)",
  },
  {
    id: 6,
    category: "Content Strategy",
    title: "Blog Frequency vs. Blog Quality: The Debate Is Finally Settled",
    excerpt: "Post every day or post one great piece a week? We ran the data on 200 client blogs and the answer will surprise content managers everywhere.",
    author: "Priya Mehta",
    date: "April 2, 2025",
    readTime: "8 min read",
    tag: "Strategy",
    color: "#fff0f6",
    accent: "rgb(236,72,153)",
  },
];

const topics = [
  "Content Writing", "SEO Tips", "Research Papers", "Ghostwriting",
  "Social Media", "Blog Writing", "Academic Help", "Brand Voice",
  "Thesis Writing", "Copywriting",
];

// ─── BLOG CARD ────────────────────────────────────────────────────────────────

function BlogCard({ post, index }) {
  const cardRef = useRef(null);
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const setStatic = () => {
      card.style.background = `linear-gradient(#fff,#fff) padding-box, conic-gradient(from 0deg,#f0f0f0,#f0f0f0) border-box`;
      card.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
    };

    const animate = () => {
      if (!isHovering.current) return;
      angleRef.current = (angleRef.current + 1.5) % 360;
      const deg = angleRef.current;
      card.style.background = `linear-gradient(#fff,#fff) padding-box, conic-gradient(from ${deg}deg,#fff 0deg,#fff 60deg,rgb(236,72,153) 120deg,#fff 180deg,#fff 360deg) border-box`;
      card.style.boxShadow = "0 20px 50px rgba(236,72,153,0.15)";
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group h-full"
    >
      <div
        ref={cardRef}
        className="relative h-full flex flex-col overflow-hidden"
        style={{ border: "2.5px solid transparent", borderRadius: 20, padding: "28px 24px", transition: "box-shadow 0.4s ease" }}
      >
        {/* top color bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: post.accent, borderRadius: "20px 20px 0 0",
          transform: "scaleX(0)", transformOrigin: "left",
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
        }} className="group-hover:[transform:scaleX(1)]!" />

        {/* Tag + category */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", padding: "4px 10px", borderRadius: 100,
            background: post.color, color: post.accent,
          }}>{post.tag}</span>
          <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{post.category}</span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: "1.1rem", fontWeight: 700, color: "#111827",
          lineHeight: 1.4, marginBottom: 12, letterSpacing: "-0.02em",
          transition: "color 0.3s",
        }} className="group-hover:!text-pink-500">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
          {post.excerpt}
        </p>

        {/* Meta */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid #f3f4f6" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: `linear-gradient(135deg, ${post.accent}, ${post.accent}88)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0,
            }}>
              {post.author[0]}
            </div>
            <div>
              <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#374151" }}>{post.author}</div>
              <div style={{ fontSize: "0.72rem", color: "#9ca3af" }}>{post.date}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.75rem", color: "#9ca3af" }}>
            <FaClock style={{ fontSize: 10 }} />
            {post.readTime}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main style={{ background: "#f7f8fc", overflow: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{ background: "#eef1f7", paddingTop: 80, paddingBottom: 0, paddingInline: 24, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: -40, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: 40 }}>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 28, height: 2, background: "rgb(236,72,153)" }} />
              <p style={{ color: "rgb(236,72,153)", letterSpacing: "4px", textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 700 }}>
                Our Blog
              </p>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 700, color: "#111827", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Insights, Tips &<br />
              <span style={{ color: "rgb(236,72,153)" }}>Writing Wisdom.</span>
            </h1>

            <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.75, maxWidth: 420, marginBottom: 32 }}>
              Expert advice on content writing, SEO, research, and building a brand voice that converts — straight from the UrsWriter team.
            </p>

            {/* Search bar */}
            <div style={{ position: "relative", maxWidth: 400 }}>
              <FaSearch style={{
                position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
                color: "#9ca3af", fontSize: 13,
              }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: "100%", padding: "13px 16px 13px 42px",
                  borderRadius: 12, border: "1.5px solid #e5e7eb",
                  background: "#fff", fontSize: "0.9rem", color: "#111827",
                  outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={e => { e.target.style.borderColor = "rgb(236,72,153)"; e.target.style.boxShadow = "0 0 0 3px rgba(236,72,153,0.1)"; }}
                onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <img src="/images/blog.png" alt="blog" style={{ width: 440, objectFit: "contain" }}
              onError={e => { e.target.style.display = "none"; }} />
          </motion.div>

        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section style={{ padding: "60px 24px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            style={{
              background: featured.gradient,
              borderRadius: 24,
              padding: "52px 56px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 40,
              alignItems: "center",
              border: "1.5px solid #fce7f3",
              boxShadow: "0 8px 40px rgba(236,72,153,0.08)",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* decorative circle */}
            <div style={{ position: "absolute", right: -60, top: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(236,72,153,0.06)", pointerEvents: "none" }} />

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 100, background: "rgb(236,72,153)", color: "#fff" }}>
                  ✦ {featured.tag}
                </span>
                <span style={{ fontSize: "0.8rem", color: "#9ca3af" }}>{featured.category}</span>
              </div>

              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, color: "#111827", lineHeight: 1.3, letterSpacing: "-0.03em", marginBottom: 16, maxWidth: 640 }}>
                {featured.title}
              </h2>

              <p style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.75, maxWidth: 580, marginBottom: 28 }}>
                {featured.excerpt}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, rgb(236,72,153), #f9a8d4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>
                    {featured.author[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>{featured.author}</div>
                    <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{featured.date} · {featured.readTime}</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 28px rgba(236,72,153,0.3)" }}
              style={{
                padding: "14px 24px", borderRadius: 12, background: "rgb(236,72,153)",
                color: "#fff", fontWeight: 700, fontSize: "0.88rem", border: "none",
                cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
                whiteSpace: "nowrap", flexShrink: 0,
              }}
            >
              Read Article <FaArrowRight style={{ fontSize: 11 }} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section style={{ padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Section header + filter */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 36 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p style={{ color: "rgb(236,72,153)", letterSpacing: "4px", textTransform: "uppercase", fontSize: "0.72rem", fontWeight: 700, marginBottom: 8 }}>Latest Posts</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#111827", letterSpacing: "-0.03em" }}>
                From the UrsWriter Desk
              </h2>
            </motion.div>
          </div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "7px 18px", borderRadius: 100, fontSize: "0.82rem", fontWeight: 600,
                  border: "none", cursor: "pointer", transition: "all 0.25s ease",
                  background: activeCategory === cat ? "rgb(236,72,153)" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#6b7280",
                  boxShadow: activeCategory === cat ? "0 4px 14px rgba(236,72,153,0.28)" : "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Two-column layout: cards + sidebar */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 32, alignItems: "start" }}>

            {/* Cards */}
            <div>
              {filtered.length === 0 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "60px 0", color: "#9ca3af" }}>
                  <p style={{ fontSize: "1.1rem" }}>No articles found. Try a different search.</p>
                </motion.div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                  {filtered.map((post, i) => (
                    <BlogCard key={post.id} post={post} index={i} />
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

              {/* Popular Topics */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ background: "#fff", borderRadius: 20, padding: "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                  <FaTag style={{ color: "rgb(236,72,153)", fontSize: 13 }} />
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827" }}>Popular Topics</h4>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {topics.map((topic, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.75rem", fontWeight: 600, padding: "5px 12px", borderRadius: 100,
                        background: "#fdf2f8", color: "rgb(236,72,153)",
                        border: "1px solid #fce7f3", cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgb(236,72,153)"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#fdf2f8"; e.currentTarget.style.color = "rgb(236,72,153)"; }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ background: "linear-gradient(135deg, #fdf2f8, #fce7f3)", borderRadius: 20, padding: "28px 24px", border: "1.5px solid #fce7f3" }}
              >
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: 8 }}>
                  Get Writing Tips Weekly
                </h4>
                <p style={{ fontSize: "0.82rem", color: "#6b7280", lineHeight: 1.6, marginBottom: 18 }}>
                  Join 5,000+ readers getting actionable content writing insights every Tuesday.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{
                    width: "100%", padding: "10px 14px", borderRadius: 10,
                    border: "1.5px solid #fce7f3", background: "#fff",
                    fontSize: "0.85rem", color: "#111827", outline: "none",
                    marginBottom: 10,
                  }}
                />
                <button
                  style={{
                    width: "100%", padding: "11px", borderRadius: 10,
                    background: "rgb(236,72,153)", color: "#fff",
                    fontWeight: 700, fontSize: "0.85rem", border: "none", cursor: "pointer",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 20px rgba(236,72,153,0.35)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Subscribe Free →
                </button>
              </motion.div>

              {/* Recent Posts mini list */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ background: "#fff", borderRadius: 20, padding: "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
              >
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: 20 }}>Recent Posts</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {posts.slice(0, 4).map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer" }}
                      onMouseEnter={e => e.currentTarget.querySelector("p").style.color = "rgb(236,72,153)"}
                      onMouseLeave={e => e.currentTarget.querySelector("p").style.color = "#374151"}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgb(236,72,153)", flexShrink: 0, marginTop: 6 }} />
                      <div>
                        <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151", lineHeight: 1.4, marginBottom: 4, transition: "color 0.2s" }}>{p.title}</p>
                        <span style={{ fontSize: "0.72rem", color: "#9ca3af" }}>{p.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
              borderRadius: 24,
              padding: "56px 60px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: 40,
              border: "1.5px solid #fce7f3",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div>
              <p style={{ color: "rgb(236,72,153)", letterSpacing: "4px", textTransform: "uppercase", fontSize: "0.72rem", fontWeight: 700, marginBottom: 12 }}>
                Need Content Written?
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.25, marginBottom: 10 }}>
                Let our experts write content<br />that ranks and converts.
              </h2>
              <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: 1.7 }}>
                From blog posts to research papers — we've got your content covered.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 12px 28px rgba(236,72,153,0.35)" }}
                style={{ padding: "14px 30px", borderRadius: 12, background: "rgb(236,72,153)", color: "#fff", fontWeight: 700, fontSize: "0.9rem", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}
              >
                Start Your Project <FaArrowRight style={{ fontSize: 11 }} />
              </motion.button>
              <p style={{ textAlign: "center", fontSize: "0.73rem", color: "#9ca3af" }}>Free consultation · No commitment</p>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}