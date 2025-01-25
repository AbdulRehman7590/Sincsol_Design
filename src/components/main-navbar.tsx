"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MainNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const contactPageNav =
    pathname === "/contact"
      ? "bg-gradient-to-r from-[#d6c9f9] to-white"
      : "bg-gradient-to-b from-white to-[#cfced0]";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <nav
          className={`flex flex-wrap items-center justify-between p-3 border border-gray-200 rounded-lg mx-4 md:mx-10 my-3 shadow-lg transition-colors ${contactPageNav} backdrop-blur-lg bg-white/50`}
          style={{
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Logo */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="SincSol Logo"
                width={120}
                height={40}
                className="h-15 w-auto"
              />
              <span className="text-md font-medium bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                SincSol
              </span>
            </Link>

            {/* Hamburger Menu Button */}
            <Button
              className="lg:hidden text-[#8B5CF6] focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </Button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } flex flex-col lg:flex lg:flex-row items-center gap-6 w-full lg:w-auto mt-4 lg:mt-0`}
          >
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/career", label: "Career" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/products", label: "Products" },
              { href: "/sincsol-ai", label: "SincSol AI" },
              { href: "/team", label: "Team" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? "text-[#8B5CF6] text-lg"
                    : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
                } font-semibold`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div
            className={`${
              menuOpen ? "block mt-4 lg:mt-0" : "hidden"
            } lg:block w-full lg:w-auto`}
          >
            <Button
              className={`${
                isActive("/contact")
                  ? "bg-[#8B5CF6] text-white"
                  : "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
              } px-6 py-2 rounded-lg transition-colors w-full lg:w-auto`}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}
