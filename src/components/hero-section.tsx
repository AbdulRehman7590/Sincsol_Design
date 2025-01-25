import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  line?: string;
  content?: React.ReactNode;
  url?: string;
  buttontext?: string;
}

export default function HeroSection({
  line = "Welcome to our platform",
  content = <p>No content provided</p>,
  url = "/",
  buttontext = "Click Here",
}: HeroSectionProps) {
  return (
    <section className="min-h-screen pt-64 pb-12 bg-gradient-to-b from-white to-[#c6b4f6] relative overflow-hidden">
      <div className="animate-bounce circle-decoration top-36 left-12" />
      <div className="animate-bounce circle-decoration bottom-12 right-12" />

      <div className="container px-4 mx-auto text-center">
        <p className="text-sm tracking-wider text-black mb-6">{line}</p>
        {content}
        <div className="pt-8">
          <Button
            asChild
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 mx-4 py-6 rounded-lg text-lg"
          >
            <Link href={url}>{buttontext}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#8B5CF6] text-black bg-tranparent px-2 py-6 rounded-lg text-lg"
          >
            <Link href={url}>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 w-32 h-32 overflow-hidden">
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
    </section>
  );
}
