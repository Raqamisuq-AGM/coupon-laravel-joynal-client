import { ToastContainer } from "@/Components/shared/Toast/ToastContainer";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function ShopLayout({ children }) {
    return (
        <div>
            <ToastContainer />

            <div
                style={{
                    backgroundImage:
                        "url('/assets/frontend/images/bg-image.png')",
                }}
                className=" bg-cover bg-center bg-no-repeat"
            >
                {/* Header */}
                <Header />

                <div className="relative flex flex-col gap-10 px-8 py-8 font-['Poetsen_One'] lg:px-20">
                    <div className="absolute inset-0 bg-[#12161c] bg-opacity-20 backdrop-blur-sm"></div>
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    );
}
