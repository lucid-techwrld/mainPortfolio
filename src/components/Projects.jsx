import { motion, AnimatePresence } from "framer-motion";
import LangDot from "./LangDot";
import { IconStar, IconFork, IconExternalLink } from "./Icons";

export default function Projects({ repos, languages, activeFilter, setActiveFilter, isMobile }) {
  const filteredRepos = activeFilter === "All"
    ? repos
    : repos.filter((r) => r.language === activeFilter);

  return (
    <section id="projects" style={{ marginBottom: isMobile ? 64 : 96 }}>
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "flex-end",
        justifyContent: "space-between",
        marginBottom: 28, gap: 16,
      }}>
        <div>
          <div className="section-label" style={{ marginBottom: 10 }}>Work</div>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 700,
            fontSize: isMobile ? "clamp(24px, 7vw, 32px)" : "clamp(26px, 3vw, 38px)",
            letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text-primary)",
          }}>
            Projects
          </h2>
        </div>

        {/* Filter row */}
        <div style={{
          display: "flex", gap: 8,
          flexWrap: isMobile ? "nowrap" : "wrap",
          overflowX: isMobile ? "auto" : "visible",
          paddingBottom: isMobile ? 4 : 0,
        }}>
          {["All", ...languages].map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveFilter(lang)}
              className={`filter-btn${activeFilter === lang ? " active" : ""}`}
              style={{ flexShrink: 0 }}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(320px, 1fr))",
        gap: isMobile ? 12 : 14,
      }}>
        <AnimatePresence mode="popLayout">
          {filteredRepos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ delay: i * 0.05, duration: 0.38 }}
              className="card"
              style={{
                padding: isMobile ? "18px 18px 16px" : "26px 26px 22px",
                textDecoration: "none",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                minHeight: isMobile ? 160 : 210,
              }}
            >
              <div>
                <div style={{
                  display: "flex", alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: 10, gap: 8,
                }}>
                  <h3 style={{
                    fontFamily: "Syne, sans-serif", fontWeight: 700,
                    fontSize: isMobile ? 15 : 17,
                    letterSpacing: "-0.025em",
                    color: "var(--text-primary)", lineHeight: 1.3,
                  }}>
                    {repo.name}
                  </h3>
                  <span style={{ color: "var(--text-muted)", flexShrink: 0, marginTop: 1 }}>
                    <IconExternalLink size={13} />
                  </span>
                </div>
                <p style={{
                  fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65,
                  display: "-webkit-box", WebkitLineClamp: isMobile ? 2 : 3,
                  WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>
                  {repo.description || "Open-source project on GitHub."}
                </p>
              </div>
              <div style={{
                marginTop: 16, paddingTop: 14,
                borderTop: "1px solid var(--border)",
                display: "flex", alignItems: "center", gap: 12,
                fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "var(--text-muted)",
              }}>
                {repo.language && (
                  <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <LangDot lang={repo.language} /> {repo.language}
                  </span>
                )}
                <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <IconStar /> {repo.stargazers_count}
                </span>
                {repo.forks_count > 0 && (
                  <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <IconFork /> {repo.forks_count}
                  </span>
                )}
                <span style={{
                  marginLeft: "auto", fontSize: 10,
                  color: "var(--text-faint)",
                  textTransform: "uppercase", letterSpacing: "0.05em",
                }}>
                  {repo.updated_at ? new Date(repo.updated_at).getFullYear() : ""}
                </span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
