"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Rss } from "lucide-react";
import { BlogPost, getBlogPostsByCategory } from "@/data/blog";
import { Button } from "@/components/ui/button";

const categories = [
  "All categories",
  "Company",
  "Product",
  "Design",
  "Engineering",
];

export default function BlogGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState("All categories");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getBlogPostsByCategory(activeCategory);
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, [activeCategory]);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="font-satoshi bg-gradient-to-br from-blue-50 to-slate-100 dark:from-[#141414] dark:to-[#143927] hero-gradient min-h-screen">
      <div className="container mx-auto px-4 py-12 pt-24">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-gray-400 mb-8">
          I write articles on whatever I find interesting..
        </p>

        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="flex space-x-4 mb-4 md:mb-0 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  category === activeCategory
                    ? "bg-zinc-800 text-white"
                    : "bg-transparent text-gray-400 hover:bg-zinc-800 hover:text-white"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <div className="relative w-full md:w-64">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                placeholder="Search..."
                className="pl-10 bg-zinc-800 border-zinc-700 text-white w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="text-gray-400 hover:text-white ml-2"
            >
              <Rss size={18} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block">
              <div className="bg-zinc-900 dark:bg-accent-foreground rounded-lg overflow-hidden flex flex-col hover:bg-zinc-800 transition-colors">
                {post.image && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-sm text-gray-400 mb-2 block">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-gray-400">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-3">
                        {post.authors.map((author, index) => (
                          <div
                            key={index}
                            className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-zinc-900"
                          >
                            <Image
                              src={author.image}
                              alt={author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
