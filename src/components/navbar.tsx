"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const navItems = ["Projects", "Blog", "Resume", "Demos"];

  return (
    <>
      <motion.header
        className={cn(
          "container fixed top-0 left-0 right-0 mx-auto w-full z-50 transition-all duration-500 ease-in-out",
          scrolled
            ? "bg-secondary-foreground border border-text-secondary dark:bg-accent-foreground backdrop-blur-md shadow-sm dark:shadow-accent/10 px-8 py-3 mt-4 w-5xl rounded-xl"
            : "bg-transparent bg dark:bg-transparent py-4"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between w-full">
          <motion.a
            href="/"
            className={
              scrolled
                ? "text-xl font-medium tracking-tight transition-colors text-white"
                : "text-xl font-medium tracking-tight transition-colors text-gray-800 dark:text-white"
            }
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Mezie.IV.
          </motion.a>

          <motion.nav
            className="hidden md:flex items-center space-x-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase()}`}
                className={
                  scrolled
                    ? "text-sm opacity-80 font-satoshi hover:opacity-100 transition-opacity text-white"
                    : "text-sm opacity-80 font-satoshi hover:opacity-100 transition-opacity text-gray-800 dark:text-white"
                }
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 0.8 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                variants={linkVariants}
                whileHover="hover"
              >
                {item}
              </motion.a>
            ))}
            <ThemeToggle />
          </motion.nav>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <motion.button
              className="ml-4"
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-900 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white dark:bg-[#141414] dark:bg-opacity-98 border-t dark:border-accent/20 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-medium text-gray-900 dark:text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
