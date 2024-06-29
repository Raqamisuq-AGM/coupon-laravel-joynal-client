import React, { useEffect, useState } from "react";
import board from "@/images/frontend/board.png";
import cardLeft from "@/images/frontend/cardLeft.png";
import cardRight from "@/images/frontend/cardRight.png";
import cardRightBar from "@/images/frontend/cardRightBar.png";
import { Modal } from "@/Components/shared/Modal";
import { LoginForm } from "@/Components/Auth/LoginForm";
import moment from "moment";

export default function Coupons({ shop, isLoggedIn }) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [couponClicked, setCouponClicked] = useState("");

    const handleCouponClick = (coupon) => {
        if (!isLoggedIn) {
            setIsLoginModalOpen(true);
        } else {
            setCouponClicked(coupon.code);
        }
    };

    useEffect(() => {
        if (shop && shop.coupons && Array.isArray(shop.coupons)) {
            shop.coupons.map((coupon) => {
                const find = shop.coupons.find(
                    (shopCoupon) => shopCoupon.name === coupon.name
                );
                if (!find) {
                    shop.coupons.unshift(coupon);
                }
            });
        }
        setCouponClicked("");
    }, [shop]);

    return (
        <>
            <div className="w-full font-['Poetsen_One'] md:w-2/3">
                <div className="flex flex-col gap-5">
                    {shop && shop.coupons && shop.coupons.length > 0 ? (
                        shop.coupons.map((coupon, index) => (
                            <button
                                type="button"
                                disabled={coupon.claimed}
                                // onClick={() => setCouponClicked(coupon.code)}
                                onClick={() => handleCouponClick(coupon)}
                                className="relative w-full transition-all duration-700 hover:scale-[1.02]"
                                key={index}
                            >
                                <div className="relative w-full">
                                    <div className="relative">
                                        {coupon.claimed ? (
                                            <div className="absolute inset-0 z-10 bg-black bg-opacity-60"></div>
                                        ) : couponClicked === coupon.code ? (
                                            <div className="absolute inset-0 z-10 bg-black bg-opacity-20"></div>
                                        ) : (
                                            ""
                                        )}
                                        <div className="flex items-center">
                                            <div className="relative h-[180px] w-2/3 md:h-[220px] md:w-4/5">
                                                <img
                                                    src={cardLeft}
                                                    className="h-full w-full object-cover"
                                                />
                                                <img
                                                    src={coupon.image}
                                                    className="absolute bottom-0 right-0 h-full w-full"
                                                />
                                            </div>
                                            <div className="relative h-[180px] w-1/3 md:h-[220px] md:w-1/5">
                                                <img
                                                    src={cardRight}
                                                    className="h-full w-full object-fill"
                                                />
                                                <div className="absolute left-0 top-[28px] flex h-[120px] w-[180px] -rotate-90 flex-col items-center gap-2 md:h-[160px] md:w-[220px] md:gap-4">
                                                    <h1 className="text-xl font-normal uppercase">
                                                        <span className="text-[#ff0000]">
                                                            balash
                                                        </span>{" "}
                                                        coupon
                                                    </h1>
                                                    <div
                                                        className={`relative flex h-[30px] w-[140px] items-center justify-center rounded-md border-2 border-dashed border-[#ffec75] md:h-[40px] md:w-[180px]`}
                                                    >
                                                        <p
                                                            className={`text-center text-xl font-normal ${
                                                                coupon.claimed
                                                                    ? "flex h-full w-full items-center justify-center rounded-md bg-[#f7e572] uppercase"
                                                                    : ""
                                                            }`}
                                                        >
                                                            {coupon.claimed
                                                                ? "Redeem"
                                                                : coupon.code}
                                                        </p>
                                                        {couponClicked !==
                                                            coupon.code &&
                                                            !coupon.claimed && (
                                                                <React.Fragment>
                                                                    <div className="absolute left-0 top-0 h-full w-full">
                                                                        <img
                                                                            src={
                                                                                cardRightBar
                                                                            }
                                                                            className="absolute -top-[56px] left-[54px] h-[150px] w-[30px] rotate-90 md:w-[40px]"
                                                                        />
                                                                    </div>
                                                                    <p className="absolute left-6 top-1 text-xl font-normal">
                                                                        Get Code
                                                                    </p>
                                                                </React.Fragment>
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {coupon?.claimed ||
                                    couponClicked === coupon.code ? (
                                        <div className="absolute bottom-5 right-[80px] top-[6px] z-40 md:right-[200px]">
                                            <div className="relative">
                                                <img
                                                    src={board}
                                                    alt="board"
                                                    className="h-[180px] w-[180px] object-fill md:h-[220px] md:w-[380px]"
                                                />
                                                <p className="absolute left-[80px] top-[80px] -translate-x-1/2 -translate-y-1/2 -rotate-[14deg] text-[#ffffff] md:left-[180px] md:top-[105px] md:-rotate-[8deg]">
                                                    {coupon.status == 0 ? (
                                                        <span className="text-xl uppercase md:text-[58px]  ">
                                                            Claimed
                                                        </span>
                                                    ) : (
                                                        <span className="text-md uppercase md:text-xl  ">
                                                            {coupon.code} Enter
                                                            This Code at
                                                            Checkout
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="w-[calc(100%-20px] absolute left-0 top-0 flex h-full items-center justify-center text-[#ffffff]">
                                    <div className="pl-8 pr-16 text-left">
                                        <p className="text-xl font-[400] uppercase leading-tight tracking-[-1px] md:text-[46px]">
                                            {coupon.name || coupon.title}
                                        </p>
                                        <p className="text-wrap text-lg font-[400] leading-tight tracking-[-1px] md:text-[25px] ">
                                            {coupon.short_description}
                                        </p>
                                        <p className="text-wrap text-lg font-[400] leading-tight tracking-[-1px] md:text-[25px] ">
                                            Ends{" "}
                                            {moment(coupon.valid_to).format(
                                                "DD MMM"
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))
                    ) : (
                        <p className="text-xl font-[400] uppercase leading-tight tracking-[-1px] text-white">
                            No coupon found
                        </p>
                    )}
                </div>
            </div>

            {shop && shop.coupons && Array.isArray(shop.coupons) && (
                <Modal
                    title="Login"
                    isOpen={isLoginModalOpen}
                    setIsOpen={setIsLoginModalOpen}
                >
                    <LoginForm onSuccess={() => setIsLoginModalOpen(false)} />
                </Modal>
            )}
        </>
    );
}
