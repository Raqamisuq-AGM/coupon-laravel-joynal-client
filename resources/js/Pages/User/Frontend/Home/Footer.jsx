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
        <section className="flex justify-center items-center bg-[#111111] py-10 lg:h-[423px] lg:py-20">
            <div className="flex flex-col gap-12">
                <div className="flex items-center justify-center gap-6">
                    {socialLinks.map((link) => (
                        <img
                            key={link.id}
                            src={link.image}
                            alt={link.id}
                            className="h-[60px] w-[60px] rounded-full object-cover"
                        />
                    ))}
                </div>
                <nev className="flex flex-row items-center justify-center gap-6">
                    {urls.map((url) => (
                        <a
                            href="#"
                            className="font-['Poetsen_One'] text-[35px] font-[400] tracking-[-1px] text-[#ffffff] hover:text-[#e3e3e3]"
                            key={url.name}
                        >
                            {url.name}
                        </a>
                    ))}
                </nev>
            </div>
        </section>
    );
}
