import React from "react";

const IconK = ({ className = "w-6 h-6", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <title>K</title>

    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="3"
      ry="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />

    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fontFamily="Inter, system-ui, sans-serif"
      fill="currentColor"
    >
      K
    </text>
  </svg>
);

export default IconK;