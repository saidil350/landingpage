"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import BlogPostCard from "./BlogPostCard";
import BlogSearch from "./BlogSearch";
import BlogCategoryFilter from "./BlogCategoryFilter";
import { blogPosts, blogCategories } from "@/data/blog-posts";

const BlogPostList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "Semua" || post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">
              Blog & Artikel
            </h1>
            <p className="text-text-secondary">
              Wawasan industri, tips, dan update terbaru seputar kemasan
              plastik
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <BlogSearch
              onSearch={setSearchQuery}
              resultsCount={filteredPosts.length}
            />
          </div>
          <div className="lg:col-span-2">
            <BlogCategoryFilter
              categories={blogCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-dark mb-2">
            Tidak ada artikel ditemukan
          </h3>
          <p className="text-text-secondary">
            Coba kata kunci atau kategori lain
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogPostList;
