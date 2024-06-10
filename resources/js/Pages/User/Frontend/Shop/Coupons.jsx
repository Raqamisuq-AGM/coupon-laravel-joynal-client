import React, { useEffect, useState } from "react";
import board from "@/images/frontend/board.png";
import cafe2 from "@/images/frontend/cafe2.jpg";
import cardLeft from "@/images/frontend/cardLeft.png";
import cardRight from "@/images/frontend/cardRight.png";
import cardRightBar from "@/images/frontend/cardRightBar.png";
import moment from "moment";

export default function Coupons({ shop }) {

    const customCoupons = [
        {
            name: "Cafe 1",
            image: cafe2,
            code: "TDSF%$#%DSF$%#",
            claimed: true,
        },
        {
            name: "Cafe 2",
            code: "TDSF%$#%DSF$",
            image: cafe2,
        }
    ]

    useEffect(() => {
        if (shop && shop.coupons && Array.isArray(shop.coupons)) {
            customCoupons.map((coupon) => {
                const find = shop.coupons.find((shopCoupon) => shopCoupon.name === coupon.name);
                if (!find) {
                    shop.coupons.unshift(coupon);
                }
            })
        }
        setCouponClicked("")
    },[shop])

    const [couponClicked, setCouponClicked] = useState("");
    return (
        <div className="w-full md:w-2/3  font-['Poetsen_One']">
            <div className="flex flex-col gap-5">
                {shop && shop?.coupons && shop?.coupons.length && shop.coupons.map((coupon, index) => (
                    <button type="button" disabled={coupon.claimed} onClick={() => setCouponClicked(coupon.code)} className="relative w-full" key={index}>

                        <div className="relative w-full">
                            <div className="relative">
                            {
                                coupon.claimed ? <div className="absolute inset-0 bg-opacity-60 bg-black z-10"></div> : (
                                    couponClicked === coupon.code ? <div className="absolute inset-0 bg-opacity-20 bg-black z-10"></div> : ""
                                )
                            }
                               <div className="flex items-center">
                                   <div className="relative h-[220px] w-4/5">
                                        <img
                                                src={cardLeft}
                                                className="h-full w-full object-cover"
                                        />

                                        <img
                                            src={coupon.image}
                                            className="absolute bottom-0 right-0 h-[220px] w-full"
                                        />
                                   </div>
                                    <div className="relative h-[220px] w-1/5">
                                        <img
                                            src={cardRight}
                                            className="h-full w-full object-fill"
                                        />
                                        <div className="absolute w-[220px] h-[160px] top-[28px] left-0 -rotate-90 flex flex-col items-center gap-4">
                                            <h1 className="uppercase text-xl font-normal"><span className="text-[#ff0000]">balash</span> coupon</h1>
                                            <div className={`relative h-[40px] w-[180px] border-2 border-[#ffec75] border-dashed rounded-md flex justify-center items-center`}>
                                                <p className={`text-xl font-normal text-center ${couponClicked === coupon.code || coupon.claimed ? "bg-[#f7e572] w-full h-full flex justify-center items-center uppercase" : ""}`}>{coupon.claimed ? "Redeem" : coupon.code}</p>
                                                {
                                                    couponClicked != coupon.code && !coupon.claimed && (
                                                        <React.Fragment>
                                                            <div className="absolute w-full h-full top-0 left-0">
                                                                <img src={cardRightBar} className="absolute -top-[56px] h-[150px] left-[54px] w-[40px] rotate-90" />
                                                            </div>
                                                            <p className="text-xl font-normal absolute top-1 left-6">Get Code</p>
                                                        </React.Fragment>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                               </div>

                            </div>
                            {coupon?.claimed || couponClicked === coupon.code ? (
                                <div className="absolute bottom-5 top-[6px] right-[200px] z-40">
                                    <div className="relative">
                                        <img
                                            src={board}
                                            alt="board"
                                            className=" h-[220px] w-94"
                                        />
                                        <p className="absolute left-[180px]  top-[105px] -translate-x-1/2 -translate-y-1/2 -rotate-[8deg] text-[#ffffff]">
                                            {coupon.claimed
                                                ? (<span className="text-xl uppercase md:text-[58px]  ">Claimed</span>)
                                                : (<span className="text-xl uppercase  ">{coupon.code} Enter This Code at Checkout</span>)}
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
                                <p className="text-wrap text-[25px] font-[400] leading-tight tracking-[-1px] ">
                                    Ends {moment(coupon.valid_to).format("DD MMM")}
                                </p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
