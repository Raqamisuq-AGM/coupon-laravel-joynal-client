import React from "react";
export default function Shops({ shops }) {
//     const shops = () => {
//         let lists = [];
//         for (let i = 0; i < 10; i++) {
//             lists.push({
//                 id: i,
//                 name: "Shop " + i,
//                 image: "https://via.placeholder.com/150",
//             });
//         }
//         return lists;
//     };
    return (
<section className="px-4 sm:px-6 md:px-8 lg:px-10 font-['Poetsen_One']">
    <div className="container mx-auto">
        <div className="my-4 flex items-start justify-center">
            <h2 className="w-[150px] sm:w-[200px] pb-6 border-b-4 border-white text-center text-4xl sm:text-[48px] md:text-[63px] font-[400] tracking-[-1px] sm:tracking-[-2px] text-[#ffffff]">
                Shops
            </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
            {shops.map((shop) => (
                <a
                    href="#"
                    className="flex flex-col items-center text-center p-4"
                    key={shop.id}
                >
                    <img
                        className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full object-cover"
                        src={shop.image ?? "https://via.placeholder.com/150"}
                        alt={shop.name}
                    />
                    <h3 className="mt-4 text-base sm:text-lg md:text-xl font-[400] tracking-[-0.5px] sm:tracking-[-1px] text-[#ffffff]">
                        {shop.name}
                    </h3>
                </a>
            ))}
        </div>
    </div>
</section>
    );
}
