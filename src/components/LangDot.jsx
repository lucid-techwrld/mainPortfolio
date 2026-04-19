const langClassMap = {
  JavaScript: "lang-dot-js",
  TypeScript:  "lang-dot-ts",
  Python:      "lang-dot-py",
  HTML:        "lang-dot-html",
  CSS:         "lang-dot-css",
  Java:        "lang-dot-java",
  Go:          "lang-dot-go",
  Rust:        "lang-dot-rust",
  "C++":       "lang-dot-cpp",
  Ruby:        "lang-dot-rb",
};

export default function LangDot({ lang }) {
  const cls = langClassMap[lang] || "lang-dot-default";
  return (
    <span
      className={cls}
      style={{ width: 8, height: 8, borderRadius: "50%", display: "inline-block", flexShrink: 0 }}
    />
  );
}
