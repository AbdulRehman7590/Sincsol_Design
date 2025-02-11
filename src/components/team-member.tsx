"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

interface TeamMemberProps {
  team: { name: string; image: string; position: string }[];
}

export default function TeamMember({ team }: TeamMemberProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="relative max-w-6xl mx-auto py-10 px-4 bg-purple-50 rounded-lg shadow-lg">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
        setApi={setEmblaApi}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {team.map((member, index) => (
            <CarouselItem
            key={index}
            className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4 py-8 flex justify-center"
          >          
              <div
                className="group flex flex-col items-center w-[300] sm:w-[250] space-y-4"
                style={{ height: "350px", width: "250px" }}
              >
                <div
                  className="relative overflow-hidden rounded-lg"
                  style={{ height: "85%" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="object-cover h-full w-full transition-transform duration-300 bg-gradient-to-b from-purple-400 to-transparent group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4 text-center w-full">
                  <h4 className="font-bold text-lg text-purple-600">
                    {member.name}
                  </h4>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center items-center space-x-4 mt-8">
        <Button
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          className="w-10 h-10 rounded-full bg-purple-200 text-purple-600 hover:bg-purple-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div className="flex justify-center gap-2">
          {team.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-purple-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <Button
          onClick={() => emblaApi && emblaApi.scrollNext()}
          className="w-10 h-10 rounded-full bg-purple-200 text-purple-600 hover:bg-purple-300"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
