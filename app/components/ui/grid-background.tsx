import React from "react";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Grid background with sky blue theme */}
      <div
        className="absolute inset-0 bg-[#0A3D62]"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: "linear-gradient(to right, rgba(0,191,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,191,255,0.1) 1px, transparent 1px)"
        }}
      />
      
      {/* Subtle radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0A3D62] [mask-image:radial-gradient(ellipse_at_center,transparent_60%,#0A3D62)]"></div>
    </div>
  );
} 