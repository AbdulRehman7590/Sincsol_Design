import MainNavbar from "@/components/main-navbar";
import HeroSection from "@/components/hero-section";
import { teamMembers } from "@/lib/constants";
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
      <section id="team" className="min-h-[80vh] py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm tracking-wider text-purple-600 uppercase mb-4">
              Our Team
            </h2>
            <h3 className="text-3xl font-bold">
              Meet The <span className="text-purple-600">Team</span>
            </h3>
          </div>

          <TeamMember team={teamMembers} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
