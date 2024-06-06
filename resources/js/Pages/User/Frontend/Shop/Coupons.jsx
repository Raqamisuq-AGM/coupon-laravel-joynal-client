import React from "react";
import board from "@/images/frontend/board.jpg";
export default function Coupons({ shop }) {
    return (
        <div className="w-full md:w-2/3  font-['Poetsen_One']">
            <div className="flex flex-col gap-5">
                {shop && shop?.coupons && shop?.coupons.length && shop.coupons.map((coupon) => (
                    <a href="#" className="relative w-full" key={coupon.id}>
                        <div className="relative w-full">
                            <div className="flex">
                                <img
                                    src={coupon.image}
                                    alt={coupon.name}
                                    className="h-[200px] w-full object-fill"
                                />
                            </div>
                            {coupon?.claimed || coupon?.checkout ? (
                                <div className="absolute bottom-5 right-[150px] z-40">
                                    <div className="relative">
                                        <img
                                            src={board}
                                            alt="board"
                                            className=" h-46 w-64"
                                        />
                                        <p className="absolute left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] transform  text-[#ffffff]">
                                            {coupon.claimed
                                                ? "Claimed"
                                                : "ABCD9578EF Enter This Code at Checkout"}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="w-[calc(100%-20px] absolute left-0 top-0 flex h-full items-center justify-center text-[#ffffff]">
                            <div className="pl-8 pr-16 text-left">
                                <p className="text-[46px] font-[400] uppercase leading-tight tracking-[-1px]">
                                    {coupon.name || coupon.title}
                                </p>
                                <p className="text-wrap text-[25px] font-[400] leading-tight tracking-[-1px] ">
                                    {coupon.short_description}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
