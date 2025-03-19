import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const spanHeader = spanRef.current;

    if (!heading || !spanHeader) return;

    const text = heading.innerText;
    const span = spanHeader.innerText;
    heading.innerHTML = "";
    spanHeader.innerHTML = "";

    const words = text.split(" ");
    const spanWords = span.split(" ");

    words.forEach((word, wordIndex) => {
      word.split("").forEach((char, charIndex) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.animationDelay = `${
          (wordIndex * word.length + charIndex) * 0.03
        }s`;
        heading.appendChild(span);
      });

      if (wordIndex < words.length - 1) {
        const space = document.createElement("b");
        space.innerText = " ";
        heading.appendChild(space);
      }
    });

    spanWords.forEach((word, wordIndex) => {
      word.split("").forEach((char, charIndex) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.animationDelay = `${
          (wordIndex * word.length + charIndex) * 0.03
        }s`;
        spanHeader.appendChild(span);
      });

      if (wordIndex < words.length - 1) {
        const space = document.createElement("b");
        space.innerText = " ";
        spanHeader.appendChild(space);
      }
    });
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
      {/* background color-gradient */}

      {/* rest of the section */}
      <div className="container ax-w-6xl mx-auto w-full pt-20">
        <div className="flex flex-col items-start space-y-6 md:space-y-8">
          <div className="overflow-hidden">
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-inter font-light tracking-wide animate-slide-down">
              <span className="inline-block w-4 h-[1px] bg-gray-400 dark:bg-accent mr-2 align-middle"></span>
              Hi, I&apos;m
            </p>
          </div>

          <div className="overflow-hidden mb-2 space-y-4">
            <h1
              ref={headingRef}
              className="hero-text text-4xl md:text-6xl lg:text-7xl font-satoshi font-medium tracking-tight text-balance dark:text-white"
            >
              Chimezie Victor Innocent
            </h1>
            <h2>
              and I&apos;m a{" "}
              <span
                ref={spanRef}
                className="hero-text text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-balance dark:text-white"
              >
                Software Engineer
              </span>
            </h2>
          </div>

          <div className="overflow-hidden">
            <p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-satoshi font-light leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              I specialize in building intuitive interfaces and giving users
              memorable experiences while solving real problems.
            </p>
          </div>

          <div className="overflow-hidden pt-4">
            <Button variant="secondary" style={{ animationDelay: "0.8s" }}>
              View Projects <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-50 dark:text-white"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
