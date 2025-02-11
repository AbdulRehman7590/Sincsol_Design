"use client";

import { Steps } from "@/lib/constants";
import { motion } from "framer-motion";

export default function ProcessStep() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mx-12">
      {Steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center relative"
        >
          {index < Steps.length - 1 && (
            <div className="hidden md:block absolute top-14 left-1/2 w-full border-t-2 border-dashed border-violet-200" />
          )}
          <div className="relative mb-6">
            <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full" />
            <div className="absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full" />

            <div className="w-28 h-28 rounded-full flex items-center justify-center relative">
              <div className="absolute -inset-1 rounded-full border border-violet-300" />
              <div className="absolute inset-0 rounded-full border-4 border-white" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-violet-600" />
              <div className="absolute inset-6 rounded-full bg-white" />

              <div className="relative text-center">
                <div className="text-violet-500 text-xl font-bold">
                  #{step.number}
                </div>
                <div className="text-sm font-medium">STEP</div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3">{step.title}</h3>
          <p className="text-gray-600 px-6">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
