import { motion } from "framer-motion";

const STACK = [
  {
    category: "Runtime & Languages",
    icon: "⬡",
    items: [
      { name: "Node.js", desc: "REST APIs, event-driven services, streaming", level: 95 },
      { name: "Go",      desc: "High-performance microservices & CLIs",        level: 80 },
      { name: "JavaScript / TypeScript", desc: "Full-stack, type-safe codebases", level: 90 },
    ],
  },
  {
    category: "Databases & Caching",
    icon: "◈",
    items: [
      { name: "PostgreSQL", desc: "Relational data, complex queries, migrations", level: 85 },
      { name: "Redis",      desc: "Caching, pub/sub, session management",        level: 80 },
      { name: "MongoDB",    desc: "Document stores, aggregation pipelines",       level: 75 },
    ],
  },
  {
    category: "Auth & Security",
    icon: "◎",
    items: [
      { name: "OAuth 2.0 / OIDC", desc: "Third-party auth flows, token lifecycle", level: 85 },
      { name: "JWT",              desc: "Stateless auth, refresh token rotation",  level: 90 },
      { name: "Role-based Access", desc: "Fine-grained permissions & middleware",  level: 80 },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    icon: "⬢",
    items: [
      { name: "Docker",     desc: "Containerisation, multi-stage builds",          level: 80 },
      { name: "REST / GraphQL", desc: "API design, versioning, documentation",     level: 90 },
      { name: "CI / CD",    desc: "GitHub Actions, automated testing & deploys",   level: 75 },
    ],
  },
];

function StackBar({ level, delay }) {
  return (
    <div style={{ height: 2, background: "var(--border)", borderRadius: 99, overflow: "hidden", marginTop: 8 }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "100%",
          background: "linear-gradient(90deg, var(--accent), var(--accent-cyan))",
          borderRadius: 99,
          boxShadow: "0 0 6px rgba(99,179,237,0.6)",
        }}
      />
    </div>
  );
}

export default function Stack({ isMobile }) {
  return (
    <section id="stack" style={{ marginBottom: isMobile ? 64 : 96 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label" style={{ marginBottom: 14 }}>Backend</div>
        <div style={{
          display: "flex",
          alignItems: isMobile ? "flex-start" : "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: 12, marginBottom: 10,
        }}>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 700,
            fontSize: isMobile ? "clamp(24px, 7vw, 32px)" : "clamp(26px, 3vw, 38px)",
            letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text-primary)",
          }}>
            Tech Stack
          </h2>
        </div>

        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 520, marginBottom: 40 }}>
          Beyond what GitHub shows — the backend infrastructure, auth systems, and data layers I build with day-to-day.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: 16,
        }}>
          {STACK.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: isMobile ? "22px 20px" : "28px 28px",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--border-glow)";
                e.currentTarget.style.boxShadow = "0 0 28px rgba(99,179,237,0.07)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Corner glow */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: 120, height: 120,
                background: "radial-gradient(circle at top right, rgba(99,179,237,0.06), transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{
                  fontSize: 18, color: "var(--accent)",
                  fontFamily: "JetBrains Mono, monospace",
                  lineHeight: 1,
                }}>
                  {group.icon}
                </span>
                <span style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11, textTransform: "uppercase",
                  letterSpacing: "0.1em", color: "var(--accent)",
                }}>
                  {group.category}
                </span>
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {group.items.map((item, ii) => (
                  <div key={item.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                      <span style={{
                        fontFamily: "Syne, sans-serif", fontWeight: 700,
                        fontSize: 14, color: "var(--text-primary)",
                      }}>
                        {item.name}
                      </span>
                      <span style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: 10, color: "var(--text-muted)",
                        flexShrink: 0,
                      }}>
                        {item.level}%
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55, marginTop: 3 }}>
                      {item.desc}
                    </p>
                    <StackBar level={item.level} delay={gi * 0.08 + ii * 0.06 + 0.2} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
