import React from "react";
export default function Shops() {
    const shops = () => {
        let lists = [];
        for (let i = 0; i < 10; i++) {
            lists.push({
                id: i,
                name: "Shop " + i,
                image: "https://via.placeholder.com/150",
            });
        }
        return lists;
    };
    return (
        <section className="bg-gray-500 px-2 py-6 font-['Poetsen_One'] lg:px-10">
            <div className="container mx-auto">
                <div className="my-4 flex items-start justify-center">
                    <h2 className="w-[200px] border-b-4 border-white text-center text-[63px] font-[400] tracking-[-2px] text-[#ffffff]">
                        Shops
                    </h2>
                </div>
                <div className="grid grid-cols-4 gap-4 md:grid-cols-7">
                    {shops().map((shop) => (
                        <a
                            href="#"
                            className="flex flex-col items-center  p-4"
                            key={shop.id}
                        >
                            <img
                                className="h-32 w-32 rounded-full object-cover"
                                src={shop.image}
                                alt={shop.name}
                            />
                            <h3 className="mt-4 text-[27px] font-[400] tracking-[-1px] text-[#ffffff]">
                                {shop.name}
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
