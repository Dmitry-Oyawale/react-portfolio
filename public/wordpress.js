import React from "react";

const IconWordPress = ({ className = "w-6 h-6", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <title>WordPress</title>

    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />

    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="12"
      fontFamily="serif"
      fontWeight="700"
      fill="currentColor"
    >
      W
    </text>
  </svg>
);

export default IconWordPress;
