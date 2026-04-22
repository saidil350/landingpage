import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostPage from "@/components/blog/BlogPostPage";
import { blogPosts } from "@/data/blog-posts";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostParams) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - MRS Plastic Packaging`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["MRS Plastic Packaging"],
    },
  };
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container-custom">
          <BlogPostPage post={post} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
