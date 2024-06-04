import React from "react";
export default function Cards({ lists, title, total = 24 }) {
    return (
        <section className="relative px-4 font-['Poetsen_One'] sm:px-6 md:px-8 lg:px-10">
            <div className="container mx-auto">
                <div className="my-4 flex items-start justify-center">
                    <h2 className="w-[150px] border-b-4 border-white pb-6 text-center text-4xl font-[400] tracking-[-1px] text-[#ffffff] sm:w-[200px] sm:text-[48px] sm:tracking-[-2px] md:text-[63px]">
                        {title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {lists.map((list) => (
                        <a href="#" className="relative w-full" key={list.id}>
                            <div className="w-full">
                                <img
                                    src={
                                        list?.image ??
                                        "https://via.placeholder.com/150"
                                    }
                                    alt={list.name}
                                    className="cover-fill h-[150px] w-full object-cover sm:h-[200px] md:h-[250px]"
                                />
                            </div>
                            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 p-4 text-[#ffffff]">
                                <div className="text-left">
                                    <p className="text-xl font-[400] uppercase leading-tight tracking-[-0.5px] sm:text-2xl sm:tracking-[-1px] md:text-3xl">
                                        {list.name ?? list.title ?? ""}
                                    </p>
                                    <p className="text-sm font-[400] leading-tight tracking-[-0.5px] sm:text-base sm:tracking-[-1px] md:text-xl">
                                        {list.short_description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div className="absolute right-4 top-14 sm:right-6 md:right-8 lg:right-10">
                <a href="#" className="flex items-center gap-2">
                    <p className="text-base tracking-[-0.5px] text-[#ffffff] sm:text-lg sm:tracking-[-1px] md:text-xl lg:text-[30px]">
                        View All {total}
                    </p>
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/chevron-right.png"
                        alt="View All"
                        className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-6 lg:w-6"
                    />
                </a>
            </div>
        </section>
    );
}
