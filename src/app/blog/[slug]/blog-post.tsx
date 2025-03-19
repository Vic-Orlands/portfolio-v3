"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Mail, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogPost, getRelatedPosts } from "@/data/blog";
import ShareFooter from "./share-footer";

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      const posts = await getRelatedPosts(post.id);
      setRelatedPosts(posts);
    };

    fetchRelatedPosts();
  }, [post.id]);

  return (
    <div className="font-satoshi container mx-auto px-4 py-8 pt-24">
      <Link
        href="/blog"
        className="inline-flex items-center text-gray-400 hover:text-white mb-6"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to all blogs
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <article className="lg:w-2/3">
          <span className="text-sm text-blue-400 mb-2 block">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {post.authors.map((author, index) => (
                  <Avatar
                    key={index}
                    className="border-2 border-black w-10 h-10"
                  >
                    <AvatarImage
                      src={
                        typeof author.image === "string"
                          ? author.image
                          : author.image.src
                      }
                      alt={author.name}
                    />
                    <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium">
                  {post.authors.map((author) => author.name).join(", ")}
                </div>
                <div className="text-xs text-gray-400">
                  {post.authors.map((author) => author.role).join(", ")}
                </div>
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-400">
              <Calendar size={14} className="mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {post.image && (
            <div className="relative w-full h-80 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div
            className="font-inter prose prose-invert max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <ShareFooter post={post} />
        </article>

        {/* Aside - Related Posts */}
        <aside className="lg:w-1/3 mt-44">
          <div className="sticky top-8">
            <h3 className="text-xl font-semibold mb-6">More Articles</h3>
            <div className="space-y-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="block group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={relatedPost.image || "/images/placeholder.jpg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">
                        {relatedPost.category}
                      </span>
                      <h4 className="text-base font-medium group-hover:text-blue-400 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <span className="text-xs text-gray-400 mt-1 block">
                        {relatedPost.date}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 p-6 bg-zinc-900 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">
                Want to reach out to me?
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                For gigs, consultation, collaboration opportunities, or just to
                say hello.
              </p>
              <div className="space-y-4">
                <Link
                  href="mailto:chimezieinnocent39@gmail.com"
                  className="flex items-center space-x-2 bg-zinc-800 border-zinc-700 text-white text-sm p-2 rounded-md hover:bg-zinc-700"
                >
                  <Mail size={16} />
                  <span>chimezieinnocent39@gmail.com</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/Chimezie-Innocent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-zinc-800 border-zinc-700 text-white text-sm p-2 rounded-md hover:bg-zinc-700"
                >
                  <Linkedin size={16} />
                  <span>My LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
