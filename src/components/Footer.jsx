export default function Footer({ profile, isMobile }) {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: isMobile ? "20px" : "24px 32px" }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap", gap: 8,
      }}>
        <span style={{
          fontFamily: "JetBrains Mono, monospace", fontSize: 10,
          color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.1em",
        }}>
          © {new Date().getFullYear()} {profile.name || profile.login}
        </span>

        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "JetBrains Mono, monospace", fontSize: 10,
              color: "var(--text-faint)", textDecoration: "none",
              textTransform: "uppercase", letterSpacing: "0.1em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text-faint)"}
          >
            @{profile.login}
          </a>

          {/* Tiny star decoration */}
          <span style={{ color: "var(--text-faint)", fontSize: 8 }}>✦</span>

          <span style={{
            fontFamily: "JetBrains Mono, monospace", fontSize: 10,
            color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.1em",
          }}>
            Built with React + Vite
          </span>
        </div>
      </div>
    </footer>
  );
}
