import React from "react";
export default function Hero() {
    return (
        <section className="h-[400px] lg:h-[calc(1080px-144px)] px-2 font-['Poetsen_One'] text-white lg:px-10 ">
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
    );
}
