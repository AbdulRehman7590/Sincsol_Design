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

export default function ProductSection({ product }: { product: Product }) {
  return (
    <motion.div
      className={`relative overflow-hidden h-[550px] border-x-2 border-black cursor-pointer z-0 flex flex-col items-center justify-center p-4 hover:border-purple-600 hover:border-2 hover:rounded-2xl hover:z-10`}
      whileHover={{ scale: 1.1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {/* Product Name */}
      <motion.h2
        className="my-8 text-center text-4xl font-bold text-purple-600"
        layout
      >
        {product.name}
      </motion.h2>

      {/* Product no. */}
      <div className="relative flex items-center justify-center">
        <Image
          src="/images/hero-circle.png"
          alt="hero section"
          width={128}
          height={128}
          className="object-cover"
        />
        <div className="absolute flex flex-col items-center justify-center">
          <div className="text-lg font-bold text-purple-600">
            {product.number}
          </div>
          <div className="text-xs text-purple-400">{product.label}</div>
        </div>
      </div>

      {/* Product Details  */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4"
        style={{ backgroundColor: product.bgColor }}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={164}
          height={164}
          className="rounded-lg object-cover mb-4"
        />
        <h3 className="text-lg font-bold text-purple-600">{product.name}</h3>
        <p className="text-md text-purple-500 text-center mt-2">
          {product.description}
        </p>
      </motion.div>
    </motion.div>
  );
}
