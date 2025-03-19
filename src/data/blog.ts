import { StaticImageData } from "next/image";
import TestImage from "@/assets/test image.png";

export interface Author {
  name: string;
  role: string;
  image: StaticImageData | string;
}

export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  image: StaticImageData | string;
  date: string;
  readTime: string;
  authors: Author[];
}

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "revolutionizing-software-development",
    category: "Engineering",
    title: "Revolutionizing software development with cutting-edge tools",
    excerpt:
      "Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.",
    content: `
      <p>In today's rapidly evolving technological landscape, software development tools play a crucial role in determining the efficiency, quality, and innovation potential of development teams. Our latest suite of engineering tools represents a significant leap forward in addressing the complex challenges faced by modern developers.</p>
      
      <h2>Streamlined Workflows</h2>
      <p>One of the most significant advantages of our new toolset is the seamless integration between different stages of the development pipeline. From initial planning to deployment and maintenance, developers can now transition between stages without the friction that traditionally accompanies context switching.</p>
      
      <p>Our integrated development environment (IDE) now features:</p>
      <ul>
        <li>Real-time collaboration capabilities that allow team members to code together regardless of location</li>
        <li>Smart code completion that adapts to your team's coding patterns</li>
        <li>Automated refactoring tools that maintain code quality throughout the development lifecycle</li>
      </ul>
      
      <h2>Accelerated Development Cycles</h2>
      <p>The traditional software development cycle often involves lengthy processes that delay feature delivery. Our new toolchain addresses this by introducing:</p>
      
      <p>Automated testing frameworks that can generate and run tests based on code changes, significantly reducing the time spent on quality assurance while maintaining high standards. This includes both unit tests and integration tests that simulate real-world usage scenarios.</p>
      
      <p>Hot-reloading capabilities that allow developers to see changes in real-time without restarting the application, making the development process more iterative and responsive.</p>
      
      <h2>Looking to the Future</h2>
      <p>As we continue to refine and expand our toolset, we're particularly excited about the potential for AI-assisted development. Our research teams are already working on next-generation features that will leverage machine learning to:</p>
      
      <ul>
        <li>Identify potential bugs before they make it into production</li>
        <li>Suggest optimizations based on performance analytics</li>
        <li>Generate documentation that evolves alongside your code</li>
      </ul>
      
      <p>Stay tuned for more updates as we continue to push the boundaries of what's possible in software development.</p>
      `,
    image: TestImage,
    date: "July 14, 2021",
    readTime: "5 min read",
    authors: [
      {
        name: "Remy Sharp",
        role: "Senior Engineer",
        image: TestImage,
      },
      {
        name: "Travis Howard",
        role: "Product Manager",
        image: TestImage,
      },
    ],
  },
  {
    id: "2",
    slug: "innovative-product-features",
    category: "Product",
    title: "Innovative product features that drive success",
    excerpt:
      "Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust integration capabilities.",
    content: `<p>Our newest product release is packed with innovative features designed to help your business thrive...</p>`,
    image: TestImage,
    date: "July 14, 2021",
    readTime: "4 min read",
    authors: [
      {
        name: "Erica Johns",
        role: "Product Director",
        image: TestImage,
      },
    ],
  },
  {
    id: "3",
    slug: "designing-for-the-future",
    category: "Design",
    title: "Designing for the future: trends and insights",
    excerpt:
      "Stay ahead of the curve with the latest design trends and insights. Our design team shares their vision for the future of digital experiences.",
    content: `<p>The design landscape is constantly evolving, and staying ahead of trends is essential...</p>`,
    image: TestImage,
    date: "July 14, 2021",
    readTime: "3 min read",
    authors: [
      {
        name: "Kate Morrison",
        role: "Lead Designer",
        image: TestImage,
      },
    ],
  },
  {
    id: "4",
    slug: "company-journey-milestones",
    category: "Company",
    title: "Our company's journey: milestones and achievements",
    excerpt:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leadership.",
    content: `<p>Since our founding, we've achieved many significant milestones worth celebrating...</p>`,
    image: TestImage,
    date: "July 14, 2021",
    readTime: "6 min read",
    authors: [
      {
        name: "Cindy Baker",
        role: "CEO",
        image: TestImage,
      },
    ],
  },
  {
    id: "5",
    slug: "pioneering-sustainable-engineering",
    category: "Engineering",
    title: "Pioneering sustainable engineering solutions",
    excerpt:
      "Learn about our commitment to sustainability and the innovative engineering solutions we're developing to address environmental challenges.",
    content: `<p>Sustainability is at the core of our engineering philosophy...</p>`,
    image: TestImage,
    date: "July 14, 2021",
    readTime: "5 min read",
    authors: [
      {
        name: "Agnes Walker",
        role: "Engineering Lead",
        image: TestImage,
      },
      {
        name: "Trevor Henderson",
        role: "Sustainability Officer",
        image: TestImage,
      },
    ],
  },
  {
    id: "6",
    slug: "maximizing-efficiency-product-updates",
    category: "Product",
    title: "Maximizing efficiency with our latest product updates",
    excerpt:
      "Our recent product updates are designed to help you maximize efficiency and achieve more. Get a first look at the new features and improvements.",
    content: `<p>We're constantly working to improve our products and help our users be more productive...</p>`,
    image: TestImage,
    date: "July 14, 2021",
    readTime: "4 min read",
    authors: [
      {
        name: "Travis Howard",
        role: "Product Manager",
        image: TestImage,
      },
    ],
  },
];

export async function getBlogPosts() {
  // In a real app, this would fetch from an API or database
  return blogPosts;
}

export async function getFeaturedBlogPosts(count = 6) {
  const posts = await getBlogPosts();
  return posts.slice(0, count);
}

export async function getBlogSlugs() {
  const posts = await getBlogPosts();
  return posts.map((post) => post.slug);
}

export async function getBlogPost(slug: string) {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getRelatedPosts(currentPostId: string, count = 3) {
  const posts = await getBlogPosts();
  return posts.filter((post) => post.id !== currentPostId).slice(0, count);
}

export async function getBlogPostsByCategory(category: string) {
  const posts = await getBlogPosts();

  if (category === "All categories") {
    return posts;
  }

  return posts.filter((post) => post.category === category);
}
