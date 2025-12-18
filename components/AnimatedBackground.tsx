"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* 1. Static Grid Pattern */}
      {/* Creates a subtle technical grid resembling graph paper */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 2. Ambient Color Glows (Animated) */}
      {/* Top Left Glow - Purple/Blue */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-500/30 blur-[100px] animate-blob"></div>
      
      {/* Top Right Glow - Cyan/Blue */}
      <div className="absolute top-0 -right-20 h-96 w-96 rounded-full bg-cyan-500/30 blur-[100px] animate-blob animation-delay-2000"></div>
      
      {/* Bottom Center Glow - Subtle Indigo */}
      <div className="absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px] animate-blob animation-delay-4000"></div>
    </div>
  );
}

