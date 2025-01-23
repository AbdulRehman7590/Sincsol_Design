import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AINavbar from "@/components/ai-navbar";
import Footer from "@/components/footer";
import ValueCard from "@/components/value-card";
import AIProduct from "@/components/ai-product";
import TeamMember from "@/components/team-member";
import {
  aiServices,
  aiProducts,
  aiCaseStudies,
  teamMembers,
} from "@/lib/constants";

export default function SincSolAIPage() {
  return (
    <>
      <AINavbar />

      {/* Hero Section */}
      <section className="min-h-[83vh] flex items-center bg-gradient-to-br from-[#8B5CF6] to-[#6B46C1] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("/images/ai-bg.png")` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-12">
            <h1
              className="text-5xl font-bold text-white mb-6"
              style={{ lineHeight: "1.5", letterSpacing: "2px" }}
            >
              Boosting Business with <br />
              AI magic!
            </h1>
            <p className="text-xl text-purple-200 mb-8">
              From Automation to Intelligence, shaping the future
            </p>
            <Button
              asChild
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 mr-4 py-6 rounded-lg text-lg"
            >
              <Link href="#services">Explore AI Solutions</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#8B5CF6] text-black bg-transparent hover:bg-black/8 px-2 py-6 rounded-lg text-lg"
            >
              <Link href="#services">
                <ChevronRight className="h-4 w-4 text-[#8B5CF6]" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-[70vh] pt-48 lg:pt-12 pb-20">
        {/* Decorative Circle */}
        <div className="flex justify-end mr-4 transform translate-y-1/2">
          <Image
            src="/images/hero-circle.png"
            alt="hero section"
            width={172}
            height={172}
            className="object-cover hidden sm:block"
            style={{
              clipPath: "inset(0 20% 0 0)",
            }}
          />
        </div>
        <div className="text-center">
          <Badge
            variant="outline"
            className="text-[#8B5CF6] text-md border-[#8B5CF6] tracking-wider rounded-full px-4 py-2 mb-8"
          >
            Services
          </Badge>
          <h2 className="text-5xl font-bold mb-4">
            Our Expertise In{" "}
            <span className="text-[#8B5CF6]">
              Technology <br /> Solutions
            </span>
          </h2>
        </div>

        <div className="grid mx-16 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {aiServices.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-10">
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
        <div className="w-full max-w-7xl mx-auto px-4 lg:py-16 md:px-6">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="text-[#8B5CF6] text-md border-[#8B5CF6] rounded-full px-4 py-2 mb-8"
            >
              Case Studies
            </Badge>
            <h1 className="text-4xl max-w-2xl mx-auto md:text-5xl font-bold tracking-tight mb-2">
              Driving Success Through{" "}
              <span className="text-[#8B5CF6]">Proven Solutions</span>
            </h1>
          </div>

          {aiCaseStudies.length > 0 ? (
            <div>
              {aiCaseStudies.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg my-4 overflow-hidden grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Text Section */}
                  <div
                    className={
                      "space-y-4 max-w-lg " +
                      (Number(item.id) % 2 === 0 ? "md:order-2" : "md:order-1")
                    }
                  >
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="my-4">{item.line}</p>
                    <div className="relative my-6">
                      <blockquote className="pl-4 border-l-2 border-purple-500 text-sm text-purple-600 italic">
                        {item.quote}
                      </blockquote>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div
                    className={
                      "relative h-[300px] md:h-[400px] rounded-xl overflow-hidden " +
                      (Number(item.id) % 2 === 0 ? "md:order-`" : "md:order-2")
                    }
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>
                No case studies available at the moment. Please check back
                later.
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button
              variant="secondary"
              size="lg"
              className="bg-purple-500 text-white hover:bg-purple-600"
            >
              See All
            </Button>
          </div>
        </div>
      </section>

      {/* AI Products Section */}
      <section id="products" className="relative overflow-hidden min-h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("/images/ai-products.png")` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white transform translate-y-[150%]">
            <h2 className="text-6xl font-bold mb-2">AI Products</h2>
            <h3 className="text-3xl mb-8">
              to Transform <br /> Your Business
            </h3>
            <p className="text-xl max-w-sm mx-auto">
              Revolutionizing your operations with intelligent AI-driven
              solutions
            </p>
          </div>

          <div className="relative h-[600px] mb-14 mx-auto">
            {aiProducts.map((product) => (
              <AIProduct key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="ai-team" className="min-h-[75vh] py-20">
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="text-[#8B5CF6] text-md border-[#8B5CF6] rounded-full px-4 py-2 mb-8"
            >
              Our AI Team
            </Badge>
            <h2 className="text-4xl font-bold">
              Empowering Your Business <br /> with{" "}
              <span className="text-[#8B5CF6]">AI Expertise</span>
            </h2>
          </div>

          <TeamMember team={teamMembers} />
        </div>
      </section>

      <Footer />
    </>
  );
}
