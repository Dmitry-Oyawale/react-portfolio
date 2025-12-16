import React from "react";

const IconLink = ({ className = "w-6 h-6", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <title>Link</title>
    <path d="M10 13a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 7l-2 2" />
    <path d="M14 11a5 5 0 0 1 0 7l-2 2a5 5 0 0 1-7-7l2-2" />
  </svg>
);

export default IconLink;
