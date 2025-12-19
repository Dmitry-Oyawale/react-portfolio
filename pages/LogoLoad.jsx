export default function LogoLoader() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      className="overflow-visible"
    >
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="40"
        className="fill-teal-400 font-bold animate-fade-in"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        K
      </text>

      <rect
        x="8"
        y="8"
        width="80"
        height="80"
        rx="16"
        ry="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        className="text-teal-400 logo-outline"
        />
    </svg>
  );
}
