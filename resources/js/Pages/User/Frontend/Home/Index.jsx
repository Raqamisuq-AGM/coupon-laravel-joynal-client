import UserGuestLayout from "@/Layouts/user/Guest/HomLayout";
import React, { useEffect } from "react";
import Shops from "./Shops";
import Cards from "./Cards";
import Footer from "./Footer";
import club1 from "@/images/frontend/club1.png";
import club2 from "@/images/frontend/club2.png";
import club3 from "@/images/frontend/club3.png";

import cafe1 from "@/images/frontend/cafe1.jpg";
import cafe2 from "@/images/frontend/cafe2.jpg";
import cafe3 from "@/images/frontend/cafe3.jpg";

export default function Dashboard({ shops, cafes, clubs }) {
    // const clubs = [
    //     {
    //         id: 1,
    //         name: "Ladies Night",
    //         sort_description: "Non Stop Music With DJ Style",
    //         image: club1,
    //     },
    //     {
    //         id: 2,
    //         name: "Ladies Night",
    //         sort_description: "Non Stop Music With DJ Style",
    //         image: club2,
    //     },
    //     {
    //         id: 3,
    //         name: "Ladies Night",
    //         sort_description: "Non Stop Music With DJ Style",
    //         image: club3,
    //     },
    // ];

    // const cafes = [
    //     {
    //         id: 1,
    //         name: "Keith Coffee",
    //         sort_description: "Make Your Day Great with Our Coffee!",
    //         image: cafe1,
    //     },
    //     {
    //         id: 2,
    //         name: "Keith Coffee",
    //         sort_description: "Make Your Day Great with Our Coffee!",
    //         image: cafe2,
    //     },
    //     {
    //         id: 3,
    //         name: "Keith Coffee",
    //         sort_description: "Make Your Day Great with Our Coffee!",
    //         image: cafe3,
    //     },
    // ];

    return (
        <UserGuestLayout>
            {/* Shops Section */}
            <Shops shops={shops} />

            {/* Club Section */}
            <Cards title={"Clubs"} lists={clubs?.data} />

            {/* Cafes Section */}
            <Cards title={"Cafes"} lists={cafes?.data} total={cafes?.count} />

            {/* Footer Section */}
            <Footer />
            {/* Footer Buttons Section */}
        </UserGuestLayout>
    );
}
