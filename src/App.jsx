import { useState, useEffect } from "react";
import githubData from "./data/githubData.json"; // <-- Import directly from build cache
import { useIsMobile } from "./hooks/useIsMobile";

import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import Marquee       from "./components/Marquee";
import About         from "./components/About";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Stack         from "./components/Stack";
import Skills        from "./components/Skills";
import Projects      from "./components/Projects";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";

/* ── Helpers ── */
function getUniqueLanguages(repos) {
  return [...new Set(repos.map((r) => r.language).filter(Boolean))];
}
function getTotalStars(repos) {
  return repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
}
function getLanguageStats(repos) {
  const counts = {};
  repos.forEach((r) => {
    if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
  });
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return Object.entries(counts)
    .map(([lang, count]) => ({ lang, pct: Math.round((count / total) * 100) }))
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 7);
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [scrolled,     setScrolled]     = useState(false);
  const isMobile = useIsMobile();

  /* Scroll listener for nav */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Data is now ready instantly at render time!
  const { profile, repos } = githubData;
  const languages    = getUniqueLanguages(repos);
  const totalStars   = getTotalStars(repos);
  const langStats    = getLanguageStats(repos);
  const currentProject = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)[0];

  const px = isMobile ? "0 20px" : "0 32px";

  return (
    <div style={{ background: "var(--bg-base)", minHeight: "100vh", fontFamily: "Outfit, sans-serif" }}>

      {/* Shooting stars */}
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />

      <Navbar profile={profile} scrolled={scrolled} isMobile={isMobile} />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: px }}>
        <Hero profile={profile} isMobile={isMobile} />

        <Marquee languages={languages} isMobile={isMobile} style={{ marginBottom: isMobile ? 64 : 96 }} />

        <div style={{ marginBottom: isMobile ? 64 : 96 }}>
          <CurrentlyBuilding isMobile={isMobile} />
        </div>

        <div style={{ marginBottom: isMobile ? 64 : 96 }}>
          <About
            profile={profile}
            languages={languages}
            totalStars={totalStars}
            currentProject={currentProject}
            isMobile={isMobile}
          />
        </div>

        <Skills
          languages={languages}
          langStats={langStats}
          isMobile={isMobile}
        />

        <Stack isMobile={isMobile} />

        <Projects
          repos={repos}
          languages={languages}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          isMobile={isMobile}
        />

        <Contact profile={profile} isMobile={isMobile} />
      </main>

      <Footer profile={profile} isMobile={isMobile} />
    </div>
  );
}
