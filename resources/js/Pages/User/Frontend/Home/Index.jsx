import UserGuestLayout from "@/Layouts/user/Guest/UserGuestLayout";
import { Link } from "@inertiajs/react";
import moment from "moment";
import React from "react";
import Shops from "./Shops";
import Cards from "./Cards";
import Footer from "./Footer";
export default function Dashboard({ coupons }) {
    const clubs = [
        {
            id: 1,
            name: "Ladies Night",
            sort_description: "Non Stop Music With DJ Style",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Ladies Night",
            sort_description: "Non Stop Music With DJ Style",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Ladies Night",
            sort_description: "Non Stop Music With DJ Style",
            image: "https://via.placeholder.com/150",
        },
    ];

    const cafes = [
        {
            id: 1,
            name: "Keith Coffee",
            sort_description: "Make Your Day Great with Our Coffee!",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Keith Coffee",
            sort_description: "Make Your Day Great with Our Coffee!",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Keith Coffee",
            sort_description: "Make Your Day Great with Our Coffee!",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <UserGuestLayout>
            {/* Hero Section */}
            <section className="h-[500px] bg-blue-600  px-2 font-['Poetsen_One'] text-white lg:px-10 ">
                <div className=" mx-auto flex h-full items-center justify-center lg:justify-end">
                    <div className="text-right">
                        <h1
                            style={{ filter: "drop-shadow(0 0 12px #000000)" }}
                            className="text-[80px] font-[400] tracking-[-3px] text-white lg:text-[102px]"
                        >
                            Balash Coupons
                        </h1>
                        <p
                            style={{ filter: "drop-shadow(0 0 12px #000000)" }}
                            className="text-[30px] font-[400] leading-[72px]  tracking-[4px] text-[#ffeac7] lg:text-[50px]"
                        >
                            Hey Erbil, still paying full price? <br />{" "}
                            <span>... free coupons, for everything!</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Shops Section */}
            <Shops />

            {/* Club Section */}
            <Cards title={"Clubs"} lists={clubs} />

            {/* Cafes Section */}
            <Cards title={"Cafes"} lists={cafes} />

            {/* Footer Buttons Section */}
            <Footer />
        </UserGuestLayout>
    );
}
