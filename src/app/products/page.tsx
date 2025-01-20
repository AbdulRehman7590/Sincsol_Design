"use client";

import MainNavbar from "@/components/main-navbar";
import ProductSection from "@/components/product-section";
import { products } from "@/lib/constants";

export default function ProductsPage() {
  return (
    <div className="bg-gradient-to-b from-white to-[#c6b4f6] py-8">
      <MainNavbar />
      <div className="container mx-auto px-4">
        <div className="flex items-center px-6 overflow-x-auto pb-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 pt-10 h-[600px] w-[350px]"
            >
              <ProductSection product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
