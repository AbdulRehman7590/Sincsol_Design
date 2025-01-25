"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface AIProductProps {
  name: string;
  description: string;
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

export default function AIProduct({
  name,
  description,
  position,
}: AIProductProps) {
  return (
    <motion.div
      className="md:absolute w-[350px] bg-white/10 backdrop-blur-sm rounded-full flex px-6 py-2 text-white cursor-pointer bg-gradient-to-r from-[#cfced0]/60 to-[#ae5ec5] mb-4 md:mb-0"
      style={position}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex items-center gap-2">
        <Image
          src={"/images/ai-heart.png"}
          alt="AI Product"
          width={32}
          height={12}
          className="mx-2"
        />
      </div>
      <div className="flex items-center gap-2 px-2">
        <div>
          <div className="text-lg font-bold">{name}</div>
          <div className="text-md">{description}</div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <ArrowUpRight className="w-6 h-6" />
      </div>
    </motion.div>
  );
}
