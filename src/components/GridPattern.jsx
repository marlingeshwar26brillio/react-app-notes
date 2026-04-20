"use client";

import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  squares,
  strokeDasharray = "0",
  className,
  ...props
}) {
  const id = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} strokeWidth={0} />
      {squares && (
        <svg aria-label="Grid squares" role="img" className="overflow-visible" x={x} y={y}>
          {squares.map(([squareX, squareY], index) => (
            <rect
              key={`${squareX}-${squareY}-${index}`}
              width={width - 1}
              height={height - 1}
              x={squareX * width + 1}
              y={squareY * height + 1}
              strokeWidth="0"
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default GridPattern;
