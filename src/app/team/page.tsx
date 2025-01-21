import Image from "next/image";
import MainNavbar from "@/components/main-navbar";
import HeroSection from "@/components/hero-section";
import { teamMembers } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import TeamMember from "@/components/team-member";
import Footer from "@/components/footer";

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <MainNavbar />

      {/* Hero Section */}
      <HeroSection
        line="Meet the Team"
        content={
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto mb-8">
            Visionaries behind{" "}
            <span className="text-purple-600">
              Our <br /> Success
            </span>
          </h1>
        }
        url="#team"
        buttontext="Explore Our Team"
      />

      {/* Team Members Section */}
      <section id="team" className="min-h-[80vh] pt-20 pb-6">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="text-purple-500 text-md uppercase font-medium border-purple-600 tracking-wider rounded-full px-4 py-2 mb-4"
            >
              Our Team
            </Badge>

            <h3 className="text-3xl font-bold">
              Meet The <span className="text-purple-600">Team</span>
            </h3>
          </div>

          <TeamMember team={teamMembers} />
        </div>
      </section>

      {/* Decorative Circle */}
      <div className="flex justify-end mr-8">
        <Image
          src="/images/hero-circle.png"
          alt="hero section"
          width={128}
          height={128}
          className="object-cover"
          style={{
            clipPath: "inset(0 20% 20% 0)",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
