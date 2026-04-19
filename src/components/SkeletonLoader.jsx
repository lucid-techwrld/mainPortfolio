export default function SkeletonLoader({ isMobile }) {
  return (
    <div style={{ background: "var(--bg-base)", minHeight: "100vh", padding: isMobile ? "100px 20px 0" : "120px 32px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 24, marginBottom: 40, alignItems: "center" }}>
          <div className="skeleton" style={{ width: 72, height: 72, borderRadius: "50%" }} />
          <div style={{ flex: 1 }}>
            <div className="skeleton" style={{ width: isMobile ? "70%" : 280, height: 40, marginBottom: 12 }} />
            <div className="skeleton" style={{ width: isMobile ? "50%" : 200, height: 16 }} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 12, marginBottom: 32 }}>
          {[1, 2, 3, 4].map(i => <div key={i} className="skeleton" style={{ height: 90 }} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
          {[1, 2, 3, 4].map(i => <div key={i} className="skeleton" style={{ height: 180 }} />)}
        </div>
      </div>
    </div>
  );
}
