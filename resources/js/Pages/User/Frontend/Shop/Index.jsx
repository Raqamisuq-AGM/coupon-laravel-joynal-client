import React, { useEffect, useState } from "react";
import ShopLayout from "@/Layouts/user/Guest/ShopLayout";
import { TopShop } from "./TopShop";
import Coupons from "./Coupons";
import { Shops } from "./Shops";

export default function Index({ shops, isLoggedIn }) {
    const [shop, setShop] = useState({});

    useEffect(() => {
        setShop(shops?.data[0]);
    }, [shops]);

    return (
        <ShopLayout>
            {/* Tot Selected Shop Section */}
            <TopShop
                shop={shop}
                coupon={shop?.coupons?.length ? shop.coupons[0] : []}
            />

            {/* coupons and cafes */}
            <section className="relative flex flex-col gap-6 md:flex-row md:gap-0">
                {/* coupons */}
                <Coupons shop={shop} isLoggedIn={isLoggedIn} />
                {/* cafes */}
                <Shops shop={shop} setShop={setShop} shops={shops?.data} />
            </section>
            {/* Club Section */}
        </ShopLayout>
    );
}
