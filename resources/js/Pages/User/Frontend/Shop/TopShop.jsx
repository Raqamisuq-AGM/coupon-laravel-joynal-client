import { Icon } from "@iconify/react";
import moment from "moment";
import React from "react";

export const TopShop = ({ shop, coupon }) => {
    return (
        <div
            className="relative flex flex-row gap-3 border-[2px] border-[#ffffff] px-6 py-5 lg:gap-5 lg:px-8 lg:py-10"
            style={{ filter: "drop-shadow(0 0 5px #ffffff)" }}
        >
            <div className="absolute inset-0 bg-[#12161c] bg-opacity-60 backdrop-blur-sm"></div>
            <div className="relative  h-full w-52 border-[3px] border-[#ffffff] lg:w-64 ">
                <div className="flex h-24 w-full items-center justify-center lg:h-[270px] text-wrap p-3">
                    <p className="text-center text-3xl font-[400]  uppercase tracking-[-2px] text-[#ffffff] lg:text-4xl lg:leading-[60px]">
                        {shop?.name}
                    </p>
                </div>
                <div className="flex h-12 w-full  items-center justify-center border-t-[3px] border-[#ffffff] lg:h-16 ">
                    <a
                        href={shop?.url}
                        className="text-lg font-[400] tracking-[-1px] text-[#ffffff] outline-none lg:text-[39px]"
                    >
                        Visit Site
                    </a>
                </div>
            </div>
            <div className="relative flex flex-col gap-2 text-left lg:gap-6">
                <h1 className="text-4xl font-[400] tracking-[-2px] text-[#ffffff] lg:text-6xl">
                    {coupon?.title} Voucher Codes {coupon?.code}
                </h1>
                <p className="text-lg font-[400] tracking-[-1px] text-[#e0e0e0] lg:text-[39px]">
                    Active Codes and Discounts -{" "}
                    {moment(coupon?.valid_to).format("MMM YYYY")}
                </p>
                <button className="lg:w-42 flex w-32 items-center gap-2 rounded-md border border-[#ffffff] px-4 py-1 text-[#ffffff]">
                    {/* love icon outline */}
                    <Icon icon="mdi-light:heart" />
                    <span>Favorite</span>
                </button>
            </div>
        </div>
    );
};
