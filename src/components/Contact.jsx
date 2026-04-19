import { motion } from "framer-motion";
import { IconMail, IconGithub } from "./Icons";
import {FaWhatsapp, FaPhone} from "react-icons/fa"

export default function Contact({ profile, isMobile }) {
  return (
    <section id="contact" style={{ paddingBottom: isMobile ? 80 : 120 }}>
      <motion.div
        className="cta-strip"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center",
          padding: isMobile ? "44px 24px" : "72px 56px",
        }}
      >
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "5px 14px", borderRadius: 999,
          border: "1px solid rgba(99,179,237,0.25)",
          background: "rgba(99,179,237,0.07)",
          marginBottom: 24,
        }}>
          <span style={{
            fontFamily: "JetBrains Mono, monospace", fontSize: 10,
            textTransform: "uppercase", letterSpacing: "0.12em",
            color: "var(--accent)",
          }}>
            Let&apos;s talk
          </span>
        </div>

        <h2 style={{
          fontFamily: "Syne, sans-serif", fontWeight: 800,
          fontSize: isMobile ? "clamp(28px, 8vw, 44px)" : "clamp(38px, 5.5vw, 70px)",
          letterSpacing: "-0.04em", lineHeight: 1.05,
          color: "var(--text-primary)",
          marginBottom: 16, maxWidth: 560,
          textShadow: "0 0 60px rgba(99,179,237,0.12)",
        }}>
          Got a project?<br />Let&apos;s build it.
        </h2>

        <p style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 360, lineHeight: 1.75, marginBottom: 36 }}>
          I&apos;m currently available for freelance work and full-time roles. Drop me a message and let&apos;s figure it out.
        </p>

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 10, justifyContent: "center",
          width: isMobile ? "100%" : "auto",
        }}>
          <a
            href={`mailto:${profile.email || ""}`}
            className="btn-accent"
            style={isMobile ? { justifyContent: "center" } : {}}
          >
            <IconMail size={14} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: isMobile ? 220 : "none" }}>
              {profile.email || "Send an email"}
            </span>
          </a>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            style={isMobile ? { justifyContent: "center" } : {}}
          >
            <IconGithub size={14} /> GitHub Profile
          </a>
          <a
            href={`tel:${+2349116170656}`}
            className="btn-accent"
            style={isMobile ? { justifyContent: "center" } : {}}
          >
            <FaPhone size={14} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: isMobile ? 220 : "none" }}>
              Call-09116170656
            </span>
          </a>
          <a
            href="https://wa.me/+2347085948512"
            className="btn-ghost"
            style={isMobile ? { justifyContent: "center" } : {}}
          >
            <FaWhatsapp size={14} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: isMobile ? 220 : "none" }}>
              WhatsApp
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
