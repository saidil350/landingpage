import React from 'react';
import { motion } from 'framer-motion';

interface DecorativeBadgeProps {
  content: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

/**
 * DecorativeBadge - Floating decorative badges/elements
 * Used to add visual interest and branding to sections
 */
export default function DecorativeBadge({
  content,
  position = 'top-right',
  variant = 'primary',
  className = '',
}: DecorativeBadgeProps) {
  const positionClasses = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8',
  };

  const variantClasses = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    accent: 'bg-primary/10 text-primary border-primary/20',
  };

  const baseClasses = positionClasses[position];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`absolute ${baseClasses} px-4 py-2 rounded-full border backdrop-blur-sm ${variantClasses[variant]} ${className}`}
    >
      <span className="text-sm font-medium">{content}</span>
    </motion.div>
  );
}
