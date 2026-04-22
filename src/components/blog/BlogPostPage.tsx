"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { NewsArticle } from "@/data";

interface BlogPostPageProps {
  post: NewsArticle & { slug: string; content: string };
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const relatedPosts = React.useMemo(() => {
    // This would normally come from data, but for now we'll just return empty
    return [];
  }, [post.id]);

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = post.title;

    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=550,height=400");
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          Beranda
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary transition-colors">
          Blog
        </Link>
        <span>/</span>
        <span className="text-dark font-medium">{post.title}</span>
      </nav>

      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Kembali ke Blog</span>
      </Link>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-text-secondary">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>
              {new Date(post.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{post.readTime} baca</span>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-3 mt-6">
          <span className="text-sm text-text-secondary font-medium">Bagikan:</span>
          <div className="flex gap-2">
            <button
              onClick={() => handleShare("facebook")}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook size={18} />
            </button>
            <button
              onClick={() => handleShare("twitter")}
              className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter size={18} />
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Featured Image */}
      {post.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video flex items-center justify-center"
        >
          <div className="text-text-secondary/40">
            <svg
              className="w-24 h-24 mx-auto"
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
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-dark
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-text-secondary/90 prose-p:leading-relaxed prose-p:mb-6
          prose-ul:text-text-secondary/90 prose-ul:mb-6
          prose-li:mb-2
          prose-a:text-primary prose-a:no-underline hover:prose-a:text-secondary
          prose-strong:text-dark
        "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      {post.category && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-dark">Tags:</span>
            <span className="px-4 py-1.5 bg-bg-light text-text-secondary rounded-full text-sm">
              {post.category}
            </span>
          </div>
        </motion.div>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <h2 className="text-2xl font-bold text-dark mb-6">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-dark group-hover:text-primary transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      )}
    </article>
  );
};

export default BlogPostPage;
