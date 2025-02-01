"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MainNavbar from "@/components/main-navbar";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import RecruitmentStep from "@/components/recruitment-step";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { JobCard } from "@/components/job-card";
import { CustomPagination } from "@/components/custom-pagination";
import { FilterSelect } from "@/components/filter";
import { MOCK_JOBS, recruitmentSteps, faqItems } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ITEMS_PER_PAGE = 3;

export default function CareerPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentJobs = MOCK_JOBS.slice(startIndex, endIndex);

  return (
    <>
      <MainNavbar />

      {/* Hero Section */}
      <HeroSection
        line="Your Future Starts Here"
        content={
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto mb-8">
            <span className="text-[#8B5CF6]">
              Collaborate, Grow, and Thrive
            </span>{" "}
            with Like- <br /> Minded Individuals
          </h1>
        }
        url="#sincsol"
        buttontext="Explore Careers"
      />

      {/* Why SincSol Section */}
      <section className="min-h-[75vh] relative container mx-auto mt-12 px-16 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative sm:ml-[15%] aspect-square md:aspect-auto md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/team-collaboration.png"
              alt="Team collaboration"
              layout="fill"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 md:pt-10">
            <Badge
              variant="outline"
              className="text-purple-500 text-md font-medium border-purple-600 rounded-full px-4 py-2 my-4"
            >
              Why Join Us?
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold">
              Why <span className="text-purple-600">SincSol</span> ?
            </h2>

            <p className="text-gray-600 leading-relaxed">
              At SincSol, we&apos;re not just a company; we&apos;re a community{" "}
              <br />
              of innovators and leaders. When you join us, you become part of a{" "}
              <br />
              team that values your growth, celebrates your achievements, and{" "}
              <br />
              supports your aspirations. Together, we build the future.
            </p>
          </div>
        </div>
      </section>

      {/* Decorative dots */}
      <div className="flex justify-end mr-8 transform translate-y-[-60%]">
        <Image
          src="/images/dec-dots.png"
          alt="hero section"
          width={128}
          height={128}
          className="object-cover hidden sm:block"
        />
      </div>

      {/* Available Positions Section */}
      <section id="positions" className="min-h-[75vh] px-4 sm:px-0">
        <div className="container mx-auto py-8 max-w-5xl">
          <div className="mb-8 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center my-12">
              Position <span className="text-[#6941C6]">Available</span>
            </h1>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">{MOCK_JOBS.length} Jobs</p>
              <FilterSelect />
            </div>
          </div>

          <div className="space-y-5">
            {currentJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <CustomPagination
            totalItems={MOCK_JOBS.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="mt-8 py-20 min-h-[75vh]">
        <div className="container px-4 mx-auto">
          {/* Decorative Circle */}
          <div className="transform translate-y-3/4 hidden sm:block">
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

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">
                Your Path To <span className="text-[#8B5CF6]">Success</span>
              </h2>
              <p className="text-gray-600 my-5">
                We believe in a transparent and seamless recruitment process to
                bring out the best in <br /> every candidate.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {recruitmentSteps.map((step, index) => (
                <RecruitmentStep
                  key={step.step}
                  {...step}
                  isLast={index === recruitmentSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-20 pb-10 bg-[#F9FAFB] min-h-[75vh]">
        <div className="relative w-full max-w-7xl mx-auto p-8">
          <div className="grid md:grid-cols-[350px,1fr] gap-12">
            {/* Left side content */}
            <div className="relative">
              <Image
                src="/images/dec-tri.png"
                alt="hero section"
                width={128}
                height={128}
                className="object-cover mr-32 mb-8 hidden sm:block"
              />
              <h1 className="text-5xl font-bold">
                Your Guide to{" "}
                <span className="text-purple-600">What Matters Most</span>
              </h1>
            </div>

            {/* Right side FAQ content */}
            <div className="relative">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Circle */}
      <div className="transform translate-y-3/4 hidden sm:block">
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
      <section className="pb-12 sm:pt-12">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let&apos;s Build the{" "}
            <span className="text-[#8B5CF6]">Future Together</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-lg">
            Are you ready to take the next step in your career? At SincSol,
            we&apos;re not just offering jobs—we&apos;re offering journeys of
            growth, impact, and fulfillment.
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
        src="/images/career-bg.png"
        alt="Discussion Image"
        width={1100}
        height={550}
        className="w-full object-contain"
      />

      <Footer />
    </>
  );
}
