import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MainNavbar from "@/components/main-navbar";
import HeroSection from "@/components/hero-section";
import ProcessStep from "@/components/process-step";
import ValueCard from "@/components/value-card";
import Footer from "@/components/footer";
import { solutions1, solutions2 } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export default function MobileAppDevelopment() {
  return (
    <div className="min-h-screen">
      <MainNavbar />

      {/* Hero Section */}
      <HeroSection
        line="Mobile App Development"
        content={
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto mb-8"
            style={{ lineHeight: "1.3" }}
          >
            Robust, Scalable, and Seamless <br />
            <span className="text-[#8B5CF6]">Mobile App Solutions</span>
          </h1>
        }
        url="/contact"
        buttontext="Lets Talk"
      />

      {/* Why Choose Section */}
      <section className="min-h-[75vh] grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-2 pt-28 pb-6">
        {/* Text Column */}
        <div className="space-y-12">
          <h2 className="mt-4 text-4xl font-bold leading-relaxed">
            Why Choose SincSol for Your{" "}
            <span className="text-purple-600">Mobile App Development?</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            SincSol specializes in creating high-quality, user-focused mobile
            apps for iOS, Android, and cross-platform solutions. We combine
            advanced technology with intuitive design to build apps that drive
            business growth, enhance user experiences, and deliver lasting value
            to your brand.
          </p>
        </div>

        {/* Images Column */}
        <div className="space-y-6 items-center flex flex-col">
          <Image
            src="/images/mobile-screens.png"
            alt="Meet"
            width={425}
            height={275}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/pc-screen.png"
            alt="PC"
            width={400}
            height={200}
            className="lg:transform lg:-translate-x-1/3 lg:-translate-y-1/3 z-10 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Decorative Circle */}
      <div className="absolute transform -translate-y-1/2 hidden sm:block">
        <Image
          src="/images/hero-circle.png"
          alt="hero section"
          width={172}
          height={172}
          className="object-cover"
          style={{
            clipPath: "inset(0 0 25% 20%)",
          }}
        />
      </div>

      {/* Process Section */}
      <section className="min-h-[75vh] pt-20 pb-6 bg-gray-50">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="text-[#8B5CF6] text-md border-[#8B5CF6] rounded-full px-4 py-2 mb-8"
          >
            Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Proven Process For{" "}
            <span className="text-violet-500">
              Mobile <br /> App Development
            </span>
          </h2>
        </div>

        <ProcessStep />
      </section>

      {/* Decorative Circle */}
      <div className="transform translate-y-1/2 hidden sm:block">
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

      {/* Solutions Grid */}
      <section id="values" className="min-h-[75vh] pb-16 px-20 lg:mx-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions1.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
        <h1
          className="text-6xl my-10 font-bold text-center text-transparent"
          style={{
            WebkitTextStroke: "1px #7c3aed",
            fontFamily: "sans-serif",
          }}
        >
          MOBILE APP SOLUTIONS
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions2.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        {/* Decorative Circle */}
        <div className="absolute">
          <Image
            src="/images/hero-circle.png"
            alt="hero section"
            width={172}
            height={172}
            className="object-cover hidden sm:block"
            style={{
              clipPath: "inset(0 0 0 20%)",
            }}
          />
        </div>
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Book a{" "}
            <span className="text-[#8B5CF6]">Complimentary Consultation</span>{" "}
            <br />
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
        width={300}
        height={400}
        className="w-full h-[550px] object-cover"
      />

      <Footer />
    </div>
  );
}
