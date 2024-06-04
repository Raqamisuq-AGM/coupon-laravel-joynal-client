import React from "react";
export default function Hero() {
    return (
        <section className="flex min-h-[400px] items-center justify-center px-4 font-['Poetsen_One'] text-white sm:px-6 md:px-8 lg:h-[calc(1080px-144px)] lg:justify-end lg:px-10">
            <div className="max-w-full text-center lg:max-w-[80%] lg:text-right xl:max-w-[70%]">
                <h1
                    style={{ filter: "drop-shadow(0 0 12px #000000)" }}
                    className="text-4xl font-[400] tracking-[-1px] text-white sm:text-5xl sm:tracking-[-2px] md:text-6xl md:tracking-[-3px] lg:text-8xl"
                >
                    Balash Coupons
                </h1>
                <p
                    style={{ filter: "drop-shadow(0 0 12px #000000)" }}
                    className="mt-4 text-[24px] font-[400] leading-[1.2] tracking-[2px] text-[#ffeac7] sm:text-[28px] sm:leading-[1.4] sm:tracking-[3px] md:text-[30px] md:leading-[1.6] md:tracking-[4px] lg:text-[50px] lg:leading-[1.8]"
                >
                    Hey Erbil, still paying full price? <br />
                    <span>... free coupons, for everything!</span>
                </p>
            </div>
        </section>
    );
}
