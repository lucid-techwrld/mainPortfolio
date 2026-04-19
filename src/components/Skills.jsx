import { motion } from "framer-motion";
import LangDot from "./LangDot";

export default function Skills({ languages, langStats, isMobile }) {
  return (
    <section id="skills" style={{ marginBottom: isMobile ? 64 : 96 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label" style={{ marginBottom: 14 }}>Skills</div>
        <div style={{
          display: "flex",
          alignItems: isMobile ? "flex-start" : "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: 12, marginBottom: 32,
        }}>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 700,
            fontSize: isMobile ? "clamp(24px, 7vw, 32px)" : "clamp(26px, 3vw, 38px)",
            letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text-primary)",
          }}>
            Languages &amp; Tools
          </h2>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "var(--text-muted)" }}>
            based on github repos
          </span>
        </div>

        {/* Language bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {langStats.map((item, i) => (
            <motion.div
              key={item.lang}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 7 }}>
                <LangDot lang={item.lang} />
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "var(--text-secondary)", flex: 1 }}>
                  {item.lang}
                </span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "var(--text-muted)" }}>
                  {item.pct}%
                </span>
              </div>
              <div style={{ height: 3, background: "var(--bg-card)", borderRadius: 99, overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, var(--accent), var(--accent-cyan))",
                    borderRadius: 99,
                    boxShadow: "0 0 8px rgba(99,179,237,0.5)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chip grid */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 32 }}>
          {languages.map((lang) => (
            <div key={lang} className="skill-chip">
              <LangDot lang={lang} />
              {lang}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
