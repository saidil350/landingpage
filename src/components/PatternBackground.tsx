import React from 'react';

interface PatternBackgroundProps {
  variant?: 'dots' | 'grid' | 'waves' | 'geometric';
  opacity?: number;
  color?: string;
  className?: string;
}

/**
 * PatternBackground - Reusable decorative pattern component
 * Used to add visual interest to sections like Hero, Statistics, etc.
 */
export default function PatternBackground({
  variant = 'dots',
  opacity = 0.1,
  color = 'currentColor',
  className = '',
}: PatternBackgroundProps) {
  const patternClasses = {
    dots: 'bg-pattern-dots',
    grid: 'bg-pattern-grid',
    waves: '', // Custom implementation needed
    geometric: '', // Custom implementation needed
  };

  const baseClasses = patternClasses[variant];

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${baseClasses} ${className}`}
      style={{
        opacity,
        color,
      }}
      aria-hidden="true"
    />
  );
}
