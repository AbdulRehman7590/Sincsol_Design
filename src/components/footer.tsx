import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-12 bg-[#f4e4c4]">
      <div className="p-8 m-5 bg-white border-[1px] rounded-lg box-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Logo and Contact Section */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="SincSol Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-xl font-semibold text-[#8B5CF6]">
                  SIncSol
                </span>
              </Link>
              <div className="space-y-2">
                <p className="text-gray-600">Business incubation center</p>
                <p className="text-gray-600">UET Lahore</p>
                <Link
                  href="mailto:info@sincsol.com"
                  className="text-gray-600 underline"
                >
                  info@sincsol.com
                </Link>
              </div>
              <div className="space-y-3">
                <h3 className="text-gray-600">Let&apos;s keep in Touch</h3>
                <p className="text-[12.5px] text-gray-500">
                  Stay Updated with the latest Technology
                </p>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white"
                  />
                  <Button
                    variant="gradient"
                    className="w-full text-base font-medium"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-purple-500 font-medium">Company</h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Career", href: "/career" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Products", href: "/products" },
                  { name: "SincSol AI", href: "/sincsol-ai" },
                  { name: "Team", href: "/team" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-[#8B5CF6]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries Links */}
            <div className="space-y-4">
              <h3 className="text-purple-500 font-medium">Industries</h3>
              <ul className="space-y-2">
                {[
                  { name: "Education", href: "#" },
                  { name: "Heath Care", href: "#" },
                  { name: "Environment", href: "#" },
                  { name: "Ecommerce", href: "#" },
                  { name: "Saas", href: "#" },
                  { name: "Gaming", href: "#" },
                  { name: "Public Sector", href: "#" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-purple-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="space-y-4">
              <h3 className="text-purple-500 font-medium">
                Services and Solutions
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "AI and MI", href: "#" },
                  { name: "Website Development", href: "#" },
                  {
                    name: "Mobile App Development",
                    href: "/services/mobile-app-development",
                  },
                  { name: "QA testing", href: "#" },
                  { name: "Custom Development", href: "#" },
                  { name: "Cloud migration and management", href: "#" },
                  { name: "Game Development", href: "#" },
                  { name: "Microsoft 360 dynamics", href: "#" },
                  { name: "UI UX Design", href: "#" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-purple-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-purple-500 font-medium">Social</h3>
              <ul className="space-y-2">
                {["Instagram", "Linkedin"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-purple-500"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-5 text-center text-[#8B5CF6]">
        <p>© Copyright 2024, All Rights Reserved by SincSol</p>
      </div>
    </footer>
  );
}
