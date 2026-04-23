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
        <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-text-secondary/40">
                <svg
                  className="h-16 w-16"
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
            <div className="absolute top-4 left-4">
              <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex items-center gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>
                  {new Date(post.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h3 className="mb-3 line-clamp-2 text-xl font-bold text-dark transition-colors group-hover:text-primary">
              {post.title}
            </h3>

            <p className="mb-4 flex-1 line-clamp-2 text-sm text-text-secondary/80">
              {post.excerpt}
            </p>

            <div className="border-t border-border pt-4">
              <span className="flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                Baca Selengkapnya
                <svg
                  className="h-4 w-4"
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
