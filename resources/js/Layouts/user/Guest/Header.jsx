import { Icon } from "@iconify-icon/react";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
export default function Header() {
    const auth = usePage().props?.auth;
    const [dashboard, setDashboard] = useState(route("login"));
    useEffect(() => {
        if (auth.user && auth.role) {
            switch (auth.role) {
                case "admin":
                    setDashboard(route("admin.dashboard"));
                    break;
                case "shop":
                    setDashboard(route("shop.dashboard"));
                    break;
                case "user":
                    setDashboard(route("user.dashboard"));
                    break;
                default:
                    setDashboard(route("login"));
                    break;
            }
        }
    }, [auth]);

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
    ];

    const langs = [
        {
            id: "en",
            flag: "circle-flags:us",
        },
        {
            id: "ar",
            flag: "circle-flags:sa",
        },
        {
            id: "ru",
            flag: "circle-flags:ru",
        },
    ];
    return (
        <header className="flex flex-col items-center gap-2 bg-black font-['Poetsen_One'] opacity-80 md:gap-1 lg:h-36 lg:flex-row">
            <div className="container mx-auto flex flex-col items-center justify-between px-6 py-4 md:flex-row">
                <div className="flex items-center text-white">
                    <a href="#">Balash</a>
                </div>
                <nav className="flex flex-wrap items-center justify-center space-x-4 md:justify-start">
                    {urls.map((url, index) => (
                        <a
                            key={index}
                            href="#"
                            className="text-center text-2xl font-normal uppercase tracking-tight text-white md:text-3xl"
                        >
                            {url.name}
                        </a>
                    ))}
                </nav>
                <div className="mt-4 flex flex-col items-center gap-3 md:mt-0 md:flex-row">
                    {auth?.user ? (
                        <Link to={dashboard} className="text-white">
                            Dashboard
                        </Link>
                    ) : (
                        <React.Fragment>
                            <Link
                                to={route("register")}
                                className="flex h-12 w-32 items-center justify-center rounded-full bg-[#725b36] text-center text-lg font-normal uppercase tracking-tight text-white lg:w-48 xl:w-60"
                            >
                                Register
                            </Link>
                            <Link
                                to={dashboard}
                                className="flex h-12 w-32 items-center justify-center rounded-full bg-[#526d6e] text-center text-lg font-normal uppercase tracking-tight text-white lg:w-48 xl:w-60"
                            >
                                Login
                            </Link>
                        </React.Fragment>
                    )}
                </div>
                <div className="mt-4 flex flex-row gap-3 md:mt-0">
                    {langs.map((lang, index) => (
                        <button key={index} className="rounded-full">
                            <Icon icon={lang.flag} width={40} height={40} />
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}
