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
                className="relative bg-cover bg-center bg-no-repeat lg:h-[1080px]"
                style={{
                    backgroundImage:
                        "url('/assets/frontend/images/bg-hero.jpg')",
                }}
            >
                <div className="absolute inset-0 h-full bg-black bg-opacity-20 backdrop-blur-sm"></div>
                {/* Header */}
                <Header />
                {/* Hero Section */}
                <Hero />
            </div>

            <div
                style={{
                    backgroundImage:
                        "url('/assets/frontend/images/bg-content.png')",
                }}
                className="relative bg-cover bg-center bg-no-repeat"
                id="shops"
            >
                <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
                <div className="relative flex flex-col gap-10 py-8 lg:py-12">
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    );
}
