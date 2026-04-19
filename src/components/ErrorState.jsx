export default function ErrorState({ message }) {
  return (
    <div style={{
      background: "var(--bg-base)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 20px",
    }}>
      <div style={{ textAlign: "center", color: "var(--text-secondary)", fontFamily: "JetBrains Mono, monospace" }}>
        <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, color: "var(--accent)" }}>
          Error
        </div>
        <div style={{ fontSize: 14 }}>{message}</div>
      </div>
    </div>
  );
}
