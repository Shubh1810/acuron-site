import React from "react";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* White base with light blue grid lines */}
      <div
        className="absolute inset-0 bg-white"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: "linear-gradient(to right, rgba(15,70,121,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,70,121,0.08) 1px, transparent 1px)"
        }}
      />
    </div>
  );
} 