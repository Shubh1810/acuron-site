import React from "react";

export default function WhiteGridBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Grid background with white theme and subtle green grid */}
      <div
        className="absolute inset-0 bg-white"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: "linear-gradient(to right, rgba(21,140,7,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,140,7,0.08) 1px, transparent 1px)"
        }}
      />
      
      {/* Subtle white radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,white)]"></div>
      
      {/* Extra subtle circular glow effect */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-[#158C07]/5 blur-3xl"></div>
    </div>
  );
} 