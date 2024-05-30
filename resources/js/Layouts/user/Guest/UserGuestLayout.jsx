import { ToastContainer } from "@/Components/shared/Toast/ToastContainer";
import React from "react";
import Header from "./Header";
export default function UserGuestLayout({ children }) {
    return (
        <div className="bg-gray-100">
            <ToastContainer />
            {/* Header */}
            <Header />

            {children}

            <footer className="bg-black py-6 text-white">
                <div className="container mx-auto flex flex-col items-center justify-center gap-3 text-center font-['Poetsen_One'] text-[18px] font-[400] tracking-[-1px] text-[#FFFFFF] sm:text-[20px] md:flex-row md:gap-5 md:text-left md:text-[24px] lg:text-[28px] xl:text-[33px]">
                    <p>&copy; 2024 - Balash Coupons, Erbil.</p>
                    <a href="#" className="underline">
                        Terms of Use
                    </a>
                </div>
            </footer>
        </div>
    );
}
