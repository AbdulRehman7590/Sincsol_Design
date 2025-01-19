"use client";

import { useState } from "react";
import MainNavbar from "@/components/main-navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services, landingProjects } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <main className="min-h-screen">
      <MainNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden relative">
        {/* Decorative circles */}
        <div className="circle-decoration top-12 left-12" />
        <div className="circle-decoration bottom-12 right-12" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight">
                Let&apos;s Build{" "}
                <span className="text-[#8B5CF6]">Software</span> that{" "}
                <div className="inline-block bg-orange-100 px-4 py-2 rounded-lg text-orange-600">
                  Delivers!
                </div>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Empowering Your Business with Tailored Software Solutions. At
                SIncSol, we craft innovative, device-compatible software that
                adapts perfectly to your unique requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-6 rounded-lg text-lg"
                >
                  <Link href="/contact">Contact Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/5 px-8 py-6 rounded-lg text-lg"
                >
                  <Link href="/contact">Book a Demo Today</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/images/person.png"
                    width={300}
                    height={300}
                    alt="Remote collaboration"
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src="/images/group.png"
                    width={300}
                    height={300}
                    alt="Project showcase"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="mt-8">
                  <Image
                    src="/images/graph.png"
                    width={300}
                    height={600}
                    alt="Analytics dashboard"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stand Out Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden relative">
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32">
            <div className="absolute right-0 top-0 w-16 h-16 border-2 border-purple-400 rounded-full" />
            <div className="absolute right-4 top-4 w-8 h-8 border-2 border-orange-300 rounded-full" />
            <div className="absolute right-12 top-2 w-2 h-2 bg-purple-400 rounded-full" />
          </div>

          {/* Header section */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full bg-purple-50 text-sm text-purple-600 mb-6">
              Discover the Difference
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Why We <span className="text-purple-500">Stand Out</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              SincSol delivers custom software solutions that boost efficiency
              and drive growth. Our expert team creates tailored applications to
              help your business achieve its goals.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Performance */}
            <div className="relative group">
              <div className="absolute inset-x-0 -bottom-4 h-40 bg-gradient-to-b from-purple-400 to-pink-200 rounded-full opacity-80" />
              <div className="relative bg-white p-6 z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                    1
                  </div>
                  <h3 className="font-semibold">Performance</h3>
                </div>
                <p className="text-gray-600">
                  We deliver high-performance solutions that enhance efficiency
                  and drive results.
                </p>
              </div>
            </div>

            {/* Scalability */}
            <div className="relative group">
              <div className="absolute inset-x-0 -bottom-4 h-40 bg-gradient-to-b from-purple-400 to-pink-200 rounded-full opacity-80" />
              <div className="relative bg-white p-6 z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                    3
                  </div>
                  <h3 className="font-semibold">Scalability</h3>
                </div>
                <p className="text-gray-600">
                  Designed to grow with your business, ensuring long-term
                  adaptability and success.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="relative group">
              <div className="absolute inset-x-0 -bottom-4 h-40 bg-gradient-to-b from-purple-400 to-pink-200 rounded-full opacity-80" />
              <div className="relative bg-white p-6 z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                    2
                  </div>
                  <h3 className="font-semibold">Security</h3>
                </div>
                <p className="text-gray-600">
                  Our solutions are built with advanced security to protect your
                  data and business.
                </p>
              </div>
            </div>

            {/* Customer Focus */}
            <div className="relative group">
              <div className="absolute inset-x-0 -bottom-4 h-40 bg-gradient-to-b from-purple-400 to-pink-200 rounded-full opacity-80" />
              <div className="relative bg-white p-6 z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                    4
                  </div>
                  <h3 className="font-semibold">Customer Focus</h3>
                </div>
                <p className="text-gray-600">
                  We prioritize your needs, delivering tailored solutions for
                  sustained business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Slider */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="circle-decoration top-12 left-12" />
        <div className="circle-decoration bottom-12 right-12" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-[#8B5CF6] uppercase tracking-wider mb-4">
              What We Offer
            </p>
            <h2 className="text-3xl font-bold mb-4">
              Tailored <span className="text-[#8B5CF6]">Services</span> for Your
              Success
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SIncSol delivers custom software solutions that boost efficiency
              and drive growth. Our expert team creates tailored applications to
              help your business achieve its goals.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-[#8B5CF6]" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8"
              >
                <Link href={services[currentIndex].href} className="block">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">
                        {services[currentIndex].title}
                      </h3>
                      <p className="text-gray-600">
                        {services[currentIndex].description}
                      </p>
                    </div>
                    <div className="relative h-64">
                      <Image
                        src={services[currentIndex].image}
                        alt={services[currentIndex].title}                        
                        layout="fill"
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 z-10"
            >
              <ChevronRight className="w-6 h-6 text-[#8B5CF6]" />
            </button>

            <div className="flex justify-center space-x-2 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#8B5CF6]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#FFF3E6] to-[#FFE5E5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <h3 className="text-4xl font-bold mb-4">
              GOT YOUR <span className="text-[#8B5CF6]">ATTENTION?</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {landingProjects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm mb-2">{project.category}</div>
                      <h4 className="text-lg font-bold">{project.title}</h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
            >
              <Link href="/portfolio">See All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Delivering Cutting-Edge{" "}
                <span className="text-purple-600">AI-Powered Solutions</span> on
                Time and Within Budget
              </h2>
              <p className="text-gray-600">
                We are committed to providing top-notch, customized solutions
                that support growth and transformation for our clients.
                Leveraging the latest in AI technology, we ensure exceptional
                results that are both timely and cost-effective.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Starting from</h3>
                  <div className="text-4xl font-bold text-purple-600">
                    $20/hr
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              <p className="text-gray-600 text-sm">
                Using advanced tools like ChatGPT and Collins, software
                development is now faster and more efficient than ever. Our
                engineers, skilled in these cutting-edge technologies, are
                dedicated to maximizing the ROI of your project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-600">
                  Successfully Completed Projects
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  30
                </div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  5+
                </div>
                <div className="text-sm text-gray-600">
                  Proprietary Products
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
