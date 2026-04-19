import { motion } from "framer-motion";
import { IconGithub } from "./Icons";

export default function Navbar({ profile, scrolled, isMobile }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        background: scrolled ? "rgba(3,5,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: isMobile ? "0 20px" : "0 32px",
        height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily: "Syne, sans-serif", fontWeight: 800,
          fontSize: isMobile ? 15 : 17,
          color: "var(--text-primary)", textDecoration: "none",
          letterSpacing: "-0.03em",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          {/* Small orbit icon */}
          <span style={{ color: "var(--accent)", fontSize: 18 }}>✦</span>
          {profile.login}
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: isMobile ? 12 : 28 }}>
          {!isMobile && ["About", "Building", "Stack", "Skills", "Projects", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: isMobile ? "7px 12px" : "7px 16px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontSize: 12, fontWeight: 500,
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 12px rgba(99,179,237,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <IconGithub size={13} />{!isMobile && " GitHub"}
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
