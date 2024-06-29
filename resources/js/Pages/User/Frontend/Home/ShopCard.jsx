import React from "react";

export default function ShopCard({ shop }) {
  return (
    <a href={'shops/'+shop.slug} className="relative w-full transition-all duration-700 hover:scale-105">
      <div className="w-full">
        <img
          src={shop.image || "https://via.placeholder.com/150"}
          alt={shop.name}
          className="cover-fill h-[150px] w-full object-cover sm:h-[200px] md:h-[250px]"
        />
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 p-4 text-[#ffffff]">
        <div className="text-left">
          <p className="text-xl font-[400] uppercase leading-tight tracking-[-0.5px] sm:text-2xl sm:tracking-[-1px] md:text-3xl">
            {shop.name}
          </p>
          <p className="text-sm font-[400] leading-tight tracking-[-0.5px] sm:text-base sm:tracking-[-1px] md:text-xl">
            {shop.short_description}
          </p>
        </div>
      </div>
    </a>
  );
}
