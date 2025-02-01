"use client";

import Link from "next/link";
import Image from "next/image";
import MainNavbar from "@/components/main-navbar";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Users, Globe } from "lucide-react";
import { features, services, landingProjects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceItem from "@/components/service-price";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <>
      <MainNavbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-t from-[#f4e4c4]/80 to-[#f6e2e5]">
        <div className="animate-bounce circle-decoration top-36 left-12" />

        <div className="container pt-48 pb-20 px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 max-w-xl">
            <h1 className="text-5xl font-bold leading-tight">
              Let&apos;s Build <span className="text-[#8B5CF6]">{"{}"}</span>{" "}
              Software that{" "}
              <div className="px-6 py-2 text-4xl font-bold border-4 border-[#8B5CF6] rounded-lg text-transparent inline-block bg-clip-text bg-gradient-to-b from-pink-500 to-yellow-400">
                Delivers!
              </div>
            </h1>
            <p className="text-lg text-gray-600">
              Empowering Your Business with Tailored Software Solutions. At
              SIncSol, we craft innovative, device-compatible software that
              adapts perfectly to your unique requirements.
            </p>
            <div className="pt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-6 rounded-lg text-lg"
              >
                <Link href="/contact">Contact Now</Link>
              </Button>
              <div className="flex gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="border-[#8B5CF6] text-black bg-transparent hover:bg-black/8 px-2 py-6 rounded-lg text-lg"
                >
                  <Link href="/contact">
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="text-black font-bold hover:text-[#8B5CF6] px-2 py-6 text-lg"
                >
                  <Link href="/contact">Book a Demo Today</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative grid">
            {/* Decorative Images */}
            <div>
              <Image
                src="/images/dec-star_arrow.png"
                alt="Double Circle"
                width={128}
                height={128}
                className="animate-fade absolute -top-12 right-40 z-10 hidden sm:block"
              />
              <Image
                src="/images/dec-double_circle.png"
                alt="Double Circle"
                width={64}
                height={64}
                className="animate-fade-right absolute -top-12 -left-56 z-10 hidden sm:block"
              />
              <Image
                src="/images/dec-tri.png"
                alt="Triangle"
                width={96}
                height={96}
                className="animate-rotate absolute -bottom-24 -left-48 z-10 hidden sm:block"
              />
            </div>
            {/* Main Images */}
            <div className="sm:hidden flex flex-col items-center space-y-4">
              {/* Layout for smaller screens */}
              <Image
                src="/images/person.png"
                alt="Remote collaboration"
                width={300}
                height={300}
                className="z-10"
              />
              <Image
                src="/images/group.png"
                alt="Project showcase"
                width={300}
                height={300}
                className="z-0 object-contain"
              />
              <Image
                src="/images/graph.png"
                alt="Analytics dashboard"
                width={300}
                height={300}
                className="z-10"
              />
            </div>
            <div className="hidden sm:grid">
              {/* Layout for larger screens */}
              <Image
                src="/images/person.png"
                alt="Remote collaboration"
                width={300}
                height={300}
                className="transform -translate-x-1/2 -translate-y-10 z-10"
              />
              <Image
                src="/images/group.png"
                alt="Project showcase"
                fill
                className="transform -translate-x-24 translate-y-8 z-0"
              />
              <Image
                src="/images/graph.png"
                alt="Analytics dashboard"
                width={300}
                height={300}
                className="transform translate-x-3/4 translate-y-3/4 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Circle */}
      <div className="flex justify-end mr-6 transform translate-y-1/2">
        <Image
          src="/images/hero-circle.png"
          alt="hero section"
          width={128}
          height={128}
          className="object-cover hidden sm:block"
          style={{
            clipPath: "inset(0 20% 0 0)",
          }}
        />
      </div>

      {/* Stand Out Section */}
      <section className="py-20 lg:pb-20">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Header section */}
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="text-purple-500 text-md border-purple-600 rounded-full px-4 py-2 mb-6"
            >
              Discover the Difference
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Why We <span className="text-purple-500">Stand Out</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              SincSol delivers custom software solutions that boost efficiency
              and drive growth. Our expert team creates tailored applications to
              help your business achieve its goals.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={
                  "relative bg-white shadow-md rounded-lg overflow-hidden p-6 text-center" +
                  ((index + 1) % 2 === 0 ? " lg:mt-40" : "")
                }
              >
                <div className="absolute inset-0 h-24 bg-gradient-to-b from-[#b69ff4] to-[#fabda9] rounded-b-full" />
                <div className="relative z-10">
                  {/* Number and Title */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-white font-semibold text-lg">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="relative z-10 mt-12 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Slider */}
      <section className="pt-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="text-[#8B5CF6] text-md border-purple-600 rounded-full px-4 py-2 mb-8 tracking-wider"
            >
              What We Offer
            </Badge>
            <h2 className="text-5xl max-w-xl mx-auto font-bold mb-4">
              Tailored <span className="text-[#8B5CF6]">Services</span> for Your
              Success
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SIncSol delivers custom software solutions that boost efficiency
              and drive growth. Our expert team creates tailored applications to
              help your business achieve its goals.
            </p>
          </div>

          <div className="w-full py-10 max-w-7xl mx-auto px-4">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
              setApi={setEmblaApi}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <CarouselItem
                      key={index}
                      className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5 py-8"
                    >
                      <Card
                        className={cn(
                          "transition-all duration-300 overflow-hidden",
                          activeIndex === index
                            ? "border-[#9978ef] border-4 shadow-lg scale-120 z-20"
                            : "border-transparent scale-90"
                        )}
                      >
                        <CardContent
                          className={cn(
                            "flex flex-col items-center text-center p-4 md:p-6 space-y-2 md:space-y-4 transition-all duration-300",
                            activeIndex === index
                              ? "bg-purple-50 p-5 md:p-8"
                              : "bg-white"
                          )}
                        >
                          <div
                            className={cn(
                              "p-2 md:p-3 rounded-lg transition-all duration-300",
                              activeIndex === index
                                ? "bg-purple-100 p-3 md:p-4"
                                : "bg-gray-100"
                            )}
                          >
                            <Icon
                              className={cn(
                                "w-5 h-5 md:w-6 md:h-6 transition-all duration-300",
                                activeIndex === index
                                  ? "text-purple-600 w-6 h-6 md:w-8 md:h-8"
                                  : "text-gray-600"
                              )}
                            />
                          </div>
                          <h3
                            className={cn(
                              "font-semibold transition-all duration-300",
                              activeIndex === index
                                ? "text-base text-purple-600 md:text-xl"
                                : "text-sm md:text-lg"
                            )}
                          >
                            {service.title}
                          </h3>
                          <p
                            className={cn(
                              "text-gray-600 transition-all duration-300",
                              activeIndex === index
                                ? "text-sm md:text-base"
                                : "text-xs md:text-sm"
                            )}
                          >
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="flex items-center justify-center -left-6 md:-left-12" />
              <CarouselNext className="flex items-center justify-center -right-6 md:-right-12" />
            </Carousel>
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeIndex === index ? "bg-purple-600 w-6" : "bg-gray-300"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filled Circle */}
      <div className="flex justify-end mr-6">
        <Image
          src="/images/dec-fill.png"
          alt="hero section"
          width={128}
          height={128}
          className="object-cover"
          style={{
            clipPath: "inset(0 10% 0 0)",
          }}
        />
      </div>

      {/* Testimonials */}
      <section className="pb-10">
        {/* Decorative Circle */}
        <div className="absolute transform translate-y-1/2 hidden sm:block">
          <Image
            src="/images/hero-circle.png"
            alt="hero section"
            width={144}
            height={144}
            className="object-cover"
            style={{
              clipPath: "inset(0 0 0 30%)",
            }}
          />
        </div>
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 mx-12 items-center">
            <div className="mb-8">
              <Badge
                variant="outline"
                className="text-purple-600 text-md border-purple-600 rounded-full px-4 py-2"
              >
                Projects
              </Badge>
              <h2
                className="text-5xl font-bold mt-2 mb-10"
                style={{ lineHeight: "1.3" }}
              >
                GOT
                <br />
                YOUR
                <br />
                <span className="text-purple-500">ATTENTION?</span>
              </h2>
              <div className="flex justify-center sm:justify-start">
                <Button
                  asChild
                  variant="secondary"
                  className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white mr-4 px-6 py-6 rounded-lg text-lg"
                >
                  <Link href="#">See All Projects</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#8B5CF6] text-black bg-transparent hover:bg-black/8 px-2 py-6 rounded-lg text-lg"
                >
                  <Link href="#">
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              {/* Categories */}
              <div className="flex items-center flex-wrap justify-center sm:justify-start gap-2 mb-6">
                {landingProjects.map((project) => (
                  <Button
                    key={project.title}
                    variant="outline"
                    className="px-2 sm:px-4 py-1 rounded-lg border-black"
                  >
                    {project.category}
                  </Button>
                ))}
                <ChevronRight className="w-6 h-6 text-muted-foreground" />
              </div>
              <Image
                src="/images/pricing-bg.png"
                alt="BG"
                width={450}
                height={350}
                className="object-cover"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-16">
            {landingProjects.map((project, index) => (
              <div
                key={index}
                className="relative group rounded-2xl overflow-hidden bg-background shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-sm bg-white/70 rounded-full p-1 font-medium">
                    {project.category}
                  </span>
                  <p className="mt-2 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-t from-[#f4e4c4]/80 to-[#f6e2e5] py-12 md:py-16 lg:py-20">
        <div className="container px-12">
          <div className="grid gap-20 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="text-purple-500 text-md border-purple-600 rounded-full px-4 py-2"
                >
                  Pricing
                </Badge>

                <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
                  Delivering Cutting-Edge{" "}
                  <span className="text-purple-500">AI-Powered Solutions</span>{" "}
                  on Time and{" "}
                  <span className="text-purple-500">Within Budget</span>
                </h2>

                <p className="text-gray-600 text-lg">
                  We are committed to providing top-notch, customized solutions
                  that support growth and transformation for our clients.
                  Leveraging the latest in AI technology, we ensure exceptional
                  results that are both timely and cost-effective.
                </p>
              </div>

              <div className="space-y-6">
                <ServiceItem
                  icon={<Clock className="w-6 h-6" />}
                  title="Software Outsourcing"
                  description="End-to-end software development, expertly managed from start to finish."
                />

                <ServiceItem
                  icon={<Users className="w-6 h-6" />}
                  title="Staff Augmentation"
                  description="Strengthen your team with qualified professionals, reducing the time spent on recruitment and training."
                />

                <ServiceItem
                  icon={<Globe className="w-6 h-6" />}
                  title="Dedicated Teams"
                  description="Accelerate your projects with dedicated teams that effortlessly integrate with your existing processes."
                />
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-6 rounded-lg text-lg"
                >
                  <Link href="#">See All Projects</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#8B5CF6] text-black bg-transparent hover:bg-black/8 px-2 py-6 rounded-lg text-lg"
                >
                  <Link href="#">
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 max-w-2xl">
              <Card className="p-6 bg-white shadow-lg rounded-xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-purple-500">Starting from</p>
                      <p className="text-4xl font-bold">$20/hr</p>
                    </div>
                    <div>
                      <Button
                        variant="outline"
                        className="px-2 mx-2 sm:px-6 py-2 rounded-lg text-[#8B5CF6] border-[#8B5CF6] hover:bg-[#7C3AED] hover:text-white"
                      >
                        <Link href="/contact">
                        <span className="block sm:hidden">Contact</span>
                        <span className="hidden sm:block">Contact Us</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Powered by advanced tools like ChatGPT and CoPilot, software
                    development is now faster and more efficient than ever. Our
                    engineers, skilled in these cutting-edge technologies, are
                    dedicated to maximizing the ROI of your project.
                  </p>
                  <p className="text-gray-600">
                    Experience our expertise risk-free for the first 2 weeks.
                    We&apos;re confident in the value we bring—if we don&apos;t
                    make a positive impact, we&apos;ll keep working at no cost
                    until we do.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-white shadow-lg rounded-2xl relative overflow-hidden">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-5xl font-bold text-purple-500">50+</p>
                    <p className="text-gray-600">
                      Successfully Completed Projects
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-bold text-purple-500">30</p>
                    <p className="text-gray-600">Satisfied Clients</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-bold text-purple-500">5+</p>
                    <p className="text-gray-600">Proprietary Products</p>
                  </div>
                  {/* Decorative Circle */}
                  <div className="flex justify-end lg:transform lg:-translate-y-1/2">
                    <Image
                      src="/images/hero-circle.png"
                      alt="hero section"
                      width={128}
                      height={128}
                      className="object-contain"
                      style={{
                        clipPath: "inset(0 20% 0 0)",
                      }}
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-20 pb-10">
        {/* Decorative Circle */}
        <div className="absolute hidden sm:block">
          <Image
            src="/images/hero-circle.png"
            alt="hero section"
            width={172}
            height={172}
            className="object-cover"
            style={{
              clipPath: "inset(0 0 0 20%)",
            }}
          />
        </div>
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl mx-auto max-w-4xl md:text-5xl font-bold mb-8">
            Book a{" "}
            <span className="text-[#8B5CF6]">Complimentary Consultation</span>{" "}
            with Our Experts
          </h2>
          <Button
            asChild
            className="bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Image
        src={"/images/look-screen.png"}
        alt={"Discussion Image"}
        width={1100}
        height={550}
        className="w-full object-contain"
      />

      <Footer />
    </>
  );
}
