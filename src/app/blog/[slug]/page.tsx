import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "./blog-post";
import { getBlogPost, getBlogSlugs } from "@/data/blog";

type paramsType = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: paramsType;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

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

export default async function Post({ params }: { params: paramsType }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
