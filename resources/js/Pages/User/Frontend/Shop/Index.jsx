import React, { useEffect, useState } from "react";

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

export default function Index({ shops }) {

    const [shop, setShop] = useState({});

    useEffect(() => {
        setShop(shops?.data[0]);
    }, [shops]);

    return (
        <ShopLayout>
            {/* Tot Selected Shop Section */}
            <TopShop shop={shop} coupon={shop?.coupons?.length ? shop.coupons[0] : []} />

            {/* coupons and cafes */}
            <section className="relative flex flex-row">
                {/* coupons */}
                <Coupons coupons={shop?.coupons ? shop.coupons : []} />
                {/* cafes */}
                <Shops shop={shop} setShop={setShop} shops={shops?.data} />
            </section>
            {/* Club Section */}
        </ShopLayout>
    );
}
