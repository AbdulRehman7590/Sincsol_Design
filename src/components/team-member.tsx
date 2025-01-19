"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface TeamMemberProps {
  team: { name: string; image: string; position: string }[];
}

export default function TeamMember({ team }: TeamMemberProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : team.length - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < team.length - itemsPerPage ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            width: `${(team.length / itemsPerPage) * 100}%`,
          }}
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="flex px-4"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <div
                className="group flex flex-col items-center"
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
                    className="object-cover transition-transform duration-300 bg-gradient-to-b from-purple-400 to-transparent group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-balck-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4 text-center w-full">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <Button
          onClick={handlePrev}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
