import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostList from "@/components/blog/BlogPostList";

export const metadata = {
  title: "Blog & Artikel - MRS Plastic Packaging",
  description: "Wawasan industri, tips, dan update terbaru seputar kemasan plastik dan solusi packaging untuk bisnis Anda.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container-custom">
          <BlogPostList />
        </div>
      </div>
      <Footer />
    </main>
  );
}
