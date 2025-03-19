import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  slug: string;
  title: string;
  thumbnail: StaticImageData | string;
  cover: StaticImageData | string;
  shortDescription: string;
  description: string;
  tags: string[];
  stack: string[];
  scope: string[];
  demoUrl?: string;
  githubUrl?: string;
  date: string;
}
