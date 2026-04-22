"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight size={16} className="text-text-secondary/40 flex-shrink-0" />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-text-secondary hover:text-primary transition-colors truncate"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-dark font-medium truncate">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
