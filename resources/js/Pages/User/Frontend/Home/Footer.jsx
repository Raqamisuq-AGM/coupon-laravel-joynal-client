import React from "react";
export default function Footer() {
    const socialLinks = [
        {
            id: 1,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            image: "https://via.placeholder.com/150",
        },
    ];

    const urls = [
        {
            name: "Shops",
        },
        {
            name: "About",
        },
        {
            name: "Contact",
        },
        {
            name: "Admin",
        },
        {
            name: "Register",
        },
    ];
    return (
        <section className="flex h-64 items-center justify-center bg-[#111111] py-10 sm:h-72 md:h-80 lg:h-[423px] lg:py-20">
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
                <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6">
                    {socialLinks.map((link) => (
                        <img
                            key={link.id}
                            src={link.image}
                            alt={link.id}
                            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[60px] lg:w-[60px]"
                        />
                    ))}
                </div>
                <nav className="flex flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6">
                    {urls.map((url) => (
                        <a
                            href="#"
                            className="font-['Poetsen_One'] text-lg font-[400] tracking-[-0.5px] text-[#ffffff] hover:text-[#e3e3e3] sm:text-xl sm:tracking-[-1px] md:text-2xl lg:text-[35px]"
                            key={url.name}
                        >
                            {url.name}
                        </a>
                    ))}
                </nav>
            </div>
        </section>
    );
}
