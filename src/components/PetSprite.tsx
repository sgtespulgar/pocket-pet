export default function PetSprite() {
  return (
    <svg
      className="pet-sprite"
      viewBox="0 0 128 128"
      role="img"
      aria-label="Your baby virtual pet"
      shapeRendering="crispEdges"
    >
      {/* Body */}
      <rect x="32" y="24" width="64" height="72" fill="#F6C45B" />
      <rect x="24" y="40" width="80" height="48" fill="#F6C45B" />

      {/* Ears */}
      <rect x="32" y="16" width="16" height="16" fill="#F6C45B" />
      <rect x="80" y="16" width="16" height="16" fill="#F6C45B" />

      {/* Eyes */}
      <rect x="42" y="48" width="10" height="12" fill="#49352F" />
      <rect x="76" y="48" width="10" height="12" fill="#49352F" />

      {/* Cheeks */}
      <rect x="30" y="66" width="12" height="8" fill="#F39A92" />
      <rect x="86" y="66" width="12" height="8" fill="#F39A92" />

      {/* Mouth */}
      <rect x="56" y="70" width="16" height="5" fill="#49352F" />

      {/* Feet */}
      <rect x="32" y="88" width="20" height="12" fill="#E8A83E" />
      <rect x="76" y="88" width="20" height="12" fill="#E8A83E" />
    </svg>
  )
}
