"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  number: string;
  label: string;
  bgColor: string;
  image: string;
  description: string;
}

interface ProductSectionProps {
  product: Product;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ProductSection({
  product,
  isExpanded,
  onToggle,
}: ProductSectionProps) {
  return (
    <motion.div
      layout
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${
        product.bgColor
      } ${isExpanded ? "col-span-1" : "col-span-1"}`}
      onClick={onToggle}
      initial={false}
      animate={{
        flex: isExpanded ? 1 : 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        layout
        className="relative h-full w-full p-8 flex flex-col items-center justify-center"
      >
        {!isExpanded ? (
          <>
            <motion.h2
              layout="position"
              className="text-2xl font-bold text-purple-600 mb-4"
            >
              {product.name}
            </motion.h2>
            <motion.div
              layout="position"
              className="w-24 h-24 rounded-full border-2 border-purple-300 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-sm text-purple-600">{product.number}</div>
                <div className="text-xs text-purple-400">{product.label}</div>
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <div className="aspect-[9/16] relative rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-purple-600">
                {product.name}
              </h3>
              <p className="text-sm text-purple-500 mt-2">
                {product.description}
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
