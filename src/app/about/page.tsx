import Image from "next/image";
import MainNavbar from "@/components/main-navbar";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import ValueCard from "@/components/value-card";
import { values1, values2 } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <MainNavbar />

      {/* Hero Section */}
      <HeroSection
        line="Discover the Heartbeat of SincSol"
        content={
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto mb-8">
            <span className="text-[#8B5CF6]">Commited to Excellence</span>{" "}
            Driven by <br /> Innovation, Defined by Who We Are
          </h1>
        }
        url="#values"
        buttontext="Explore Our Values"
      />

      {/* Journey Section */}
      <section className="min-h-[75vh] grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 pt-28 pb-6">
        {/* Text Column */}
        <div className="space-y-12">
          <h2 className="mt-4 text-4xl font-bold leading-relaxed">
            Our Journey to Establishing <br /> Ourselves as a{" "}
            <span className="text-purple-600">Trusted Leader</span>{" "}
            <span className="text-purple-600">in Software Development</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From a bold vision to a trusted leader, Sincol has driven innovation
            and growth in software development. We deliver cutting-edge
            solutions that empower businesses to thrive in a dynamic digital
            world. With expertise and a client-centric approach, we build
            lasting partnerships and set new industry standards, shaping the
            future of technology with every project.
          </p>
        </div>

        {/* Images Column */}
        <div className="space-y-6 items-center flex flex-col">
          <Image
            src="/images/meet.png"
            alt="Meet"
            width={425}
            height={275}
            className="rounded-lg"
          />
          <Image
            src="/images/laptop.png"
            alt="PC"
            width={400}
            height={200}
            className="lg:transform lg:-translate-x-1/3 lg:-translate-y-1/3 z-10 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Decorative Circle */}
      <div className="transform translate-y-1/2  hidden sm:block">
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

      {/* Mission Section */}
      <section className="min-h-[75vh] py-10 max-w-6xl mx-auto px-4">
        <h1
          className="sm:text-7xl text-5xl font-bold text-center text-transparent"
          style={{
            WebkitTextStroke: "1px #7c3aed",
            fontFamily: "sans-serif",
            lineHeight: "0.80",
          }}
        >
          OUR MISSION
        </h1>
        <h2
          className="text-4xl z-10 font-bold text-center"
          style={{
            color: "#7c3aed",
            lineHeight: "0.80",
          }}
        >
          Our Mission
        </h2>

        <div
          className="relative bg-cover bg-center mt-12 rounded-xl min-h-[400px] max-w-5xl flex mx-auto items-center justify-center text-white p-8 md:p-12"
          style={{
            backgroundImage: "url('/images/mission-bg.png')",
          }}
        >
          <div className="relative bottom-16 right-6">
            <Image
              src="/images/mission-quotes.png"
              alt="Mission"
              width={128}
              height={64}
            />
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-2xl md:text-3xl">
              Empowering organizations to accelerate their growth by providing
              access to a team of passionate and highly skilled engineers,
              delivering innovative technology solutions that address their
              unique challenges and drive long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Decorative dots */}
      <div className="flex justify-end mr-8">
        <Image
          src="/images/dec-dots.png"
          alt="hero section"
          width={128}
          height={128}
          className="object-cover hidden sm:block"
        />
      </div>

      {/* Vision Section */}
      <section className="min-h-[75vh] py-8 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex items-center justify-center">
            <Image
              src="/images/team/waqas.png"
              alt="Team member"
              width={400}
              height={500}
              className="absolute bg-black z-10 shadow-lg transform translate-x-1/3  hidden sm:block"
            />
            <div className="bg-purple-600 absolute z-0 h-[535px] w-[400px] transform translate-x-1/4 translate-y-8  hidden sm:block" />
          </div>

          <div className="space-y-6 relative px-4 sm:px-0">
            <div className="flex items-center justify-between">
              <div>
                <Badge
                  variant="outline"
                  className="text-purple-500 text-sm tracking-wider uppercase border-purple-600 rounded-full px-2 py-4 mb-6"
                >
                  Why Choose SIncSol?
                </Badge>
                <h2 className="text-4xl mt-4 font-bold">
                  Our <span className="text-purple-600">Vision</span>
                </h2>
              </div>
              <Image
                src="/images/dec-tri.png"
                alt="hero section"
                width={128}
                height={128}
                className="object-cover mr-32 mb-8 hidden sm:block"
              />
            </div>
            <blockquote className="border-l-2 border-purple-600 px-4 text-sm text-purple-600 italic mb-4 max-w-xl">
              &quot;At SIncSol, we See Technology As The Key To Unlocking A
              Smarter, More Connected World From The Beginning. Our Mission Has
              Been To Transform Complex Challenges Into Innovative, AI- Powered
              Solutions Tailored To Modern Business Needs.&quot;
            </blockquote>
            <p className="text-gray-600 max-w-xl">
              We Are Dedicated To Delivering Scalable, Agile Services That Drive
              Growth And Inspire Innovation Across Industries. Backed By A Team
              Of Forward-Thinking Experts, We&apos;re Not Just Adapting To
              Change—We&apos;re Leading It. With SIncSol, Businesses Gain The
              Tools And Insights Needed To Excel In A Rapidly Evolving Digital
              Landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="lg:pt-12 px-20 lg:mx-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values1.map((value) => (
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
          OUR VALUES
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values2.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </section>

      {/* Decorative Arrow */}
      <div className="flex justify-end mr-8">
        <Image
          src="/images/dec-arrow.png"
          alt="hero section"
          width={256}
          height={256}
          className="hidden sm:block"
        />
      </div>

      <Footer />
    </>
  );
}
