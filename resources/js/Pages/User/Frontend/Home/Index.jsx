import UserGuestLayout from "@/Layouts/user/Guest/HomLayout";
import React from "react";
import Shops from "./Shops";
import Cards from "./Cards";
import Footer from "./Footer";

export default function Dashboard({ shops, shopsCoupons, socials }) {
    return (
        <UserGuestLayout>
            {/* Shops Section */}
            <Shops shops={shops} />

            {/* Cards Section showing 2 categories club and cafe */}
            {shopsCoupons?.map((shop) => (
                <Cards key={shop.id} shop={shop} />
            ))}
            {/* Footer Section */}
            <Footer socials={socials} />
            {/* Footer Buttons Section */}
        </UserGuestLayout>
    );
}
