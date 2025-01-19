"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MainNavbar from "@/components/main-navbar";
import Footer from "@/components/footer";
import ProductSection from "@/components/product-section";
import { products } from "@/lib/constants";


export default function ProductsPage() {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (id: number) => {
    setExpandedSections((prev) =>
      prev.includes(id)
        ? prev.filter((sectionId) => sectionId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen">
      <MainNavbar />

      {/* Content */}
      <main className="py-4">
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-3 gap-4 min-h-[600px]" layout>
            {products.map((product) => (
              <ProductSection
                key={product.id}
                product={product}
                isExpanded={expandedSections.includes(product.id)}
                onToggle={() => toggleSection(product.id)}
              />
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
