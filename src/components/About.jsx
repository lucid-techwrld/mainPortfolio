import { motion } from "framer-motion";
import { IconCode, IconGithub, IconLayers, IconZap } from "./Icons";

export default function About({ profile, languages, totalStars, currentProject, isMobile }) {
  return (
    <section id="about" style={{ marginBottom: isMobile ? 64 : 96 }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "5fr 4fr",
        gap: isMobile ? 40 : 56,
        alignItems: "start",
      }}>

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label" style={{ marginBottom: 14 }}>About</div>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 700,
            fontSize: isMobile ? "clamp(24px, 7vw, 32px)" : "clamp(26px, 3vw, 38px)",
            letterSpacing: "-0.03em", lineHeight: 1.18,
            color: "var(--text-primary)", marginBottom: 16,
          }}>
            Writing code that ships,<br />not just compiles.
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.78 }}>
            I&apos;m {profile.name || profile.login} — a developer with {profile.public_repos} public
            projects on GitHub. I work primarily in{" "}
            {languages.slice(0, 3).join(", ")}{languages.length > 3 ? " and more" : ""}.
            Every piece of code I push is intentional.
          </p>

          {/* Most starred card */}
          {currentProject && (
            <div style={{
              marginTop: 24,
              padding: isMobile ? "16px" : "20px 24px",
              borderRadius: 12,
              border: "1px solid rgba(99,179,237,0.2)",
              background: "rgba(99,179,237,0.05)",
              display: "flex", gap: 14, alignItems: "flex-start",
            }}>
              <div style={{
                flexShrink: 0, width: 36, height: 36, borderRadius: 8,
                background: "rgba(99,179,237,0.12)",
                border: "1px solid rgba(99,179,237,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--accent)",
              }}>
                <IconZap size={16} />
              </div>
              <div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", marginBottom: 4 }}>
                  Most Starred
                </div>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 15, color: "var(--text-primary)", marginBottom: 4 }}>
                  {currentProject.name}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>
                  {currentProject.description || "Check it out on GitHub →"}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Right: stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
        >
          {[
            { label: "Repos",     value: profile.public_repos, icon: <IconCode size={16} /> },
            { label: "Followers", value: profile.followers,    icon: <IconGithub size={16} /> },
            { label: "Following", value: profile.following,    icon: <IconLayers size={16} /> },
            { label: "Stars",     value: totalStars,           icon: <IconZap size={16} /> },
          ].map((s) => (
            <div key={s.label} className="stat-card" style={{ padding: isMobile ? "18px 14px" : "22px 20px" }}>
              <div style={{ color: "var(--accent)", marginBottom: 10 }}>{s.icon}</div>
              <div style={{
                fontFamily: "Syne, sans-serif", fontWeight: 800,
                fontSize: isMobile ? "1.7rem" : "2.2rem",
                color: "var(--text-primary)", lineHeight: 1, marginBottom: 6,
              }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
