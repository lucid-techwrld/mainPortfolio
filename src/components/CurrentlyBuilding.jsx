import { motion } from "framer-motion";

export default function CurrentlyBuilding({ isMobile }) {
  return (
    <section id="building" style={{ marginBottom: isMobile ? 64 : 96 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label" style={{ marginBottom: 14 }}>Now</div>
        <h2 style={{
          fontFamily: "Syne, sans-serif", fontWeight: 700,
          fontSize: isMobile ? "clamp(24px, 7vw, 32px)" : "clamp(26px, 3vw, 38px)",
          letterSpacing: "-0.03em", lineHeight: 1.1,
          color: "var(--text-primary)", marginBottom: 32,
        }}>
          Currently Building
        </h2>

        {/* Main Pixora card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            position: "relative",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            overflow: "hidden",
            padding: isMobile ? "28px 22px" : "44px 48px",
          }}
        >
          {/* Background nebula glow */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 60% at 90% 10%, rgba(99,179,237,0.08) 0%, transparent 65%)," +
              "radial-gradient(ellipse 50% 50% at 5% 90%, rgba(139,92,246,0.07) 0%, transparent 65%)",
          }} />

          {/* Orbit rings decoration */}
          <div style={{
            position: "absolute", top: -60, right: -60,
            width: 240, height: 240, borderRadius: "50%",
            border: "1px solid rgba(99,179,237,0.06)",
            pointerEvents: "none",
          }}>
            <div style={{
              position: "absolute", inset: 28, borderRadius: "50%",
              border: "1px solid rgba(99,179,237,0.05)",
            }} />
            <div style={{
              position: "absolute", inset: 56, borderRadius: "50%",
              border: "1px solid rgba(99,179,237,0.04)",
            }} />
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Header row */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
              <div>
                {/* Live badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "5px 12px", borderRadius: 999, marginBottom: 14,
                  border: "1px solid rgba(99,179,237,0.25)",
                  background: "rgba(99,179,237,0.07)",
                }}>
                  <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "block" }} />
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)" }}>
                    In Development
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "Syne, sans-serif", fontWeight: 800,
                  fontSize: isMobile ? 28 : 38,
                  letterSpacing: "-0.04em", lineHeight: 1,
                  color: "var(--text-primary)", marginBottom: 6,
                }}>
                  Pixora
                </h3>
                <p style={{
                  fontFamily: "JetBrains Mono, monospace", fontSize: 11,
                  color: "var(--accent)", letterSpacing: "0.08em",
                }}>
                  pixora-web.pxxl.click
                </p>
              </div>

              {/* Visit link */}
              <a
                href="https://pixora-web.pxxl.click"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                style={{ flexShrink: 0, fontSize: 11 }}
              >
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Visit
              </a>
            </div>

            {/* Description */}
            <p style={{
              fontSize: isMobile ? 14 : 16, color: "var(--text-secondary)",
              lineHeight: 1.8, maxWidth: 620, marginBottom: 32,
            }}>
              Pixora is a cloud media delivery platform built specifically for African developers —
              offering fast, affordable, and reliable media infrastructure without the dollar-denominated
              pricing of global CDNs. Upload images and videos, transform them on the fly, and serve them
              through an optimised delivery network close to where African users actually are.
            </p>

            {/* Feature pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
              {[
                "Cloud Media Storage",
                "On-the-fly Transformations",
                "CDN Delivery",
                "Developer-first API",
                "Africa-optimised",
                "Pay-as-you-go",
              ].map((feat) => (
                <span key={feat} style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "6px 14px", borderRadius: 999,
                  background: "rgba(99,179,237,0.07)",
                  border: "1px solid rgba(99,179,237,0.18)",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11, color: "var(--accent)",
                  letterSpacing: "0.03em",
                }}>
                  ✦ {feat}
                </span>
              ))}
            </div>

            {/* Stack row */}
            <div style={{
              paddingTop: 24,
              borderTop: "1px solid var(--border)",
              display: "flex", flexWrap: "wrap",
              alignItems: "center", gap: isMobile ? 12 : 24,
            }}>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                Built with
              </span>
              {["Go", "Node.js", "PostgreSQL", "Redis", "React", "Docker"].map((tech) => (
                <span key={tech} style={{
                  fontFamily: "JetBrains Mono, monospace", fontSize: 11,
                  color: "var(--text-secondary)",
                  padding: "4px 10px", borderRadius: 6,
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
