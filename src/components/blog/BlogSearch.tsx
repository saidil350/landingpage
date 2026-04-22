"use client";

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

interface BlogSearchProps {
  onSearch: (query: string) => void;
  resultsCount?: number;
}

const BlogSearch: React.FC<BlogSearchProps> = ({ onSearch, resultsCount }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/60"
          size={20}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari artikel..."
          className="w-full pl-12 pr-12 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary/60 hover:text-text-secondary transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {query && (
        <p className="mt-2 text-sm text-text-secondary/70">
          {resultsCount === 0
            ? "Tidak ada hasil ditemukan"
            : `Menampilkan ${resultsCount} hasil${resultsCount === 1 ? "" : ""}`}
        </p>
      )}
    </div>
  );
};

export default BlogSearch;
