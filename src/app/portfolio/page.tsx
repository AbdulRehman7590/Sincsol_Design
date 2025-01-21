"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MainNavbar from "@/components/main-navbar";
import HeroSection from "@/components/hero-section";
import ProcessStep from "@/components/process-step";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, categories } from "@/lib/constants";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <MainNavbar />

      {/* Hero Section */}
      <HeroSection
        line="Showcasing Excellence in Digital Solutions"
        content={
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto mb-8">
            Discover{" "}
            <span className="text-[#8B5CF6]">
              our <br />
              expertise
            </span>
          </h1>
        }
        url="#work"
        buttontext="View Our Work"
      />

      {/* Portfolio Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="text-center mb-12" id="work">
          <Badge
            variant="outline"
            className="text-purple-500 text-md font-medium border-purple-600 rounded-full px-4 py-2 mb-8"
          >
            Featured Projects
          </Badge>
          <h2 className="text-4xl font-bold mb-8">
            Our Work <span className="text-purple-500">Speaks For Itself</span>
          </h2>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={`px-3 py-1 text-sm rounded-full ${
                  category === selectedCategory
                    ? "bg-green-100 text-green-700"
                    : "bg-pink-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border border-gray-200"
            >
              <div className="flex">
                <div className="relative w-[200px] h-[150px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <p className="text-purple-600 text-sm mb-2">
                    {project.scope}
                  </p>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full ${
                          tag === "Design"
                            ? "bg-green-100 text-green-700"
                            : "bg-pink-100 text-pink-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Decorative Circle */}
      <div className="transform translate-y-3/4">
        <Image
          src="/images/hero-circle.png"
          alt="hero section"
          width={128}
          height={128}
          className="object-cover"
          style={{
            clipPath: "inset(0 0 0 30%)",
          }}
        />
      </div>

      {/* Process Section */}
      <section className="pb-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="text-purple-500 text-md font-medium border-purple-600 rounded-full px-4 py-2 mb-8"
            >
              Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              How We Turn{" "}
              <span className="text-violet-500">Ideas Into Reality</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our step-by-step process ensures that your vision is transformed
              into a successful digital product.
            </p>
          </div>

          <ProcessStep />
        </div>
      </section>

      {/* Decorative Circle */}
      <div className="transform translate-y-3/4">
        <Image
          src="/images/hero-circle.png"
          alt="hero section"
          width={128}
          height={128}
          className="object-cover"
          style={{
            clipPath: "inset(0 0 0 30%)",
          }}
        />
      </div>

      {/* CTA Section */}
      <section className=" pb-10">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let&apos;s Build Your{" "}
            <span className="text-[#8B5CF6]">
              Dream Project <br /> Together
            </span>
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Ready to turn your ideas into reality? Get in touch with us to start
            your journey.
          </p>
          <Button
            asChild
            className="bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
          >
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>

      <Image
        src={"/images/project-discuss.png"}
        alt={"Discussion Image"}
        width={300}
        height={400}
        className="w-full h-[550px] object-cover"
      />

      <Footer />
    </div>
  );
}
