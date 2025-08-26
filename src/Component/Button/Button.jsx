import React from "react";

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  full: "w-full py-3 text-lg",
};

export default function Button({
  children,
  size = "md",
  className = "",
  ...rest
}) {
  return (
    <>
      <button
        className={`rounded transition font-bold ${sizes[size]} ${className}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
