import React from "react";
import ShopCategoryCard from "./ShopCategoryCard";

export default function AllShops({ combinedData }) {
  return (
    <div>
      {combinedData.map((category) => (
        <ShopCategoryCard key={category.type} category={category} />
      ))}
    </div>
  );
}
