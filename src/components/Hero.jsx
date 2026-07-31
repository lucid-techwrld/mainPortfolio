import { motion } from "framer-motion";
import { IconArrow, IconMail, IconMap, IconBriefcase, IconGithub, IconCode } from "./Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({ opacity: 1, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export default function Hero({ profile, isMobile }) {
  return (
    <section style={{ paddingTop: isMobile ? 104 : 168, paddingBottom: isMobile ? 56 : 96, position: "relative" }}>

      {/* Distant planet / orb — decorative */}
      {!isMobile && (
        <div style={{
          position: "absolute", top: 80, right: -60,
          width: 320, height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, rgba(99,179,237,0.08), rgba(139,92,246,0.04) 50%, transparent 75%)",
          border: "1px solid rgba(99,179,237,0.07)",
          pointerEvents: "none",
          zIndex: 0,
        }}>
          {/* Inner ring */}
          <div style={{
            position: "absolute", inset: 20,
            borderRadius: "50%",
            border: "1px solid rgba(99,179,237,0.05)",
          }} />
          {/* Outer ring */}
          <div style={{
            position: "absolute", inset: -30,
            borderRadius: "50%",
            border: "1px solid rgba(99,179,237,0.04)",
          }} />
        </div>
      )}

      {/* Status badge */}
      <motion.div custom={0} variants={fadeIn} initial="hidden" animate="visible" style={{ marginBottom: 32 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 14px", borderRadius: 999,
          border: "1px solid rgba(99,179,237,0.25)",
          background: "rgba(99,179,237,0.07)",
        }}>
          <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "block" }} />
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)" }}>
            Open to work
          </span>
        </div>
      </motion.div>

      {/* Name + avatar */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column-reverse" : "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: isMobile ? 16 : 32,
        marginBottom: isMobile ? 24 : 28,
      }}>
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: isMobile ? "clamp(40px, 11vw, 58px)" : "clamp(58px, 7.5vw, 92px)",
            lineHeight: 0.93, letterSpacing: "-0.04em",
            color: "var(--text-primary)", flex: 1,
            /* subtle blue glow on name */
            textShadow: "0 0 60px rgba(99,179,237,0.15)",
          }}
        >
          {profile.name || profile.login}
        </motion.h1>
        <motion.div custom={2} variants={fadeIn} initial="hidden" animate="visible" 
  style={{ flexShrink: 0, position: "relative", width: isMobile ? 68 : 280, height: isMobile ? 68 : 280 }}>
  
  {/* Orbit ring around avatar */}
{/*  <div style={{
    position: "relative", inset: -6,
    borderRadius: "50%",
    border: "1px solid rgba(99,179,237,0.2)",
    animation: "spin 12s linear infinite",
  }} /> */}
  {/*<style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style> */}
  
  <img
    src={profile.avatar_url}
    alt={profile.login}
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "2px solid var(--border)",
      objectFit: "cover",
      display: "block",
    }}
  />

  {/* Glow behind avatar 
  <div style={{
    position: "absolute", inset: -10, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(99,179,237,0.12), transparent 70%)",
    zIndex: -1,
  }} /> */}
</motion.div>
      </div>

      {/* Bio + meta + CTAs */}
      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
        <p style={{ fontSize: isMobile ? 15 : 18, color: "var(--text-secondary)", maxWidth: 540, lineHeight: 1.7, marginBottom: 16 }}>
          {profile.bio || "Building things for the web — open to collaborations."}
        </p>

        <div style={{
          display: "flex", flexWrap: "wrap",
          gap: isMobile ? 12 : 20,
          color: "var(--text-muted)",
          fontSize: 12,
          fontFamily: "JetBrains Mono, monospace",
          marginBottom: isMobile ? 28 : 36,
        }}>
          {profile.location && (
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <IconMap size={12} /> {profile.location}
            </span>
          )}
          {profile.company && (
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <IconBriefcase size={12} /> {profile.company}
            </span>
          )}
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <IconGithub size={12} /> {profile.followers} followers
          </span>
          {profile.public_repos && (
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <IconCode size={12} /> {profile.public_repos} repos
            </span>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 10, width: isMobile ? "100%" : "auto" }}>
          <a href="#projects" className="btn-accent" style={isMobile ? { justifyContent: "center" } : {}}>
            View Projects <IconArrow size={14} />
          </a>
          <a href={`mailto:${profile.email || ""}`} className="btn-ghost" style={isMobile ? { justifyContent: "center" } : {}}>
            <IconMail size={14} /> Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
