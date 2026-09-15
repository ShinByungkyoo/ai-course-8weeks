export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Blobs */}
      <div
        className="blob"
        style={{
          width: 500,
          height: 500,
          top: "-10%",
          left: "-10%",
          background:
            "radial-gradient(circle at 30% 30%, #c4b5fd, transparent 70%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="blob"
        style={{
          width: 420,
          height: 420,
          top: "20%",
          right: "-8%",
          background:
            "radial-gradient(circle at 30% 30%, #fbcfe8, transparent 70%)",
          animationDelay: "-7s",
        }}
      />
      <div
        className="blob"
        style={{
          width: 380,
          height: 380,
          bottom: "-15%",
          left: "30%",
          background:
            "radial-gradient(circle at 30% 30%, #fed7aa, transparent 70%)",
          animationDelay: "-14s",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid" />
    </div>
  );
}
