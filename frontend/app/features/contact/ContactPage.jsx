"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const initialFormData = {
  name: "",
  company: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

function AnimatedBorderCard({ children, style = {} }) {
  const cardRef = useRef(null);
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const setStaticBorder = () => {
      card.style.background = `
        linear-gradient(#fff, #fff) padding-box,
        conic-gradient(from 0deg, #e5e7eb, #e5e7eb) border-box
      `;
      card.style.boxShadow = "0 2px 24px rgba(0,0,0,0.09)";
    };

    const animate = () => {
      if (!isHovering.current) return;
      angleRef.current = (angleRef.current + 1.5) % 360;
      const deg = angleRef.current;
      card.style.background = `
        linear-gradient(#fff, #fff) padding-box,
        conic-gradient(
          from ${deg}deg,
          #fff 0deg,
          #fff 60deg,
          rgb(255, 0, 123) 120deg,
          #fff 180deg,
          #fff 360deg
        ) border-box
      `;
      card.style.boxShadow = "0 0 40px rgba(255, 0, 123, 0.18)";
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      isHovering.current = true;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onLeave = () => {
      isHovering.current = false;
      cancelAnimationFrame(rafRef.current);
      setStaticBorder();
    };

    setStaticBorder();
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(rafRef.current);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        border: "3px solid transparent",
        borderRadius: 20,
        boxShadow: "0 2px 24px rgba(0,0,0,0.09)",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState({ status: "loading", message: "" });

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message right now.");
      }

      setFormData(initialFormData);
      setSubmitState({
        status: "success",
        message: result.message || "Your message has been sent successfully.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error.message || "Unable to send your message right now.",
      });
    }
  };

  const isSubmitting = submitState.status === "loading";

  return (
    <>
      <style>{`
        .glow-input {
          background: #f7f8fc;
          border: 1px solid #e5e7eb;
          color: #111827;
          border-radius: 8px;
          outline: none;
          width: 100%;
          padding: 9px 12px;
          font-size: 0.9rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .glow-input::placeholder { color: #aaa; }
        .glow-input:focus {
          border-color: rgb(255, 0, 123);
          box-shadow: 0 0 8px rgba(255, 0, 123, 0.2);
        }
        .glow-btn {
          background: rgb(255, 0, 123);
          color: white;
          border: none;
          padding: 11px 32px;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: box-shadow 0.3s, transform 0.2s;
          letter-spacing: 0.03em;
        }
        .glow-btn:hover {
          box-shadow: 0 0 28px rgba(255, 0, 123, 0.5);
          transform: translateY(-1px);
        }
        .glow-btn:disabled {
          cursor: not-allowed;
          opacity: 0.7;
          transform: none;
          box-shadow: none;
        }
        .info-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgb(255, 0, 123);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 0 14px rgba(255, 0, 123, 0.3);
        }
      `}</style>

      <main style={{ background: "#f7f8fc", overflow: "hidden" }}>

        {/* Hero */}
        <section style={{ background: "#eef1f7", paddingTop: 72, paddingBottom: 0, paddingInline: 24 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: 20 }}>
            <div>
              <p style={{ color: "rgb(255,0,123)", letterSpacing: "4px", marginBottom: 14, textTransform: "uppercase", fontSize: "0.78rem" }}>
                Contact us
              </p>
              <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 500, color: "#111827", lineHeight: 1.2 }}>
                When you need support,<br /> we&apos;re here to help.
              </h1>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <img src="/images/contact.png" alt="contact" style={{ width: 420, objectFit: "contain" }} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ padding: "60px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>

            {/* Animated Border Form Card */}
            <AnimatedBorderCard style={{ padding: "32px 36px" }}>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 600, color: "#111827", marginBottom: 22, lineHeight: 1.25 }}>
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {/* Row 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.88rem", color: "#374151", marginBottom: 6 }}>
                      Name <span style={{ color: "rgb(255,0,123)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="glow-input"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.88rem", color: "#374151", marginBottom: 6 }}>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      className="glow-input"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.88rem", color: "#374151", marginBottom: 6 }}>
                      Phone <span style={{ color: "rgb(255,0,123)" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className="glow-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.88rem", color: "#374151", marginBottom: 6 }}>
                      Email <span style={{ color: "rgb(255,0,123)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="glow-input"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ display: "block", fontSize: "0.88rem", color: "#374151", marginBottom: 6 }}>
                    Subject <span style={{ color: "rgb(255,0,123)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="glow-input"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontSize: "0.88rem", color: "#374151", marginBottom: 6 }}>
                    Message <span style={{ color: "rgb(255,0,123)" }}>*</span>
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="Message"
                    className="glow-input"
                    style={{ resize: "none" }}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {submitState.message ? (
                  <p
                    role="status"
                    style={{
                      color: submitState.status === "success" ? "#047857" : "#b91c1c",
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {submitState.message}
                  </p>
                ) : null}

                <div style={{ marginTop: 4 }}>
                  <button type="submit" className="glow-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </AnimatedBorderCard>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              style={{ paddingTop: 40 }}
            >
              <h2 style={{ fontSize: "1.8rem", fontWeight: 500, color: "#111827", marginBottom: 16, lineHeight: 1.25 }}>
                We&apos;re here to help.
              </h2>
              <p style={{ color: "#6b7280", marginBottom: 30, maxWidth: 520, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Have a question or project in mind? Reach out to us - we&apos;re here to help you bring your content ideas to life.
              </p>

              <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: 30, display: "flex", flexDirection: "column", gap: 28 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#111827", marginBottom: 6 }}>Office Location</h4>
                    <p style={{ color: "#6b7280", maxWidth: 400, lineHeight: 1.6, fontSize: "0.9rem" }}>
                      16th Floor, Esquare Building, Plot C-2, Sector 96, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
                  <div className="info-icon"><FaEnvelope /></div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#111827", marginBottom: 6 }}>Email us</h4>
                    <p style={{ color: "#6b7280", lineHeight: 1.8, fontSize: "0.9rem" }}>
                      info@urswriter.com<br />contact@urswriter.com
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
                  <div className="info-icon"><FaPhoneAlt /></div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#111827", marginBottom: 6 }}>Call us</h4>
                    <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>Phone: +91 87078 00410</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Google Map */}
        <section style={{ position: "relative", width: "100%", height: 500, overflow: "hidden" }}>
          <iframe
            src="https://www.google.com/maps?q=Sector+96+Noida&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", top: 0, left: 0, filter: "grayscale(5%)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

      </main>
    </>
  );
}
