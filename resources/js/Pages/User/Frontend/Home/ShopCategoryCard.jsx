import React, { useState } from "react";
import ShopCard from "./ShopCard";
import { Icon } from '@iconify/react';

export default function ShopCategoryCard({ category }) {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  const displayedShops = showAll ? category.shops : category.shops.slice(0, 3);

  return (
    <section className="relative px-4 font-['Poetsen_One'] sm:px-6 md:px-8 lg:px-10" id={category.type}>
      <div className="container mx-auto">
        <div className="my-4 flex items-center justify-center">
          <div
            className="border-b-4 border-white pb-3 md:pb-4 flex justify-center items-center gap-3"
            style={{ width: "fit-content" }}
          >
            <span className="text-4xl font-[400] tracking-[-1px] text-[#ffffff] sm:text-[48px] sm:tracking-[-2px] md:text-[63px]">
              {category.type}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3" style={{marginTop: '35px', marginBottom:"35px"}}>
          {displayedShops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </div>
      <div className="absolute right-4 top-6 sm:right-6 md:right-8 lg:right-10">
        <button onClick={handleViewAll} className="flex items-center gap-2">
          <p className="text-base tracking-[-0.5px] text-[#ffffff] sm:text-lg sm:tracking-[-1px] md:text-xl lg:text-[30px]">
            {showAll ? "view less" : `view all (${category.total})`}
          </p>
          <Icon icon="mdi:chevron-right" className="text-[#ffffff] sm:text-2xl md:text-3xl lg:text-4xl" />
        </button>
      </div>
    </section>
  );
}
