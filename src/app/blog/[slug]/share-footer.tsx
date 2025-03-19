import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  ThreadsShareButton,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  ThreadsIcon,
} from "react-share";

interface ShareFooterProps {
  post: {
    title: string;
    slug: string;
  };
}

function ShareFooter({ post }: ShareFooterProps) {
  const [showShare, setShowShare] = useState(false);
  const url = process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`
    : `http://localhost:3000/blog/${post.slug}`;

  return (
    <div className="flex items-center justify-between border-t border-b border-gray-800 py-4 my-8">
      <div className="text-sm">Share this article</div>
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowShare(!showShare)}
        >
          <Share2 size={18} />
        </Button>

        {showShare && (
          <div className="absolute right-0 bottom-12 bg-background border border-gray-800 rounded-lg p-2 flex gap-2">
            <ThreadsShareButton url={url} title={post.title}>
              <ThreadsIcon size={32} round />
            </ThreadsShareButton>
            <FacebookShareButton url={url} title={post.title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={post.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title={post.title}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShareFooter;
