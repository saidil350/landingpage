"use client";

import React from "react";
import { motion } from "framer-motion";

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogCategoryFilter: React.FC<BlogCategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onCategoryChange(category)}
          className={`
            px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
            ${
              activeCategory === category
                ? "bg-primary text-white shadow-lg shadow-primary/30"
                : "bg-white text-text-secondary hover:bg-bg-light hover:text-dark border border-border"
            }
          `}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default BlogCategoryFilter;
