import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "./blog-post";
import { getBlogPost, getBlogSlugs } from "@/data/blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Sitemark Blog",
    };
  }

  return {
    title: `${post.title} | Sitemark Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default async function Post({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
