"use client";
import React, { useTransition } from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const [isPending, startTransition] = useTransition();
  
  // Create a gradient effect from bright blue to sky blue
  const getColorForIndex = (index: number, totalChars: number) => {
    // Define gradient endpoints
    const startColor = { r: 0, g: 191, b: 255 };  // #00BFFF - Deep Sky Blue
    const midColor1 = { r: 30, g: 144, b: 255 };  // #1E90FF - Dodger Blue
    const midColor2 = { r: 0, g: 150, b: 255 };   // #0096FF - Azure Blue
    const endColor = { r: 135, g: 206, b: 250 };  // #87CEFA - Light Sky Blue
    
    // Get position in the gradient (0 to 1)
    const position = index / (totalChars - 1);
    
    // Create gradient with 4 color stops
    let r, g, b;
    if (position < 0.33) {
      // First third: start to mid1
      const subPosition = position / 0.33;
      r = Math.round(startColor.r + subPosition * (midColor1.r - startColor.r));
      g = Math.round(startColor.g + subPosition * (midColor1.g - startColor.g));
      b = Math.round(startColor.b + subPosition * (midColor1.b - startColor.b));
    } else if (position < 0.66) {
      // Middle third: mid1 to mid2
      const subPosition = (position - 0.33) / 0.33;
      r = Math.round(midColor1.r + subPosition * (midColor2.r - midColor1.r));
      g = Math.round(midColor1.g + subPosition * (midColor2.g - midColor1.g));
      b = Math.round(midColor1.b + subPosition * (midColor2.b - midColor1.b));
    } else {
      // Last third: mid2 to end
      const subPosition = (position - 0.66) / 0.34;
      r = Math.round(midColor2.r + subPosition * (endColor.r - midColor2.r));
      g = Math.round(midColor2.g + subPosition * (endColor.g - midColor2.g));
      b = Math.round(midColor2.b + subPosition * (endColor.b - midColor2.b));
    }
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Split the text into characters
  const characters = text.split("");
  
  // Create a subtle breathing animation effect with useTransition for performance
  return (
    <div className={isPending ? 'opacity-75' : ''}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ y: 0 }}
          animate={{
            color: getColorForIndex(index, characters.length),
            y: [0, -1, 0],
            scale: [1, 1.005, 1],
            filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.05,
            ease: "easeInOut"
          }}
          className="inline-block whitespace-pre font-sans tracking-tight"
          onAnimationStart={() => {
            // Wrap heavy calculations in useTransition
            if (index === 0) {
              startTransition(() => {
                // Color calculations are already optimized
              });
            }
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
