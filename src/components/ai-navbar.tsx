"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AINavbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-3 z-50 w-full">
      <nav className="md:flex items-center justify-between mx-12 my-5 border-2 p-3 rounded-lg bg-gradient-to-b from-white to-[#cfced0] transition-colors">
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
            href="/sincsol-ai"
            className={`${
              isActive("/sincsol-ai")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            Home
          </Link>
          <Link
            href="#services"
            className={`${
              isActive("#services")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            Services
          </Link>
          <Link
            href="#case-studies"
            className={`${
              isActive("#case-studies")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            Case Studies
          </Link>
          <Link
            href="#products"
            className={`${
              isActive("#products")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            Products
          </Link>
          <Link
            href="#ai-team"
            className={`${
              isActive("#ai-team")
                ? "text-[#8B5CF6] text-lg"
                : "text-[#8B5CF6]/80 hover:text-[#8B5CF6] transition-colors"
            } font-semibold`}
          >
            AI Team
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
