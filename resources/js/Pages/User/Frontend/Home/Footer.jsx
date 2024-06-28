import React,{ useEffect, useState } from "react";
import fb from "@/images/frontend/socialIcon/fb.png";
import insta from "@/images/frontend/socialIcon/insta.png";
import sp from "@/images/frontend/socialIcon/sp.png";
import twe from "@/images/frontend/socialIcon/twe.png";
import wp from "@/images/frontend/socialIcon/wp.png";
import { Link, usePage } from "@inertiajs/react";

export default function Footer({ socials }) {
    const auth = usePage().props?.auth;
    const [dashboard, setDashboard] = useState(route("login"));
    useEffect(() => {
        if (auth.user && auth.role) {
            switch (auth.role) {
                case "admin":
                    setDashboard(route("admin.coupons.index"));
                    break;
                case "shop":
                    setDashboard(route("shop.coupons.index"));
                    break;
                case "user":
                    setDashboard(route("user.coupons.index"));
                    break;
                default:
                    setDashboard(route("login"));
                    break;
            }
        }
    }, [auth]);
    const socialLinks = [
        {
            id: 1,
            image: fb,
        },
        {
            id: 2,
            image: insta,
        },
        {
            id: 3,
            image: sp,
        },
        {
            id: 4,
            image: twe,
        },
        {
            id: 5,
            image: wp,
        },
    ];

    const urls = [
        {
            name: "Shops",
            url: route("shops.index"),
        },
        {
            name: "About",
            url: "#",
        },
        {
            name: "Contact",
            url: "#",
        },
        {
            name: auth.role == "admin" ? "Admin" : "Dashboard",
            url: dashboard,
        },
    ];
    return (
        <section className="flex h-64 items-center justify-center bg-[#111111] py-10 sm:h-72 md:h-80 lg:h-[423px] lg:py-20">
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
                <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6">
                    {(
                        (socials && socials?.length && socials) ||
                        socialLinks
                    ).map((link) => (
                        <a
                            key={link.id}
                            href={link?.link ?? "#"}
                            _target="blank"
                            className="flex items-center justify-center"
                        >
                            <img
                                src={link.icon}
                                alt={link.id}
                                className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[60px] lg:w-[60px]"
                            />
                        </a>
                    ))}
                </div>
                <nav className="flex flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6">
                    {urls.map((url, index) => (
                        <Link
                            key={index}
                            href={url.url}
                            className="text-center text-2xl font-normal uppercase tracking-tight text-white md:text-3xl"
                        >
                            {url.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </section>
    );
}
