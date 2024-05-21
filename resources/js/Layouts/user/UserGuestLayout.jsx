import { ToastContainer } from "@/Components/shared/Toast/ToastContainer";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
export default function UserGuestLayout({ children }) {
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
    return (
        <div className="bg-gray-100">
            <ToastContainer />
            {/* Header */}
            <header className="bg-white shadow">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    <div className="text-3xl font-bold text-gray-800">
                        <a href="#">CouponMS</a>
                    </div>
                    <nav className="flex space-x-4">
                        <a
                            href="#features"
                            className="text-gray-700 hover:text-gray-900"
                        >
                            Features
                        </a>
                        <a
                            href="#coupons"
                            className="text-gray-700 hover:text-gray-900"
                        >
                            Coupons
                        </a>
                        <a
                            href="#testimonials"
                            className="text-gray-700 hover:text-gray-900"
                        >
                            Testimonials
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-700 hover:text-gray-900"
                        >
                            Contact
                        </a>

                        <Link
                            href={dashboard}
                            className="text-gray-700 hover:text-gray-900"
                        >
                            {auth.user ? "Dashboard" : "Login"}
                        </Link>
                    </nav>
                </div>
            </header>

            {children}
            {/* Footer */}
            <footer className="bg-gray-800 py-6 text-white">
                <div className="container mx-auto px-6 text-center">
                    <p> 2024 CouponMS. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
