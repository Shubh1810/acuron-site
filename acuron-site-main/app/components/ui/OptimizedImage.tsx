import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 80,
  loading = 'lazy',
}: OptimizedImageProps) {
  // Default classes for the image
  const imageClasses = twMerge(
    'transition-opacity duration-300', 
    className
  );

  return (
    <div className={`relative ${fill ? 'h-full w-full' : ''}`}>
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        quality={quality}
        loading={loading}
        sizes={sizes}
        className={imageClasses}
        onLoadingComplete={(image) => {
          // Add a completed class when the image is loaded
          image.classList.add('opacity-100');
        }}
        style={{ opacity: priority ? 1 : 0 }}
      />
    </div>
  );
} 