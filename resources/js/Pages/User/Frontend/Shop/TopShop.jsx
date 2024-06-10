import { Icon } from "@iconify/react";
import moment from "moment";
import React from "react";

export const TopShop = ({ shop, coupon }) => {
    return (
        <div
            className="relative flex flex-col gap-3 border-2 border-[#ffffff] px-4 py-5 sm:px-6 lg:flex-row lg:gap-5 lg:px-8 lg:py-10"
            style={{ filter: "drop-shadow(0 0 5px #ffffff)" }}
        >
            <div className="absolute inset-0 bg-[#12161c] opacity-80 backdrop-blur-sm"></div>
            <div className="border-3 relative bg-[#000000] h-full w-full border-2 border-[#ffffff] sm:w-48 md:w-52 lg:w-64">
                <div className="flex h-24 w-full items-center justify-center text-wrap  p-3 lg:h-[270px]">
                    <p className="text-center text-2xl font-[400] uppercase tracking-[-1px] text-[#ffffff] sm:text-3xl sm:tracking-[-2px] lg:text-4xl lg:leading-[60px]">
                        {shop?.name}
                    </p>
                </div>
                <div className="border-t-2 flex h-12 w-full items-center justify-center border-[#ffffff] lg:h-16">
                    <a
                        href={shop?.url}
                        className="text-base font-[400] tracking-[-0.5px] text-[#ffffff] outline-none sm:text-lg sm:tracking-[-1px] lg:text-[39px]"
                    >
                        Visit Site
                    </a>
                </div>
            </div>
            <div className="relative flex flex-col gap-2 text-left lg:gap-6">
                <h1 className="text-2xl font-[400] tracking-[-1px] text-[#ffffff] sm:text-3xl sm:tracking-[-2px] lg:text-6xl">
                    {coupon?.title} Voucher Codes {coupon?.code}
                </h1>
                <p className="text-base font-[400] tracking-[-0.5px] text-[#e0e0e0] sm:text-lg sm:tracking-[-1px] lg:text-[39px]">
                    Active Codes and Discounts -{" "}
                    {moment(coupon?.valid_to).format("MMM YYYY")}
                </p>
                <button className="lg:w-42 flex w-24 items-center gap-2 rounded-md border border-[#ffffff] px-2 py-1 text-[#ffffff] sm:w-32 sm:px-4">
                    <Icon icon="mdi-light:heart" />
                    <span>Favorite</span>
                </button>
            </div>
        </div>
    );
};
