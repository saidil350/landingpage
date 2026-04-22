"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { NewsArticle } from "@/data";

interface BlogPostCardProps {
  post: NewsArticle & { slug: string };
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
            {post.image ? (
              <div className="w-full h-full flex items-center justify-center text-text-secondary/40">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-text-secondary/40">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary shadow-sm">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-text-secondary/80 text-sm mb-4 line-clamp-2 flex-1">
              {post.excerpt}
            </p>

            {/* Read More Link */}
            <div className="pt-4 border-t border-border">
              <span className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Baca Selengkapnya
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogPostCard;
