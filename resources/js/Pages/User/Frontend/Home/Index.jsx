import UserGuestLayout from "@/Layouts/user/Guest/HomLayout";
import React from "react";
// import Shops from "./Shops";
import Cards from "./Cards";
import Footer from "./Footer";
import ShopCategory from "./ShopCategory";
import ShopCard from "./ShopCard";
import ShopCategoryCard from "./ShopCategoryCard";
import AllShops from "./AllShops";

export default function Dashboard({ shopCategory, shops, socials }) {
    return (
        <UserGuestLayout>
            {/* Shops Section */}
            <ShopCategory shopCategory={shopCategory} />

            <AllShops combinedData={shops} />

            {/* Footer Section */}
            <Footer socials={socials} />
            {/* Footer Buttons Section */}
        </UserGuestLayout>
    );
}
