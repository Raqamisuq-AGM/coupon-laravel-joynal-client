import { ToastContainer } from "@/Components/shared/Toast/ToastContainer";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
export default function HomLayout({ children }) {
    return (
        <div>
            <ToastContainer />
            <div
                className="bg-cover bg-center bg-no-repeat lg:h-[1080px]"
                style={{ backgroundImage: "url('/assets/frontend/images/bg-image.png')" }}
            >
                {/* Header */}
                <Header />
                {/* Hero Section */}
                <Hero />
            </div>

            <div
                style={{ backgroundImage: "url('/assets/frontend/images/bg-image.png')" }}
                className="relative bg-cover bg-center bg-no-repeat"
            >
                <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
                <div className="relative py-8 lg:py-12 flex flex-col gap-10">
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    );
}
