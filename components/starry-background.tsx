export function StarryBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1230] via-background to-[#050810]" />
      <div className="stars-layer-1 absolute inset-0" />
      <div className="stars-layer-2 absolute inset-0" />
      <div className="stars-layer-3 absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(216,183,106,0.06)_0%,transparent_55%)]" />
    </div>
  )
}
