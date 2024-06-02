import React from "react";
export default function Cards({ lists, title, total = 24 }) {
    return (
        <section className="relative  px-2 font-['Poetsen_One'] lg:px-10">
            <div className="container mx-auto">
                <div className="my-4 flex items-start justify-center">
                    <h2 className="w-[200px] border-b-4 border-white text-center text-[63px] font-[400] tracking-[-2px] text-[#ffffff]">
                        {title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {lists.map((list) => (
                        <a href="#" className="relative w-full" key={list.id}>
                            <div className="w-full ">
                                <img
                                    src={list.image}
                                    alt={list.name}
                                    className="cover-fill h-[200px] w-full object-cover"
                                />
                            </div>
                            <div className="w-[calc(100%-20px] absolute left-0 top-0 flex h-full items-center justify-center text-[#ffffff]">
                                <div className="pl-8 pr-16 text-left">
                                    <p className="text-[46px] font-[400] uppercase leading-tight tracking-[-1px]">
                                        {list.name}
                                    </p>
                                    <p className="text-wrap text-[25px] font-[400] leading-tight tracking-[-1px] ">
                                        {list.sort_description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div className="absolute right-2 lg:right-10 top-14 ">
                <a href="#" className="flex flex-row items-center gap-2">
                    <p className="text-sm lg:text-[30px] tracking-[-1px] text-[#ffffff]">
                        View All {total}
                    </p>
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/chevron-right.png"
                        alt="View All"
                        className="h-6 w-6 rounded-full object-cover"
                    />
                </a>
            </div>
        </section>
    );
}
