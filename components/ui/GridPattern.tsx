"use client";

import { useId, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  squaresClassName?: string;
  colors?: string[];
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  interactive?: boolean;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 30,
  className,
  squaresClassName,
  colors,
  maxOpacity = 0.5,
  duration = 3,
  repeatDelay = 1,
  interactive = false,
  ...props
}: GridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [mounted, setMounted] = useState(false);
  const [hoveredSquare, setHoveredSquare] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!interactive || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;

    const squareX = Math.floor(relativeX / width) * width + 1 + x;
    const squareY = Math.floor(relativeY / height) * height + 1 + y;

    setHoveredSquare({ x: squareX, y: squareY });
  };

  const handleMouseLeave = () => {
    setHoveredSquare(null);
  };

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        interactive && "pointer-events-auto",
        !interactive && "pointer-events-none",
        className
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
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {mounted && [...Array(numSquares)].map((_, i) => (
          <GridSquare
            key={i}
            width={width}
            height={height}
            maxOpacity={maxOpacity}
            duration={duration}
            className={squaresClassName}
            colors={colors}
          />
        ))}
        {interactive && hoveredSquare && (
           <motion.rect
             x={hoveredSquare.x}
             y={hoveredSquare.y}
             width={width - 1}
             height={height - 1}
             fill="currentColor"
             className={cn(
               squaresClassName,
               colors ? colors[Math.floor(Math.random() * colors.length)] : "text-blue-500"
             )}
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 0.8, scale: 1 }}
             exit={{ opacity: 0, scale: 0.8 }}
             transition={{ duration: 0.1 }}
           />
        )}
      </svg>
    </svg>
  );
}

function GridSquare({
  width,
  height,
  maxOpacity,
  duration,
  className,
  colors,
}: {
  width: number;
  height: number;
  maxOpacity: number;
  duration: number;
  className?: string;
  colors?: string[];
}) {
  const [randomColor, setRandomColor] = useState<string>("");
  
  useEffect(() => {
    if (colors && colors.length > 0) {
      setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
    }
  }, [colors]);

  return (
    <motion.rect
      width={width - 1}
      height={height - 1}
      fill="currentColor"
      className={cn(className, randomColor)}
      initial={{ opacity: 0, x: Math.floor(Math.random() * 80) * width + 1, y: Math.floor(Math.random() * 40) * height + 1 }}
      animate={{ opacity: [0, maxOpacity, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: Math.random() * 4,
        repeatType: "loop",
      }}
    />
  );
}
