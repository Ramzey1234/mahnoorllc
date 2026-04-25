"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { dynamicCategories, categoryLabels } from "./Products";

export function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for contraction/expansion
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNav = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
  ];

  const categories = [
    { value: "all", label: "All Products" },
    ...dynamicCategories.map((cat) => ({
      value: cat,
      label: categoryLabels[cat],
    })),
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 pointer-events-none px-4">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`pointer-events-auto bg-[#fdf2f8]/90 backdrop-blur-2xl border border-[#fbcfe8]/50 shadow-[0_8px_32px_rgba(219,39,119,0.08)] transition-all duration-300 ease-in-out ${scrolled
            ? "py-3 px-6 rounded-full w-auto max-w-[90vw]"
            : "py-4 px-8 rounded-2xl w-full max-w-5xl rounded-full"
            }`}
        >
          <div className="flex items-center justify-between gap-4 md:gap-8">
            {/* Left: Nav (Desktop) */}
            <nav className="hidden md:flex items-center gap-1">
              {mainNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${active ? "text-[#db2777]" : "text-[#831843] hover:text-[#db2777]"
                      }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#fce7f3] rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-full text-[#831843] hover:bg-[#fce7f3] transition-colors"
              >
                <div className="w-6 h-5 flex flex-col justify-between items-center">
                  <span
                    className={`w-full h-0.5 bg-current transform transition-all duration-300 ${open ? "rotate-45 translate-y-2.5" : ""
                      }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""
                      }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transform transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
                      }`}
                  />
                </div>
              </button>
            </div>

            {/* Center: Brand */}
            <div className="flex-shrink-0 relative group cursor-pointer">
              <Link href="/" className="flex flex-col items-center">
                <span className="text-xl md:text-2xl font-serif text-[#500724] tracking-tight group-hover:text-[#db2777] transition-colors">
                  Mahnoor
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#db2777]">
                  Store
                </span>
              </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Category Dropdown (Desktop Icon) */}
              <div className="hidden md:block relative group">
                <select
                  onChange={(e) => {
                    const c = e.target.value;
                    const sort =
                      new URLSearchParams(window.location.search).get("sort") ||
                      "default";
                    router.push(`/shop?page=1&sort=${sort}&category=${c}`);
                  }}
                  className="appearance-none pl-3 pr-8 py-2 rounded-full bg-transparent text-sm font-medium text-[#831843] focus:outline-none cursor-pointer hover:bg-[#fce7f3] transition-colors"
                  defaultValue="all"
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#db2777]">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              <div className="w-px h-6 bg-[#fbcfe8] mx-1 hidden md:block" />

              <Link
                href="/cart"
                className="relative p-2 rounded-full text-[#831843] hover:bg-[#fce7f3] hover:text-[#db2777] transition-colors group"
              >
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#db2777] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M3 11h18l-1 9a2 2 0 01-2 2H6a2 2 0 01-2-2l-1-9z"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#500724] text-white hover:bg-[#831843] transition-all shadow-md hover:scale-105"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#fdf2f8]/95 backdrop-blur-3xl pt-28 px-6"
          >
            <nav className="flex flex-col gap-6 text-center">
              {mainNav.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-serif text-[#500724]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full max-w-xs mx-auto mt-8 border-t border-[#fde68a] pt-8"
              >
                <p className="text-sm text-[#78350f] mb-4 uppercase tracking-widest">
                  Browse Categories
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {categories.slice(1).map((c) => (
                    <button
                      key={c.value}
                      onClick={() => {
                        router.push(`/shop?page=1&sort=default&category=${c.value}`);
                        setOpen(false);
                      }}
                      className="text-sm py-2 px-3 rounded-lg bg-white border border-[#fbcfe8] text-[#831843]"
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </nav>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 p-4 text-[#500724]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
