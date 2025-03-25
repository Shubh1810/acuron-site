import React from "react";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Grid background only */}
      <div
        className="absolute inset-0 bg-[#051B20]"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: "linear-gradient(to right, rgba(20,184,166,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,184,166,0.05) 1px, transparent 1px)"
        }}
      />
      
      {/* Subtle radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#051B20] [mask-image:radial-gradient(ellipse_at_center,transparent_60%,#051B20)]"></div>
    </div>
  );
} 