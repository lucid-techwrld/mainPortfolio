import LangDot from "./LangDot";

export default function Marquee({ languages, isMobile }) {
  const techItems = languages.length
    ? languages
    : ["JavaScript", "React", "TypeScript", "CSS", "HTML", "Node.js"];
  const items = [...techItems, ...techItems, ...techItems, ...techItems];

  return (
    <div
      className="marquee-wrap"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "15px 0",
        overflow: "hidden",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          gap: isMobile ? 32 : 52,
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {items.map((lang, i) => (
          <span
            key={i}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: isMobile ? 10 : 12,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
            }}
          >
            <LangDot lang={lang} />
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}
