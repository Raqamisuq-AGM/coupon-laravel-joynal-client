import React, { useEffect, useState } from "react";
import ShopLayout from "@/Layouts/user/Guest/ShopLayout";
import { TopShop } from "./TopShop";
import Coupons from "./Coupons";
import { Shops } from "./Shops";

export default function Index({ shop, otherShops, isLoggedIn }) {
    const [currentShop, setCurrentShop] = useState(shop);

    useEffect(() => {
        setCurrentShop(shop);
    }, [shop]);

    const handleSelectShop = (selectedShop) => {
        setCurrentShop(selectedShop);
        router.get(`/shop/${selectedShop.slug}`, undefined, {
            replace: true,
            preserveScroll: true,
        });
    };

    return (
        <ShopLayout>
            {/* Top Selected Shop Section */}
            <TopShop
                shop={currentShop}
                coupon={currentShop?.coupons?.length ? currentShop.coupons[0] : null}
            />

            {/* Coupons and Shops Section */}
            <section className="relative flex flex-col gap-6 md:flex-row md:gap-0">
                {/* Coupons */}
                <Coupons shop={currentShop} isLoggedIn={isLoggedIn} />
                {/* Shops */}
                <Shops shop={currentShop} setShop={handleSelectShop} shops={otherShops} />
            </section>
        </ShopLayout>
    );
}
