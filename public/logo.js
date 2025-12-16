import React from "react";

const IconBird = ({ className = "w-6 h-6", ...props }) => (
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
    <title>Bird</title>

    {/* Body */}
    <path d="M4 14c2-4 6-6 10-6 3 0 5 1 6 3-1 1-2 2-4 2-2 0-3-1-4-1-2 0-4 1-6 2z" />

    {/* Wing */}
    <path d="M6 12c1.5 1.5 3.5 2 6 2" />

    {/* Head */}
    <circle cx="15.5" cy="8.5" r="2.5" />

    {/* Eye */}
    <circle cx="16" cy="8" r="0.5" fill="currentColor" />

    {/* Beak */}
    <path d="M18 9l2-1-2-1" />

    {/* Talons */}
    <path d="M10 16l-1 2" />
    <path d="M12 16l-1 2" />
  </svg>
);

export default IconBird;
