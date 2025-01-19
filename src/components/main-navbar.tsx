"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function MainNavbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const contactPageNav =
    pathname === "/contact" ? "bg-gradient-to-r from-[#d6c9f9] to-white" : "bg-gradient-to-b from-white to-[#cfced0]";

  return (
    <header className="sticky top-3 z-50 w-full">
      <nav
        className={`md:flex items-center justify-between mx-12 my-5 border-2 p-3 rounded-lg transition-colors ${contactPageNav}`}
      >
        {/* Logo */}
        <div>
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
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className={`${
              isActive("/")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              isActive("/about")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            About
          </Link>
          <Link
            href="/career"
            className={`${
              isActive("/career")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            Career
          </Link>
          <Link
            href="/portfolio"
            className={`${
              isActive("/portfolio")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            Portfolio
          </Link>
          <Link
            href="/products"
            className={`${
              isActive("/products")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            Products
          </Link>
          <Link
            href="/sincsol-ai"
            className={`${
              isActive("/sincsol-ai")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            SincSol AI
          </Link>
          <Link
            href="/team"
            className={`${
              isActive("/team")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            Team
          </Link>
        </div>

        {/* Contact Button */}
        <div>
          <Button
            className={`${
              isActive("/contact")
                ? "bg-[#8B5CF6] text-white"
                : "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
            } px-6 py-2 rounded-lg transition-colors`}
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
