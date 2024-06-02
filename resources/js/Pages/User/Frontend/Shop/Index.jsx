import React from "react";

import cafe1 from "@/images/frontend/cafe1.jpg";
import cafe2 from "@/images/frontend/cafe2.jpg";
import cafe3 from "@/images/frontend/cafe3.jpg";
import cafe4 from "@/images/frontend/cafe4.jpg";
import cafe5 from "@/images/frontend/cafe5.png";
import cafe6 from "@/images/frontend/cafe6.jpg";

import ShopLayout from "@/Layouts/user/Guest/ShopLayout";
import { TopShop } from "./TopShop";
import Coupons from "./Coupons";
import { Shops } from "./Shops";

export default function Index() {
    const coupons = [
        {
            id: 1,
            name: "Keith Coffee",
            sort_description: "Make Your Day Great with Our Coffee!",
            image: cafe1,
            checkout: true,
        },
        {
            id: 2,
            name: "Keith Coffee",
            sort_description: "Make Your Day Great with Our Coffee!",
            image: cafe2,
            claimed: true,
        },
        {
            id: 3,
            name: "Keith Coffee",
            sort_description: "Make Your Day Great with Our Coffee!",
            image: cafe3,
        },
        {
            id: 4,
            name: "Keith Coffee",
            sort_description: "Make Your Day Great with Our Coffee!",
            image: cafe4,
        },
        {
            id: 5,
            name: "Keith Coffee",
            sort_description: "Make Your Day Great with Our Coffee!",
            image: cafe5,
        },
        {
            id: 6,
            name: "Keith Coffee",
            sort_description: "Make Your Day Great with Our Coffee!",
            image: cafe6,
        },
    ];
    const shops = () => {
        let lists = [];
        for (let i = 0; i < 10; i++) {
            lists.push({
                id: i,
                name: "Shop " + i,
                image: "https://via.placeholder.com/150",
            });
        }
        return lists;
    };
    return (
        <ShopLayout>
            {/* Tot Selected Shop Section */}
            <TopShop />

            {/* coupons and cafes */}
            <section className="flex flex-row relative">
                {/* coupons */}
                <Coupons coupons={coupons} />
                {/* cafes */}
                <Shops shops={shops()} />
            </section>
            {/* Club Section */}
        </ShopLayout>
    );
}
